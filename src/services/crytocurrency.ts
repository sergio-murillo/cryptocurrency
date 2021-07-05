import { ALL_EXCHANGES, API_COINLORE_BASE_URL, GLOBAL_CRYPTO_DATA } from '../constants/api';
import { 
  AllCoinsResponse,
  Ticker,
  MarketResponse,
  GlobalCryptoDataResponse } from '../models';

export async function fetchGlobalCryptoData(): Promise<GlobalCryptoDataResponse[]> {
  const url = `${API_COINLORE_BASE_URL}${GLOBAL_CRYPTO_DATA}`;
 
  return fetch(url).then(response => response.json());
}

export async function fetchAllCoins(start: number, limit: number): Promise<AllCoinsResponse> {
  const url = `${API_COINLORE_BASE_URL}/tickers/?start=${start}&limit=${limit}`;

  return fetch(url).then(response => response.json());
}

export async function fetchSpecificCoin(id: number): Promise<Ticker[]> {
  const url = `${API_COINLORE_BASE_URL}/ticker/?id=${id}`;

  return fetch(url).then(response => response.json());
}

export async function fetchMarketsForCoin(id: number): Promise<MarketResponse[]> {
  const url = `${API_COINLORE_BASE_URL}/coin/markets/?id=${id}`;

  return fetch(url).then(response => response.json());
}

export async function fetchAllExchanges(): Promise<MarketResponse[]> {
  const url = `${API_COINLORE_BASE_URL}${ALL_EXCHANGES}`;

  return fetch(url).then(response => response.json());
}