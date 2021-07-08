import React from 'react';
import styled from '@emotion/styled';
import { H2, mq } from '../styles/commons';

const MainContainer = styled.div`
  overflow-x: hidden;
  padding: 50px;
  ${mq[0]} {
    padding: 5px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Body = styled.main``;

const Main: React.FC = ({ children }) => (
  <MainContainer>
    <Header><H2>Cryptomonedas a USD</H2></Header>
    <Body>{children}</Body>
  </MainContainer>
);

export default Main;
