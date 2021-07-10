import DetailContainer, { Props } from '../../containers/DetailContainer';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../themes/default';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { CoinActionTypes, MarketActionTypes } from '../../constants/action-types';

jest.mock('../../components/Exchange/ExchangeList', () => () => 'ExchangeList');
jest.mock('../../components/Coin/CoinList', () => () => 'CoinList');

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
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <DetailContainer/>
      </ThemeProvider>
    </Provider>
  
  );
};

describe('<DetailContainer />', () => {

  afterEach(() => cleanup());

  it('should renders a <DetailContainer>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should request markets and specific coin data', () => {
    render(factory());
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