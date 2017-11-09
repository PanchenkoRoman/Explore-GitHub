import { put, call, all } from 'redux-saga/effects';
import { getData, getRepos } from '../api';
import { succesSfulFetch } from '../actions';

export default function* searchSaga(owner) {
  try {
    const [user, repos] = yield all([
      call(getData, owner),
      call(getRepos, owner)
    ])
    yield put(succesSfulFetch(user, repos));
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}