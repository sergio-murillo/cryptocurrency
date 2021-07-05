import { combineReducers } from 'redux';
import coinReducer, { CoinState } from '@store/coin/reducer';
import exchangeReducer, { ExchangeState } from '@store/exchange/reducer';
import marketReducer, { MarketState } from '@store/market/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { RouterState } from 'connected-react-router';

export interface ApplicationState {
  coin: CoinState;
  exchange: ExchangeState;
  market: MarketState;
  router: RouterState;
}

const reducers = (history: History) => combineReducers({
  coin: coinReducer,
  exchange: exchangeReducer,
  market: marketReducer,
  router: connectRouter(history)
});

export default reducers;
