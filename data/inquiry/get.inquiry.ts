import { db } from "@/db";
import { inquiryTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getInquiry(id: string) {
  const [inquiry] = await db
    .select()
    .from(inquiryTable)
    .where(eq(inquiryTable.id, id))
    .limit(1);

  return inquiry ?? null;
}
