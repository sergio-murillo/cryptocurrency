import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchGlobalCryptoData, fetchAllCoins, fetchSpecificCoin } from 'src/services/crytocurrency';

import {
  fetchGlobalCryptoActions,
  fetchAllCoinsActions,
  setIsLoadingCoins,
  setCoinsFiltered,
  fetchSpecificCoinActions,
} from './actions';
import { CoinActionTypes } from 'src/constants/action-types';

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

function* fetchAllCoinsSaga({ request: { start, limit }}: any) {
  try {
    const response = yield call(() => fetchAllCoins({ start, limit }));
    yield all([
      put(setIsLoadingCoins(false)),
      put(fetchAllCoinsActions.success(response)),
      put(setCoinsFiltered(response.data)),
    ]);
  } catch(e) {
    yield all([
      put(fetchAllCoinsActions.error(e)),
      put(setIsLoadingCoins(false)),
    ]);
  }
}

export function* allCoinsSaga() {
  yield takeLatest(CoinActionTypes.REQUEST_ALL_COINS, fetchAllCoinsSaga);
}

function* fetchSpecificCoinSaga({ request }: any) {
  try {
    const response = yield call(() => fetchSpecificCoin(request));
    yield put(fetchSpecificCoinActions.success(response));
  } catch(e) {
    yield put(fetchSpecificCoinActions.error(e));
  }
}

export function* specificCoinSaga() {
  yield takeLatest(CoinActionTypes.REQUEST_SPECIFIC_COIN, fetchSpecificCoinSaga);
}
