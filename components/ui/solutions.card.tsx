import { IFeaturedSolution } from "@/data/static/featured-solutions.data";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export default function ConversionSolutionsCard({
  children,
  ...data
}: IFeaturedSolution & PropsWithChildren) {
  return (
    <div className="border rounded-md p-4 sm:p-6 py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Content */}
        <div>
          {/* Header */}
          <div className="text-center sm:text-start space-y-5.75">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
              {data.title}
            </h3>
            <p className="">{data.description}</p>
          </div>
          {/* End Header */}

          {/* Metrics */}
          <div className="flex flex-col gap-3 my-12">
            <MetricCard {...data.metrics?.[0]} />
            <MetricCard {...data.metrics?.[1]} />
          </div>
          {/* End Metrics */}

          {/* CTA */}
          <div>
            <button className="flex items-center gap-1 text-lg [&>svg]:size-4">
              {data.cta.label}
              <IconArrowRight />
            </button>
          </div>
          {/* End CTA */}
        </div>
        {/* End Content */}

        {/* Images */}
        <div className="">{children}</div>
        {/* End Images */}
      </div>
    </div>
  );
}

function MetricCard({ label, tagline }: IFeaturedSolution["metrics"][0]) {
  return (
    <div className="flex items-start gap-2">
      {/* Icon */}
      <div>
        <IconCircleCheck className="size-4 mt-1.5 text-accent-foreground/60" />
      </div>
      {/* End Icon */}

      {/* Content */}
      <div className="text-start text-foreground">
        <h5 className="text-lg font-medium ">{label}</h5>
        <p className="text-accent-foreground/55">{tagline}</p>
      </div>
      {/* End Content */}
    </div>
  );
}
