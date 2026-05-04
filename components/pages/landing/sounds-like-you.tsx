"use client";

import { TypographyBlockquote } from "@/components/ui/blockquote";
import { Progress } from "@/components/ui/progress";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export default function SoundsLikeYouSection() {
  return (
    <section className="border-t min-h-screen">
      <div className="py-24" data-block="contain">
        {/* <Heading /> */}
        <TabsSection />
      </div>
    </section>
  );
}

function TabsSection() {
  return (
    <div className="">
      <Tabs className={"w-full"}>
        <TabsList
          className={
            "relative **:[&>p]:text-sm **:[&>p]:sm:text-lg **:[&>p]:mx-4 w-max mx-auto rounded-full *:rounded-full"
          }
        >
          <div className="absolute -top-14 xl:-left-[calc(100%)] xl:top-1/2 xl:-translate-y-1/2">
            <span className="flex font-geist items-center text-2xl! font-bold uppercase text-foreground [&>svg]:size-8 sm:[&>svg]:size-10 [&>svg]:text-foreground/80 gap-2">
              Sounds like you?
              <IconArrowRight className="hidden xl:block" />
              <IconArrowDown className="block xl:hidden" />
            </span>
          </div>
          <TabsTrigger value="startup">
            <p>Series A-B Startups</p>
          </TabsTrigger>
          <TabsTrigger value="b2b">
            <p>Established B2Bs</p>
          </TabsTrigger>
        </TabsList>

        <div className="md:mt-12">
          <TabsContent value="startup">
            <CardContent
              tag="Startups"
              title="Your page looks good. That's not the problem."
              description="Your ads are running. Traffic is coming in. But the page isn't converting at the rate your deck projected. You need conversion engineering — not another redesign."
              quote="We raised our Series A and our CAC is still climbing. We've
          redesigned the page twice."
              cta="Get a Free Structural Audit"
              metrics={[
                {
                  label: "Above-fold Clarity",
                  range: 25,
                },
                {
                  label: "CTA Strength",
                  range: 15,
                },
                {
                  label: "Page Load speed",
                  range: 60,
                },
                {
                  label: "Value Proposition",
                  range: 50,
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="b2b">
            <CardContent
              tag="Legacy B2B"
              title="Your product is proven. Your page isn't showing it."
              description="You've been in business for years. But your website was built in 2019 and your competitors are closing deals with sharper acquisition funnels. Time to catch up — without breaking what works."
              quote="We know our product is great. Our page just doesn't communicate it."
              cta="See How A Revamp Works"
              metrics={[
                {
                  range: 20,
                  label: "Mobile Experience",
                },
                {
                  range: 30,
                  label: "Messaging Clarity",
                },
                { range: 60, label: "Brand Consistency" },
                { range: 30, label: "Conversion Flow" },
              ]}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

function Card({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-16 mx-3 md:mx-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardContent({
  tag,
  title,
  description,
  quote,
  cta,
  metrics,
}: {
  tag: string;
  title: string;
  description: string;
  quote: string;
  cta: string;
  metrics: { range: number; label: string }[];
}) {
  return (
    <Card className="overflow-x-hidden">
      <div className="flex flex-col items-start space-y-2 md:space-y-4">
        {/* Tag */}
        <span className="bg-accent font-semibold border text-xs md:text-base rounded-full px-3 py-1">
          {tag}
        </span>
        {/* Tag */}
        {/* Title */}
        <h3 className="text-3xl md:text-6xl font-bold leading-8 md:leading-16">
          {title}
        </h3>
        {/* End Title */}
        {/* Description */}
        <p className="text-sm md:text-lg text-accent-foreground/60">
          {description}
        </p>
        {/* End description */}

        {/* Block Quote */}
        <TypographyBlockquote className="text-sm md:text-lg text-accent-foreground/60 font-medium">
          &quot;{quote}&quot;
        </TypographyBlockquote>
        {/* end Block Quote */}

        {/* CTA */}
        <div className="mt-4 md:mt-8">
          <ShimmerButton className="h-8 px-3 font-medium">
            {cta} <IconArrowRight className="size-4" />
          </ShimmerButton>
        </div>
      </div>

      {/* Metrics */}
      <div className="">
        <MetricsContent metrics={metrics} />
      </div>
      {/* End Metrics */}
    </Card>
  );
}

const tagVariants = cva("size-3 rounded-full", {
  variants: {
    variant: {
      low: "bg-red-500",
      medium: "bg-orange-400",
      high: "bg-green-600",
    },
  },
});

function Metrics({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-fit outline outline-border md:w-[80%] p-6 mx-auto mt-3 md:mt-0",
        className,
      )}
    >
      {children}
      {/*  */}
      <div className="absolute w-[20%] h-px -top-px right-full -bg-linear-90 from-red-600 to-red-800"></div>
      <div className="absolute w-[20%] h-px -bottom-px right-full -bg-linear-90 from-border to-border/80"></div>
      {/*  */}
      <div className="absolute w-px h-[40%] top-full -right-px bg-linear-180 from-border to-border/80"></div>
      <div className="absolute w-px h-[40%] top-full -left-px bg-linear-180 from-border to-border/80"></div>
      {/*  */}
      <div className="absolute w-[20%] h-px -top-px left-full bg-linear-90 from-border to-border/80"></div>
      <div className="absolute w-[20%] h-px -bottom-px left-full bg-linear-90 from-border to-border/80"></div>
      {/*  */}
      <div className="absolute w-px h-[40%] bottom-full -right-px bg-linear-0 from-border to-border/80"></div>
      <div className="absolute w-px h-[40%] bottom-full -left-px bg-linear-0 from-border to-border/80"></div>
      {/*  */}
    </div>
  );
}

function MetricsContent({
  metrics,
}: {
  metrics: { label: string; range: number }[];
}) {
  return (
    <Metrics className="">
      <h5 className="uppercase font-mono tracking-widest font-medium text-base">
        Common Gaps we find
      </h5>
      {/*  */}
      <div className="flex flex-col items-start w-full py-4 space-y-2">
        {metrics?.map((item) => {
          let variant: VariantProps<typeof tagVariants>["variant"] = "low";

          if (item.range > 30 && item.range < 70) {
            variant = "medium";
          } else if (item.range > 71) {
            variant = "high";
          }

          return (
            <div
              className="w-full grid grid-cols-2 gap-3 items-center"
              key={item.label}
            >
              {/* Text */}
              <div className="flex items-center gap-2">
                <span className={cn("", tagVariants({ variant }))}></span>
                <h6 className="text-xs text-nowrap md:text-base font-medium capitalize">
                  {item.label}
                </h6>
              </div>
              {/* End Text */}
              {/* Progress */}
              <div className="w-full">
                <Progress value={item.range} />
              </div>
              {/* End Progress */}
            </div>
          );
        })}
      </div>
      {/*  */}
      <p className="text-accent-foreground/60 capitalize">
        These are the 4 dimensions we audit first
      </p>
    </Metrics>
  );
}
