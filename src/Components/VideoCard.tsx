import { Link } from "react-router-dom";

function VideoCard({ name, imageUrl, buttonText, id }: CardProps) {
  return (
    <div
      className="card d-flex p-3 text-center flex-column justify-content-between align-items-center"
      style={{ width: "400px" }}
    >
      <img
        src={imageUrl}
        className="img-thumbnail mt-4"
        alt="..."
        width={300}
      />
      <h5>{name}</h5>
      <Link to={`/clips/play/${id}`} className="btn btn-primary ">
        {buttonText}
      </Link>
    </div>
  );
}

export default VideoCard;

interface CardProps {
  name: string;
  imageUrl: string;
  buttonText: string;
  id: string;
}
