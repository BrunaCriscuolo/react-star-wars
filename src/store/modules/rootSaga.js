import { all } from 'redux-saga/effects';

import characters from './characters/saga';

export default function* rootSaga() {
  return yield all([
    characters
  ]);
}
