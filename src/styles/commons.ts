import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const breakpoints = [360, 768, 1024, 1280];

export const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

export const flex = (alignItems = 'stretch', direction = 'row', justifyContent = 'flex-start', wrap = 'nowrap') => (
  `display: flex;
   align-items: ${alignItems};
   flex-direction: ${direction};
   justify-content: ${justifyContent};
   flex-wrap: ${wrap};
  `
);

const styleHeading = (props: { theme: Theme }) =>
  css`
    font-family: ${props.theme.fonts.heading};
    font-weight: ${props.theme.fontWeights.bold};
    text-transform: uppercase;
`;

export const H1 = withTheme(styled.h1`
  ${styleHeading}
  font-size: ${({ theme }) => theme.fontSizes.lg}
`);

export const H2 = withTheme(styled.h2`
  ${styleHeading}
  font-size: ${({ theme }) => theme.fontSizes.md}
`);

export const H3 = withTheme(styled.h3`
  ${styleHeading}
  font-size: ${({ theme }) => theme.fontSizes.sm}
`);

export const globalStyles = (theme: Theme) =>
  css`
    body {
      font-family: ${theme.fonts.body};
      background: ${theme.colors.gray_1};
    }

    input {
      font-size: ${theme.fontSizes.sm};
      border: ${theme.borders.normal} solid ${theme.colors.gray_2};
      background: ${theme.colors.white};
      color: ${theme.colors.dark_black};
    }
`;