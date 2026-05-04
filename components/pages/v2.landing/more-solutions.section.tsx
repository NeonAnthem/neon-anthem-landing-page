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
          description="No guesswork. No scope creep.<br>Every Step has a defined output.<br>A structured path from research to revenue."
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
