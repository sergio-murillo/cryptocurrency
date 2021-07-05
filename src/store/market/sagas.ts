import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMarketsForCoin } from '@services/crytocurrency';

import {fetchMarketForCoinActions } from './actions';
import { ExchangeActionTypes } from '@constants/action-types';

function* fetchMarketForCoinSaga({ id }: ReturnType<any>) {
  try {
    const response = yield call(() => fetchMarketsForCoin(id));
    yield put(fetchMarketForCoinActions.success(response));
  } catch(e) {
    yield put(fetchMarketForCoinActions.error(e));
  }
  
}

export function* marketForCoinSaga() {
  yield takeLatest(ExchangeActionTypes.REQUEST_ALL_EXCHANGES, fetchMarketForCoinSaga);
}
