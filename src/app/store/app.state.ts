import { FruitsState } from './fruits.reducer';
import { VegetablesState } from './vegetables.reducer';

export interface AppState {
  cart: any[];
  fruits: FruitsState;
  vegetables: VegetablesState;
}
