import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCEEDED,
  LOGOUT,
} from '../../constants/redux-actions';
import { alertError } from '../../helpers/alertHelper';
import { NavigationActions } from 'react-navigation';

function* loginAction({ payload }) {
  try {
    const { username, password } = payload;
    yield put({ type: LOGIN_SUCCEEDED, payload });
    yield put(NavigationActions.navigate('LendPackageChoose'));

  } catch (e) {
    yield put({ type: LOGIN_ERROR, error: e });
    alertError(e);
  }
}

function* logout() {
  try {
    yield put(NavigationActions.navigate('Home'));
  } catch (e) {
    alertError(e);
  }
}

export default function* () {
  yield all([
    yield takeLatest(LOGIN, loginAction),
    yield takeLatest(LOGOUT, logout),
  ]);
}
