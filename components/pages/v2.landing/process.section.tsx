import { GanttChart } from "@/components/ui/gantt-chart";
import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";

export default function ProcessSection() {
  return (
    <Section className="dark">
      <div className="" data-block="contain">
        <SectionTitle
          variant={"editorial"}
          title="5 Steps. One outcome:<br>A page that converts"
          description="No guesswork. No scope creep.<br>Every Step has a defined output.<br>A structured path from research to revenue."
        />
        <GanttChart className="mt-8" />
      </div>
    </Section>
  );
}
