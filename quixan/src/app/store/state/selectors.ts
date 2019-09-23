import { QuixanState } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getQuixanState = createFeatureSelector<QuixanState>('author');

export const getAuthorList = createSelector(
  getQuixanState,
  state => state.authors
);

export const getError = createSelector(
  getQuixanState,
  state => state.error
);
