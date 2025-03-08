"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Advocate } from "../types";
import SearchForm from "./SearchForm";
import Table from "./Table";

type Advocates = Advocate[];

function Advocates() {
  const [advocates, setAdvocates] = useState<Advocates>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocates>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchAdvocates = async () => {
    const response = await fetch("/api/advocates");
    const jsonResponse = await response.json();
    setAdvocates(jsonResponse.data);
    setFilteredAdvocates(jsonResponse.data);
  };

  useEffect(() => {
    console.log("fetching advocates...");
    fetchAdvocates();
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitting form...");
  };

  return (
    <div>
      <SearchForm onChange={onChange} onSubmit={onSubmitForm} />
      <Table advocates={advocates} />
    </div>
  );
}

export default Advocates;
