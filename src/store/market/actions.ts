import { createAction } from 'src/helpers/action';
import { MarketActionTypes } from 'src/constants/action-types';
import { MarketResponse } from '../../models';

export const fetchMarketForCoinActions = createAction(
  MarketActionTypes.REQUEST_MARKET_FOR_COIN,
  MarketActionTypes.FETCH_MARKET_FOR_COIN,
  MarketActionTypes.FETCH_MARKET_FOR_COIN_ERROR
)<number, MarketResponse[], any>();