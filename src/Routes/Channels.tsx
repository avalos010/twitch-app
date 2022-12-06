import { useState } from "react";
import IframePlayer from "../Components/IframePlayer";
import SearchInput from "../Components/SearchInput";

function Channels() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchInput
        placeholder="Search for live channel to watch on twitch"
        updateQuery={(query: string) => setQuery(query)}
      />

      {!!query ? (
        <IframePlayer clipUrl={`https://player.twitch.tv/?channel=${query}`} />
      ) : null}
    </div>
  );
}

export default Channels;
