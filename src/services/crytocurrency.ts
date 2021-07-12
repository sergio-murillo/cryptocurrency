import {
  ALL_COINS,
  API_COINLORE_BASE_URL,
  GLOBAL_CRYPTO_DATA, 
  MARKET_FOR_COIN,
  EXCHANGES_FOR_COIN,
  SPECIFIC_COIN
} from 'src/constants/api';

import {
  AllCoinsResponse,
  MarketResponse,
  GlobalCryptoDataResponse, 
  ExchangeResponse
} from '../models';
import { expandUrl } from '../helpers';
import { AllCoinsRequest, Ticker } from '../models/coin';
import { ExchangeForCoinRequest } from 'src/models/exchange';


/**
 * Get global cryptocurrency data from API
 * @export
 * @return {Promise<Array.<GlobalCryptoDataResponse>>} Global cryptocurrency data
 */
export async function fetchGlobalCryptoData(): Promise<GlobalCryptoDataResponse[]> {
  const url = `${API_COINLORE_BASE_URL}${GLOBAL_CRYPTO_DATA}`;
 
  return fetch(url).then(response => response.json());
}


/**
 * Get global cryptocurrency data from API
 * @export
 * @param {AllCoinsRequest} request
 * @return {Promise<AllCoinsResponse>}  Coin list
 */
export async function fetchAllCoins(request: AllCoinsRequest): Promise<AllCoinsResponse> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${ALL_COINS}`, request);

  return fetch(url).then(response => response.json());
}


/**
 * Get market list for coin from API
 * @export
 * @param {number} coinId Coin Id
 * @return {Promise<Array.<MarketResponse>>} Market list for coin
 */
export async function fetchMarketsForCoin(id: number): Promise<MarketResponse[]> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${MARKET_FOR_COIN}`, { id });

  return fetch(url).then(response => response.json());
}


/**
 * Get specific coin for id
 * @export
 * @param {number} id
 * @return {Promise<Array.<Ticker>>}  Coin
 */
export async function fetchSpecificCoin(id: number): Promise<Ticker[]> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${SPECIFIC_COIN}`, { id });

  return fetch(url).then(response => response.json());
}


/**
 * Get exchange for coin
 * @export
 * @param {ExchangeForCoinRequest} request request to get specific coin
 * @return {Promise<ExchangeResponse>}  Exchange for coin
 */
export async function fetchExchangeForCoin(request: ExchangeForCoinRequest): Promise<ExchangeResponse> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${EXCHANGES_FOR_COIN}`, request);

  return fetch(url).then(response => response.json());
}