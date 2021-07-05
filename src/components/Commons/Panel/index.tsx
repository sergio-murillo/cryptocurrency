import React from 'react';
import { PanelContainer } from './styles';

const Panel: React.FC = ({ children }) => (
  <PanelContainer>{children}</PanelContainer>
);

export default Panel;
