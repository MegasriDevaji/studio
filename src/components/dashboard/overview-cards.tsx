import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Landmark, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import type { Transaction } from '@/lib/types';
import { format } from 'date-fns';

type OverviewCardsProps = {
  transactions: Transaction[];
};

export function OverviewCards({ transactions }: OverviewCardsProps) {
  const { totalBalance, totalIncome, totalSpending } = React.useMemo(() => {
    return transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') {
          acc.totalIncome += t.amount;
        } else {
          acc.totalSpending += t.amount;
        }
        acc.totalBalance = acc.totalIncome - acc.totalSpending;
        return acc;
      },
      { totalBalance: 0, totalIncome: 0, totalSpending: 0 }
    );
  }, [transactions]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{totalBalance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-muted-foreground">
            Updated {format(new Date(), 'PP')}
          </p>
        </CardContent>
        <CardFooter className="mt-auto pt-0">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/dashboard/transactions">
              View History
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            +₹{totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-muted-foreground">
            Across all transactions
          </p>
        </CardContent>
        <CardFooter className="mt-auto pt-0">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/dashboard/transactions?type=income">
              View Income
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Total Spending</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            -₹{totalSpending.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-muted-foreground">
            Across all transactions
          </p>
        </CardContent>
        <CardFooter className="mt-auto pt-0">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/dashboard/insights">
              View Insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
