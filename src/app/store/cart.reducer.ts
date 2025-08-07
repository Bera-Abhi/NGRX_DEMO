import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { addToCart } from './cart.action';

export const initialState: any = {
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: any, { product }) => {
    return { ...state, cart: [...state.cart, product] };
  })
);

export const selectCartState = createFeatureSelector<any>('cart');

// Selector for cart items
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.cart
);

// Selector for cart item count
export const selectCartItemCount = createSelector(
  selectCartItems,
  (cart) => cart.length
);
