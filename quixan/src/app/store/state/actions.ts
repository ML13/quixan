import { Action } from '@ngrx/store';
import { Author } from 'src/app/core/author.model';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';

export enum QuixanActionsTypes {
  LoadAuthors = '[Authors] Load Authors Items',
  LoadAuthorsSuccess = '[Authors] Load Authors Success',
  LoadAuthorsFail = '[Authors] Load Authors Fail'
}

export class LoadAuthors implements Action {
  readonly type = QuixanActionsTypes.LoadAuthors;
}

export class LoadAuthorsSuccess implements Action {
  readonly type = QuixanActionsTypes.LoadAuthorsSuccess;

  constructor(public payload: Author[]) { }
}

export class LoadAuthorsFail implements Action {
  readonly type = QuixanActionsTypes.LoadAuthorsFail;

  constructor(public payload: LocalizedErrorInfo) { }
}

export type QuixanActions =
| LoadAuthors
| LoadAuthorsSuccess
| LoadAuthorsFail;
