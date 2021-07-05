export interface GlobalCryptoDataResponse {
  coins_count: number;
  active_markets: number;
  total_mcap: number;
  total_volume: number;
  btc_d: string;
  eth_d: string;
  mcap_change: string;
  volume_change: string;
  avg_change_percent: number;
  volume_ath: number;
  mcap_ath: number;
}

export interface AllCoinsResponse {
  data: Ticker[];
  info: {
    coins_num: number;
    time: number;
  };
}

export interface Ticker {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export interface Market {
  name: string;
  base: string;
  quote: string;
  price: number;
  price_usd: number;
  volume: number;
  volume_usd: number;
  time: number;
}

export enum CryptoCurrencyActionTypes {
  CALL_COINLORE_API = '@@crypto-currency/CALL_COINLORE_API',
  REQUEST_GLOBAL_CRYPTO = '@@crypto-currency/RECEIVE_GLOBAL_CRYPTO',
  FETCH_GLOBAL_CRYPTO = '@@crypto-currency/FETCH_GLOBAL_CRYPTO',
  FETCH_GLOBAL_CRYPTO_ERROR = '@@crypto-currency/FETCH_GLOBAL_CRYPTO_ERROR'
}
