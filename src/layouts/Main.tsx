import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../styles/commons';

const MainContainer = styled.div`
  overflow-x: hidden;
  padding: 50px;
  ${mq[0]} {
    padding: 5px;
  }
`;

const Header = styled.header`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

const Body = styled.main``;

const Main: React.FC = ({ children }) => (
  <MainContainer>
    <Header>Coin USD</Header>
    <Body>{children}</Body>
  </MainContainer>
);

export default Main;
