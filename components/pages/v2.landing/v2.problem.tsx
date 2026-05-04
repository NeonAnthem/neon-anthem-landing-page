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
      <ProblemCard />
      <ProblemCard />
      <ProblemCard />
      <ProblemCard />
    </div>
  );
}

function ProblemCard() {
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
        className="border w-max"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-8">
          <p>You&apos;ve redesigned it twice</p>
        </div>
      </div>
    </div>
  );
}
