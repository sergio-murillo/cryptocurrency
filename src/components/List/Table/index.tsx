import React, { useCallback, useMemo } from 'react';
import Loader from 'src/components/Commons/Loader';
import { Header } from 'src/models/commons';
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
  headers: Header[];
  totalColumns: number;
  className?: string;
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
        {items.map((row, index) => (<RowMemoized row={row} actionRow={() => actionRow(index)} key={index}/>))}
      </TableBody>
    </TableContainer>
  );
};

const RowMemoized = ({ row, actionRow }: { row: any[], actionRow: () => void }) => {
  const actionRowClick = useCallback(() => {
    actionRow();
  }, [actionRow]);

  return useMemo(() => {
      return (
      <TableBodyRow onClick={() => actionRowClick()}>
        {row.map((data, index) => (
            <TableBodyColumn key={index}>{data}</TableBodyColumn>
        ))}
      </TableBodyRow>);
  }, [row, actionRowClick]);
};

export default Table;
