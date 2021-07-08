import { Reducer } from 'redux';
import { MarketActionTypes } from 'src/constants/action-types';
import { MarketResponse } from 'src/models';

export interface MarketState {
  market: MarketResponse[];
  errors: any;
}

const initialState: MarketState = {
  market: [],
  errors: {} as any
};

const marketReducer: Reducer<MarketState> = (state = initialState, action) => {
  switch (action.type) {
    case MarketActionTypes.FETCH_MARKET_FOR_COIN: {
      const { response } = action;
      return {
        ...state,
        market: response
      };
    }
    case MarketActionTypes.FETCH_MARKET_FOR_COIN_ERROR: {
      const { error } = action;
      return {
        ...state,
        errors: {
          market: error,
        }
      };
    }
    default:
      return state;
  }
};

export default marketReducer;