import { takeEvery } from 'redux-saga/effects';
import searchSaga from './basicData';
import * as types from '../constants';

export default function* watchSearchMedia() {
  yield [
    takeEvery(types.GET_DATA_REPOS, searchSaga),
  ];
}