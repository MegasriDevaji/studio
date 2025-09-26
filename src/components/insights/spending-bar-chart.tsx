"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"
import { useTransactions } from "@/hooks/use-transactions"
import { useMemo } from "react"
import { format, subDays, startOfDay } from "date-fns"

const chartConfig = {
  spending: {
    label: "Spending",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function SpendingBarChart() {
  const { transactions } = useTransactions();

  const data = useMemo(() => {
    const weeklyData: { [key: string]: number } = {};
    const today = startOfDay(new Date());
    for (let i = 0; i < 7; i++) {
      const day = subDays(today, i);
      const dayKey = format(day, "yyyy-MM-dd");
      weeklyData[dayKey] = 0;
    }

    transactions.forEach(t => {
      if(t.type === 'expense') {
        const dayKey = format(t.date, "yyyy-MM-dd");
        if (dayKey in weeklyData) {
          weeklyData[dayKey] += t.amount;
        }
      }
    });

    return Object.entries(weeklyData)
      .map(([date, spending]) => ({ date, spending }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(d => ({...d, date: format(new Date(d.date), "MMM d")}));

  }, [transactions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Weekly Spending</CardTitle>
        <CardDescription>Your spending over the last 7 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={data} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickFormatter={(value) => `₹${value}`}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="spending" fill="var(--color-spending)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
