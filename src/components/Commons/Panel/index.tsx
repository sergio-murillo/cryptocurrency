import React from 'react';
import { H3 } from 'src/styles/commons';
import { PanelContainer } from './styles';

const Panel: React.FC<{ title?: string }> = ({ children, title }) => (
  <PanelContainer>
    {title && <H3>{title}</H3>}
    {children}
  </PanelContainer>
);

export default Panel;
