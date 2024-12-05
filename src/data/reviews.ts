import { Review } from '../types/review';

export const reviews: Record<string, Review[]> = {
  '1': [
    {
      id: '1',
      userId: 'user1',
      userName: 'James Wilson',
      rating: 5,
      comment: 'The quality of this t-shirt is exceptional. The fabric feels luxurious and the fit is perfect.',
      date: '2024-03-15',
      verified: true,
    },
    {
      id: '2',
      userId: 'user2',
      userName: 'Sarah Miller',
      rating: 4,
      comment: 'Beautiful t-shirt with great attention to detail. Sizing runs slightly large.',
      date: '2024-03-10',
      verified: true,
    },
    {
      id: '3',
      userId: 'user3',
      userName: 'Michael Brown',
      rating: 5,
      comment: 'Worth every penny. The comfort level is unmatched.',
      date: '2024-03-05',
      verified: true,
    },
  ],
};