import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta.button";
import { Section } from "@/components/ui/section";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <Section>
      <div className="" data-block="contain">
        <div className="relative z-10">
          {/* Watermark */}
          <Image
            src="/assets/neon-anthem/text-logo.svg"
            alt="Neon Anthem Logo fade and used as a watermark"
            width={200}
            height={200}
            className="absolute inset-0 opacity-3 -z-10 h-full w-full object-contain"
          />
          {/* End Watermark */}

          {/* Content */}
          <div className="max-sm:py-24 sm:py-47.75 space-y-6">
            {/* Text */}
            <div className="space-y-1.75">
              <p>No Commitment. No Pitch</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:w-[80%] xl:mx-auto font-medium">
                Your page is losing{" "}
                <span className="capitalize">customers</span> right now.
              </h2>
              <p className="text-sm sm:text-base">
                We&apos;ll tell you exactly where - and why - in 48 hours.
                <br></br>Free structural audit across 5 conversion dimensions.
                <br></br>Clear breakdown. Zero obligation.
              </p>
            </div>
            {/* End Text */}
            {/* CTA */}
            <div className="space-y-">
              {/* Primary CTA */}
              <div className="py-4.75 space-y-2">
                <CTAButton className={"text-lg"}>
                  Get a Free Structural Audit
                </CTAButton>
                <p className="font-medium text-sm">
                  30 seconds to request. 48 hours to deliver.
                </p>
              </div>
              {/* End Primary CTA */}

              <div>
                <Button variant={"outline"} className={"border-foreground"}>
                  Prefer to talk first? Book a call <IconArrowUpRight />
                </Button>
              </div>
            </div>
            {/* End CTA */}
          </div>
          {/* End Content */}
        </div>
      </div>
    </Section>
  );
}
