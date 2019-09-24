import { Action } from '@ngrx/store';
import { Author } from 'src/app/core/author.model';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';

export enum QuixanActionsTypes {
  LoadAuthors = '[Authors] Load Authors Items',
  LoadAuthorsSuccess = '[Authors] Load Authors Success',
  LoadAuthorsFail = '[Authors] Load Authors Fail',
  SetCurrentAuthor = '[Author] Set Current Author',
  SetCurrentAuthorSuccess = '[Author] Set Author Sucess',
  SetCurrentAuthorFail = '[Author] Set Author Fail',
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

export class SetCurrentAuthor implements Action {
  readonly type = QuixanActionsTypes.SetCurrentAuthor;

  constructor(public payload: number) {}
}

export class SetCurrentAuthorFail implements Action {
  readonly type = QuixanActionsTypes.SetCurrentAuthorFail;

  constructor(public payload: LocalizedErrorInfo) { }
}

export class SetCurrentAuthorSuccess implements Action {
  readonly type = QuixanActionsTypes.SetCurrentAuthorSuccess;

  constructor(public payload: number) {}
}

export type QuixanActions =
| LoadAuthors
| LoadAuthorsSuccess
| LoadAuthorsFail
| SetCurrentAuthor
| SetCurrentAuthorSuccess
| SetCurrentAuthorFail;
