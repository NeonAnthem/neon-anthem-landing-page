"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/utils/auth-client";
import {
  IconBan,
  IconLoader2,
  IconShield,
  IconShieldOff,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import CreateUserDialog from "./create-user-dialog";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role?: string | null;
  banned?: boolean | null;
  banReason?: string | null;
  createdAt: Date;
};

export default function UsersTable() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    const { data } = await authClient.admin.listUsers({ query: { limit: 100 } });
    setUsers((data?.users as AdminUser[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  async function withAction(userId: string, fn: () => Promise<void>) {
    setActionLoading(userId);
    try {
      await fn();
      await loadUsers();
    } finally {
      setActionLoading(null);
    }
  }

  async function handleSetRole(userId: string, role: "admin" | "user") {
    await withAction(userId, async () => {
      await authClient.admin.setRole({ userId, role });
    });
  }

  async function handleBan(userId: string) {
    await withAction(userId, async () => {
      await authClient.admin.banUser({ userId });
    });
  }

  async function handleUnban(userId: string) {
    await withAction(userId, async () => {
      await authClient.admin.unbanUser({ userId });
    });
  }

  async function handleDelete(userId: string) {
    if (!confirm("Delete this user? This cannot be undone.")) return;
    await withAction(userId, async () => {
      await authClient.admin.removeUser({ userId });
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground">
            {loading ? "Loading…" : `${users.length} total`}
          </p>
        </div>
        <CreateUserDialog onCreated={loadUsers} />
      </div>

      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                User
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Role
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Joined
              </th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  <IconLoader2 className="size-4 animate-spin inline-block mr-2" />
                  Loading users…
                </td>
              </tr>
            )}
            {!loading && users.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No users found.
                </td>
              </tr>
            )}
            {users.map((user) => {
              const isProcessing = actionLoading === user.id;
              return (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <IconUser className="size-3.5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium leading-tight">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        user.role === "admin"
                          ? "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                          : "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      }
                    >
                      {user.role === "admin" ? (
                        <IconShield className="size-3" />
                      ) : (
                        <IconUser className="size-3" />
                      )}
                      {user.role ?? "user"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {user.banned ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                        <IconBan className="size-3" />
                        Banned
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {isProcessing ? (
                        <IconLoader2 className="size-4 animate-spin text-muted-foreground" />
                      ) : (
                        <>
                          {user.role === "admin" ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs"
                              onClick={() => handleSetRole(user.id, "user")}
                              title="Demote to user"
                            >
                              <IconShieldOff className="size-3.5" />
                              Demote
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs"
                              onClick={() => handleSetRole(user.id, "admin")}
                              title="Promote to admin"
                            >
                              <IconShield className="size-3.5" />
                              Promote
                            </Button>
                          )}
                          {user.banned ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs"
                              onClick={() => handleUnban(user.id)}
                            >
                              Unban
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                              onClick={() => handleBan(user.id)}
                            >
                              <IconBan className="size-3.5" />
                              Ban
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                            onClick={() => handleDelete(user.id)}
                          >
                            <IconTrash className="size-3.5" />
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
