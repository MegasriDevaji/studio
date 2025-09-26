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

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total Balance
            </CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
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
            <CardTitle className="text-sm font-medium">
              This Month's Income
            </CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+₹5,000.00</div>
          <p className="text-xs text-muted-foreground">Monthly salary</p>
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
            <CardTitle className="text-sm font-medium">
              This Month's Spending
            </CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-₹2,350.45</div>
          <p className="text-xs text-muted-foreground">
            -10.2% from last month
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