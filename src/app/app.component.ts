import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { loadFruits } from './store/fruits.action';
import { loadVegetables } from './store/vegetables.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Fresh Market';
  private readonly store = inject(Store<AppState>);

  ngOnInit(): void {
    this.store.dispatch(loadFruits());
    this.store.dispatch(loadVegetables());
  }
}
