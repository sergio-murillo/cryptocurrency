import CoinDetail, { Props } from '../../../components/Coin/CoinDetail';
import { render, cleanup, screen, RenderResult  } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';
import '../../../extends/global';
import '@testing-library/jest-dom/extend-expect';
import { CoinMock } from '../../factory/coins';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    currentCoin: CoinMock.build()
  };
  
  return (
  <ThemeProvider theme={customTheme}>
    <CoinDetail {...defaultProps} {...props}/>
  </ThemeProvider>
  );
};

describe('<CoinDetail />', () => {

  let componentRendered: RenderResult;
  
  beforeEach(() => {
    componentRendered = render(factory());
  });

  afterEach(() => cleanup());

  it('should renders a <CoinDetail>', () => {
    expect(componentRendered).toBeDefined();
  });

  describe('<CoinRank />', () => {

    it('should exists', () => {
      const rankElement = screen.getByTestId('coin-rank');
      expect(rankElement).toBeDefined();
    });
  
    it('should have semibold font weight obtained from the template and contain ranking text', () => {
      const currentRank = 1;
      const rankElement = screen.getByTestId('coin-rank');
      expect(rankElement.textContent).toBe(`Clasificación: ${currentRank}`);
      expect(rankElement).toHaveStyle({ 'font-weight': customTheme.fontWeights.semibold });
    });
  });
  
  describe('<CoinPercentagesContainer />', () => {

    it('should exists', () => {
      const percentagesElement = screen.getByTestId('coin-percentages-container');
      expect(percentagesElement).toBeDefined();
    });

    it('should have flex position and contains title and percentage both', () => {
      const percentagesElement = screen.getByTestId('coin-percentages-container');
      expect(percentagesElement).toHaveStyle('display: flex');
      expect(percentagesElement.childElementCount).toBe(2);
    });
  });
});