import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orixas from "../pages/Orixas";
import OrixasDetails from "../components/OrixasDetails";

function appRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orixas" element={<Orixas />} />
        <Route path="/orixas/:id" element={<OrixasDetails />} />
      </Routes>
  );
}

export default appRoutes;
