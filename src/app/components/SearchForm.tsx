"use client";

import type { ChangeEvent, FormEvent } from "react";

type SearchFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
};

function SearchForm({ onSubmit, searchTerm }: SearchFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search-input">Search</label>
      <div>
        Searching for: <span>{searchTerm}</span>
      </div>
      <input name="search-term" className="border border-black" />
      <button>Reset Search</button>
    </form>
  );
}

export default SearchForm;
