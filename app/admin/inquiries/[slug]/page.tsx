import { getInquiry } from "@/data/inquiry/get.inquiry";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArchiveButton } from "./_components/archive-button";

type Props = { params: Promise<{ slug: string }> };

export default async function AdminInquiryDetailPage({ params }: Props) {
  const { slug } = await params;
  const inquiry = await getInquiry(slug);

  if (!inquiry) notFound();

  const company = inquiry.company as {
    name?: string;
    size?: string;
    website?: string;
    description?: string;
    topCompetitors?: string[];
  } | null;

  const phoneNumber = inquiry.phoneNumber as {
    code?: string;
    number?: string;
  } | null;

  const targetAudience = inquiry.targetAudience as {
    ageGroup?: string;
    country?: string[];
    primaryGender?: string;
    incomeRange?: string;
  } | null;

  return (
    <div className="p-8 space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href="/admin/inquiries"
            className="text-xs text-muted-foreground hover:underline mb-1 inline-block"
          >
            ← Back to Inquiries
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            {inquiry.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Submitted {new Date(inquiry.createdAt).toLocaleString()}
            {inquiry.archivedAt && (
              <span className="ml-2 text-amber-600 dark:text-amber-400">
                · Archived {new Date(inquiry.archivedAt).toLocaleDateString()}
              </span>
            )}
          </p>
        </div>
        {!inquiry.archivedAt && <ArchiveButton id={inquiry.id} />}
      </div>

      {/* Contact */}
      <Section title="Contact">
        <Row label="Name" value={inquiry.name} />
        <Row label="Email" value={inquiry.email} />
        <Row
          label="Phone"
          value={
            phoneNumber
              ? `+${phoneNumber.code} ${phoneNumber.number}`
              : "—"
          }
        />
      </Section>

      {/* Company */}
      <Section title="Company">
        <Row label="Brand Name" value={company?.name} />
        <Row label="Size" value={company?.size} />
        <Row label="Website" value={company?.website} />
        <Row label="Description" value={company?.description} />
        <Row
          label="Top Competitors"
          value={
            company?.topCompetitors?.length
              ? company.topCompetitors.join(", ")
              : "—"
          }
        />
      </Section>

      {/* Target Audience */}
      <Section title="Target Audience">
        <Row label="Age Group" value={targetAudience?.ageGroup} />
        <Row label="Primary Gender" value={targetAudience?.primaryGender} />
        <Row label="Income Range" value={targetAudience?.incomeRange} />
        <Row
          label="Countries"
          value={
            targetAudience?.country?.length
              ? targetAudience.country.join(", ")
              : "—"
          }
        />
      </Section>

      {/* Project */}
      <Section title="Project Details">
        <Row label="Estimated Budget" value={inquiry.estimatedBudget} />
        <Row label="Project Timeline" value={inquiry.projectTimeline} />
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border">
      <div className="px-4 py-3 border-b bg-muted/40">
        <h2 className="text-sm font-medium">{title}</h2>
      </div>
      <dl className="divide-y">{children}</dl>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="col-span-2">{value || "—"}</dd>
    </div>
  );
}
