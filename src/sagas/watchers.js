import { takeEvery } from 'redux-saga/effects';
import searchSaga from './basicData';

export default function* watchSearchMedia() {
  yield [
    takeEvery('GET_DATA_REPOS', searchSaga),
  ];
}