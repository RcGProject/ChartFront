/* eslint-disable import/no-unresolved */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

import Router from './routes';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();
  return location.pathname !== '/welcome' ? (
    <>
      <Header />

      <Main>
        <Router />
      </Main>

      <Footer />
    </>
  ) : (
    <Main>
      <Router />
    </Main>
  );
}
