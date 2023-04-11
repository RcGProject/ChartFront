import React from 'react';
import P from 'prop-types';
import MainStyled from './styles';

function Main({ children }) {
  return <MainStyled>{children}</MainStyled>;
}

export default Main;

Main.propTypes = {
  children: P.node.isRequired,
};
