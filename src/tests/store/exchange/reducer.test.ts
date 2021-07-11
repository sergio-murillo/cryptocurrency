import reducer, { initialState } from '../../../store/exchange/reducer';
import {
  fetchAllExchangesActions,
  fetchExchangeForCoinActions,
  setIsLoadingExchanges,
  setExchangesFiltered } from '../../../store/exchange/actions';
import { AllExchangeMock, ExchangeMock } from '../../factory/exchanges';
import { ExchangeResponse } from '../../../models';

describe('Exchange Reducer', () => {

  it('should set all exchanges success', () => {
    const exchanges = AllExchangeMock.build();
    const action = fetchAllExchangesActions.success(exchanges);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      exchanges,
    });
  });

  it('should set all exchanges error', () => {
    const error = { error: 'Bad request' };
    const action = fetchAllExchangesActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        exchanges: error,
      },
    });
  });

  it('should set exchange for coin data success', () => {
    const currentExchange: ExchangeResponse = {
      data: ExchangeMock.buildList(2),
      total_counts: 1
    };
    const action = fetchExchangeForCoinActions.success(currentExchange);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      currentExchange,
    });
  });

  it('should set exchange for coin error', () => {
    const error = { error: 'Bad request' };
    const action = fetchExchangeForCoinActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        currentExchange: error,
      },
    });
  });

  it('should set filtered exchange data success', () => {
    const exchangesFiltered = ExchangeMock.buildList(5);
    const action = setExchangesFiltered(exchangesFiltered);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      exchangesFiltered,
    });
  });

  it('should set loading data', () => {
    const action = setIsLoadingExchanges(true);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      ui: {
        isLoadingExchanges: true
      },
    });
  });
});