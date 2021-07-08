import { Reducer } from 'redux';
import { CoinActionTypes } from 'src/constants/action-types';
import {
  AllCoinsResponse,
  GlobalCryptoDataResponse,
  Ticker, UiCoin } from 'src/models';

export interface CoinState {
  globalCryptoData: GlobalCryptoDataResponse[];
  coins: AllCoinsResponse;
  coinsFiltered: Ticker[];
  currentCoin: Ticker[];
  ui: UiCoin;
  errors: any;
}

const initialState: CoinState = {
  globalCryptoData: [],
  coins: {} as AllCoinsResponse,
  coinsFiltered: [],
  currentCoin: [],
  ui: {
    isLoadingCoins: false
  },
  errors: {} as any
};

const coinReducer: Reducer<CoinState> = (state = initialState, action) => {
  switch (action.type) {
    case CoinActionTypes.FETCH_GLOBAL_CRYPTO: {
      const { response } = action;
      return {
        ...state,
        globalCryptoData: response
      };
    }
    case CoinActionTypes.FETCH_GLOBAL_CRYPTO_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          globalCryptoData: error,
        }
      };
    }
    case CoinActionTypes.FETCH_ALL_COINS: {
      const { response } = action;
      return {
        ...state,
        coins: response
      };
    }
    case CoinActionTypes.FETCH_ALL_COINS_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          coins: error,
        }
      };
    }
    case CoinActionTypes.FETCH_SPECIFIC_COIN: {
      const { response } = action;
      return {
        ...state,
        currentCoin: response
      };
    }
    case CoinActionTypes.FETCH_SPECIFIC_COIN_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          currentCoin: error,
        }
      };
    }
    case CoinActionTypes.IS_LOADING_COINS: {
      const { response } = action;
      return {
        ...state,
        ui: {
          isLoadingCoins: response
        }
      };
    }
    case CoinActionTypes.SET_COINS_FILTERED: {
      const { response } = action;
      return {
        ...state,
        coinsFiltered: response
      };
    }
    default:
      return state;
  }
};

export default coinReducer;