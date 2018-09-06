import { Keyboard, Alert, InteractionManager } from 'react-native';

export const safeAlert = (...args) => {
  // dismiss the keyboard
  Keyboard.dismiss();
  InteractionManager.runAfterInteractions(() => {
    // run after interactions
    setTimeout(() => {
      // put it on queue
      Alert.alert.apply(null, args);
    }, 0);
  });
};

export const getMessageFromError = (err) => {
  if (typeof err === 'string') {
    return err;
  }
  if (err.response) {
    const { data } = err.response;
    if (data && (data.error || data.message)) {
      return data.error || data.message;
    } else {
      return 'Error from server';
    }
  } else {
    return err.message;
  }
};

export const alertError = (err) => {
  safeAlert(getMessageFromError(err));
};
