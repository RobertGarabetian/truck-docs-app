"use client";

import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { FileText, Home, LayoutDashboard, Settings } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar className="hidden border-r lg:block">
          <SidebarHeader className="border-b px-6 py-3">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <LayoutDashboard className="h-6 w-6" />
              <span className="text-lg font-bold">TruckDocs</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarNavLink href="/dashboard" icon={Home}>
                Home
              </SidebarNavLink>
              <SidebarNavLink href="/dashboard/documents" icon={FileText}>
                Documents
              </SidebarNavLink>
              <SidebarNavLink href="/dashboard/settings" icon={Settings}>
                Settings
              </SidebarNavLink>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-6">
            <UserButton />
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 bg-background">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}

interface SidebarNavLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  icon: React.ElementType;
}

function SidebarNavLink({
  className,
  icon: Icon,
  ...props
}: SidebarNavLinkProps) {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        className
      )}
      {...props}
    >
      <Icon className="h-4 w-4" />
      <span>{props.children}</span>
    </Link>
  );
}
