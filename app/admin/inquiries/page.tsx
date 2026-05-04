import { fetchInquiries } from "@/data/inquiry/fetch.inquiry";
import { IconInbox } from "@tabler/icons-react";
import Link from "next/link";

export default async function AdminInquiriesPage() {
  const inquiries = await fetchInquiries();

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Inquiries</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {inquiries.length} active {inquiries.length === 1 ? "inquiry" : "inquiries"}
        </p>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Contact
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Company
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Budget
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Timeline
              </th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                Received
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {inquiries.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  <IconInbox className="size-6 mx-auto mb-2 opacity-40" />
                  No inquiries yet.
                </td>
              </tr>
            )}
            {inquiries.map((inquiry) => {
              const company = inquiry.company as { name?: string } | null;
              return (
                <tr
                  key={inquiry.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/inquiries/${inquiry.id}`}
                      className="hover:underline font-medium"
                    >
                      {inquiry.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {inquiry.email}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {company?.name ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {inquiry.estimatedBudget ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {inquiry.projectTimeline ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
