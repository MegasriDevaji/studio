import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Nav } from '@/components/nav';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';
import { TransactionsProvider } from '@/hooks/use-transactions';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransactionsProvider>
      <SidebarProvider>
        <div className="flex h-screen w-full bg-background text-foreground">
          <Sidebar>
            <div className="flex h-full flex-col">
              <SidebarHeader>
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <Nav />
              </SidebarContent>
              <SidebarFooter>
                <UserNav />
              </SidebarFooter>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col">
            <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 p-4 backdrop-blur-sm sm:justify-end">
              <SidebarTrigger className="sm:hidden" />
            </header>
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TransactionsProvider>
  );
}
