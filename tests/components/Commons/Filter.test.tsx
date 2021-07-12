import Filter, { FilterRange, Props } from 'src/components/Commons/List/Filter';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    submitText: (text: string) => {},
    submitFilter: (value: FilterRange) => {},
  };
  
  return (
    <WrapperTemplate>
      <Filter {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Filter />', () => {

  afterEach(() => cleanup());

  it('should renders a <Filter>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  describe('Filter from input text', () => {
    it('should submit text', () => {
      const submitText = jest.fn();
      const text = 'loreim';
      render(factory({ submitText }));
      const filterElement = screen.getByTestId('filter-input');
      fireEvent.change(filterElement, { target: { value: text } });
      expect(submitText).toHaveBeenCalledWith(text);
    });
  });

  describe('Filter from dropdown', () => {
    it('should submit dropdown value', () => {
      const submitFilter = jest.fn();
      render(factory({ submitFilter }));
      const header = screen.getAllByTestId('dropdown-header');
      fireEvent.click(header[0]);
      const list = screen.getAllByTestId('dropdown-list');
      const option = list[0].children[0];
      fireEvent.click(option);
      expect(submitFilter).toHaveBeenCalled();
    });
  });
});