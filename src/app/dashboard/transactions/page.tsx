'use client';

import { TransactionsTable } from "@/components/transactions/transactions-table";
import { useTransactions } from "@/hooks/use-transactions";

export default function TransactionsPage() {
  const { transactions } = useTransactions();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">View and manage your expense history.</p>
      </div>
      <TransactionsTable data={transactions} />
    </div>
  );
}
