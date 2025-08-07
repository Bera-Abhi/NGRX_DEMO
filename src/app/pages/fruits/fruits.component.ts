import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToCart } from '../../store/cart.action';
import {
  loadFruits,
  loadFruitsSuccess,
  loadFruitsFailure,
} from '../../store/fruits.action';
import {
  selectAllFruits,
  selectFruitsLoading,
  selectFruitsError,
} from '../../store/fruits.reducer';
import { Fruit, FruitsService } from '../../services/fruits.service';
import { AppState } from '../../store/app.state';
import { selectIsItemInCart } from '../../store/cart.reducer';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent implements OnInit {
  fruits$: Observable<Fruit[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  private readonly store = inject(Store<AppState>);

  constructor() {
    this.fruits$ = this.store.select(selectAllFruits);
    this.loading$ = this.store.select(selectFruitsLoading);
    this.error$ = this.store.select(selectFruitsError);
  }

  ngOnInit(): void {}

  addToCart(fruit: Fruit): void {
    this.store.dispatch(addToCart({ product: fruit }));
  }

  isInCart(fruitId: number): Observable<boolean> {
    return this.store.select(selectIsItemInCart(fruitId));
  }
}
