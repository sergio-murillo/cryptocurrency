/**
 * Table header properties
 */
export interface Header {
  /**
   * Header title
   * @type {string}
   */
  title: string;
  /**
   * Column mix
   * @type {number}
   */
  colspan?: number;
}

/**
 * Table properties
 */
export interface Table {
  /**
   * Header list
   * @type {Header[]}
   */
  headers: Header[];
  /**
   * Item list
   * @type {any[]}
   */
  items: any[];
  /**
   * Is loading table
   * @type {boolean}
   */
  isLoading: boolean;
}
