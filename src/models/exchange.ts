/**
 * Properties to respond to all exchanges
 */
export interface AllExchangeResponse {
  
  [id: string]: {
    /**
     * Exchange id
     * @type {string}
     */
    id: string;
    /**
     * Exchange name
     * @type {string}
     */
    name: string;
    /**
     *
     * Exchange name id
     * @type {string}
     */
    name_id: string;
    /**
     * Exchange url
     * @type {string}
     */
    url: string;
    /**
     * Exchange country
     * @type {string}
     */
    country: string;
    /**
     * Date live from query
     * @type {string}
     */
    date_live: string;
    /**
     * Date added from query
     * @type {string}
     */
    date_added: string;
    /**
     * Price in USDT
     * @type {string}
     */
    usdt: string;
    /**
     * Fiat
     * @type {string}
     */
    fiat: string;
    /**
     * Auto
     * @type {string}
     */
    auto: string;
    /**
     * Volume in USD
     * @type {number}
     */
    volume_usd: number;
  }
}

/**
 * Properties to respond to exchange per coin
 */
export interface ExchangeResponse {
  /**
   * Exchange pair list
   * @type {ExchangePair[]}
   */
  data: ExchangePair[];
  /**
   * Total counts exchanges
   * @type {number}
   */
  total_counts: number;
}


/**
 * Exchange pair of exchange list
 */
export interface ExchangePair {
  /**
   * Current currency
   * @type {string}
   */
  base: string;
  /**
   * Currency to convert
   * @type {string}
   */
  quote: string;
  /**
   * Volume exchange
   * @type {number}
   */
  volume: number;
  /**
   * Price currency to quote
   * @type {number}
   */
  price: number;
  /**
   * Price currency in USD
   * @type {number}
   */
  price_usd: number;
  /**
   * Time
   * @type {number}
   */
  time: number;
}

/**
 * Properties to request exchange for coin
 */
export interface ExchangeForCoinRequest {
  /**
   * Currency id
   * @type {number}
   */
  id: number;
  /**
   * Position of the first exchange in the list
   * @type {number}
   */
  start: number;
  /**
   * Amount of exchange to list
   * @type {number}
   */
  limit: number;
}

/**
 * UI exchange properties
 */
export interface UiExchange {
  /**
   * It allows you to know if you are loading the list of exchanges
   * @type {boolean}
   */
  isLoadingExchanges: boolean;
}