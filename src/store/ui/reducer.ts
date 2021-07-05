import { Reducer } from 'redux';
import { MarketActionTypes } from '@constants/action-types';

export interface UIState {
  isLoading: boolean;
}

const initialState: UIState = {
  isLoading: false
};

const uiReducer: Reducer<UIState> = (state = initialState, action) => {
  switch (action.type) {
    case MarketActionTypes.FETCH_MARKET_FOR_COIN: {
      const { response } = action;
      return {
        ...state,
        isLoading: response
      };
    }
    default:
      return state;
  }
};

export default uiReducer;