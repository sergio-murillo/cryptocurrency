import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';
import { createBrowserHistory } from 'history';
import { ApplicationState } from './reducers';

const initialState: ApplicationState = {
  coin: {
    globalCryptoData: [],
    coins: {
      data: [],
      info: {
        coins_num: 0,
        time: 0
      }
    },
    coinsFiltered: [],
    currentCoin: [],
    ui: {
      isLoadingCoins: false,
    },
    errors: {} as any
  },
  exchange: {
    exchanges: {} as any,
    currentExchange: {
      data: [],
      total_counts: 0
    },
    exchangesFiltered: [],
    ui: {
      isLoadingExchanges: false,
    },
    errors: {} as any
  },
  market: {
    market: [],
    ui: {
      isLoadingMarket: false,
    },
    errors: {} as any
  },
  ui: {
    isLoading: false,
  }
};

const history = createBrowserHistory();

export const store = configureStore(initialState, history);

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
