import { put, takeLatest, all, call } from 'redux-saga/effects';

import Types from './types';
import {
  charactersListFaliure, charactersListSuccess,
} from './actions';

import { api } from '../../../services/api';

function* charactersListRequest({ payload }) {
  const { filters } = payload;

  try {
    const params = new URLSearchParams();

    if (filters?.page)
      params.append('page', filters.page);
    if (filters?.search)
      params.append('search', filters.search);

    const { data } = yield call(api.get, `/people/?${params.toString()}`);

    yield put(charactersListSuccess(data));

  } catch ({ response }) {
    yield put(charactersListFaliure());

    const { data } = response;

    if (data && data.status !== 401 && data.status !== 403) {
      const array = data.errors;
      for (const [, value] of Object.entries(array)) {
        console.log(value[0]);
      }
    }
  }
}
export default all([
  takeLatest(Types.CHARACTERS_LIST_REQUEST, charactersListRequest),
]);
