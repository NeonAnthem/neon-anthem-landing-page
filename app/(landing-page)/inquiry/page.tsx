import { Section } from "@/components/ui/section";
import Image from "next/image";
import InquiryForm from "./_components/inquiry-form";

export default function InquiryPage() {
  return (
    <Section className="pt-24 min-h-screen">
      <div className="mb-6" data-block="contain">
        {/* Shader Image */}
        <div className="max-w-110! mx-auto relative">
          {/* Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent text-center">
            <h2 className="text-4xl uppercase">Inquiry</h2>
            <div className="flex items-center justify-between mx-1 mr-2.5">
              {["F", "O", "R", "M"]?.map((letter) => (
                <span key={letter}>{letter}</span>
              ))}
            </div>
          </div>
          {/* End Title */}
          <Image
            draggable={false}
            className="rounded-lg mx-auto w-fit h-36 select-none"
            src="/assets/shader.png"
            alt="Shader"
            width={500}
            height={300}
          />
        </div>
        {/* End Shader Image */}
        {/* <h4 className="text-3xl font-semibold uppercase">Inquiry Intake</h4> */}
      </div>
      <div className="max-w-120! my-4 mb-18" data-block="contain">
        <InquiryForm />
      </div>
    </Section>
  );
}
