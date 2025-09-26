import { AdviceForm } from "@/components/advice/advice-form";

export default function AdvicePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Get AI-Powered Advice</h1>
        <p className="text-muted-foreground">
          Analyze your spending habits and get tailored recommendations on budgeting and saving.
        </p>
      </div>
      <AdviceForm />
    </div>
  );
}
