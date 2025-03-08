"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Advocate } from "../types";
import SearchForm from "./SearchForm";
import Table from "./Table";

type Advocates = Advocate[];

function Advocates() {
  const [advocates, setAdvocates] = useState<Advocates>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchAdvocates = async () => {
    const response = await fetch("/api/advocates");
    const jsonResponse = await response.json();
    setAdvocates(jsonResponse.data);
  };

  useEffect(() => {
    console.log("fetching advocates...");
    fetchAdvocates();
  }, []);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search-term") as string;
    setSearchTerm(searchValue.trim());
  };

  const filteredAdvocates = advocates.filter((advocate) => {
    const name = `${advocate.firstName} ${advocate.lastName}`;
    return (
      name.includes(searchTerm) ||
      advocate.city.includes(searchTerm) ||
      advocate.degree.includes(searchTerm) ||
      advocate.specialties.join(" ").includes(searchTerm) ||
      String(advocate.yearsOfExperience).includes(searchTerm) ||
      String(advocate.phoneNumber).includes(searchTerm)
    );
  });

  return (
    <div>
      <SearchForm onSubmit={onSubmitForm} searchTerm={searchTerm} />
      <Table advocates={filteredAdvocates} />
    </div>
  );
}

export default Advocates;
