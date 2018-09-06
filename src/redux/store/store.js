import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import saga from '../sagas';
import { AsyncStorage } from 'react-native';
import { middleware } from './ulti';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

export let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, middleware)),
);
// then run the saga
sagaMiddleware.run(saga);

export let persistor = persistStore(store);
