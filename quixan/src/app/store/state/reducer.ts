import { QuixanActions, QuixanActionsTypes } from './actions';
import { QuixanState, initialState } from './state';

export function quixanReducer(state = initialState, action: QuixanActions): QuixanState {
  switch (action.type) {
    case QuixanActionsTypes.LoadAuthors:
      return {
        ...state,
        isReady: false,
        error: null
      };
      break;
    case QuixanActionsTypes.LoadAuthorsFail:
      return {
        ...state,
        isReady: false,
        error: action.payload
      };
      break;
    case QuixanActionsTypes.LoadAuthorsSuccess:
      return {
        ...state,
        authors: action.payload,
        isReady: true,
        error: null
      };
      break;
    case QuixanActionsTypes.SetCurrentAuthor:
      return {
        ...state,
        isReady: false,
        error: null
      };
      break;
    case QuixanActionsTypes.SetCurrentAuthorFail:
      return {
        ...state,
        isReady: false,
        error: action.payload
      };
      break;

    case QuixanActionsTypes.SetCurrentAuthorSuccess:
      return {
        ...state,
        currentAuthor: state.authors.find(author => author.id === action.payload),
        isReady: true,
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
