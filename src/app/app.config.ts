import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { cartReducer } from './store/cart.reducer';
import { fruitsReducer } from './store/fruits.reducer';
import { vegetablesReducer } from './store/vegetables.reducer';
import { FruitsEffects } from './store/fruits.effects';
import { VegitablesEffects } from './store/vegetables.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      cart: cartReducer,
      fruits: fruitsReducer,
      vegetables: vegetablesReducer,
    }),
    provideEffects([FruitsEffects, VegitablesEffects]),
  ],
};
