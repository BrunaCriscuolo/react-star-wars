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

    if (filters?.id) {
      const { id } = filters;
      const { data } = yield call(api.get, `/people/${id}`);
      return yield put(charactersListSuccess(data));
    }

    const { data } = yield call(api.get, `/people/?${params.toString()}`);
    return yield put(charactersListSuccess(data));

  } catch ({ response }) {
    yield put(charactersListFaliure());
  }
}
export default all([
  takeLatest(Types.CHARACTERS_LIST_REQUEST, charactersListRequest),
]);
