import { Action } from '@ngrx/store';
import { Author } from 'src/app/core/author.model';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';

export enum QuixanActionsTypes {
  LoadAuthor = '[Authors] Load Authors Items',
  LoadAuthorSuccess = '[Authors] Load Authors Success',
  LoadAuthorFail = '[Authors] Load Authors Fail'
}

export class LoadAuthor implements Action {
  readonly type = QuixanActionsTypes.LoadAuthor;
}

export class LoadAuthorSuccess implements Action {
  readonly type = QuixanActionsTypes.LoadAuthorSuccess;

  constructor(public payload: Author[]) { }
}

export class LoadAuthorFail implements Action {
  readonly type = QuixanActionsTypes.LoadAuthorFail;

  constructor(public payload: LocalizedErrorInfo) { }
}

export type QuixanActions =
| LoadAuthor
| LoadAuthorSuccess
| LoadAuthorFail;
