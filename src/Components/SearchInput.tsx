import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput({
  updateQuery,
  placeholder,
  navigateToQuery = false,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2 mb-3">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter" && navigateToQuery) {
            updateQuery(query);
            navigate(`/channels/${query}`);
          } else if (e.key === "Enter") {
            updateQuery(query);
          }
        }}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="border border-sky-400 rounded-md w-full py-2 pl-2"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="button-addon2"
      />
      <button
        onClick={() => {
          updateQuery(query);
          navigateToQuery ? navigate(`/channels/${query}`) : null;
        }}
        className="bg-slate-700 w-20 rounded-sm text-white text-md hover:bg-black"
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
  placeholder: string;
  navigateToQuery?: boolean;
}
