/**
 * Global cryptocurrency data properties
 */
export interface GlobalCryptoDataResponse {
  /**
   * Total amount of coins
   * @type {number}
   */
  coins_count: number;
  /**
   * Total number of active markets
   * @type {number}
   */
  active_markets: number;
  /**
   * Total capital market
   * @type {number}
   */
  total_mcap: number;
  /**
   * Total volume
   * @type {number}
   */
  total_volume: number;
  /**
   * BTC Dominance
   * @type {string}
   */
  btc_d: string;
  /**
   * ETH Dominance
   * @type {string}
   */
  eth_d: string;
  /**
   * Market capital change percent
   * @type {string}
   */
  mcap_change: string;
  /**
   * Volume change percent
   * @type {string}
   */
  volume_change: string;
  /**
   * Average change percent
   * @type {number}
   */
  avg_change_percent: number;
  /**
   * Volume ATH
   * @type {number}
   */
  volume_ath: number;
  /**
   * Market capital ATH
   * @type {number}
   */
  mcap_ath: number;
}

/**
 * Properties to request all currencies
 */
export interface AllCoinsRequest {
  /**
   * Position of the first coin in the list
   * @type {number}
   */
  start: number;
  /**
   * Amount of coins to list
   * @type {number}
   */
  limit: number;
}

/**
 * Properties to respond to all currencies
 */
export interface AllCoinsResponse {
  /**
   * Coin list
   * @type {Ticker[]}
   */
  data: Ticker[];
  /**
   * Information about the list of currencies
   * @type {Info}
   */
  info: Info;
}

/**
 * Summary about the list of currencies
 */
export interface Info {
  /**
   * Amount of coins in the list
   * @type {number}
   */
  coins_num: number;
  /**
   * Date
   * @type {number}
   */
  time: number;
}

/**
 * Crytocurrency properties
 */
export interface Ticker {
  /**
   * Crytocurrency Id
   * @type {string}
   */
  id: string;
  /**
   * Crytocurrency symbol
   * @type {string}
   */
  symbol: string;
  /**
   * Crytocurrency name
   * @type {string}
   */
  name: string;
  /**
   * Crytocurrency Id name
   * @type {string}
   */
  nameid: string;
  /**
   * Crytocurrency position in the market
   * @type {number}
   */
  rank: number;
  /**
   * Dollar price of the crytocurrency
   * @type {string}
   */
  price_usd: string;
  /**
   * Percentage string change 24 hours ago
   * @type {string}
   */
  percent_change_24h: string;
  /**
   * Percentage of change 1 hours ago
   * @type {string}
   */
  percent_change_1h: string;
  /**
   * Percentage of change 1 hour ago
   * @type {string}
   */
  percent_change_7d: string;
  /**
   * Bitcoin price of the crytocurrency
   * @type {string}
   */
  price_btc: string;
  /**
   * Market capital in USD of the crytocurrency
   * @type {string}
   */
  market_cap_usd: string;
  /**
   * Crytocurrency's Volume 24 hours ago
   * @type {number}
   */
  volume24: number;
  /**
   * Crytocurrency's Volume 24 hours ago
   * @type {number}
   */
  volume24a: number;
  /**
   * Circulating supply of the crytocurrency
   * @type {string}
   */
  csupply: string;
  /**
   * Total supply of the crytocurrency
   * @type {string}
   */
  tsupply: string;
  /**
   * Max supply of the crytocurrency
   * @type {string}
   */
  msupply: string;
}

/**
 * UI coin properties
 */
export interface UiCoin {
  /**
   * It allows you to know if you are loading the list of currencies
   * @type {boolean}
   */
  isLoadingCoins: boolean;
}