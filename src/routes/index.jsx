import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

export default function Router() {
  return (
    // Rota temporária
    <Routes>
      <Route index path="/welcome" element={<Welcome />} />
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
