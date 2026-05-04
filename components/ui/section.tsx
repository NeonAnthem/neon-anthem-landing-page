import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Section({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <section
      className={cn(
        "bg-background py-8",
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto",
        "**:data-[block=contain]:px-4 **:data-[block=contain]:text-center", // Mobile Viewport
        "", // Tablet Viewport
        "", // Desktop Viewport
        className,
      )}
    >
      {children}
    </section>
  );
}

export { Section };
