import { createAction, props } from '@ngrx/store';
import { Fruit } from '../services/fruits.service';

// Load Fruits Actions
export const loadFruits = createAction('[Fruits] Load Fruits');

export const loadFruitsSuccess = createAction(
  '[Fruits] Load Fruits Success',
  props<{ fruits: Fruit[] }>()
);

export const loadFruitsFailure = createAction(
  '[Fruits] Load Fruits Failure',
  props<{ error: string }>()
);
