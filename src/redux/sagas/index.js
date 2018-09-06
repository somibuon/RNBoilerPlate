import { all, fork } from 'redux-saga/effects';
import loginSaga from './authenticate.saga';

export default function*() {
  // fork all saga watcher here
  yield all([fork(loginSaga)]);
}
