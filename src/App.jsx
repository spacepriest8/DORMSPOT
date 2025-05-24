import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hostels from "./pages/Hostels";
import ListProperty from "./pages/ListProperty";
import FindRoomate from "./pages/FindRoomate";
import HostelDetails from "./pages/HostelDetails";
import "../src/sass/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hostels" element={<Hostels />} />
        <Route path="/ListProperty" element={<ListProperty />} />
        <Route path="/FindRoomate" element={<FindRoomate />} />
        <Route path="/hostel/:id" element={<HostelDetails />} />
      </Routes>
    </>
  );
}

export default App;
