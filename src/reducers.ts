import { combineReducers } from 'redux';
import coinReducer, { CoinState } from 'src/store/coin/reducer';
import exchangeReducer, { ExchangeState } from 'src/store/exchange/reducer';
import marketReducer, { MarketState } from 'src/store/market/reducer';
import uiReducer, { UIState } from 'src/store/ui/reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

export interface ApplicationState {
  coin: CoinState;
  exchange: ExchangeState;
  market: MarketState;
  ui: UIState;
  router?: RouterState;
}

const reducers = (history: History) => combineReducers({
  coin: coinReducer,
  exchange: exchangeReducer,
  market: marketReducer,
  ui: uiReducer,
  router: connectRouter(history)
});

export default reducers;
