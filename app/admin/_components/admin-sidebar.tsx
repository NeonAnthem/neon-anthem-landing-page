"use client";

import { cn } from "@/lib/utils";
import { authClient } from "@/utils/auth-client";
import {
  IconInbox,
  IconLayoutDashboard,
  IconLogout,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: IconLayoutDashboard },
  { href: "/admin/users", label: "Users", icon: IconUsers },
  { href: "/admin/inquiries", label: "Inquiries", icon: IconInbox },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <aside className="w-56 shrink-0 flex flex-col border-r bg-muted/40 h-screen sticky top-0">
      <div className="px-4 py-5 border-b">
        <p className="text-sm font-semibold tracking-tight">Neon Anthem</p>
        <p className="text-xs text-muted-foreground">Admin Panel</p>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              pathname === href
                ? "bg-background text-foreground font-medium shadow-sm"
                : "text-muted-foreground hover:bg-background hover:text-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-2 py-4 border-t">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
        >
          <IconLogout className="size-4 shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
