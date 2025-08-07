import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  loadFruits,
  loadFruitsSuccess,
  loadFruitsFailure,
} from './fruits.action';
import { Fruit } from '../services/fruits.service';

export interface FruitsState {
  fruits: Fruit[];
  loading: boolean;
  error: string | null;
}

export const initialState: FruitsState = {
  fruits: [],
  loading: false,
  error: null,
};

export const fruitsReducer = createReducer(
  initialState,
  on(loadFruits, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadFruitsSuccess, (state, { fruits }) => ({
    ...state,
    fruits,
    loading: false,
    error: null,
  })),
  on(loadFruitsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

// Feature selector
export const selectFruitsState = createFeatureSelector<FruitsState>('fruits');

// Selectors
export const selectAllFruits = createSelector(
  selectFruitsState,
  (state) => state.fruits
);

export const selectFruitsLoading = createSelector(
  selectFruitsState,
  (state) => state.loading
);

export const selectFruitsError = createSelector(
  selectFruitsState,
  (state) => state.error
);
