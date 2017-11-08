import { put, call } from 'redux-saga/effects';
import { getData } from '../api';

export default function* searchSaga(owner) {
  try {
    const user = yield call(getData, owner);
    yield put({ type: 'GET_DATA_REPOS_NEW', user });
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}