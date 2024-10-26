// // /app/dashboard/layout.tsx
// "use client";

// import React from "react";
// import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-screen w-screen">
//       {/* Side Navigation */}
//       <nav className="w-64 bg-white text-black flex flex-col border-r-2 border-blue-400 p-4 space-y-4">
//         <ul className=" flex-1 menu  rounded-box bg-transparent">
//           <li className="space-y-4">
//             <Link
//               href={"/dashboard"}
//               className=" menu-title text-xl font-bold text-blue-600"
//             >
//               TruckDocs
//             </Link>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/dashboard"
//                   className={`block py-2.5 px-4 hover:bg-slate-300 `}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/dashboard/documents"
//                   className={`block py-2.5 px-4 hover:bg-slate-300 `}
//                 >
//                   Documents
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/dashboard/settings"
//                   className={`block py-2.5 px-4 hover:bg-slate-300 `}
//                 >
//                   Settings
//                 </Link>
//               </li>
//               <li className="block py-2.5 px-4 hover:bg-slate-300 ">
//                 <UserButton />
//               </li>
//             </ul>
//           </li>
//           {/* Add more navigation items here */}
//         </ul>
//         <div className="p-6"></div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-slate-200 overflow-auto">{children}</main>
//     </div>
//   );
// }
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
            <UserButton afterSignOutUrl="/" />
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto p-6 md:p-8 lg:p-12">{children}</div>
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
