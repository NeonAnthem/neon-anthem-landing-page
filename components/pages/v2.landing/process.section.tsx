"use client";

import { GanttChart } from "@/components/ui/gantt-chart";
import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useNavbarStore } from "@/store/navbar-store";
import { useLenis } from "lenis/react";
import { useRef } from "react";

export default function ProcessSection() {
  const setIsDark = useNavbarStore((s) => s.setIsDark);
  const ref = useRef<HTMLDivElement>(null);

  useLenis(({ direction }) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top <= 48) {
      setIsDark(true);
    } else if (direction === -1) {
      setIsDark(false);
    }
  });

  return (
    <div ref={ref}>
      <Section className="dark">
        <div className="" data-block="contain">
          <SectionTitle
            variant={"editorial"}
            headline="Process"
            title="5 Steps. One outcome:<br>A page that converts"
            description="No guesswork. No scope creep.<br>Every Step has a defined output.<br>A structured path from research to revenue."
          />
          <GanttChart className="mt-8" />
        </div>
      </Section>
    </div>
  );
}
