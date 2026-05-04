import { adminClient, magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const BASE_URL = process.env.BETTER_AUTH_URL || "http://localhost:3002";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: BASE_URL,
  plugins: [magicLinkClient(), adminClient()],
});
