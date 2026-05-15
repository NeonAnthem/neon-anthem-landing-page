import InfrastructureCard from "@/components/ui/infrastrucutre.cards";
import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import INFRASTRUCTURESOLUTIONS from "@/data/static/infrastruture-solutions.data";

export default function MoreSolutionsSection() {
  return (
    <Section className="dark">
      <div className="" data-block="contain">
        {/* Title */}
        <SectionTitle
          title="Not just design but infrastructure that scales."
          description="Solution that go beyond designs.<br>Infrastructure solutions that scale.<br>Pipeline that goes beyond launch."
          variant={"editorial"}
        />
        {/* End Title */}

        {/* Content */}
        <div className="*:my-4 divide-y divide-accent-foreground">
          {INFRASTRUCTURESOLUTIONS?.map((sol, index) => {
            return (
              <InfrastructureCard
                {...sol}
                key={sol.title}
                reverse={index % 2 !== 0}
              />
            );
          })}
        </div>
        {/* End Content */}
      </div>
    </Section>
  );
}
