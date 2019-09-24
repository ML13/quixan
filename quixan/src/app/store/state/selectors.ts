import { QuixanState } from './state';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/author.model';

const getQuixanState = createFeatureSelector<QuixanState>('common');

export const getAuthorList = createSelector(
  getQuixanState,
  state => state.authors
);

export const getCurrentAuthor = createSelector(
  getQuixanState,
  state => state.currentAuthor
);

export const getError = createSelector(
  getQuixanState,
  state => state.error
);

export const getIsReady = createSelector(
  getQuixanState,
  state => state.isReady
);

@Injectable({ providedIn: 'root' })
export class AuthorSelectorService {
  constructor(
    private store: Store<QuixanState>
  ) { }

  get ListOfAuthors$(): Observable<Author[]> {
    return this.store.select(getAuthorList);
  }

  get CurrentAuthor$(): Observable<Author> {
    return this.store.select(getCurrentAuthor);
  }

  get IsReady$(): Observable<boolean> {
    return this.store.select(getIsReady);
  }
}
