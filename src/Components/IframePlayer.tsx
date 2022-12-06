function IframePlayer({ clipUrl }: IframePlayer) {
  return (
    <iframe
      src={`${clipUrl}&parent=${window.location.hostname}`}
      allowFullScreen
      height="720"
      width="1280"
      loading="eager"
    ></iframe>
  );
}

interface IframePlayer {
  clipUrl: string;
}

export default IframePlayer;
