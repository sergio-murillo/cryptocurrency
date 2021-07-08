export interface AllExchangeResponse {
  [id: string]: {
    id: string;
    name: string;
    name_id: string;
    url: string;
    country: string;
    date_live: string;
    date_added: string;
    usdt: string;
    fiat: string;
    auto: string;
    volume_usd: number;
  }
}

export interface ExchangeResponse {
  data: ExchangePair[];
  total_counts: number;
}

export interface ExchangeInfo {
  name: string;
  date_live: string;
  url: string;
}

export interface ExchangePair {
  base: string;
  quote: string;
  volume: number;
  price: number;
  price_usd: number;
  time: number;
}

export interface ExchangeForCoinRequest {
  id: number;
  start: number;
  limit: number;
}

export interface UiExchange {
  isLoadingExchanges: boolean;
}