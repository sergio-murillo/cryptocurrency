import ExchangeList, { Props } from '../../../components/Exchange/ExchangeList';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { ExchangeActionTypes } from '../../../constants/action-types';
import { ExchangeMock } from '../../factory/exchanges';

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
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <ExchangeList coinId={coinId}/>
      </ThemeProvider>
    </Provider>
  
  );
};

describe('<ExchangeList />', () => {

  afterEach(() => cleanup());

  it('should renders a <ExchangeList>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should exists table with coins filtered', () => {
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