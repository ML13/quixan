import { Author } from 'src/app/core/author.model';
import { EMPTY } from 'rxjs';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';

export interface QuixanState {
  authors: Author[];
  error: LocalizedErrorInfo;
}

export const initialState: QuixanState = {
authors: [],
error: null
};
