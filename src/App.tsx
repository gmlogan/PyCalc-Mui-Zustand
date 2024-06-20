//import "./App.css";
import { About } from "./components/About";
import { EditBoats } from "./components/EditBoats";
import { Timings } from "./components/Timings";
import { ResultList } from "./components/ResultList";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResultList />} />
        <Route path="timings" element={<Timings />} />
        <Route path="editboats" element={<EditBoats />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
