import React from 'react';
import styled from '@emotion/styled';
import { css, Theme, withTheme } from '@emotion/react';
import Loader from '../Loader';

interface PropsFromComponent {
  items: any[];
  headers: any[];
  className?: any;
  isLoading?: boolean;
}

type Props = PropsFromComponent;

const styleTableHeadColumn = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    color: ${theme.colors.thead};
    font-weight: ${theme.fontWeights.medium};
  `;
};

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  white-space: nowrap;
`;

const TableHeadRow = styled.tr``;

const TableHeadColumn = withTheme(styled.th`
  ${styleTableHeadColumn}
  border-top: 0;
  border-bottom: 0;
  vertical-align: middle;
  text-transform: none;
  padding: 20px 6px;
  text-align: center;
`);

const TableBody = withTheme(styled.tbody`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.sm};
`);

const TableBodyRow = styled.tr`
  &:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

const TableBodyColumn = styled.td`
  text-align: center;
  vertical-align: middle;
`;

const Table: React.FC<Props> = ({ headers, items, className, isLoading }) => {
  return (
    <TableContainer className={className}>
      <TableHead>
        <TableHeadRow>
          {headers.map(({ title, colspan }, index) => (
              <TableHeadColumn colSpan={colspan || 1} key={index}>{title}</TableHeadColumn>
          ))}
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {
          isLoading &&
            <TableBodyRow>
              <TableBodyColumn colSpan={headers.length}><Loader show={isLoading}/></TableBodyColumn>
            </TableBodyRow>
        }
        {items.map((row, index) => (
            <TableBodyRow key={index}>
              {row.map((data, index) => (
                <TableBodyColumn key={index}>{data}</TableBodyColumn>
              ))}
            </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
