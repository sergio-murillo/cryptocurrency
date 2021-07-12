import { useCallback, useMemo, FC } from 'react';
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

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Items in the table
   * @type {any[]}
   */
  items: any[];
  /**
   * headers in the table
   * @type {Header[]}
   */
  headers: Header[];
  /**
   * Total number of table columns
   * @type {number}
   */
  totalColumns: number;
  /**
   * Table classname
   * @type {string}
   * @ignore
   */
  className?: string;
  /**
   * Property to know if the loader should appear
   * @type {boolean}
   */
  isLoading?: boolean;
  /**
   * Called when a row is clicked
   * @param {number} row Row clicked
   */
  actionRow: (row: number) => void;
}

export type Props = PropsFromComponent;

/**
 * Generic table
 */
export const Table: FC<Props> = ({ headers = [], items = [], className, isLoading, totalColumns, actionRow }) => {
  return (
    <TableContainer data-testid="table-container" className={className}>
      <TableHead data-testid="table-header">
        <TableHeadRow>
          {headers.map(({ title, colspan }, index) => (
              <TableHeadColumn colSpan={colspan || 1} key={index}>{title}</TableHeadColumn>
          ))}
        </TableHeadRow>
      </TableHead>
      <TableBody data-testid="table-body">
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

/**
 * Memorize the rows of the table
 * @param {Array.<any>} row Row to show
 * @returns Row
 */
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
