import { Link } from "react-router-dom";

function Card({ name, imageUrl, buttonText, id }: CardProps) {
  return (
    <div
      data-testid="card"
      className="flex p-3 text-center flex-col justify-center items-center shadow-slate-500 shadow-sm border-t relative h-100"
      style={{ width: "200px" }}
    >
      <img src={imageUrl} className="mt-4" alt="..." width={80} />

      <h5 className="text-lg leading-none m-2 mb-14">{name}</h5>
      <Link
        to={`/clips/${id}`}
        className="bg-slate-700 rounded-sm text-white text-md hover:bg-black leading-none p-1 w-full absolute bottom-0 left-0 right-0 hover:shadow-md hover:shadow-slate-700"
      >
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
