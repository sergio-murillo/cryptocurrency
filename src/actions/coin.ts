import { createAction } from '../helpers/action';
import { CryptoCurrencyActionTypes } from '../types/types';

export const fetchGlobalCryptoActions = createAction(
  CryptoCurrencyActionTypes.REQUEST_GLOBAL_CRYPTO,
  CryptoCurrencyActionTypes.FETCH_GLOBAL_CRYPTO,
  CryptoCurrencyActionTypes.FETCH_GLOBAL_CRYPTO_ERROR
)<undefined, any[], any>();
