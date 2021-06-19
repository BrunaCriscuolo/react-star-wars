import Types from './types';

const INITIAL_STATE = {
  charactersList: {},
  charactersLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CHARACTERS_LIST_REQUEST:
      return {
        ...state,
        charactersLoading: true,
      };
    case Types.CHARACTERS_LIST_SUCCESS:
      return {
        ...state,
        charactersList: action.payload.charactersList,
        charactersLoading: false,
      };
    case Types.CHARACTERS_LIST_FAILURE:
      return {
        ...state,
        charactersLoading: false
      };
    default:
      return state;
  }
};

