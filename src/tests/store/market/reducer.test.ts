import reducer, { initialState } from '../../../store/market/reducer';
import {
  fetchMarketForCoinActions,
  setIsLoadingMarket } from '../../../store/market/actions';
import { MarketMock } from '../../factory/markets';

describe('Market Reducer', () => {

  it('should set market for coin success', () => {
    const market = MarketMock.buildList(5);
    const action = fetchMarketForCoinActions.success(market);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      market,
    });
  });

  it('should set market for coin error', () => {
    const error = { error: 'Bad request' };
    const action = fetchMarketForCoinActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        market: error,
      },
    });
  });

  it('should set loading data', () => {
    const action = setIsLoadingMarket(true);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      ui: {
        isLoadingMarket: true
      },
    });
  });
});