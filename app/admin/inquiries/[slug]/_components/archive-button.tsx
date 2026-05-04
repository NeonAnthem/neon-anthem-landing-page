"use client";

import { Button } from "@/components/ui/button";
import { IconArchive, IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ArchiveButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleArchive() {
    if (!confirm("Archive this inquiry?")) return;
    setLoading(true);
    try {
      await fetch(`/api/v1/inquiry/${id}`, { method: "PATCH" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleArchive}
      disabled={loading}
    >
      {loading ? (
        <IconLoader2 className="size-4 animate-spin" />
      ) : (
        <IconArchive className="size-4" />
      )}
      Archive
    </Button>
  );
}
