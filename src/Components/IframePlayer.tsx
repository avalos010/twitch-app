function IframePlayer({ clipUrl }: IframePlayer) {
  return (
    <div
      style={{ width: "100%", height: "50vh" }}
      className="embed-responsive embed-responsive-16by9 d-flex justify-content-center"
    >
      <iframe
        style={{ width: "100%", height: "100%" }}
        className="embed-responsive-item"
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
