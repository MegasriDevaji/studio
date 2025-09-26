import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PiggyBank } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/dashboard" className={cn("flex items-center gap-2", className)}>
      <PiggyBank className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-primary-foreground hidden group-data-[state=expanded]:sm:inline">NightPocket</span>
    </Link>
  );
}
