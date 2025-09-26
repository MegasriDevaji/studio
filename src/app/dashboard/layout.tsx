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
import { AuthProvider, useAuth } from '@/hooks/use-auth';
import { redirect } from 'next/navigation';

function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    redirect('/login');
    return null;
  }

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
  )
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </AuthProvider>
  );
}