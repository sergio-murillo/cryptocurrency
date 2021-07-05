import React from 'react';
import styled from '@emotion/styled';
import { FaSpinner } from 'react-icons/fa';
import { keyframes, css } from '@emotion/react';

interface PropsFromComponent {
  show: boolean;
}

type Props = PropsFromComponent;

const bounce = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const styleImageAnimation = () =>
  css`
    .loader {
      animation: ${bounce} 1s ease infinite;
    }
`;

const LoaderContainer = styled.div`
  ${styleImageAnimation}
`;

const Loader: React.FC<Props> = ({ show }) => (
   <LoaderContainer>
     {
       show && <FaSpinner className="loader"/>
     }
   </LoaderContainer>
);

export default Loader;
