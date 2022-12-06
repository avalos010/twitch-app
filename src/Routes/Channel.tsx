import { Fragment } from "react";
import { useParams } from "react-router-dom";
import IframePlayer from "../Components/IframePlayer";
import Channels from "./Channels";

function Channel() {
  const { id } = useParams();
  return (
    <Fragment>
      <Channels />
      {!!id ? (
        <IframePlayer clipUrl={`https://player.twitch.tv/?channel=${id}`} />
      ) : null}
    </Fragment>
  );
}

export default Channel;
