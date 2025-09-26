"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export function UserNav() {
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  const userInitial = user.displayName ? user.displayName.charAt(0).toUpperCase() : 'D';

  return (
    <div className="flex items-center gap-3">
       <Avatar className="hidden h-9 w-9 group-data-[state=expanded]:sm:block">
        {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />}
        <AvatarFallback>{userInitial}</AvatarFallback>
      </Avatar>
      <div className="hidden flex-1 flex-col overflow-hidden group-data-[state=expanded]:sm:flex">
        <p className="truncate text-sm font-medium">{user.displayName || 'Demo User'}</p>
        <p className="truncate text-xs text-muted-foreground">
          {user.email || 'demo@example.com'}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-9 w-9">
              {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />}
              <AvatarFallback>{userInitial}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || 'Demo User'}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email || 'demo@example.com'}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
