import { db } from "@/db";
import { inquiryTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function archiveInquiry(id: string) {
  const [inquiry] = await db
    .update(inquiryTable)
    .set({ archivedAt: new Date() })
    .where(eq(inquiryTable.id, id))
    .returning();

  return inquiry ?? null;
}
