import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import CLIENTWORKDATA, { IClientWork } from "@/data/static/client-work.data";
import Image from "next/image";
import { JSX } from "react";

export default function ClientWorkSection() {
  return (
    <Section className="dark">
      <div className="" data-block="contain">
        {/* Title */}
        <SectionTitle
          variant={"editorial"}
          headline="Client work"
          title="Engineered for conversion.<br>Built to last."
          description="Every project starts with a problem.<br>Every page we ship is the answer."
        />
        {/* End title */}

        {/* Content */}
        <div className="my-8 space-y-10">
          {CLIENTWORKDATA?.map((client) => {
            return <WorkCard {...client} key={client.label} />;
          })}
        </div>
        {/* End Content */}
      </div>
    </Section>
  );
}

function WorkCard({ ...client }: IClientWork) {
  return (
    <div className="h-fit w-full">
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-8 h-fit overflow-hidden">
        {/* Primary Showcase */}
        <div className="w-full min-w-0 max-md:aspect-video md:h-full">
          <Image
            src={client.primaryImage.src}
            alt={client.primaryImage.alt}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        {/* End Primary Showcase */}

        {/* Secondary & Info */}
        <div className="space-y-4 border-b border-b-foreground/40 w-full h-full grid grid-rows-[1fr_1.4fr]">
          {/* Secondary Images */}
          <WorkSecondaryShowcase
            secondaryImage={client.secondaryImage}
            tertiaryImage={client.tertiaryImage}
          />
          {/* End Secondary Images */}
          {/* Information Content */}
          <div className="h-full flex flex-col justify-between">
            {/* Text Content */}
            <WorkClientContent
              logo={client.logo}
              description={client.description}
            />
            {/* End Text Content */}
            {/* Metrics */}
            <WorkMetric
              value={client.metric.value}
              tagline={client.metric.tagline}
            />
            {/* end Metrics */}
          </div>
          {/* End Information Content */}
        </div>
        {/* end Secondary & Info */}
      </div>
      {/* End Content */}
    </div>
  );
}

function WorkSecondaryShowcase({
  secondaryImage,
  tertiaryImage,
}: {
  secondaryImage: IClientWork["secondaryImage"];
  tertiaryImage: IClientWork["tertiaryImage"];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden">
      <Image
        src={secondaryImage.src}
        alt={secondaryImage.alt}
        width={600}
        height={600}
        className="w-full h-auto"
      />
      <Image
        src={tertiaryImage.src}
        alt={tertiaryImage.alt}
        width={600}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
}

function WorkClientContent({
  logo,
  description,
}: {
  logo: JSX.Element;
  description: string;
}) {
  return (
    <div className="text-start max-sm:space-y-8">
      {/* Client Information */}
      <div className="">
        {/* <h3 className="text-foreground text-3xl">{client.label}</h3> */}
        <div className="*:h-14.5 *:w-max w-max mb-4">{logo}</div>
        <p className="text-accent-foreground/60">{description}</p>
      </div>
      {/* End Client Information */}
    </div>
  );
}

function WorkMetric({ value, tagline }: { value: string; tagline: string }) {
  return (
    <div className="flex flex-col items-start lg:flex-row lg:items-end text-foreground lg:gap-2">
      <h4 className="text-6xl">{value}</h4>
      <p className="">{tagline}</p>
    </div>
  );
}
