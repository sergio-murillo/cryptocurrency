import { API_COINLORE_BASE_URL, GLOBAL_CRYPTO_DATA } from '../constants/api';
import { AllCoinsResponse, Market, Ticker } from '../types/types';

export async function fetchGlobalCryptoData(): Promise<any> {
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

export async function fetchMarketsForCoin(id: number): Promise<Market[]> {
  const url = `${API_COINLORE_BASE_URL}/coin/markets/?id=${id}`;

  return fetch(url).then(response => response.json());
}