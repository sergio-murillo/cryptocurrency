import { takeEvery, call, put } from 'redux-saga/effects';
import { CryptoCurrencyActionTypes } from '../models/coin';
import { fetchGlobalCryptoData } from '../services';

import {
  fetchGlobalCryptoActions,
} from '../actions';

function* requestGlobalCrypto() {
  try {
    const response = yield call(() => fetchGlobalCryptoData());
    yield put(fetchGlobalCryptoActions.success(response));
  } catch(e) {
    yield put(fetchGlobalCryptoActions.error(e));
  }
  
}

export function* fetchGlobalCryptoSaga() {
  yield takeEvery(CryptoCurrencyActionTypes.REQUEST_GLOBAL_CRYPTO, requestGlobalCrypto);
}