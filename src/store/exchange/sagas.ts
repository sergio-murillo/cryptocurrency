import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchExchangeForCoin } from 'src/services/crytocurrency';

import {
  fetchExchangeForCoinActions, setIsLoadingExchanges,
} from './actions';
import { ExchangeActionTypes } from 'src/constants/action-types';

function* fetchExchangeForCoinSaga({ request }: any) {
  try {
    const response = yield call(() => fetchExchangeForCoin(request));
    yield all([
      put(setIsLoadingExchanges(false)),
      put(fetchExchangeForCoinActions.success(response)),
    ]);
  } catch(e) {
    yield all([
      put(fetchExchangeForCoinActions.error(e)),
      put(setIsLoadingExchanges(false)),
    ]);
  }
}

export function* exchangeForCoinSaga() {
  yield takeLatest(ExchangeActionTypes.REQUEST_EXCHANGE_FOR_COIN, fetchExchangeForCoinSaga);
}