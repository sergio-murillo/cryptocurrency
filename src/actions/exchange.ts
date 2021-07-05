import { createAction } from '../helpers/action';
import { ExchangeActionTypes } from '../constants/action-types';
import { ExchangeResponse, AllExchangeResponse } from '../models';

export const fetchAllExchangesActions = createAction(
  ExchangeActionTypes.REQUEST_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES,
  ExchangeActionTypes.FETCH_ALL_EXCHANGES_ERROR
)<undefined, MarketResponse[], any>();