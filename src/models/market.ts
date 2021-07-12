/**
 * Properties to respond to market
 * @export
 * @interface MarketResponse
 */
export interface MarketResponse {
  /**
   * Market Id
   * @type {string}
   */
  name: string;
  /**
   * Current currency
   * @type {string}
   */
  base: string;
  /**
   * Volume exchange
   * @type {string}
   */
  quote: string;
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
   * Volume exchange
   * @type {number}
   */
  volume: number;
  /**
   * Volume in USD
   * @type {number}
   */
  volume_usd: number;
  /**
   * Date
   * @type {number}
   */
  time: number;
}

/**
 * UI market properties
 */
export interface UiMarket {
  /**
   * It allows you to know if you are loading the list of markets
   * @type {boolean}
   */
  isLoadingMarket: boolean;
}