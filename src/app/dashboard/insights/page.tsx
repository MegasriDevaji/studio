import { CategoryPieChart } from "@/components/insights/category-pie-chart";
import { SpendingBarChart } from "@/components/insights/spending-bar-chart";

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Insights</h1>
        <p className="text-muted-foreground">Visualize your spending patterns.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <SpendingBarChart />
        <CategoryPieChart />
      </div>
    </div>
  );
}
