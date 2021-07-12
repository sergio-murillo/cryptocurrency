import { FC } from 'react';
import { H3 } from 'src/styles/commons';
import { PanelContainer } from './styles';

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Panel title
   * @type {string}
   */
  title?: string;
}

export type Props = PropsFromComponent;

/**
 * Generic panel to display information on card
 */
export const Panel: FC<Props> = ({ children, title }) => (
  <PanelContainer>
    {title && <H3>{title}</H3>}
    {children}
  </PanelContainer>
);

export default Panel;
