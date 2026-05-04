import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface ISectionTitleProps {
  title: string;
  headline?: string;
  description?: string;
}

const sectionTitleVariants = cva("", {
  variants: {
    variant: {
      default: "",
      editorial: "",
    },
  },
});

export default function SectionTitle({
  title,
  headline,
  description,
  variant,
}: ISectionTitleProps & VariantProps<typeof sectionTitleVariants>) {
  return (
    <div
      className={cn("", {
        "text-center": variant === "default",
        "flex flex-col md:flex-row sm:items-center text-start sm:justify-between":
          variant === "editorial",
      })}
      data-block="contain"
    >
      <div className="text-start">
        <p className={cn("text-sm md:text-[1rem] text-foreground")}>
          {headline}
        </p>
        <h2
          className={cn(
            "text-[20px] md:text-[36px] font-medium text-foreground",
            {
              "text-start": variant === "editorial",
            },
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      {/*  */}
      {description ? (
        <div
          className={cn("text-foreground", {
            hidden: variant === "default",
            "text-start": variant === "editorial",
          })}
        >
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : null}

      {/*  */}
    </div>
  );
}
