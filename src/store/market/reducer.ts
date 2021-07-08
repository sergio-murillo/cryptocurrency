import { Reducer } from 'redux';
import { MarketActionTypes } from 'src/constants/action-types';
import { MarketResponse } from 'src/models';
import { UiMarket } from 'src/models/market';

export interface MarketState {
  market: MarketResponse[];
  ui: UiMarket;
  errors: any;
}

const initialState: MarketState = {
  market: [],
  ui: {
    isLoadingMarket: false
  },
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
    case MarketActionTypes.IS_LOADING_MARKET: {
      const { response } = action;
      return {
        ...state,
        ui: {
          isLoadingMarket: response
        }
      };
    }
    default:
      return state;
  }
};

export default marketReducer;