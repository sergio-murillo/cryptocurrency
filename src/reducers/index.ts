import { combineReducers } from 'redux';
import cryptocurrency, { CryptoCurrencyState } from './coin';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { RouterState } from 'connected-react-router';

export interface ApplicationState {
  cryptocurrency: CryptoCurrencyState;
  router: RouterState;
}

const reducers = (history: History) => combineReducers({
  cryptocurrency: cryptocurrency,
  router: connectRouter(history)
});

export default reducers;
