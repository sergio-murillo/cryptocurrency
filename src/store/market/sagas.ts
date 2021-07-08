import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMarketsForCoin } from 'src/services/crytocurrency';

import {fetchMarketForCoinActions } from './actions';
import { MarketActionTypes } from 'src/constants/action-types';

function* fetchMarketForCoinSaga({ request }: any) {
  try {
    const response = yield call(() => fetchMarketsForCoin(request));
    yield put(fetchMarketForCoinActions.success(response));
  } catch(e) {
    yield put(fetchMarketForCoinActions.error(e));
  }
}

export function* marketForCoinSaga() {
  yield takeLatest(MarketActionTypes.REQUEST_MARKET_FOR_COIN, fetchMarketForCoinSaga);
}
