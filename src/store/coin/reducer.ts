import { Reducer } from 'redux';
import { CoinActionTypes } from '@constants/action-types';
import {
  AllCoinsResponse,
  GlobalCryptoDataResponse,
  Ticker } from '../../models';

export interface CoinState {
  globalCryptoData: GlobalCryptoDataResponse[];
  coins: AllCoinsResponse;
  currentCoin: Ticker[];
  errors: any;
}

const initialState: CoinState = {
  globalCryptoData: [],
  coins: {} as AllCoinsResponse,
  currentCoin: [],
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
    default:
      return state;
  }
};

export default coinReducer;