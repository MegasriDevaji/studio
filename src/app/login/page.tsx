"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login failed", error);
      // Optionally show an error message to the user
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Cat className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 font-headline text-2xl font-bold">Welcome to Cash Cat</CardTitle>
          <CardDescription>Your personal wallet tracker.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Button onClick={handleLogin} disabled={loading}>
              {loading ? "Signing in..." : "Sign in with Google"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Sign in to manage your finances.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
