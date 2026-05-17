"use client";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Section } from "@/components/ui/section";
import isProduction from "@/utils/get-environment";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import posthog from "posthog-js";

const isProd = isProduction();

export default function HeroV2() {
  if (isProd) {
  }
  posthog.capture("homepage-capture", {
    timestamp: new Date().toISOString(),
  });

  return (
    <Section className="pt-18 sm:pt-40.75 min-h-screen">
      <Hero />
      <ClientMarqueeComponent />
      <HeroMetrics />
    </Section>
  );
}

function Hero() {
  return (
    <div
      className="text-start grid grid-cols-none md:grid-cols-2 gap-8 sm:gap-0"
      data-block="contain"
    >
      {/* Text area */}
      <div className="text-start space-y-3 place-content-center">
        {/* tagline */}
        <p className="text-sm sm:text-base font-tagline text-accent-foreground/50 font-medium">
          For those who can&apos;t afford to second guess Revenue.
        </p>
        {/* End tagline */}

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-medium text-foreground font-heading">
          We Engineer<br></br> High-Converting<br></br> Landing Pages.
        </h1>
        {/* end Heading */}

        {/* Sub heading */}
        <p className="text-sm sm:text-base mt-2 text-foreground">
          Your Ad-Spend is working. Your Landing Page isn&apos;t. We fix that.
        </p>
        {/* End sub heading */}

        {/* CTA */}
        <div className="mt-4 sm:mt-17.5 w-max">
          <Button className={"rounded-none"}>
            Get our Free Structural Audit <IconArrowRight />
          </Button>
        </div>
        {/* End CTA */}
      </div>
      {/* End Text area */}

      {/* Image area */}
      <div>
        <Image
          src="/assets/showcase/the-mark-media-landing-page-demo.png"
          alt="Neon Anthem's client website hero section showcase"
          width={1000}
          height={1000}
          className="max-w-181.25 max-h-104.75 w-full h-fit lg:h-full object-cover"
        />
      </div>
      {/* End Image area */}
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

function ClientMarqueeComponent() {
  return (
    <div className="md:mt-15.5 w-full overflow-hidden">
      <div className="w-full ml-2 md:ml-28.5 border-t">
        <div className="flex flex-row items-center">
          {/* Tagline */}
          <div className="text-nowrap pr-4 border-r">
            <p className="text-sm">
              Brands we&apos;ve<br></br> worked with
            </p>
          </div>
          {/* End Tagline */}
          {/* Marquee */}
          <div className="relative w-fit flex flex-col items-center justify-center overflow-hidden">
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
          {/* end Marquee */}
        </div>
      </div>
    </div>
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
    <div className="w-full mt-29.5" data-block="contain">
      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-start gap-12 mt-10">
        {/* Conversion design */}

        {metricList?.map((m, index) => {
          return (
            <div key={m.label + index} className="text-center">
              <div className="text-6xl font-semibold font-heading text-nowrap text-accent-foreground">
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

              <p className="text-sm sm:text-base text-nowrap font-sans font-medium">
                {m.label}
              </p>
            </div>
          );
        })}
      </div>
      {/* End Desktop */}
    </div>
  );
}
