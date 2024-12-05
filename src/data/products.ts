import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Premium Cotton Crew',
    price: 89.99,
    description: 'Luxuriously soft Pima cotton blend with a perfect fit.',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray']
  },
  {
    id: '2',
    name: 'Artisan V-Neck',
    price: 94.99,
    description: 'Hand-crafted V-neck with subtle texture and elegant drape.',
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Sage']
  },
  {
    id: '3',
    name: 'Heritage Limited Edition',
    price: 129.99,
    description: 'Small-batch production with hand-finished details.',
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black']
  }
];