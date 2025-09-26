import { OverviewCards } from "@/components/dashboard/overview-cards";
import { QuickAddForm } from "@/components/dashboard/quick-add-form";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's a quick look at your finances.</p>
      </div>
      <OverviewCards />
      <RecentTransactions />
      <QuickAddForm />
    </div>
  );
}
