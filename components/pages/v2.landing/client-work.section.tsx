import { Section } from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import CLIENTWORKDATA, { IClientWork } from "@/data/static/client-work.data";
import Image from "next/image";

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
    <div className="">
      {/* Content */}
      <div className="grid max-md:grid-rows-[1fr_2fr] md:grid-cols-[5fr_4fr] gap-8">
        {/* Primary Showcase */}
        <div className="h-full">
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
        <div className="space-y-4 border-b border-b-foreground w-full">
          {/* Secondary Images */}
          <div className="grid grid-cols-2 gap-8">
            <Image
              src={client.secondaryImage.src}
              alt={client.secondaryImage.alt}
              width={600}
              height={600}
            />
            <Image
              src={client.tertiaryImage.src}
              alt={client.tertiaryImage.alt}
              width={600}
              height={600}
            />
          </div>
          {/* End Secondary Images */}

          {/* Text Content */}
          <div className="text-start max-sm:space-y-8">
            {/* Client Information */}
            <div className="">
              {/* <h3 className="text-foreground text-3xl">{client.label}</h3> */}
              <div className="*:h-14.5 *:w-max w-max mb-4">{client.logo}</div>
              <p className="text-accent-foreground/60">{client.description}</p>
            </div>
            {/* End Client Information */}
          </div>
          {/* End Text Content */}
          {/* Metrics */}
          <div className="flex flex-col items-start lg:flex-row lg:items-end text-foreground lg:gap-2">
            <h4 className="text-6xl">{client.metric.value}</h4>
            <p className="">{client.metric.tagline}</p>
          </div>
          {/* end Metrics */}
        </div>
        {/* end Secondary & Info */}
      </div>
      {/* End Content */}
    </div>
  );
}
