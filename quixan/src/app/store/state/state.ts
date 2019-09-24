import { Author } from 'src/app/core/author.model';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';

export interface QuixanState {
  authors: Author[];
  currentAuthor: Author;
  isReady: boolean;
  error: LocalizedErrorInfo;
}

export const initialState: QuixanState = {
authors: [],
currentAuthor: null,
isReady: false,
error: null
};
