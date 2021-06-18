import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducers from './modules/persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const middleware = [];

const sagaMonitor = null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const composer = applyMiddleware(...middleware);

const store = createStore(persistReducers(rootReducer), composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
