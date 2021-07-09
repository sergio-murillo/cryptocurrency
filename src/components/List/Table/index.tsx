import React from 'react';
import Loader from 'src/components/Commons/Loader';
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
  totalColumns: number;
  className?: any;
  isLoading?: boolean;
  actionRow: (row: number) => void;
}

type Props = PropsFromComponent;

const Table: React.FC<Props> = ({ headers = [], items = [], className, isLoading, totalColumns, actionRow }) => {
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
              <TableBodyColumn colSpan={totalColumns}><Loader show={isLoading}/></TableBodyColumn>
            </TableBodyRow>
        }
        {items.map((row: any[], index) => (
            <TableBodyRow key={index} onClick={() => actionRow(index)}>
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
