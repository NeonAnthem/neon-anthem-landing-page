import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { Button, buttonVariants } from "./button";

const DEFAULT_CTA_TEXT = "Talk to Us";

function CTAButton({
  children,
  className,
  variant,
  size,
}: PropsWithChildren &
  VariantProps<typeof buttonVariants> & { className?: string }) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("gap-4 font-body font-medium", className)}
    >
      {children ? children : DEFAULT_CTA_TEXT}
      <span className="bg-primary-foreground -m-1 -mr-1.5 p-1">
        <IconArrowRight className="stroke-primary" />
      </span>
    </Button>
  );
}

export { CTAButton };
