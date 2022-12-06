import { useParams } from "react-router-dom";
import IframePlayer from "../Components/IframePlayer";

function Clip() {
  const { id } = useParams();
  return (
    <div>
      <IframePlayer clipUrl={`https://clips.twitch.tv/embed?clip=${id}`} />
    </div>
  );
}

export default Clip;
