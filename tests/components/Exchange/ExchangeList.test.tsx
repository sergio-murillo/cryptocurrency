import ExchangeList, { Props } from 'src/components/Exchange/ExchangeList';
import { render, cleanup, screen } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { ExchangeActionTypes } from 'src/constants/action-types';
import { ExchangeMock } from 'src/factory/exchanges';
import { WrapperProvider } from '../../utils';

const mockStore = configureStore();
let store: MockStoreEnhanced<any>;

const factory = (props: Partial<Props> = {}) => {
  const coinId = 1;
  const defaultProps: Props = {
    coinId,
    currentExchange: {
      data: ExchangeMock.buildList(5),
      total_counts: 5
    },
    ui: {
      isLoadingExchanges: false,
    },
    fetchExchangeForCoin: jest.fn(),
    ...props
  };
  store = mockStore({ exchange: defaultProps });

  return (
    <WrapperProvider store={store}>
      <ExchangeList coinId={coinId}/>
    </WrapperProvider>
  
  );
};

describe('<ExchangeList />', () => {

  afterEach(() => cleanup());

  it('should renders a <ExchangeList>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should exists list of filtered coins', () => {
    render(factory());
    const tableElement = screen.getByTestId('table-container');
    expect(tableElement).toBeInTheDocument();
  });

  it('should request exchanges for coin', () => {
    render(factory());
    const exchangeFilteredAction = store.getActions()
      .find(({ type, request }) => type === ExchangeActionTypes.REQUEST_EXCHANGE_FOR_COIN && request);

    expect(exchangeFilteredAction.request).toBeDefined();
  });
});