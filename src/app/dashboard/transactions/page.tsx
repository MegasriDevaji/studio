import { TransactionsTable } from "@/components/transactions/transactions-table";
import { transactions } from "@/lib/data";

export default function TransactionsPage() {
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
