import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} from '../../store/cart.action';
import {
  selectCartItems,
  selectCartTotal,
  CartItem,
} from '../../store/cart.reducer';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }

  ngOnInit(): void {}

  updateQuantity(itemId: number, newQuantity: number): void {
    this.store.dispatch(
      updateCartItemQuantity({ productId: itemId, quantity: newQuantity })
    );
  }

  removeFromCart(itemId: number): void {
    this.store.dispatch(removeFromCart({ productId: itemId }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }

  getItemTotal(item: CartItem): number {
    return item.price * item.quantity;
  }
}
