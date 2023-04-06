import React from 'react';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import Router from './routes';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <Main>
        <Router />
      </Main>

      <Footer />

      <GlobalStyles />
    </>
  );
}
