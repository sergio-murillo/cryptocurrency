import { Reducer } from 'redux';
import { UIActionTypes } from 'src/constants/action-types';

export interface UIState {
  isLoading: boolean;
}

const initialState: UIState = {
  isLoading: false
};

const uiReducer: Reducer<UIState> = (state = initialState, action) => {
  switch (action.type) {
    case UIActionTypes.SET_IS_LOADING: {
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