import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orixas from "../pages/Orixas";

function appRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orixas" element={<Orixas />} />
      </Routes>
  );
}

export default appRoutes;
