import Categories from "./Routes/Categories";
import { Route, Routes } from "react-router-dom";
import Clips from "./Routes/Clips";
import Clip from "./Routes/Clip";
import Nav from "./Components/Nav";
import Channels from "./Routes/Channels";
import Channel from "./Routes/Channel";

function App() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/clips/:id" element={<Clips />} />
          <Route path="/clips/play/:id" element={<Clip />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/:id" element={<Channel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
