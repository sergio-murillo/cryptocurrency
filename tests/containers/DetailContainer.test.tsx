import DetailContainer, { Props } from 'src/containers/DetailContainer';
import { render, cleanup, RenderResult } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { CoinActionTypes, MarketActionTypes } from 'src/constants/action-types';
import { WrapperProvider } from '../utils';

jest.mock('src/components/Exchange/ExchangeList', () => () => 'ExchangeList');
jest.mock('src/components/Coin/CoinList', () => () => 'CoinList');

const mockStore = configureStore();
let store: MockStoreEnhanced<any>;

const factory = (props: Partial<Props> = {}) => {
  const initilState = {
    coin: {
      currentCoin: [],
    },
    market: {
      market: []
    },
    router: {
      location: {
        pathname: '/crypto-currency/2'
      }
    },
    fetchMarkets: jest.fn(),
    fetchSpecificCoin: jest.fn(),
    ...props
  };

  store = mockStore(initilState);

  return (
    <WrapperProvider store={store}>
      <DetailContainer/>
    </WrapperProvider>
  
  );
};

describe('<DetailContainer />', () => {

  let componentRendered: RenderResult;
  
  beforeEach(() => {
    componentRendered = render(factory());
  });

  afterEach(() => cleanup());

  it('should renders a <DetailContainer>', () => {
    expect(componentRendered).toBeDefined();
  });

  it('should request markets and specific coin data', () => {
    const marketsAction = store.getActions()
      .find(({ type }) => type === MarketActionTypes.REQUEST_MARKET_FOR_COIN);
    const specificCoinAction = store.getActions()
      .find(({ type }) => type === CoinActionTypes.REQUEST_SPECIFIC_COIN);
    
    expect(marketsAction).toBeDefined();
    expect(specificCoinAction).toBeDefined();
    expect(marketsAction.request).toBe(2);
    expect(specificCoinAction.request).toBe(2);
  });
});