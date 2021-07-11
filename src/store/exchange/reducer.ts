import { Reducer } from 'redux';
import { ExchangeActionTypes } from 'src/constants/action-types';
import {
  AllExchangeResponse,
  ExchangeResponse } from 'src/models';
import { ExchangePair, UiExchange } from 'src/models/exchange';

export interface ExchangeState {
  exchanges: AllExchangeResponse;
  currentExchange: ExchangeResponse;
  exchangesFiltered: ExchangePair[];
  ui: UiExchange;
  errors: any;
}

export const initialState: ExchangeState = {
  exchanges: {} as AllExchangeResponse,
  currentExchange: {} as ExchangeResponse,
  exchangesFiltered: [],
  ui: {
    isLoadingExchanges: false
  },
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
    case ExchangeActionTypes.SET_EXCHANGES_FILTERED: {
      const { response } = action;
      return {
        ...state,
        exchangesFiltered: response
      };
    }
    case ExchangeActionTypes.IS_LOADING_EXCHANGES: {
      const { response } = action;
      return {
        ...state,
        ui: {
          isLoadingExchanges: response
        }
      };
    }
    default:
      return state;
  }
};

export default exchangeReducer;