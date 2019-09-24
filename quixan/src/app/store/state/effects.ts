import { AuthorService } from 'src/app/core/author.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { QuixanActionsTypes } from './actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';
import * as quixanActions from './actions';
import { ArticleService } from 'src/app/core/article.service';

@Injectable()
export class AuthorEffects {

  constructor(
    private actions$: Actions,
    private authorService: AuthorService,
    private articleService: ArticleService

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

  @Effect()
  loadArticles$: Observable<Action> = this.actions$.pipe(
    ofType(QuixanActionsTypes.SetCurrentAuthor),
    switchMap((action: quixanActions.SetCurrentAuthor) =>
      this.articleService.getArticlesByAuthor(action.payload).pipe(
        map(articles => new quixanActions.SetCurrentAuthorSuccess(action.payload)),
        catchError((err: LocalizedErrorInfo) =>
          of(new quixanActions.SetCurrentAuthorFail(err))
        )
      )
    )
  );
}



    //   switchMap(() =>
    //     this.articleService.getArticlesByAuthor(1))
    //     .pipe(
    //       map(articles => new quixanActions.SetCurrentAuthorSuccess(1)),
    //       catchError((err: LocalizedErrorInfo) =>
    //         of(new quixanActions.SetCurrentAuthorFail(err))
    //       )
    //     )
    // )
