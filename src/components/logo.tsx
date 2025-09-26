import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/dashboard" className={cn("flex items-center gap-2", className)}>
      <svg viewBox="0 0 100 100" className="h-8 w-8 text-primary">
        <path
          fill="currentColor"
          d="M50 5C25.15 5 5 25.15 5 50s20.15 45 45 45 45-20.15 45-45S74.85 5 50 5zm0 82.5C29.32 87.5 12.5 70.68 12.5 50S29.32 12.5 50 12.5 87.5 29.32 87.5 50 70.68 87.5 50 87.5z"
        />
        <path
          fill="hsl(var(--accent))"
          d="M50 20c-16.57 0-30 13.43-30 30s13.43 30 30 30c1.85 0 3.65-.17 5.39-.5A22.5 22.5 0 0150 57.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c1.85 0 3.53.67 4.83 1.77A29.88 29.88 0 0050 20z"
        />
      </svg>
      <span className="font-headline text-xl font-bold text-primary-foreground hidden group-data-[state=expanded]:sm:inline">NightPocket</span>
    </Link>
  );
}
