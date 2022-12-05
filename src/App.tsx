import useVideos from "./hooks/useVideos";

function App() {
  const videos = useVideos();

  return (
    <div className="App">
      Twitch
      <input type="text" />
      <input type="button" value="GO" />
    </div>
  );
}

export default App;
