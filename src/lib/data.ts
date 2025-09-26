import { Car, FileText, MoreHorizontal, Pizza, Shirt } from 'lucide-react';
import type { Category, Transaction } from './types';

export const categories: Category[] = [
  { value: 'food', label: 'Food', icon: Pizza, color: 'hsl(var(--chart-1))' },
  { value: 'transport', label: 'Transport', icon: Car, color: 'hsl(var(--chart-2))' },
  { value: 'bills', label: 'Bills', icon: FileText, color: 'hsl(var(--chart-3))' },
  { value: 'clothing', label: 'Clothing', icon: Shirt, color: 'hsl(var(--chart-4))' },
  { value: 'misc', label: 'Misc', icon: MoreHorizontal, color: 'hsl(var(--chart-5))' },
];

export const transactions: Transaction[] = [
  { id: '1', date: new Date(), description: 'Coffee shop', amount: 5.50, category: 'food' },
  { id: '2', date: new Date(new Date().setDate(new Date().getDate() - 1)), description: 'Train ticket', amount: 35.00, category: 'transport' },
  { id: '3', date: new Date(new Date().setDate(new Date().getDate() - 1)), description: 'Netflix subscription', amount: 15.00, category: 'bills' },
  { id: '4', date: new Date(new Date().setDate(new Date().getDate() - 2)), description: 'Lunch with friends', amount: 45.20, category: 'food' },
  { id: '5', date: new Date(new Date().setDate(new Date().getDate() - 3)), description: 'New T-shirt', amount: 25.00, category: 'clothing' },
  { id: '6', date: new Date(new Date().setDate(new Date().getDate() - 4)), description: 'Groceries', amount: 75.80, category: 'food' },
  { id: '7', date: new Date(new Date().setDate(new Date().getDate() - 5)), description: 'Electricity bill', amount: 60.00, category: 'bills' },
  { id: '8', date: new Date(new Date().setDate(new Date().getDate() - 6)), description: 'Uber ride', amount: 22.30, category: 'transport' },
  { id: '9', date: new Date(new Date().setDate(new Date().getDate() - 7)), description: 'Movie night', amount: 18.00, category: 'misc' },
  { id: '10', date: new Date(new Date().setDate(new Date().getDate() - 8)), description: 'Dinner out', amount: 80.00, category: 'food' },
];
