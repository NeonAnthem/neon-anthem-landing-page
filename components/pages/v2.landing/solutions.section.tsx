import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import ConversionSolutionsCard from "@/components/ui/solutions.card";
import Image from "next/image";

export default function SolutionsSection() {
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
          <ConversionSolutionsCard
            title="Web Development"
            description="75% of B2B buyers judge your credibility
 from your website before they take a call.
 If your site doesn't convert, nothing else
 in your funnel will."
            metrics={[
              {
                label: "Conversion-Engineered From the First Scroll",
                tagline:
                  "Every section, every headline, every CTA is built with one goal — moving the visitor closer to a decision. Not just looking good",
              },
              {
                label: "Built for the Buyer. Not the Designer.",
                tagline:
                  "We design around how your buyer thinks, what they need to see, and what removes their hesitation — before they bounce.",
              },
            ]}
            cta={{
              label: "Get the Free Audit",
              tagline: "See if your current site is costing you leads.",
              href: "",
            }}
          >
            <Image
              src="/assets/showcase/web-development-solution.png"
              alt="Work showcase"
              width={800}
              height={800}
              className="translate-x-1/3"
            />
          </ConversionSolutionsCard>
          <ConversionSolutionsCard
            title="Conversion Strategy"
            description="You're spending on ads. The pipeline isn't growing.
 The problem isn't your creative — it's that nobody
 has told you exactly where your market is, who can
 afford you, and what it takes to reach them."
            metrics={[
              {
                label: "Full Market Intelligience",
                tagline:
                  "Before you Spend we identify your primary market, map competitor gaps, and find the audiences your budget can actually convert - by geography, by affordability, by buying trigger.",
              },
              {
                label: "A 90-day Strategic Playbook",
                tagline:
                  "Not a PDF you file away. Every recommendation comes with a clear first move. Channel by channel. Week by Week. Your team executes on Monday - not after another strategy call.",
              },
            ]}
            cta={{
              label: "Get the Free Audit",
              tagline:
                "We'll identify your biggest conversion leak before the call ends.",
              href: "",
            }}
          >
            <Image
              className="rotate-6 w-max"
              src="/assets/showcase/conversion-strategy-book.png"
              alt="A Mockup of Neon Anthem's Conversion Strategy 90-Day Strategic Execution plan"
              width={1000}
              height={1000}
            />
          </ConversionSolutionsCard>
        </div>
        {/* End Content */}
      </div>
    </Section>
  );
}
