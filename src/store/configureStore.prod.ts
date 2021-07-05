import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import initSagas from '../initSagas';

// configure middlewares
const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState: any, history: History) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    reducers(history),
    preloadedState,
    applyMiddleware(...middlewares)
  );

  initSagas(sagaMiddleware);

  return store;
};

export default configureStore;
