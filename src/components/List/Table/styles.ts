import styled from '@emotion/styled';
import { css, Theme, withTheme } from '@emotion/react';

const styleTableHeadColumn = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    color: ${theme.colors.thead};
    font-weight: ${theme.fontWeights.medium};
  `;
};

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  white-space: nowrap;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadColumn = withTheme(styled.th`
  ${styleTableHeadColumn}
  border-top: 0;
  border-bottom: 0;
  vertical-align: middle;
  text-transform: none;
  padding: 20px 6px;
  text-align: center;
`);

export const TableBody = withTheme(styled.tbody`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.sm};
`);

export const TableBodyRow = styled.tr`
  &:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

export const TableBodyColumn = styled.td`
  text-align: center;
  vertical-align: middle;
`;
