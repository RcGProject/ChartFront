import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
