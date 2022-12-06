import { useState } from "react";
import SearchInput from "../Components/SearchInput";

function Channels() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchInput
        placeholder="Search for live channel to watch on twitch"
        updateQuery={(receivedQuery) => {
          setQuery(receivedQuery);
        }}
        navigateToQuery={true}
      />
    </div>
  );
}

export default Channels;
