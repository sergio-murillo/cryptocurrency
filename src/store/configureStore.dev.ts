import { createStore, applyMiddleware, compose, Store } from 'redux';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { apiMiddleware } from '../middleware';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import initSagas from '../initSagas';

// configure middlewares
const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState: any, history: History): Store => {
  const middlewares = [sagaMiddleware, routerMiddleware(history), apiMiddleware, createLogger()];

  const store = createStore(
    reducers(history),
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  initSagas(sagaMiddleware);

  return store;
};

export default configureStore;
