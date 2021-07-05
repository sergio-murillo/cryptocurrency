import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

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

export const LoaderContainer = styled.div`
  ${styleImageAnimation}
`;
