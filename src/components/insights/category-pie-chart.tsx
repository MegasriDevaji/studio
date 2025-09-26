"use client"

import * as React from "react"
import { Pie, PieChart, Sector } from "recharts"

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
  type ChartConfig,
} from "@/components/ui/chart"
import { categories, transactions } from "@/lib/data"

const chartConfig = categories.reduce((acc, category) => {
  acc[category.value] = {
    label: category.label,
    color: category.color,
  };
  return acc;
}, {} as ChartConfig);

export function CategoryPieChart() {
  const data = React.useMemo(() => {
    const categorySpending: { [key: string]: number } = {};
    categories.forEach(c => categorySpending[c.value] = 0);
    
    transactions.forEach(t => {
      if (t.category in categorySpending) {
        categorySpending[t.category] += t.amount;
      }
    });

    return Object.entries(categorySpending).map(([category, value]) => ({
      name: category,
      value,
      fill: `var(--color-${category})`,
    })).filter(item => item.value > 0);
  }, []);

  const id = "pie-chart"

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-headline">Category Breakdown</CardTitle>
        <CardDescription>
          Spending distribution by category
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({ outerRadius = 0, ...props }) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius} />
                </g>
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
