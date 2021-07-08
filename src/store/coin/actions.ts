import { createAction } from 'src/helpers/action';
import { CoinActionTypes } from 'src/constants/action-types';
import {
  GlobalCryptoDataResponse,
  AllCoinsRequest,
  AllCoinsResponse,
  Ticker } from 'src/models';

export const fetchGlobalCryptoActions = createAction(
  CoinActionTypes.REQUEST_GLOBAL_CRYPTO,
  CoinActionTypes.FETCH_GLOBAL_CRYPTO,
  CoinActionTypes.FETCH_GLOBAL_CRYPTO_ERROR
)<undefined, GlobalCryptoDataResponse[], any>();

export const fetchAllCoinsActions = createAction(
  CoinActionTypes.REQUEST_ALL_COINS,
  CoinActionTypes.FETCH_ALL_COINS,
  CoinActionTypes.FETCH_ALL_COINS_ERROR
)<AllCoinsRequest, AllCoinsResponse, any>();

export const fetchSpecificCoinActions = createAction(
  CoinActionTypes.REQUEST_SPECIFIC_COIN,
  CoinActionTypes.FETCH_SPECIFIC_COIN,
  CoinActionTypes.FETCH_SPECIFIC_COIN_ERROR
)<number, Ticker[], any>();

export const setIsLoadingCoins = (value: boolean) => (
  { 
    type: CoinActionTypes.IS_LOADING_COINS,
    response: value
  }
);

export const setCoinsFiltered = (coins: Ticker[]) => (
  { 
    type: CoinActionTypes.SET_COINS_FILTERED,
    response: coins
  }
);