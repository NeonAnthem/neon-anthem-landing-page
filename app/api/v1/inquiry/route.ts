import { createInquiry } from "@/data/inquiry/create.inquiry";
import { fetchInquiries } from "@/data/inquiry/fetch.inquiry";
import { requireAdmin } from "@/lib/auth-context";
import { inquiryFormValidator } from "@/app/(landing-page)/inquiry/_components/inquiry.validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = inquiryFormValidator.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid inquiry data", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const inquiry = await createInquiry(parsed.data);
  return NextResponse.json(inquiry, { status: 201 });
}

export async function GET() {
  const ctx = await requireAdmin();
  if (!ctx) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const inquiries = await fetchInquiries();
  return NextResponse.json(inquiries);
}
