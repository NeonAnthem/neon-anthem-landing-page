import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const DEFAULT_CTA_TEXT = "Talk to Us";

const ctaButtonVariants = cva(
  "flex items-center gap-2 [&>svg]:size-4 py-1 px-2 font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-background",
      },
      mode: {
        default: "rounded-xs",
        rounded: "rounded-full px-3!",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function CTAButton({
  children,
  className,
  mode,
  variant,
}: PropsWithChildren &
  VariantProps<typeof ctaButtonVariants> & { className?: string }) {
  return (
    <button className={cn("", ctaButtonVariants({ className, mode, variant }))}>
      {children ? children : DEFAULT_CTA_TEXT}

      <span className="rounded-full p-1 bg-foreground">
        <IconArrowRight className="size-4" />
      </span>
    </button>
  );
}

export { CTAButton };
