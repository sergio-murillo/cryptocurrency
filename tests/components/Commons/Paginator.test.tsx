import Paginator, { Props } from 'src/components/Commons/List/Paginator';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    onPageChange: (page: number|string) => {},
    totalCount: 100,
    currentPage: 1,
    pageSize: 10
  };
  
  return (
    <WrapperTemplate>
      <Paginator {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Paginator />', () => {

  afterEach(() => cleanup());

  it('should renders a <Paginator>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should go forward 1 page', () => {
    const onPageChange = jest.fn();
    const currentPage = 1;
    render(factory({ currentPage, onPageChange }));
    const actionNext = screen.getByTestId('paginator-action-next');
    fireEvent.click(actionNext);
    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
  });

  it('should dont go forward 1 page when current page is the last', () => {
    const onPageChange = jest.fn();
    const currentPage = 10;
    render(factory({ currentPage, onPageChange }));
    const actionNext = screen.getByTestId('paginator-action-next');
    fireEvent.click(actionNext);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it('should go back 1 page', () => {
    const onPageChange = jest.fn();
    const currentPage = 3;
    render(factory({ currentPage, onPageChange }));
    const actionPrevious = screen.getByTestId('paginator-action-previous');
    fireEvent.click(actionPrevious);
    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
  });

  it('should dont go back 1 page when current page is the first', () => {
    const onPageChange = jest.fn();
    const currentPage = 1;
    render(factory({ currentPage, onPageChange }));
    const actionPrevious = screen.getByTestId('paginator-action-previous');
    fireEvent.click(actionPrevious);
    expect(onPageChange).not.toHaveBeenCalled();
  });
});