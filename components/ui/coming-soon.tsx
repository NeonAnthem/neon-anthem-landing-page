"use client";
import { useNavbarStore } from "@/store/navbar-store";
import { LiquidMetal } from "@paper-design/shaders-react";
import { IconArrowUpRight, IconPhoneCall } from "@tabler/icons-react";
import { useEffect } from "react";
import { Button } from "./button";
import { Section } from "./section";

interface IComingSoonComponentProps {
  title: string;
  description: string;
}

export function ComingSoon({
  title = "Go To Market",
  description = "Solution that helps you target your market with real metric backed data",
}: IComingSoonComponentProps) {
  const setIsDark = useNavbarStore((s) => s.setIsDark);

  useEffect(() => {
    setIsDark(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="relative h-[calc(100vh-45px)] dark bg-black!">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max h-max text-center flex flex-col items-center"
        data-block="contain"
      >
        {/* Coming Soon */}
        <div className="text-foreground text-4xl">
          <h1 className="font-medium uppercase">Currently In Development</h1>
          <p className="text-base">
            Neon Anthem is new, but our hands on experience is not.
          </p>
        </div>
        {/* End Coming Soon */}
        <div className="size-96">
          <LiquidMetal
            className=""
            width={"100%"}
            height={"100%"}
            image={"/assets/neon-anthem/logo-brandmark.svg"}
            colorBack="#000000"
            colorTint="#ffffff"
            shape="metaballs"
            repetition={2}
            softness={0.1}
            shiftRed={0.3}
            shiftBlue={0.3}
            distortion={0.07}
            contour={0.4}
            angle={70}
            speed={1}
            scale={0.6}
            fit="contain"
          />
        </div>

        {/* Information */}
        <div className="text-foreground">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="md:w-[80%] mx-auto">{description}</p>
        </div>
        {/* End Information */}
        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Button>
            Talk to us about this service <IconArrowUpRight />
          </Button>
          <Button className={"text-foreground"} variant={"ghost"}>
            <IconPhoneCall />
            Prefer to schedule a call
          </Button>
        </div>
        {/* End CTA */}
      </div>
    </Section>
  );
}
