"use client";
import { LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function LenisProvider({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, autoResize: true }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
