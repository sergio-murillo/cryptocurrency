import {
  ALL_COINS,
  ALL_EXCHANGES,
  API_COINLORE_BASE_URL,
  EXCHANGE_BY_ID,
  GLOBAL_CRYPTO_DATA, 
  MARKET_FOR_COIN,
  SPECIFIC_COIN} from '@constants/api';

import { 
  AllCoinsResponse,
  Ticker,
  MarketResponse,
  GlobalCryptoDataResponse, 
  AllExchangeResponse,
  ExchangeResponse} from '../models';
import { expandUrl } from '../helpers';
import { AllCoinsRequest } from '../models/coin';

export async function fetchGlobalCryptoData(): Promise<GlobalCryptoDataResponse[]> {
  const url = `${API_COINLORE_BASE_URL}${GLOBAL_CRYPTO_DATA}`;
 
  return fetch(url).then(response => response.json());
}

export async function fetchAllCoins(request: AllCoinsRequest): Promise<AllCoinsResponse> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${ALL_COINS}`, { start: request.start, limit: request.limit });

  return fetch(url).then(response => response.json());
}

export async function fetchSpecificCoin(id: number): Promise<Ticker[]> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${SPECIFIC_COIN}`, { id });

  return fetch(url).then(response => response.json());
}

export async function fetchMarketsForCoin(id: number): Promise<MarketResponse[]> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${MARKET_FOR_COIN}`, { id });

  return fetch(url).then(response => response.json());
}

export async function fetchAllExchanges(): Promise<AllExchangeResponse> {
  const url = `${API_COINLORE_BASE_URL}${ALL_EXCHANGES}`;

  return fetch(url).then(response => response.json());
}

export async function fetchExchangeForCoin(id: number): Promise<ExchangeResponse> {
  const url = expandUrl(`${API_COINLORE_BASE_URL}${EXCHANGE_BY_ID}`, { id });

  return fetch(url).then(response => response.json());
}