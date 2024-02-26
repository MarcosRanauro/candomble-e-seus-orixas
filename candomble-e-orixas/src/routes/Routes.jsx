import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orixas from "../pages/Orixas";
import OrixasDetails from "../components/OrixasDetails";

function appRoutes() {
  return (
    // Aqui eu fiz a importação de todas as rotas que eu criei, e defini o que cada uma delas vai renderizar. Mantendo a organização do código.
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orixas" element={<Orixas />} />
        <Route path="/orixas/:id" element={<OrixasDetails />} />
      </Routes>
  );
}

export default appRoutes;
