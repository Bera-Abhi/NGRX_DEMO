import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  origin: string;
  weight: string;
}

@Injectable({
  providedIn: 'root',
})
export class VegetablesService {
  private apiUrl =
    'https://6894efc7be3700414e14f3db.mockapi.io/ngrxdemo/vegetables';

  constructor(private http: HttpClient) {}

  getVegetables(): Observable<Vegetable[]> {
    return this.http.get<Vegetable[]>(this.apiUrl);
  }
}
