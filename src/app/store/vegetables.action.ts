import { createAction, props } from '@ngrx/store';
import { Vegetable } from '../services/vegetables.service';

// Load Vegetables Actions
export const loadVegetables = createAction('[Vegetables] Load Vegetables');

export const loadVegetablesSuccess = createAction(
  '[Vegetables] Load Vegetables Success',
  props<{ vegetables: Vegetable[] }>()
);

export const loadVegetablesFailure = createAction(
  '[Vegetables] Load Vegetables Failure',
  props<{ error: string }>()
);
