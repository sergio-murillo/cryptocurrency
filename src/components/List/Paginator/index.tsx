import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { usePagination, DOTS } from 'src/utils/pagination';
import { PaginatorActionContainer, PaginatorContainer, PaginatorIcon, PaginatorNumber } from './styles';

interface PropsFromComponent {
  onPageChange: (page: number|string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

enum PaginatorActionOptions {
  back = 'back',
  next = 'next'
}

type Props = PropsFromComponent;

const PaginatorAction: React.FC<{ action: PaginatorActionOptions }> = ({ action }) => {
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

const Paginator: React.FC<Props> = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

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
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <PaginatorContainer>
      <PaginatorActionContainer onClick={onPrevious}>
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
      <PaginatorActionContainer onClick={onNext}>
        <PaginatorAction action={PaginatorActionOptions.next}/>
      </PaginatorActionContainer>
    </PaginatorContainer>
  );
};

export default Paginator;