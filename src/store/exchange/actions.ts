import { createAction } from '@helpers/action';
import { ExchangeActionTypes } from '@constants/action-types';
import { ExchangeResponse, AllExchangeResponse } from '../../models';

export const fetchAllExchangesActions = createAction(
  ExchangeActionTypes.REQUEST_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES_ERROR
)<undefined, AllExchangeResponse, any>();

export const fetchExchangeForCoinActions = createAction(
  ExchangeActionTypes.REQUEST_EXCHANGE_FOR_COIN,
  ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN,
  ExchangeActionTypes.FETCH_EXCHANGE_FOR_COIN_ERROR
)<number, ExchangeResponse, any>();