"use client";

import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProblemV2() {
  return (
    <Section className="mt-29.75">
      <SectionTitle
        title="You're running ads. You're getting traffic. <span class='hidden sm:block'>But the Website isn't closing deals?</span><span class='sm:hidden'>But the Website isn't closing deals?</span>"
        headline="The Challenge"
      />
      <ProblemsComponent />
    </Section>
  );
}

function ProblemsComponent() {
  return (
    <div
      className="mt-8 md:mt-16 grid grid-cols-none sm:grid-cols-2 items-center place-items-center gap-y-8 "
      data-block="contain"
    >
      <ProblemCard description="You've re-designed it twice" />
      <ProblemCard description="Doubled your ad-spend" />
      <ProblemCard description="Website looks amazing, but not converting" />
      <ProblemCard description="Worked with multiple agencies" />
    </div>
  );
}

function ProblemCard({ description }: { description?: string }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-4 -left-4 size-4 bg-foreground border"
        variants={{
          default: {},
          animate: {
            rotate: 180,
            translateX: 16,
            translateY: 16,
          },
        }}
        initial="default"
        animate={isHovered ? "animate" : "default"}
      />
      <div
        className="border max-w-70.75 min-w-70"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-8">
          <p>{description || "You&apos;ve redesigned it twice"}</p>
        </div>
      </div>
    </div>
  );
}
