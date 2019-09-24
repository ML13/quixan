import { QuixanActions, QuixanActionsTypes } from './actions';
import { QuixanState, initialState } from './state';

export function quixanReducer(state = initialState, action: QuixanActions): QuixanState {
  switch (action.type) {
    case QuixanActionsTypes.LoadAuthors:
      return {
        ...state,
        error: null
      };
      break;
    case QuixanActionsTypes.LoadAuthorsFail:
      return {
        ...state,
        error: action.payload
      };
      break;
    case QuixanActionsTypes.LoadAuthorsSuccess:
      return {
        ...state,
        authors: action.payload,
        error: null
      };
      break;
    case QuixanActionsTypes.SetCurrentAuthor:
      return {
        ...state,
        error: null
      };
      break;
    case QuixanActionsTypes.SetCurrentAuthorFail:
      return {
        ...state,
        error: action.payload
      };
      break;

    case QuixanActionsTypes.SetCurrentAuthorSuccess:
      return {
        ...state,
        currentAuthor: state.authors.find(author => author.id === action.payload),
        error: null
      };
      break;

    default:
      return {
        ...state
      };
      break;
  }
}
