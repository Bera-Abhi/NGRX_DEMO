import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { VegetablesComponent } from './pages/vegetables/vegetables.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: VegetablesComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' },
];
