import { 
  AllCoinsResponse,
  CryptoCurrencyActionTypes,
  GlobalCryptoDataResponse,
  Ticker } from '../models/coin';

export interface CryptoCurrencyState {
  globalCryptoData: GlobalCryptoDataResponse[];
  coins: AllCoinsResponse;
  currentCoin: Ticker[];
  errors: any;
}

const initialState: CryptoCurrencyState = {
  globalCryptoData: [],
  coins: {} as AllCoinsResponse,
  currentCoin: [],
  errors: {} as any
};

const cryptocurrency = (state = initialState, action: any) => {
  switch (action.type) {
    case CryptoCurrencyActionTypes.FETCH_GLOBAL_CRYPTO: {
      const { response } = action;
      return {
        ...state,
        global_crypto: response
      };
    }
    case CryptoCurrencyActionTypes.FETCH_GLOBAL_CRYPTO_ERROR: {
      const { error } = action;
      return {
        ...state,
        global_crypto: [],
        errors: {
          global_crypto: error,
        }
      };
    }
    default:
      return state;
  }
};

export default cryptocurrency;