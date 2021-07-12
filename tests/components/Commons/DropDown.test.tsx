import DropDown, { DropdownItem, Props } from 'src/components/Commons/DropDown';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { DropDownOptionMock } from 'src/factory/commons';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    options: DropDownOptionMock.buildList(5),
    placeholder: 'Loreim',
    submitOptionSelected: (item: DropdownItem) => {}
  };
  
  return (
    <WrapperTemplate>
      <DropDown {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<DropDown />', () => {

  afterEach(() => cleanup());

  it('should renders a <DropDown>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  describe('Input', () => {

    it('should exits the header', () => {
      render(factory());
      const filterElement = screen.getByTestId('dropdown-header');
      const list = screen.queryByTestId('dropdown-list');
      expect(filterElement).toBeInTheDocument();
      expect(list).toBeNull();
    });

    it('should open dropdown list', () => {
      render(factory());
      const header = screen.getByTestId('dropdown-header');
      fireEvent.click(header);
      const list = screen.getByTestId('dropdown-list');
      expect(list).toBeInTheDocument();
      expect(list.childElementCount).toBeGreaterThan(0);
    });
  
  });

  describe('Options List', () => {

    it('should select an option', () => {
      const submitOptionSelected = jest.fn();
      render(factory({ submitOptionSelected }));
      const header = screen.getByTestId('dropdown-header');
      fireEvent.click(header);
      const list = screen.getByTestId('dropdown-list');
      const option = list.children[0];
      fireEvent.click(option);
      expect(submitOptionSelected).toHaveBeenCalled();
    });
  });
});