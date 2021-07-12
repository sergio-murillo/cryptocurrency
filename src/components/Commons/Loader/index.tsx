import { memo, FC } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoaderContainer } from './styles';

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Property to show loader
   * @type {boolean}
   */
  show: boolean;
}

export type Props = PropsFromComponent;

/**
 * Generic loader for wait while doing some operation
 */
export const Loader: FC<Props> = ({ show }) => (
   <LoaderContainer data-testid="loader-container">
     {
       show && <FaSpinner className="loader"/>
     }
   </LoaderContainer>
);

export default memo(Loader);
