import { auth } from "@/utils/auth";
import { headers } from "next/headers";

export type AuthContext = {
  userId: string;
  role: string;
};

/**
 * Resolves the current session from request headers and returns an AuthContext.
 * Returns null when there is no valid session.
 */
export async function getAuthContext(): Promise<AuthContext | null> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return null;

  return {
    userId: session.user.id,
    role: session.user.role ?? "user",
  };
}

/**
 * Asserts that the caller is an admin.
 * Returns the AuthContext on success, or null when the caller is not authenticated or not an admin.
 */
export async function requireAdmin(): Promise<AuthContext | null> {
  const ctx = await getAuthContext();
  if (!ctx || ctx.role !== "admin") return null;
  return ctx;
}
