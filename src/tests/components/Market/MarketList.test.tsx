import MarketList, { Props } from '../../../components/Market/MarketList';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';
import { MarketMock } from '../../factory/markets';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    markets: MarketMock.buildList(10)
  };
  
  return (
    <ThemeProvider theme={customTheme}>
      <MarketList {...defaultProps} {...props}/>
    </ThemeProvider>
  );
};

describe('<MarketList />', () => {

  afterEach(() => cleanup());

  it('should renders a <MarketList>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

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