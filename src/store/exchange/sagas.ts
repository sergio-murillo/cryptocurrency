import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchExchangeForCoin } from 'src/services/crytocurrency';

import {
  fetchExchangeForCoinActions,
} from './actions';
import { ExchangeActionTypes } from 'src/constants/action-types';

function* fetchExchangeForCoinSaga({ id }: ReturnType<any>) {
  try {
    const response = yield call(() => fetchExchangeForCoin(id));
    yield put(fetchExchangeForCoinActions.success(response));
  } catch(e) {
    yield put(fetchExchangeForCoinActions.error(e));
  }
  
}

export function* exchangeForCoinSaga() {
  yield takeLatest(ExchangeActionTypes.REQUEST_EXCHANGE_FOR_COIN, fetchExchangeForCoinSaga);
}