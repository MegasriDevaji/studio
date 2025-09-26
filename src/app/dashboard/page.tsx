"use client";

import { OverviewCards } from "@/components/dashboard/overview-cards";
import { QuickAddForm } from "@/components/dashboard/quick-add-form";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { useTransactions } from "@/hooks/use-transactions";
import type { Transaction } from "@/lib/types";

export default function DashboardPage() {
  const { transactions, addTransaction } = useTransactions();

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id' | 'date'>) => {
    addTransaction(newTransaction);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's a quick look at your finances.</p>
      </div>
      <OverviewCards transactions={transactions}/>
      <RecentTransactions transactions={transactions} />
      <QuickAddForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}
