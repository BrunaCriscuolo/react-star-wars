import Types from './types';

export const charactersListRequest = (filters) => ({
  type: Types.CHARACTERS_LIST_REQUEST,
  payload: { filters }
});
export const charactersListSuccess = (charactersList) => ({
  type: Types.CHARACTERS_LIST_SUCCESS,
  payload: { charactersList },
});
export const charactersListFaliure = () => ({
  type: Types.CHARACTERS_LIST_FAILURE,
});
