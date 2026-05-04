import { getInquiry } from "@/data/inquiry/get.inquiry";
import { archiveInquiry } from "@/data/inquiry/archive.inquiry";
import { requireAdmin } from "@/lib/auth-context";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Params) {
  const ctx = await requireAdmin();
  if (!ctx) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const inquiry = await getInquiry(slug);
  if (!inquiry) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  return NextResponse.json(inquiry);
}

export async function PATCH(_request: Request, { params }: Params) {
  const ctx = await requireAdmin();
  if (!ctx) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const inquiry = await archiveInquiry(slug);
  if (!inquiry) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  return NextResponse.json(inquiry);
}
