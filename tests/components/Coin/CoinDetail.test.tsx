import CoinDetail, { Props } from 'src/components/Coin/CoinDetail';
import { render, cleanup, screen, RenderResult  } from '@testing-library/react';
import customTheme from 'src/themes/default';
import 'src/extends/global';
import '@testing-library/jest-dom/extend-expect';
import { CoinMock } from 'src/factory/coins';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    currentCoin: CoinMock.build()
  };
  
  return (
  <WrapperTemplate>
    <CoinDetail {...defaultProps} {...props}/>
  </WrapperTemplate>
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

  describe('Ranking', () => {

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
  
  describe('Percentage', () => {

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