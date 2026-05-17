import { Section } from "@/components/ui/section";
import { TestLogoMark } from "@/components/vectors/logo";
import { IconQuote } from "@tabler/icons-react";
import Image from "next/image";

export default function FoldTestomonial() {
  return (
    <Section className="">
      <TestomonialSection />
    </Section>
  );
}

function TestomonialSection() {
  return (
    <div data-block="contain">
      <TestomonialCard />
    </div>
  );
}

function TestomonialCard() {
  return (
    <div className="border flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-10 md:p-12 lg:p-14 xl:p-17.25 relative overflow-hidden z-10">
      {/* Back */}
      <div className="absolute top-1/2 -translate-1/2 -right-1/6 opacity-5 -z-10 hidden xl:block">
        <TestLogoMark className="size-80" />
      </div>
      {/* End Back */}

      {/* Image  */}
      <Image
        src="/assets/shader.png"
        className="sm:max-w-52.25 max-h-59.25 w-full h-full min-h-59"
        alt=""
        width={500}
        height={500}
      />
      {/* end Image */}
      {/* Content */}
      <div className="flex flex-col relative text-start">
        {/* Quote */}
        <span>
          <IconQuote className="rotate-180 fill-foreground size-8" />
        </span>
        {/* Quote */}
        <h5 className="text-xl">
          The team was thoughtful, responsive and has exceptional design
          sensability.<br></br> Bringing our collective brand vision & goals to
          life was difficult. The results<br></br> speak for themselves - it
          looks amazing, love it!
        </h5>

        {/* Author */}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 mt-8 sm:mt-16.75 h-max">
          <div className="text-sm sm:text-base">
            <h6>Bhawana Tiwary</h6>
            {/* Title */}
            <p>Founder at The Mark Media</p>
            {/* End Title */}
          </div>
          {/* Logo */}
          <div className="w-full sm:border-l sm:px-6 sm:py-4">
            <Image
              src="/assets/clients/tmm-logo.png"
              alt="The Mark Media Lettermark"
              width={400}
              height={400}
              className="h-5.75 w-auto"
            />
          </div>
          {/* End Logo */}
        </div>
        {/* End Author */}
      </div>
      {/* End Content */}
    </div>
  );
}
