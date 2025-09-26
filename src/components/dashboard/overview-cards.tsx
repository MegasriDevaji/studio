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
import { format, startOfMonth } from 'date-fns';

type OverviewCardsProps = {
  transactions: Transaction[];
};

export function OverviewCards({ transactions }: OverviewCardsProps) {
  const thisMonthStart = startOfMonth(new Date());

  const { totalBalance, monthlyIncome, monthlySpending } = React.useMemo(() => {
    return transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') {
          acc.totalBalance += t.amount;
          if (t.date >= thisMonthStart) {
            acc.monthlyIncome += t.amount;
          }
        } else {
          acc.totalBalance -= t.amount;
          if (t.date >= thisMonthStart) {
            acc.monthlySpending += t.amount;
          }
        }
        return acc;
      },
      { totalBalance: 0, monthlyIncome: 0, monthlySpending: 0 }
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
            <CardTitle className="text-sm font-medium">This Month's Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            +₹{monthlyIncome.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-muted-foreground">
            In {format(new Date(), 'MMMM')}
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
            <CardTitle className="text-sm font-medium">This Month's Spending</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            -₹{monthlySpending.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-muted-foreground">
            In {format(new Date(), 'MMMM')}
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
