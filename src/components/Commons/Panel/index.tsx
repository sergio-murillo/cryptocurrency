import React from 'react';
import { H3 } from 'src/styles/commons';
import { PanelContainer } from './styles';

interface PropsFromComponent {
  title?: string;
}

export type Props = PropsFromComponent;

const Panel: React.FC<Props> = ({ children, title }) => (
  <PanelContainer>
    {title && <H3>{title}</H3>}
    {children}
  </PanelContainer>
);

export default Panel;
