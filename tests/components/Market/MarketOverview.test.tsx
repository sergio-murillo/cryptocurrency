import MarketOverview, { Props } from 'src/components/Market/MarketOverview';
import { render, cleanup, screen, RenderResult } from '@testing-library/react';
import { GlobalDataMock } from 'src/factory/coins';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    globalData: GlobalDataMock.build()
  };
  
  return (
    <WrapperTemplate>
      <MarketOverview {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<MarketOverview />', () => {

  let componentRendered: RenderResult;
  
  beforeEach(() => {
    componentRendered = render(factory());
  });

  afterEach(() => cleanup());

  it('should renders a <MarketOverview>', () => {
    expect(componentRendered).toBeDefined();
  });

  describe('Market Items', () => {
    
    it('should list information about market', () => {
      const items = screen.getByTestId('market-overview-items');
      expect(items.childElementCount).toBeGreaterThanOrEqual(0);
    });

    it('should have flex position', () => {
      const items = screen.getByTestId('market-overview-items');
      expect(items).toHaveStyle('display: flex');
      expect(items).toHaveStyle('flex-direction: column');
    });
  });
});