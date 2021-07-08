import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchGlobalCryptoData, fetchAllCoins } from 'src/services/crytocurrency';

import {
  fetchGlobalCryptoActions,
  fetchAllCoinsActions,
  setIsLoadingCoins,
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
