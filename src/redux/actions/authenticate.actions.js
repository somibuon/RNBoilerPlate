import { LOGIN, LOGOUT } from '../../constants/redux-actions';

export const loginAction = (username, password) => ({
  type: LOGIN,
  payload: {
    username,
    password,
  },
});

export const logoutAction = () => ({
  type: LOGOUT,
});
