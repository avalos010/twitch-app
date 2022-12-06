import { Fragment } from "react";
import useCategoryId from "../hooks/useCategoryId";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";

function Categories() {
  const { data, isLoading } = useCategoryId("call of duty");

  return (
    <Fragment>
      <h2 className="mb-4">Categories</h2>
      {isLoading ? <Spinner /> : null}

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
