import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { FullCard } from "./pages/FullCard";
import { NotFound } from "./pages/NotFound";
import { Episodes } from "./pages/Episodes";
import { Location } from "./pages/Location";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episodes/:id" element={<Episodes />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/character/:id" element={<FullCard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
