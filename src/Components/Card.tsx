import { Link } from "react-router-dom";

function Card({ name, imageUrl, buttonText, id }: CardProps) {
  return (
    <div
      data-testid="card"
      className="card d-flex p-3 text-center flex-column justify-content-between align-items-center"
      style={{ width: "200px" }}
    >
      <img src={imageUrl} className="img-thumbnail mt-4" alt="..." width={80} />

      <h5>{name}</h5>
      <Link to={`/clips/${id}`} className="btn btn-primary ">
        {buttonText}
      </Link>
    </div>
  );
}

export default Card;

interface CardProps {
  name: string;
  imageUrl: string;
  buttonText: string;
  id: string;
}
