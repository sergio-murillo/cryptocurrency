import { UIActionTypes } from 'src/constants/action-types';

export const setIsLoading = (value: boolean) => (
  { 
    type: UIActionTypes.SET_IS_LOADING,
    response: value
  }
);
