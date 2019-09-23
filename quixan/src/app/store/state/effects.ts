// import { AuthorService } from 'src/app/core/author.service';
// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { QuixanActionsTypes } from './actions';
// import { Action } from '@ngrx/store';
// import { Observable, of } from 'rxjs';
// import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
// import { LocalizedErrorInfo } from 'src/app/shared/models/error-info.model';
// // import * as companyActions from './company.actions';


// @Injectable()
// export class AuthorEffects {

//   constructor(
//     private actions$: Actions,
//     private authorService: AuthorService
//   ) { }

//   @Effect()
//   loadAuthors$: Observable<Action> = this.actions$.pipe(
//     ofType(QuixanActionsTypes.LoadAuthor),
//     switchMap(() =>
//       this.authorService.getSomething().pipe(
//         map(author => new QuixanActionsTypes.LoadAuthorSuccess(author)),
//         catchError((err: LocalizedErrorInfo) =>
//           of(new QuixanActionsTypes.LoadAuthorFail(err))
//         )
//       )
//     )
//   );
