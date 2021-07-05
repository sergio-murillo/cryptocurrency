import { UIActionTypes } from '@constants/action-types';

export const setIsLoading = (value: boolean) => (
  { 
    type: UIActionTypes.SET_IS_LOADING,
    response: value
  }
);
