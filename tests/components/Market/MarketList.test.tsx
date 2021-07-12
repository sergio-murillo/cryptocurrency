import MarketList, { Props } from 'src/components/Market/MarketList';
import { render, cleanup, screen } from '@testing-library/react';
import { MarketMock } from 'src/factory/markets';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    markets: MarketMock.buildList(10)
  };
  
  return (
    <WrapperTemplate>
      <MarketList {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<MarketList />', () => {

  afterEach(() => cleanup());

  it('should renders a <MarketList>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  describe('Markets List', () => {

    it('should list markets', () => {
      render(factory());
      const table = screen.getByTestId('table-body');
      expect(table.childElementCount).toBe(10);
    });
  
    it('should be empty the table', () => {
      render(factory({ markets: [] }));
      const table = screen.getByTestId('table-body');
      expect(table.childElementCount).toBe(0);
    });

  });
});