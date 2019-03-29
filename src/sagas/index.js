import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchUsers(action) {
  const { per_page, page } = action;
  const json = yield fetch(`https://reqres.in/api/users?per_page=${per_page}&page=${page}`).then(response => response.json(), );
  yield put({ type: "USERS_RECEIVED", json: json, });
}

function* actionWatcher() {
  yield takeLatest('GET_USERS', fetchUsers)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}