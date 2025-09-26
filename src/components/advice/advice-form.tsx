"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getPersonalizedFinancialAdvice } from "@/ai/flows/personalized-financial-advice";
import { transactions } from "@/lib/data";
import { Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const transactionsString = transactions
  .map(
    (t) =>
      `Date: ${t.date.toLocaleDateString()}, Amount: ${t.amount.toFixed(
        2
      )}, Category: ${t.category}, Description: ${t.description}`
  )
  .join("\n");

export function AdviceForm() {
  const [income, setIncome] = useState("5000");
  const [spendingData, setSpendingData] = useState(transactionsString);
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAdvice("");
    setError("");

    if (!income || !spendingData) {
      setError("Please provide both income and spending data.");
      setIsLoading(false);
      return;
    }
    
    try {
      const result = await getPersonalizedFinancialAdvice({
        income: parseFloat(income),
        spendingData,
      });
      setAdvice(result.advice);
    } catch (e) {
      setError("Failed to get advice. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-headline">Your Financial Data</CardTitle>
            <CardDescription>
              Provide your monthly income and spending data for analysis.
              We've pre-filled your recent transactions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income">Monthly Income</Label>
              <Input
                id="income"
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="e.g., 5000"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spending-data">Spending Data</Label>
              <Textarea
                id="spending-data"
                value={spendingData}
                onChange={(e) => setSpendingData(e.target.value)}
                placeholder="Paste your spending data here..."
                className="h-48"
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Advice
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">Personalized Advice</CardTitle>
          <CardDescription>
            Our AI-powered advisor will provide tailored recommendations here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {isLoading && (
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p>Analyzing your data...</p>
              </div>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {advice && (
            <div className="prose prose-sm prose-invert max-w-none text-foreground">
              <p>{advice}</p>
            </div>
          )}
          {!isLoading && !error && !advice && (
             <div className="flex h-full items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Sparkles className="mx-auto h-12 w-12 text-primary/50" />
                <p className="mt-4">Your financial advice will appear here.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
