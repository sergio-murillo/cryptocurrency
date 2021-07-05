import { flex } from '@styles/commons';
import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const styleDropDownBorder = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    border: ${theme.borders.normal} solid ${theme.colors.gray_2};
  `;
};

const styleDropDownCommon = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    background: ${theme.colors.white};
    font-weight: ${theme.fontWeights.medium};
  `;
};

export const DropDownContainer = withTheme(styled.div`
  ${styleDropDownBorder}
  min-width: 10.5em;
  min-height: 40px;
  margin-right: 10px;
  cursor: pointer;
`);

export const DropDownHeader = withTheme(styled.div`
  ${flex('flex-end', 'row', 'space-between')}
  ${styleDropDownCommon}
  padding: 0.4em 1em;
`);

export const DropDownListContainer = styled.div`
  position: relative;
  top: 10px;
`;

export const DropDownList = withTheme(styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  box-sizing: border-box;
  width: 100%;
  ${styleDropDownCommon}
  ${styleDropDownBorder}
  &:first-of-type {
    padding-top: 0.8em;
  }
`);

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
