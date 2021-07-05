import { API_COINLORE_BASE_URL } from '../constants/api';
import { CryptoCurrencyActionTypes } from '../types/types';

const callAPIKey  = CryptoCurrencyActionTypes.CALL_COINLORE_API;

const callApi = async (endpoint: string) => {
  const fullUrl = `${API_COINLORE_BASE_URL}/${endpoint}`;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        return json;
      })
    );
};

export const apiMiddleware =  (store: any) => (next: any) => (action: any) => {
  const callAPI = action[callAPIKey];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, types } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data: any) => {
    const finalAction = { ...action, data };
    delete finalAction[callAPIKey];
    return finalAction;
  };

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint).then(
    response => next(
      actionWith({
      response,
      type: successType
      })
    ),
    error => next(
      actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
      })
    )
  );
};
