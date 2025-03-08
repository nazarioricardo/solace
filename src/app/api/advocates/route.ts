import { NextRequest } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { like, or, sql } from "drizzle-orm";

export async function GET(request: NextRequest) {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");
    return Response.json(
      { error: "Database connection not configured" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("search") || "";

  console.log("searching for:", searchTerm);
  try {
    if (!searchTerm.trim()) {
      const allData = await db.select().from(advocates);
      return Response.json({ data: allData });
    }

    const pattern = `%${searchTerm}%`;

    const data = await db
      .select()
      .from(advocates)
      .where(
        or(
          sql`${advocates.firstName} || ' ' || ${advocates.lastName} LIKE ${pattern}`,
          sql`CAST(${advocates.phoneNumber} AS TEXT) LIKE ${pattern}`,
          sql`CAST(${advocates.yearsOfExperience} AS TEXT) LIKE ${pattern}`,
          sql`CAST(${advocates.yearsOfExperience} AS TEXT) || ' years' LIKE ${pattern}`,
          like(advocates.city, pattern),
          like(advocates.degree, pattern)
        )
      );

    console.log("data", data);
    return Response.json({ data });
  } catch (error) {
    console.error("ERROR", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
