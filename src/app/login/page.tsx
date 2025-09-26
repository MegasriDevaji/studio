
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cat } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Cat className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 font-headline text-2xl font-bold">Welcome to Cash Cat</CardTitle>
          <CardDescription>Your personal wallet tracker.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" defaultValue="demo@example.com" />
            </div>
            {/* This is a placeholder for a real login form */}
            <p className="text-center text-sm text-muted-foreground">
              Login functionality is for demo purposes.
            </p>
            <Button asChild>
              <Link href="/dashboard">Proceed to Dashboard</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
