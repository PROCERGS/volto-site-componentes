import { LIST_ULTIMAS } from '../../constants/ActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function ultimas(state = initialState, action = {}) {
  switch (action.type) {
    case `${LIST_ULTIMAS}_PENDING`:
      return {
        ...state,
        data: [],
        error: null,
        loading: true,
      };
    case `${LIST_ULTIMAS}_SUCCESS`:
      return {
        ...state,
        data: action.result.items,
        error: null,
      };
    case `${LIST_ULTIMAS}_FAIL`:
      return {
        ...state,
        data: [],
        error: action.error.response.error,
      };
    default:
      return state;
  }
}
