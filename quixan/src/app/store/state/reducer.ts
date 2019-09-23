import { QuixanActions, QuixanActionsTypes } from './actions';
import { QuixanState, initialState } from './state';


export function quixanReducer(state = initialState, action: QuixanActions): QuixanState {
  switch (action.type) {
    case QuixanActionsTypes.LoadAuthor:
      return {
        ...state,
        error: null
      }
      break;
    case QuixanActionsTypes.LoadAuthorFail:
      return {
        ...state,
        error: action.payload
      }
      break;
    case QuixanActionsTypes.LoadAuthorSuccess:
      return {
        ...state,
        authors: action.payload,
        error: null
      }
      break;

    default:
      break;
  }
}
