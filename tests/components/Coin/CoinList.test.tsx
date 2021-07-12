import CoinList, { Props } from 'src/components/Coin/CoinList';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { CoinMock } from 'src/factory/coins';
import {  CoinActionTypes } from 'src/constants/action-types';
import { WrapperProvider } from '../../utils';

const mockStore = configureStore();

const coinFiltered = CoinMock.build({ name: 'loreim' });
let store: MockStoreEnhanced<any>;

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    coins: {
      data: [...CoinMock.buildList(10), coinFiltered],
      info: {
        coins_num: 10,
        time: 15215212
      }
    },
    coinsFiltered: [],
    ui: {
      isLoadingCoins: false,
    },
    fetchAllCoins: jest.fn(),
    setCoinsFiltered: jest.fn(),
    ...props
  };
  store = mockStore({ coin: defaultProps });

  return (
    <WrapperProvider store={store}>
      <CoinList />
    </WrapperProvider>
  );
};

describe('<CoinList />', () => {

  afterEach(() => cleanup());

  it('should renders a <CoinList>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  describe('Filter', () => {
    it('should exits input for filter', () => {
      render(factory());
      const filterElement = screen.getByTestId('filter-input');
      expect(filterElement).toBeInTheDocument();
    });
  
    it('should get filtered coins', () => {
      render(factory());
      const filterElement = screen.getByTestId('filter-input');
      fireEvent.change(filterElement, { target: { value: 'loreim' } });
      const coinFilteredAction = store.getActions()
        .find(({ type, response }) => type === CoinActionTypes.SET_COINS_FILTERED && response.length > 0);
  
      expect(coinFilteredAction.response.length).toEqual(1);
    });
  
    it('should get empty list of coins', () => {
      render(factory());
      const filterElement = screen.getByTestId('filter-input');
      fireEvent.change(filterElement, { target: { value: 'no-exits' } });
      const coinFilteredAction = store.getActions()
        .find(({ type }) => type === CoinActionTypes.SET_COINS_FILTERED);
  
      expect(coinFilteredAction.response.length).toEqual(0);
    });
  });

  describe('Coins List', () => {
    it('should exists table with coins filtered', () => {
      render(factory({ coinsFiltered: CoinMock.buildList(10) }));
      const tableElement = screen.getByTestId('table-container');
      expect(tableElement).toBeInTheDocument();
    });
  });
});