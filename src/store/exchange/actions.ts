import { createAction } from 'src/helpers/action';
import { ExchangeActionTypes } from 'src/constants/action-types';
import { ExchangeResponse, AllExchangeResponse } from 'src/models';
import { ExchangeForCoinRequest, ExchangePair } from 'src/models/exchange';

export const fetchAllExchangesActions = createAction(
  ExchangeActionTypes.REQUEST_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES_ERROR
)<undefined, AllExchangeResponse, any>();

export const fetchExchangeForCoinActions = createAction(
  ExchangeActionTypes.REQUEST_EXCHANGE_FOR_COIN,
  ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN,
  ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN_ERROR
)<ExchangeForCoinRequest, ExchangeResponse, any>();

export const setIsLoadingExchanges = (value: boolean) => (
  { 
    type: ExchangeActionTypes.IS_LOADING_EXCHANGES,
    response: value
  }
);

export const setExchangesFiltered = (exchanges: ExchangePair[]) => (
  { 
    type: ExchangeActionTypes.SET_EXCHANGES_FILTERED,
    response: exchanges
  }
);