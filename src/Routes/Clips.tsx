import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import VideoCard from "../Components/VideoCard";
import useClips from "../hooks/useClips";

function Clips() {
  const { id } = useParams();
  const { data, isLoading } = useClips(id as string);

  return (
    <div className="flex flex-row flex-wrap  gap-3 justify-center">
      {isLoading ? <Spinner /> : null}
      {data &&
        data.data.map((clip: any) => {
          return (
            <VideoCard
              key={clip.id}
              id={clip.id}
              buttonText="Watch Clip"
              imageUrl={clip.thumbnail_url}
              name={clip.title}
            />
          );
        })}
    </div>
  );
}

export default Clips;
