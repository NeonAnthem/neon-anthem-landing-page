"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { CTAButton } from "@/components/ui/cta.button";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Section } from "@/components/ui/section";
import DesignAndDev from "@/components/vectors/design-and-dev";

function Hero() {
  return (
    <div className="mt-24 bg-foreground px-4 sm:px-12 xl:px-16 py-4">
      <div data-block="contain">
        <DesignAndDev />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <Section className="h-screen relative">
      {/* <Hero /> */}
      {/* Hero Section */}
      <div className="pt-24 sm:pt-48 text-center" data-block="contain">
        {/* Tag Line */}
        <div className="w-[80%] mx-auto">
          <AnimatedShinyText>
            For Series A-B startups and Legacy B2Bs who can&apos;t afford to
            guess.
          </AnimatedShinyText>
        </div>
        {/* End Tag LIne */}
        {/* Heading */}
        <div className="text-4xl mx-auto text-center w-max sm:text-8xl my-8">
          We Engineer<br></br>{" "}
          <div className="flex font-semibold items-center justify-center">
            {" "}
            High-Converting
          </div>
          Landing Pages.
        </div>
        {/* End Heading */}

        {/* Sub heading */}
        <div className="">
          <p className="text-sm sm:text-xl text-accent-foreground/60 w-[80%] sm:w-full mx-auto">
            Your ad spend is working. Your landing page isn&apos;t. We fix that.
          </p>
        </div>
        {/* End Sub heading */}

        {/* CTA */}
        <div className="w-max mx-auto mt-10">
          <CTAButton
            className="capitalize text-sm sm:text-base"
            mode={"rounded"}
          >
            Get our free structural audit
          </CTAButton>
        </div>
        {/* End CTA */}
      </div>

      <HeroMetrics />

      {/* Hero Fold */}
      <div className="absolute bottom-0 left-0 right-0">
        <HeroFold />
      </div>
      {/* End Hero Fold */}
      {/* End Hero Section */}
    </Section>
  );
}

const metricList: {
  label: string;
  value:
    | { val: number; suffix?: string; prefix?: string; decimalPlace?: number }
    | string;
}[] = [
  {
    label: "Avg. Demo request",
    value: {
      val: 3.1,
      suffix: "x",
      decimalPlace: 1,
    },
  },
  {
    label: "Avg. Delivery Time",
    value: {
      val: 14,
      prefix: "<",
      suffix: "d",
    },
  },
  {
    label: "Conversion-first design",
    value: {
      val: 100,
      suffix: "%",
    },
  },
];

function HeroMetrics() {
  return (
    <div className="w-max!" data-block="contain">
      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-12 mt-10">
        {/* Conversion design */}

        {metricList?.map((m, index) => {
          return (
            <div key={m.label + index} className="text-center">
              <div className="text-6xl font-semibold text-nowrap text-accent-foreground">
                {typeof m.value === "object" ? (
                  <span className="flex items-center gap-0.5 ">
                    {m.value.prefix && <p>{m.value.prefix}</p>}
                    <NumberTicker
                      className="text-inherit"
                      value={m.value.val}
                      decimalPlaces={m.value.decimalPlace}
                    />
                    {m.value.suffix && <p>{m.value.suffix}</p>}
                  </span>
                ) : (
                  <h6>{m.value}</h6>
                )}
              </div>

              <p className="text-sm sm:text-base text-nowrap">{m.label}</p>
            </div>
          );
        })}
      </div>
      {/* End Desktop */}
    </div>
  );
}

const clientList: { name: string; image?: string }[] = [
  {
    name: "The Mark Media",
    image: "",
  },
  {
    name: "Gudsman",
    image: "",
  },
  {
    name: "CoastlineERP",
    image: "",
  },
  {
    name: "Propertyscape.in",
    image: "",
  },
  {
    name: "Typeframe",
    image: "",
  },
];

function HeroFold() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-8">
      {/*  */}
      <div>
        <div className="ml-4 w-max sm:ml-0" data-block="contain">
          <p className="text-accent-foreground/60 font-medium font-mono uppercase">
            As seen building for
          </p>
        </div>
        {/*  */}
        <div className="relative w-screen flex flex-col items-center justify-center overflow-hidden">
          <Marquee reverse>
            {clientList?.map((client) => {
              return (
                <div key={client.name}>
                  <div className="w-44 flex items-center justify-center text-accent-foreground/60 text-lg text-nowrap">
                    {client.name}
                  </div>
                </div>
              );
            })}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </div>
      {/* End Clients */}
    </div>
  );
}
