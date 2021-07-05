import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAllExchanges, fetchExchangeForCoin } from '@services/crytocurrency';

import {
  fetchAllExchangesActions,
  fetchExchangeForCoinActions,
} from './actions';
import { ExchangeActionTypes } from '@constants/action-types';

function* fetchAllExchangesSaga() {
  try {
    const response = yield call(() => fetchAllExchanges());
    yield put(fetchAllExchangesActions.success(response));
  } catch(e) {
    yield put(fetchAllExchangesActions.error(e));
  }
  
}

export function* allExchangeSaga() {
  yield takeLatest(ExchangeActionTypes.REQUEST_ALL_EXCHANGES, fetchAllExchangesSaga);
}

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