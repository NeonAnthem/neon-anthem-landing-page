"use client";
import { LiquidMetal } from "@paper-design/shaders-react";

export default function SoonPage() {
  return (
    <div>
      <LiquidMetal
        width={1280}
        height={720}
        image="https://shaders.paper.design/images/logos/diamond.svg"
        colorBack="#aaaaac"
        colorTint="#ffffff"
        shape="diamond"
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
  );
}
