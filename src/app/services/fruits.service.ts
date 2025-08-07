import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Fruit {
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
export class FruitsService {
  private apiUrl =
    'https://6894efc7be3700414e14f3db.mockapi.io/ngrxdemo/fruits';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }
}
