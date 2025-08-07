import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToCart } from '../../store/cart.action';
import {
  loadVegetables,
  loadVegetablesSuccess,
  loadVegetablesFailure,
} from '../../store/vegetables.action';
import {
  selectAllVegetables,
  selectVegetablesLoading,
  selectVegetablesError,
} from '../../store/vegetables.reducer';
import {
  Vegetable,
  VegetablesService,
} from '../../services/vegetables.service';
import { AppState } from '../../store/app.state';
import { selectIsItemInCart } from '../../store/cart.reducer';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss',
})
export class VegetablesComponent implements OnInit {
  vegetables$: Observable<Vegetable[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  private readonly store = inject(Store<AppState>);

  constructor() {
    this.vegetables$ = this.store.select(selectAllVegetables);
    this.loading$ = this.store.select(selectVegetablesLoading);
    this.error$ = this.store.select(selectVegetablesError);
  }

  ngOnInit(): void {}

  addToCart(vegetable: Vegetable): void {
    this.store.dispatch(addToCart({ product: vegetable }));
  }

  isInCart(vegetableId: number): Observable<boolean> {
    return this.store.select(selectIsItemInCart(vegetableId));
  }
}
