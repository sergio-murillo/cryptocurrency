import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoaderContainer } from './styles';

interface PropsFromComponent {
  show: boolean;
}

type Props = PropsFromComponent;

const Loader: React.FC<Props> = ({ show }) => (
   <LoaderContainer>
     {
       show && <FaSpinner className="loader"/>
     }
   </LoaderContainer>
);

export default Loader;
