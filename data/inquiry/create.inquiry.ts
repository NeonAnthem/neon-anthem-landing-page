import { db } from "@/db";
import { inquiryTable } from "@/db/schema";
import type { inquiryFormValidator } from "@/app/(landing-page)/inquiry/_components/inquiry.validation";
import type { z } from "zod";

export type CreateInquiryInput = z.infer<typeof inquiryFormValidator>;

export async function createInquiry(input: CreateInquiryInput) {
  const [inquiry] = await db
    .insert(inquiryTable)
    .values({
      name: input.name,
      email: input.email,
      phoneNumber: input.phoneNumber,
      company: input.company,
      targetAudience: input.targetAudience,
      estimatedBudget: input.estimatedBudget,
      projectTimeline: input.projectTimeline,
    })
    .returning();

  return inquiry;
}
