import { Fragment } from "react";
import useCategoryId from "../hooks/useCategoryId";

function Categories() {
  const { data } = useCategoryId("call of duty");

  return (
    <Fragment>
      <h2 className="mb-4">Categories</h2>
      <div className="d-flex flex-row flex-wrap gap-3">
        {data?.data.map((item) => {
          console.log(item);
          return (
            <div
              className="card d-flex p-3 text-center flex-column justify-content-between align-items-center"
              style={{ width: "200px" }}
            >
              <img
                src={item.box_art_url}
                className="img-thumbnail mt-4"
                alt="..."
                width={80}
              />

              <h5>{item.name}</h5>
              <p className="btn btn-primary ">Go somewhere</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Categories;
