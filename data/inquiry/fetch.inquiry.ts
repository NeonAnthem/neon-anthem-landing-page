import { db } from "@/db";
import { inquiryTable } from "@/db/schema";
import { isNull, desc } from "drizzle-orm";

export async function fetchInquiries() {
  return db
    .select()
    .from(inquiryTable)
    .where(isNull(inquiryTable.archivedAt))
    .orderBy(desc(inquiryTable.createdAt));
}
