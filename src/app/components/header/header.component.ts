import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectCartItemCount } from '../../store/cart.reducer';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  cartItemCount$: Observable<number> = of(0);
  private readonly store = inject(Store<AppState>);

  ngOnInit() {
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }

  getCartItemCount() {
    return this.cartItemCount$;
  }
}
