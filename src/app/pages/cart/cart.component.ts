import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  price: number;
  category: 'fruit' | 'vegetable';
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Alphonso Mango',
      price: 299,
      category: 'fruit',
      image:
        'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
      quantity: 2,
    },
    {
      id: 101,
      name: 'Carrot',
      price: 79,
      category: 'vegetable',
      image:
        'https://images.unsplash.com/photo-1447175008436-170170753d52?w=400&h=300&fit=crop',
      quantity: 1,
    },
    {
      id: 103,
      name: 'Tomato',
      price: 89,
      category: 'vegetable',
      image:
        'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop',
      quantity: 3,
    },
  ];

  cartTotal = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.cartTotal = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  updateQuantity(itemId: number, newQuantity: number): void {
    if (newQuantity <= 0) {
      this.removeFromCart(itemId);
    } else {
      const item = this.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity = newQuantity;
        this.calculateTotal();
      }
    }
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    this.calculateTotal();
  }

  clearCart(): void {
    this.cartItems = [];
    this.calculateTotal();
  }

  getItemTotal(item: CartItem): number {
    return item.price * item.quantity;
  }
}
