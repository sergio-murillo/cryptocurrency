import React from 'react';
import { H2 } from '../styles/commons';
import { Body, Header, MainContainer } from './styles';

/**
 * @version 1.0.0
 * @author Sergio Murillo
 * Layout wrapper
 */
const Main: React.FC = ({ children }) => (
  <MainContainer>
    <Header><H2>Cryptomonedas a USD</H2></Header>
    <Body>{children}</Body>
  </MainContainer>
);

export default Main;
