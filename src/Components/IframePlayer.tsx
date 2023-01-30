import { useState } from "react";
import Spinner from "./Spinner";

function IframePlayer({ clipUrl }: IframePlayer) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      style={{ width: "100%", height: "50vh" }}
      className="embed-responsive embed-responsive-16by9 d-flex justify-content-center"
    >
      {isLoading && <Spinner />}
      <iframe
        onLoad={() => setLoading(false)}
        style={{ width: "100%", height: "100%" }}
        className={`${isLoading && "hidden"}`}
        src={`${clipUrl}&parent=${window.location.hostname}`}
        allowFullScreen
        loading="eager"
      ></iframe>
    </div>
  );
}

interface IframePlayer {
  clipUrl: string;
}

export default IframePlayer;
