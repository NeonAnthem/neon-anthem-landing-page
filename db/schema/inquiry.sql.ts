import * as s from "drizzle-orm/pg-core";

export const inquiryTable = s.pgTable("inquiries", {
  id: s.uuid().defaultRandom().primaryKey(),
  name: s.text("name").notNull(),
  phoneNumber: s.jsonb("phone_number"),
  email: s.text("email").notNull(),

  company: s.jsonb("company"),
  targetAudience: s.jsonb("target_audience"),
  estimatedBudget: s.text("estimated_budget"),
  projectTimeline: s.text("project_timeline"),
});
