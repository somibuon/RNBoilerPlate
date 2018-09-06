import { combineReducers } from 'redux';
import nav from './navReducer';
import AuthenticateReducer from './authenticate.reducer';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const authPersistConfig = {
  key: 'authenticate',
  storage: AsyncStorage,
  blacklist: ['loggingIn'],
};

const reducer = combineReducers({
  nav: nav,
  authenticate: persistReducer(authPersistConfig, AuthenticateReducer),
});

export default reducer;
