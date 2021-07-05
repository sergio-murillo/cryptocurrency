import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const stylePercentageValue = (props: { color: string, theme: Theme }) => {
  const { color, theme } = props;
  
  return css`
    color: ${color};
    font-weight: ${theme.fontWeights.semibold};
  `;
};

export const PercentageValueType = withTheme(styled.span`
  ${stylePercentageValue}
`);
