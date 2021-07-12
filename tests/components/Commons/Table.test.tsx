import Table, { Props } from 'src/components/Commons/List/Table';
import { render, cleanup, screen } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';
import { TableHeaderMock } from 'src/factory/commons';

const factory = (props: Partial<Props> = {}) => {
  const items = [[1, 'Loreim 1'], [2, 'Loreim 2']];
  const totalColumns = items[0].length;

  const defaultProps: Props = {
    items,
    headers: TableHeaderMock.buildList(totalColumns),
    totalColumns,
    isLoading: false,
    actionRow: (row: number) => {}
  };
  
  return (
    <WrapperTemplate>
      <Table {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Table />', () => {

  afterEach(() => cleanup());

  it('should renders a <Table>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should exists its structure', () => {
    render(factory());
    expect(screen.getByTestId('table-header')).toBeInTheDocument();
    expect(screen.getByTestId('table-body')).toBeInTheDocument();
  });

  describe('Header', () => {
    it('should exists header items', () => {
      render(factory());
      const header = screen.getByTestId('table-header');
      expect(header.firstElementChild?.childElementCount).toBe(2);
    });
  });

  describe('Body', () => {
    it('should exists body items', () => {
      render(factory());
      const body = screen.getByTestId('table-body');
      expect(body.firstElementChild?.childElementCount).toBe(2);
    });

    it('should show loader in the body', () => {
      render(factory({ isLoading : true }));
      const loader = screen.getByTestId('loader-container');
      expect(loader).toBeInTheDocument();
    });
  });
});