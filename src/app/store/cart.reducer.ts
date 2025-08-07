import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} from './cart.action';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  origin: string;
  weight: string;
  quantity: number;
}

export const initialState: any = {
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: any, { product }) => {
    const existingItem = state.cart.find(
      (item: CartItem) => item.id === product.id
    );
    if (existingItem) {
      return {
        ...state,
        cart: state.cart.map((item: CartItem) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
  }),
  on(removeFromCart, (state: any, { productId }) => ({
    ...state,
    cart: state.cart.filter((item: CartItem) => item.id !== productId),
  })),
  on(updateCartItemQuantity, (state: any, { productId, quantity }) => {
    if (quantity <= 0) {
      return {
        ...state,
        cart: state.cart.filter((item: CartItem) => item.id !== productId),
      };
    }
    return {
      ...state,
      cart: state.cart.map((item: CartItem) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    };
  }),
  on(clearCart, (state: any) => ({
    ...state,
    cart: [],
  }))
);

// Feature selector
export const selectCartState = createFeatureSelector<any>('cart');

// Selector for cart items
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.cart
);

// Selector for cart item count
export const selectCartItemCount = createSelector(selectCartItems, (cart) =>
  cart.reduce((total: number, item: CartItem) => total + item.quantity, 0)
);

// Selector to check if an item is in cart by ID
export const selectIsItemInCart = (itemId: number) =>
  createSelector(selectCartItems, (cart) =>
    cart.some((item: CartItem) => item.id === itemId)
  );

// Selector for cart total
export const selectCartTotal = createSelector(selectCartItems, (cart) =>
  cart.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  )
);
