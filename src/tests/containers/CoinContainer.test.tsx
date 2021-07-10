import CoinContainer, { Props } from '../../containers/CoinContainer';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../themes/default';
import { Provider } from 'react-redux';
import { GlobalDataMock } from '../factory/coins';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { CoinActionTypes } from '../../constants/action-types';

jest.mock('../../components/Coin/CoinList', () => () => 'CoinList');
jest.mock('../../components/Market/MarketOverview', () => () => 'MarketOverview');

const mockStore = configureStore();
let store: MockStoreEnhanced<any>;

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    globalCryptoData: GlobalDataMock.buildList(10),
    fetchGlobalCrypto: jest.fn(),
    ...props
  };
  store = mockStore({ coin: defaultProps });

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CoinContainer/>
      </ThemeProvider>
    </Provider>
  
  );
};

describe('<CoinContainer />', () => {

  afterEach(() => cleanup());

  it('should renders a <CoinContainer>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should request global data', () => {
    render(factory());
    const globalDataAction = store.getActions()
      .find(({ type }) => type === CoinActionTypes.REQUEST_GLOBAL_CRYPTO);
    
    expect(globalDataAction).toBeDefined();
  });
});