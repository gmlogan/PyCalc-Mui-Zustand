//import "./App.css";
import { About } from "./components/About";
import { EditBoats } from "./components/EditBoats";
import { Timings } from "./components/Timings";
import { ResultList } from "./components/ResultList";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CounterContext from "./counterContext";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<ResultList />} />
          <Route path="timings" element={<Timings />} />
          <Route path="editboats" element={<EditBoats />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
