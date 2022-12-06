import { useState } from "react";

function SearchInput({ updateQuery }: SearchInputProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="input-group mb-3">
      <input
        onKeyDown={(e) => (e.key === "Enter" ? updateQuery(query) : null)}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Search for video games"
        aria-label="Search for video games"
        aria-describedby="button-addon2"
      />

      <button
        onClick={() => updateQuery(query)}
        className="btn btn-outline-primary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;

interface SearchInputProps {
  updateQuery: (query: string) => void;
}
