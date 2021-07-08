import { Reducer } from 'redux';
import { ExchangeActionTypes } from 'src/constants/action-types';
import {
  AllExchangeResponse,
  ExchangeResponse } from 'src/models';

export interface ExchangeState {
  exchanges: AllExchangeResponse;
  currentExchange: ExchangeResponse;
  errors: any;
}

const initialState: ExchangeState = {
  exchanges: {} as AllExchangeResponse,
  currentExchange: {} as ExchangeResponse,
  errors: {} as any
};

const exchangeReducer: Reducer<ExchangeState> = (state = initialState, action) => {
  switch (action.type) {
    case ExchangeActionTypes.FETCH_ALL_EXCHANGES: {
      const { response } = action;
      return {
        ...state,
        exchanges: response
      };
    }
    case ExchangeActionTypes.FETCH_ALL_EXCHANGES_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          exchanges: error,
        }
      };
    }
    case ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN: {
      const { response } = action;
      return {
        ...state,
        currentExchange: response
      };
    }
    case ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          currentExchange: error,
        }
      };
    }
    default:
      return state;
  }
};

export default exchangeReducer;