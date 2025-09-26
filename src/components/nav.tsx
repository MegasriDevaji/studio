"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, LayoutGrid, Settings, Sparkles, Wallet } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/dashboard/transactions", label: "Transactions", icon: Wallet },
  { href: "/dashboard/insights", label: "Insights", icon: BarChart3 },
  { href: "/dashboard/advice", label: "Get Advice", icon: Sparkles },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="p-2 pt-0">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            variant="default"
            size="default"
            isActive={pathname.startsWith(item.href)}
            tooltip={{
              children: item.label,
              side: 'right',
              align: 'center',
            }}
          >
            <Link href={item.href}>
              <item.icon className="size-4" />
              <span className="hidden group-data-[state=expanded]:sm:inline">{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
