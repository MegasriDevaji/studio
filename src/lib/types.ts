import type { LucideIcon } from 'lucide-react';

export type Transaction = {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
};

export type Category = {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
};
