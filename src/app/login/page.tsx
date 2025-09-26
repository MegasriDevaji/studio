
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <PiggyBank className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 font-headline text-2xl font-bold">Welcome to NightPocket</CardTitle>
          <CardDescription>Your personal wallet tracker.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            {/* This is a placeholder for a real login form */}
            <p className="text-center text-sm text-muted-foreground">
              Login functionality is not yet implemented.
            </p>
            <Button asChild>
              <Link href="/dashboard">Proceed to Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
