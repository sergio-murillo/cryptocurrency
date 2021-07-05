import { SagaMiddleware } from 'redux-saga';
import * as sagas from './sagas';

const initSagas = (sagaMiddleware: SagaMiddleware<any>) => {
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default initSagas;