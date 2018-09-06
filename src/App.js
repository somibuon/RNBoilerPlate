import React, { Component } from 'react';
import './configs/app.config';
import {
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
  Linking,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import AppContainer from './screens/AppContainer';

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </KeyboardAvoidingView>
    );
  }
}
