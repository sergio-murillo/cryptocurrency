import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { usePagination, DOTS } from 'src/utils/pagination';
import {
  PaginatorActionContainer,
  PaginatorContainer,
  PaginatorIcon,
  PaginatorNumber } from './styles';
import { memo, FC } from 'react';

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
  * Called when change page
  * @param {(number|string)} page Page changed
  */
  onPageChange: (page: number|string) => void;
  /**
   * Total amount of list to paginate
   * @type {number}
   */
  totalCount: number;
  /**
   * Sibling count
   * @type {number}
   */
  siblingCount?: number;
  /**
   * Current page selected
   * @type {number}
   */
  currentPage: number;
  /**
   * Items per page
   * @type {number}
   */
  pageSize: number;
}

/**
 * Actions to move forward and backward in the pager
 */
enum PaginatorActionOptions {
  back = 'back',
  next = 'next'
}

export type Props = PropsFromComponent;

/**
 * Move forward or backward action
 */
const PaginatorAction: FC<{ action: PaginatorActionOptions }> = ({ action }) => {
  let icon: JSX.Element;
  switch(action) {
    case PaginatorActionOptions.next:
      icon = <FaAngleRight />;
      break;
    case PaginatorActionOptions.back:
      icon = <FaAngleLeft />;
      break;
  }
  
  return <PaginatorIcon>{icon}</PaginatorIcon>;
};

/**
 * List paginator
 */
export const Paginator: FC<Props> = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    const lastPage = paginationRange[paginationRange.length - 1];
    if (currentPage !== lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <PaginatorContainer data-testid="paginator-container">
      <PaginatorActionContainer data-testid="paginator-action-previous" onClick={onPrevious}>
        <PaginatorAction action={PaginatorActionOptions.back}/>
      </PaginatorActionContainer>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <PaginatorNumber key={pageNumber}>&#8230;</PaginatorNumber>;
        }

        return (
          <PaginatorNumber
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}>{pageNumber}</PaginatorNumber>
          );
          
      })}
      <PaginatorActionContainer data-testid="paginator-action-next" onClick={onNext}>
        <PaginatorAction action={PaginatorActionOptions.next}/>
      </PaginatorActionContainer>
    </PaginatorContainer>
  );
};

export default memo(Paginator);