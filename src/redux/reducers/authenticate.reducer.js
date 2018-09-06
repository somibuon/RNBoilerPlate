import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCEEDED,
  LOGOUT,
  SESSION_EXPIRE,
} from '../../constants/redux-actions';

const INIT_STATE = {
  cookie: '',
  cookie_name: '',
  user_name: '',
  loggingIn: false,
};

export default function AuthenticateReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loggingIn: true };
    }
    case LOGIN_SUCCEEDED: {
      return {
        ...state,
        ...action.payload,
        loggingIn: false,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, error: action.error, loggingIn: false };
    }
    case LOGOUT: {
      return INIT_STATE;
    }
    case SESSION_EXPIRE: {
      return INIT_STATE;
    }
    default: {
      return state;
    }
  }
}
