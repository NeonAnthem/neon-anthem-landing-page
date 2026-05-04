"use client";

import { motion, useTransform } from "motion/react";
import { HtmlHTMLAttributes } from "react";

function DesignAndDev({ ...props }: HtmlHTMLAttributes<HTMLOrSVGElement>) {
  const vRotation = useTransform(() => 0);

  return (
    <svg
      className="fill-background"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 2085 346"
    >
      <motion.text
        className={"stroke-white fill-black stroke-2"}
        x="1648.221"
        y="1477.083"
        fontFamily="'Melodrama-Medium', 'Melodrama'"
        fontSize="350"
        fontWeight="500"
        transform="translate(-1250.917 -1222.283)"
      >
        sig
        <tspan x="2027.271" y="1477.083">
          n
        </tspan>
      </motion.text>
      <text
        x="1417.425"
        y="1139.617"
        fontFamily="'ClashGrotesk-Medium', 'Clash Grotesk'"
        fontSize="350"
        fontWeight="500"
        transform="translate(-1437.025 -884.817)"
      >
        De
      </text>
      <text
        x="2245.25"
        y="1501.533"
        fontFamily="'Syne-SemiBold', 'Syne'"
        fontSize="350"
        fontWeight="600"
        transform="translate(-1223.505 -1246.733)"
      >
        &amp;
      </text>
      <text
        x="2608.798"
        y="1499.072"
        fontFamily="'Syne-SemiBold', 'Syne'"
        fontSize="350"
        fontWeight="600"
        transform="translate(-1273.505 -1246.372)"
      >
        De
      </text>
      <motion.path
        className={"fill-black stroke-white stroke-2"}
        d="M1982.15 165.443 1858.533 114.7V74.36l166.022 73.343v35.34l-166.022 72.342v-40.672z"
      ></motion.path>
    </svg>
  );
}

export default DesignAndDev;
