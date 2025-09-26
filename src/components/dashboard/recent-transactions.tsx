import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";
import type { Transaction } from "@/lib/types";
import { cn } from "@/lib/utils";

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  const recentTransactions = transactions.slice(0, 5);

  const getCategory = (value: string) => {
    return categories.find(c => c.value === value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Recent Transactions</CardTitle>
        <CardDescription>A list of your most recent income and expenses.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((transaction) => {
              const category = getCategory(transaction.category);
              return (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    {category && (
                      <Badge variant="outline" className="border-0">
                        <category.icon className="mr-2 h-4 w-4" style={{ color: category.color }} />
                        {category.label}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-right",
                      transaction.type === "income" ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
