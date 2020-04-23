import { all, fork} from 'redux-saga/effects';
import AddUser from './action'
export function * rootSaga () {
  yield all([
    fork(AddUser)
  ]);
};