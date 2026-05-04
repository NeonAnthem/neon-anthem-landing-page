import { IInfrastructureSolution } from "@/data/static/infrastruture-solutions.data";
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function InfrastructureCard({
  title,
  description,
  tag,
  cta,
  metrics,
  image,
  reverse,
}: IInfrastructureSolution & { reverse?: boolean }) {
  return (
    <div className="py-8.75">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
        <div className="flex flex-col justify-between">
          {/* Text Content */}
          <div className="space-y-4">
            {/* Tag */}
            <div>
              <CardTag {...tag} />
            </div>
            {/* End Tag */}
            <h3 className="text-foreground text-5xl">{title}</h3>
            <p className="text-accent-foreground/60 w-full xl:w-[60%]">
              {description}
            </p>
          </div>
          {/* End Text Content */}

          {/* Metric Content */}
          <div className="text-foreground">
            <h5 className="text-[33.6px]">{metrics.value}</h5>
            <p className="text-sm sm:text-base">{metrics.tagline}</p>
          </div>
          {/* End Metric Content */}

          {/* CTA */}
          <div className="flex items-center gap-3 text-xl [&>svg]:size-6 text-foreground">
            {cta.label}
            <IconArrowUpRight />
          </div>
          {/* End CTA */}
        </div>

        {/* Image */}
        <div
          className={cn("", {
            "row-start-1": reverse,
          })}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
            className={cn("w-full h-auto rounded-md", image.className)}
          />
        </div>
        {/* End Image */}
      </div>
    </div>
  );
}

function CardTag({ label, color }: IInfrastructureSolution["tag"]) {
  return (
    <div
      className="flex items-center gap-3"
      style={
        {
          "--tag-primary": color,
        } as React.CSSProperties
      }
    >
      <div className="size-2.5 bg-(--tag-primary) outline outline-(--tag-primary) outline-offset-2 rounded-full"></div>
      <div className="text-sm sm:text-base text-foreground">{label}</div>
    </div>
  );
}
