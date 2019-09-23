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

export const getError = createSelector(
  getQuixanState,
  state => state.error
);

@Injectable({providedIn: 'root'})
export class AuthorSelectorService{
  constructor(
    private store: Store<QuixanState>
  ) {}

  get ListOfAuthors$(): Observable<Author[]> {
    return this.store.select(getAuthorList);
  }
}
