import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import ConversionSolutionsCard from "@/components/ui/solutions.card";
import SOLUTIONS from "@/data/static/solutions.data";
import Image from "next/image";

export default function SolutionsSection() {
  const featuredSolutions = SOLUTIONS.filter((s) => s.isFeatured);

  return (
    <Section>
      <SectionTitle
        headline="Solutions we offer"
        title="Two Things Kill Growth.
            Wrong Design. Wrong Strategy.
            We Fix Both."
        description="Most companies have one without the other. A site that looks good but doesn't convert. A strategy that sounds right but misses the market. We don't let that happen."
        variant={"editorial"}
      />

      <div className="py-8" data-block="contain">
        {/* Content */}
        <div className="space-y-8">
          {featuredSolutions?.map((sol, index) => {
            return (
              <ConversionSolutionsCard
                title={sol.title}
                description={sol.description}
                cta={sol.cta}
                metrics={sol.metrics}
                image={sol.image}
                isFeatured={sol.isFeatured}
                key={index}
              >
                <Image
                  src={sol.image.src}
                  alt={sol.image.alt}
                  width={800}
                  height={800}
                  className={sol.image.className}
                />
              </ConversionSolutionsCard>
            );
          })}
        </div>
        {/* End Content */}
      </div>
    </Section>
  );
}
