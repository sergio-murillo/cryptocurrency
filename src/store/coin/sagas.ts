import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchGlobalCryptoData, fetchAllCoins, fetchSpecificCoin } from '@services/crytocurrency';

import {
  fetchGlobalCryptoActions,
  fetchAllCoinsActions,
  fetchSpecificCoinActions
} from './actions';
import { CoinActionTypes } from '@constants/action-types';

function* fetchGlobalCryptoDataSaga() {
  try {
    const response = yield call(() => fetchGlobalCryptoData());
    yield put(fetchGlobalCryptoActions.success(response));
  } catch(e) {
    yield put(fetchGlobalCryptoActions.error(e));
  }
  
}

export function* globalCryptoSaga() {
  yield takeLatest(CoinActionTypes.REQUEST_GLOBAL_CRYPTO, fetchGlobalCryptoDataSaga);
}

function* fetchAllCoinsSaga({ start, limit }: ReturnType<any>) {
  try {
    const response = yield call(() => fetchAllCoins({ start, limit }));
    yield put(fetchAllCoinsActions.success(response));
  } catch(e) {
    yield put(fetchAllCoinsActions.error(e));
  }
  
}

export function* allCoinsSaga() {
  yield takeLatest(CoinActionTypes.REQUEST_ALL_COINS, fetchAllCoinsSaga);
}

function* fetchSpecificCoinSaga({ id }: ReturnType<any>) {
  try {
    const response = yield call(() => fetchSpecificCoin(id));
    yield put(fetchSpecificCoinActions.success(response));
  } catch(e) {
    yield put(fetchSpecificCoinActions.error(e));
  }
  
}

export function* specificCoinsSaga() {
  yield takeLatest(CoinActionTypes.REQUEST_SPECIFIC_COIN, fetchSpecificCoinSaga);
}