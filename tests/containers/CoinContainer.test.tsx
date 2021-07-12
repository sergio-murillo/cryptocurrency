import CoinContainer, { Props } from 'src/containers/CoinContainer';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { GlobalDataMock } from 'src/factory/coins';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { CoinActionTypes } from 'src/constants/action-types';
import { WrapperProvider } from '../utils';

jest.mock('src/components/Coin/CoinList', () => () => 'CoinList');
jest.mock('src/components/Market/MarketOverview', () => () => 'MarketOverview');

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
    <WrapperProvider store={store}>
      <CoinContainer/>
    </WrapperProvider>
  
  );
};

describe('<CoinContainer />', () => {

  let componentRendered: RenderResult;
  
  beforeEach(() => {
    componentRendered = render(factory());
  });
  
  afterEach(() => cleanup());

  it('should renders a <CoinContainer>', () => {
    expect(componentRendered).toBeDefined();
  });

  it('should request global crypto data', () => {
    const globalDataAction = store.getActions()
      .find(({ type }) => type === CoinActionTypes.REQUEST_GLOBAL_CRYPTO);
    
    expect(globalDataAction).toBeDefined();
  });
});