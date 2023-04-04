import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    // Rota temporária
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
