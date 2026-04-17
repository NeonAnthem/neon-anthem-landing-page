CREATE TABLE "inquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"phone_number" jsonb,
	"email" text NOT NULL,
	"company" jsonb,
	"target_audience" jsonb,
	"estimated_budget" text,
	"project_timeline" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"archived_at" timestamp
);
