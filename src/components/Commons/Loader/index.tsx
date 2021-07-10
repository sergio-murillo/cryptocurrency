import React, { memo } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoaderContainer } from './styles';

interface PropsFromComponent {
  show: boolean;
}

export type Props = PropsFromComponent;

const Loader: React.FC<Props> = ({ show }) => (
   <LoaderContainer data-testid="loader-container">
     {
       show && <FaSpinner className="loader"/>
     }
   </LoaderContainer>
);

export default memo(Loader);
