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

  const filteredAdvocates = advocates.filter(
    ({
      firstName,
      lastName,
      city,
      degree,
      specialties,
      yearsOfExperience,
      phoneNumber,
    }) => {
      const name = `${firstName} ${lastName}`.toLocaleLowerCase();
      return (
        name.toLocaleLowerCase().includes(searchTerm) ||
        city.toLocaleLowerCase().includes(searchTerm) ||
        degree.toLocaleLowerCase().includes(searchTerm) ||
        specialties.join(" ").toLocaleLowerCase().includes(searchTerm) ||
        String(yearsOfExperience).includes(searchTerm) ||
        String(phoneNumber).includes(searchTerm)
      );
    }
  );

  return (
    <div>
      <SearchForm onSubmit={onSubmitForm} searchTerm={searchTerm} />
      <Table advocates={filteredAdvocates} />
    </div>
  );
}

export default Advocates;
