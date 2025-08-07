import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  loadVegetables,
  loadVegetablesSuccess,
  loadVegetablesFailure,
} from './vegetables.action';
import { Vegetable } from '../services/vegetables.service';

export interface VegetablesState {
  vegetables: Vegetable[];
  loading: boolean;
  error: string | null;
}

export const initialState: VegetablesState = {
  vegetables: [],
  loading: false,
  error: null,
};

export const vegetablesReducer = createReducer(
  initialState,
  on(loadVegetables, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadVegetablesSuccess, (state, { vegetables }) => ({
    ...state,
    vegetables,
    loading: false,
    error: null,
  })),
  on(loadVegetablesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

// Feature selector
export const selectVegetablesState =
  createFeatureSelector<VegetablesState>('vegetables');

// Selectors
export const selectAllVegetables = createSelector(
  selectVegetablesState,
  (state) => state.vegetables
);

export const selectVegetablesLoading = createSelector(
  selectVegetablesState,
  (state) => state.loading
);

export const selectVegetablesError = createSelector(
  selectVegetablesState,
  (state) => state.error
);
