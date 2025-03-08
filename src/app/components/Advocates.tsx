"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
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

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitting form...");
  };

  const filteredAdvocates = advocates.filter((advocate) => {
    return (
      advocate.firstName.includes(searchTerm) ||
      advocate.lastName.includes(searchTerm) ||
      advocate.city.includes(searchTerm) ||
      advocate.degree.includes(searchTerm) ||
      advocate.specialties.includes(searchTerm) ||
      String(advocate.yearsOfExperience).includes(searchTerm)
    );
  });

  return (
    <div>
      <SearchForm onChange={onChange} onSubmit={onSubmitForm} />
      <Table advocates={filteredAdvocates} />
    </div>
  );
}

export default Advocates;
