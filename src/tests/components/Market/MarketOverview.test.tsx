import MarketOverview, { Props } from '../../../components/Market/MarketOverview';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';
import { GlobalDataMock } from '../../factory/coins';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    globalData: GlobalDataMock.build()
  };
  
  return (
    <ThemeProvider theme={customTheme}>
      <MarketOverview {...defaultProps} {...props}/>
    </ThemeProvider>
  );
};

describe('<MarketOverview />', () => {

  afterEach(() => cleanup());

  it('should renders a <MarketOverview>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should list information about market', () => {
    render(factory());
    const items = screen.getByTestId('market-overview-items');
    expect(items.childElementCount).toBeGreaterThanOrEqual(0);
  });
});