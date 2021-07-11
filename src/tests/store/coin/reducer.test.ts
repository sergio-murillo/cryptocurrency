import reducer, { initialState } from '../../../store/coin/reducer';
import {
  fetchGlobalCryptoActions,
  fetchAllCoinsActions,
  fetchSpecificCoinActions,
  setIsLoadingCoins,
  setCoinsFiltered } from '../../../store/coin/actions';
import { CoinMock, GlobalDataMock } from '../../factory/coins';
import { AllCoinsResponse } from '../../../models';

describe('Coin Reducer', () => {

  it('should set global crypto data success', () => {
    const globalCryptoData = GlobalDataMock.buildList(1);
    const action = fetchGlobalCryptoActions.success(globalCryptoData);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      globalCryptoData,
    });
  });

  it('should set global crypto error', () => {
    const error = { error: 'Bad request' };
    const action = fetchGlobalCryptoActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        globalCryptoData: error,
      },
    });
  });

  it('should set all coins data success', () => {
    const coins: AllCoinsResponse = {
      data: CoinMock.buildList(1),
      info: {
        coins_num: 5,
        time: 200
      }
    };
    const action = fetchAllCoinsActions.success(coins);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      coins,
    });
  });

  it('should set all coins error', () => {
    const error = { error: 'Bad request' };
    const action = fetchAllCoinsActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        coins: error,
      },
    });
  });

  it('should set specific coin data success', () => {
    const currentCoin = CoinMock.buildList(1);
    const action = fetchSpecificCoinActions.success(currentCoin);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      currentCoin,
    });
  });

  it('should set specific coin error', () => {
    const error = { error: 'Bad request' };
    const action = fetchSpecificCoinActions.error(error);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      errors: {
        currentCoin: error,
      },
    });
  });

  it('should set loading data', () => {
    const action = setIsLoadingCoins(true);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      ui: {
        isLoadingCoins: true
      },
    });
  });

  it('should set filtered coins data', () => {
    const coinsFiltered = CoinMock.buildList(5);
    const action = setCoinsFiltered(coinsFiltered);
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      coinsFiltered,
    });
  });
});