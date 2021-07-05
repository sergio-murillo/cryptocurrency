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
  '0': {
    name: string;
    date_live: string;
    url: string;
  };
  pairs: Array<{
    base: string;
    quote: string;
    volume: number;
    price: number;
    price_usd: number;
    time: number;
  }>;
}