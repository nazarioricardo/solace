"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Advocate } from "../types";

type Advocates = Advocate[];
type SearchFormProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

function SearchForm({ onChange, onSubmit }: SearchFormProps) {
  const [advocates, setAdvocates] = useState<Advocates>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocates>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };
  return (
    <form onSubmit={onSubmit}>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={onChange} />
      <button onClick={onClick}>Reset Search</button>
    </form>
  );
}

export default SearchForm;
