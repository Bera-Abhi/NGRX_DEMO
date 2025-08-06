import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Fruit {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  origin: string;
  weight: string;
}

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent implements OnInit {
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'Alphonso Mango',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
      description: 'Sweet and aromatic Alphonso mangoes from Ratnagiri',
      origin: 'Ratnagiri, Maharashtra',
      weight: '1 kg',
    },
    {
      id: 2,
      name: 'Banana',
      price: 89,
      image:
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
      description: 'Fresh and nutritious yellow bananas',
      origin: 'Karnataka',
      weight: '1 dozen',
    },
    {
      id: 3,
      name: 'Orange',
      price: 149,
      image:
        'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop',
      description: 'Juicy and vitamin-rich Nagpur oranges',
      origin: 'Nagpur, Maharashtra',
      weight: '1 kg',
    },
    {
      id: 4,
      name: 'Strawberry',
      price: 399,
      image:
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop',
      description: 'Sweet and aromatic fresh strawberries',
      origin: 'Mahabaleshwar',
      weight: '500g',
    },
    {
      id: 5,
      name: 'Grapes',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&h=300&fit=crop',
      description: 'Delicious purple grapes from Nashik',
      origin: 'Nashik, Maharashtra',
      weight: '1 kg',
    },
    {
      id: 6,
      name: 'Pineapple',
      price: 129,
      image:
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop',
      description: 'Tropical and refreshing sweet pineapple',
      origin: 'Kerala',
      weight: '1 piece',
    },
    {
      id: 7,
      name: 'Apple',
      price: 249,
      image:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
      description: 'Crisp and juicy red apples from Kashmir',
      origin: 'Kashmir',
      weight: '1 kg',
    },
    {
      id: 8,
      name: 'Pomegranate',
      price: 179,
      image:
        'https://images.unsplash.com/photo-1541344999733-bb4c6f5c2c8c?w=400&h=300&fit=crop',
      description: 'Sweet and juicy pomegranate seeds',
      origin: 'Maharashtra',
      weight: '1 kg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(fruit: Fruit): void {
    // Static implementation - just show a message
    console.log(`Added ${fruit.name} to cart`);
    alert(`${fruit.name} added to cart!`);
  }

  isInCart(fruitId: number): boolean {
    // Static implementation - show some items as in cart
    return fruitId === 1 || fruitId === 3; // Alphonso Mango and Orange are in cart
  }
}
