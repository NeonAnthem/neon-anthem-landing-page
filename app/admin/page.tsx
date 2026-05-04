import { db } from "@/db";
import { auth } from "@/utils/auth";
import { IconShield, IconUsers } from "@tabler/icons-react";
import { sql } from "drizzle-orm";
import { headers } from "next/headers";

type UserStats = { total: number; admins: number; banned: number };

export default async function AdminDashboardPage() {
  const [session, statsResult] = await Promise.all([
    auth.api.getSession({ headers: await headers() }),
    db.execute<UserStats>(
      sql`SELECT
        count(*)::int                                             AS total,
        count(*) FILTER (WHERE role = 'admin')::int              AS admins,
        count(*) FILTER (WHERE banned = true)::int               AS banned
      FROM "user"`,
    ),
  ]);

  const stats: UserStats = statsResult[0] ?? { total: 0, admins: 0, banned: 0 };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back, {session?.user.name ?? session?.user.email}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Total users"
          value={stats.total}
          icon={<IconUsers className="size-5 text-muted-foreground" />}
        />
        <StatCard
          label="Admins"
          value={stats.admins}
          icon={<IconShield className="size-5 text-muted-foreground" />}
        />
        <StatCard
          label="Banned"
          value={stats.banned}
          icon={<span className="text-base leading-none">⛔</span>}
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border bg-card p-5 flex items-center gap-4">
      <div className="size-10 rounded-md bg-muted flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
