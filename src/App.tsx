import useCategoryId from "./hooks/useCategoryId";
import useVideos from "./hooks/useVideos";

function App() {
  const categories = useCategoryId("call of duty");
  // const videos = useVideos();

  console.log(categories);
  return (
    <div className="App">
      Twitch
      <input type="text" />
      <input type="button" value="GO" />
    </div>
  );
}

export default App;
