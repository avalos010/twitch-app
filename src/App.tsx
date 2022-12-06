import Categories from "./Routes/Categories";
import { Route, Routes } from "react-router-dom";
import Clips from "./Routes/Clips";
import Clip from "./Routes/Clip";
import Nav from "./Components/Nav";
import Channels from "./Routes/Channels";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/clips/:id" element={<Clips />} />
        <Route path="/clips/play/:id" element={<Clip />} />
        <Route path="/channels" element={<Channels />} />
      </Routes>
    </div>
  );
}

export default App;
