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

  const fetchAdvocates = async (search: string = "") => {
    const response = await fetch(
      `/api/advocates${search ? `/?search=${search}` : ""}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Server responded with status ${response.status}`
      );
    }

    const json = await response.json();
    return json.data;
  };

  useEffect(() => {
    console.log("fetching advocates...");

    fetchAdvocates()
      .then((data) => {
        setAdvocates(data);
      })
      .catch((error) => {
        console.error("Error fetching advocates", error);
        setAdvocates([]);
      });
  }, []);

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search-term") as string;
    setSearchTerm(searchValue.trim());

    try {
      const data = await fetchAdvocates(searchValue);
      setAdvocates(data);
    } catch (error) {
      console.error("Error fetching advocates", error);
      setAdvocates([]);
    }
  };

  return (
    <div className="flex flex-col gap-4 container items-center mx-auto p-4">
      <h2>Find Your Advocate</h2>
      <SearchForm onSubmit={onSubmitForm} searchTerm={searchTerm} />
      <div className="">
        Searching for: <span>{searchTerm}</span>
      </div>
      <Table advocates={advocates} />
    </div>
  );
}

export default Advocates;
