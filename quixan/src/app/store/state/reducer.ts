import { QuixanActions, QuixanActionsTypes } from './actions';
import { QuixanState, initialState } from './state';


export function quixanReducer(state = initialState, action: QuixanActions): QuixanState {
  switch (action.type) {
    case QuixanActionsTypes.LoadAuthors:
      return {
        ...state,
        error: null
      }
      break;
    case QuixanActionsTypes.LoadAuthorsFail:
      return {
        ...state,
        error: action.payload
      }
      break;
    case QuixanActionsTypes.LoadAuthorsSuccess:
      return {
        ...state,
        authors: action.payload,
        error: null
      }
      break;

    default:
      return {
        ...state
      }
      break;
  }
}
