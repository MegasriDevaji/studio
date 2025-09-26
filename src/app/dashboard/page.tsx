"use client";

import { useState } from "react";
import { OverviewCards } from "@/components/dashboard/overview-cards";
import { QuickAddForm } from "@/components/dashboard/quick-add-form";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { transactions as initialTransactions } from "@/lib/data";
import type { Transaction } from "@/lib/types";

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id' | 'date'>) => {
    const transactionWithId: Transaction = {
      ...newTransaction,
      id: new Date().toISOString(),
      date: new Date(),
    };
    setTransactions(prevTransactions => [transactionWithId, ...prevTransactions].sort((a,b) => b.date.getTime() - a.date.getTime()));
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
