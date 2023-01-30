import { Link } from "react-router-dom";

function VideoCard({ name, imageUrl, buttonText, id }: VideoCardProps) {
  return (
    <div
      className="flex p-3 text-center flex-col items-center mt-1 shadow-md shadow-slate-300 border-t-2 relative"
      style={{ width: "400px" }}
      data-testid="video-card"
    >
      <img
        src={imageUrl}
        className="img-thumbnail mt-4"
        alt="..."
        width={300}
        loading={"lazy"}
      />
      <h5 className="mb-8">{name}</h5>
      <Link
        to={`/clips/play/${id}`}
        className="bg-slate-700 rounded-sm text-white text-md hover:bg-black leading-none p-1 w-full absolute bottom-0 left-0 right-0 hover:shadow-md hover:shadow-slate-700"
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default VideoCard;

interface VideoCardProps {
  name: string;
  imageUrl: string;
  buttonText: string;
  id: string;
}
