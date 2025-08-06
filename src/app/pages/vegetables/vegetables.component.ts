import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  origin: string;
  weight: string;
}

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss',
})
export class VegetablesComponent implements OnInit {
  vegetables: Vegetable[] = [
    {
      id: 101,
      name: 'Carrot',
      price: 79,
      image:
        'https://images.unsplash.com/photo-1447175008436-170170753d52?w=400&h=300&fit=crop',
      description: 'Fresh and crunchy organic carrots',
      origin: 'Punjab',
      weight: '1 kg',
    },
    {
      id: 102,
      name: 'Broccoli',
      price: 129,
      image:
        'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop',
      description: 'Nutritious green broccoli heads',
      origin: 'Himachal Pradesh',
      weight: '500g',
    },
    {
      id: 103,
      name: 'Tomato',
      price: 89,
      image:
        'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop',
      description: 'Ripe and juicy red tomatoes',
      origin: 'Maharashtra',
      weight: '1 kg',
    },
    {
      id: 104,
      name: 'Cucumber',
      price: 59,
      image:
        'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop',
      description: 'Cool and refreshing cucumbers',
      origin: 'Karnataka',
      weight: '1 kg',
    },
    {
      id: 105,
      name: 'Bell Pepper',
      price: 149,
      image:
        'https://images.unsplash.com/photo-1525607551316-5a1323a14c54?w=400&h=300&fit=crop',
      description: 'Colorful bell peppers',
      origin: 'Maharashtra',
      weight: '500g',
    },
    {
      id: 106,
      name: 'Spinach',
      price: 69,
      image:
        'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop',
      description: 'Fresh leafy spinach',
      origin: 'Punjab',
      weight: '500g',
    },
    {
      id: 107,
      name: 'Onion',
      price: 49,
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
      description: 'Fresh white onions',
      origin: 'Maharashtra',
      weight: '1 kg',
    },
    {
      id: 108,
      name: 'Potato',
      price: 39,
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
      description: 'Fresh potatoes',
      origin: 'Uttar Pradesh',
      weight: '1 kg',
    },
    {
      id: 109,
      name: 'Cauliflower',
      price: 89,
      image:
        'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=300&fit=crop',
      description: 'Fresh white cauliflower',
      origin: 'Punjab',
      weight: '1 piece',
    },
    {
      id: 110,
      name: 'Green Beans',
      price: 99,
      image:
        'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&h=300&fit=crop',
      description: 'Crisp green beans',
      origin: 'Karnataka',
      weight: '500g',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(vegetable: Vegetable): void {
    // Static implementation - just show a message
    console.log(`Added ${vegetable.name} to cart`);
    alert(`${vegetable.name} added to cart!`);
  }

  isInCart(vegetableId: number): boolean {
    // Static implementation - show some items as in cart
    return vegetableId === 101 || vegetableId === 103; // Carrot and Tomato are in cart
  }
}
