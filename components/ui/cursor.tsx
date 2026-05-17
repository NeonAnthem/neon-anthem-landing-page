"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 400, damping: 28, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 400, damping: 28, mass: 0.4 });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);
    }

    function onMouseLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      data-cursor
      className="fixed top-0 left-0 size-4 rounded-full bg-white mix-blend-difference pointer-events-none z-9999 max-sm:hidden"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.15 } }}
    />
  );
}
