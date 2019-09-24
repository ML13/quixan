import { AuthorService } from 'src/app/core/author.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { QuixanActionsTypes } from './actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';
import * as quixanActions from './actions';

@Injectable()
export class AuthorEffects {

  constructor(
    private actions$: Actions,
    private authorService: AuthorService,

  ) { }

  @Effect()
  loadAuthors$: Observable<Action> = this.actions$.pipe(
    ofType(QuixanActionsTypes.LoadAuthors),
    switchMap(() =>
      this.authorService.getAuthors().pipe(
        map(authors => new quixanActions.LoadAuthorsSuccess(authors)),
        catchError((err: LocalizedErrorInfo) =>
          of(new quixanActions.LoadAuthorsFail(err))
        )
      )
    )
  );

  // @Effect()
  // loadArticles$: Observable<Action> = this.actions$.pipe(
  //   ofType(QuixanActionsTypes.SetCurrentAuthor),
  //   switchMap(() =>
  //     this.authorService.getAuthors().pipe(
  //       map(authors => new quixanActions.LoadAuthorsSuccess(authors)),
  //       catchError((err: LocalizedErrorInfo) =>
  //         of(new quixanActions.LoadAuthorsFail(err))
  //       )
  //     )
  //   )
  // );
}
