import React from 'react';
import Loader from '@components/Commons/Loader';
import {
  TableContainer,
  TableHead,
  TableHeadRow,
  TableHeadColumn,
  TableBody,
  TableBodyRow,
  TableBodyColumn} from './styles';

interface PropsFromComponent {
  items: any[];
  headers: any[];
  className?: any;
  isLoading?: boolean;
}

type Props = PropsFromComponent;

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
