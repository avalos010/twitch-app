import { Fragment, useState } from "react";
import useCategoryId from "../hooks/useCategoryId";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";
import SearchInput from "../Components/SearchInput";

function Categories() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoryId(query);

  return (
    <Fragment>
      <h2 className="mb-4">Categories</h2>
      {isLoading && !!query ? <Spinner /> : null}
      {<SearchInput updateQuery={(query: string) => setQuery(query)} />}
      {query.length === 0 ? (
        <h3>Search for categories or video games...</h3>
      ) : null}
      <div className="d-flex flex-row flex-wrap gap-3">
        {data?.data.map((item) => {
          return (
            <Card
              name={item.name}
              key={item.id}
              id={item.id}
              imageUrl={item.box_art_url}
              buttonText={`Watch Clips`}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Categories;
