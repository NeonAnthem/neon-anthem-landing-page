import GudsmanLogo from "@/lib/clients/gudsman-logo";
import VeroshaLogo from "@/lib/clients/verosha-logo";
import { IImage } from "@/types/image.type";
import { ReactElement } from "react";

export interface IClientWork {
  primaryImage: IImage;
  secondaryImage: IImage;
  tertiaryImage: IImage;
  logo: ReactElement;
  label: string;
  description: string;
  metric: {
    value: string;
    tagline: string;
  };
}

const CLIENTWORKDATA: IClientWork[] = [
  {
    primaryImage: {
      src: "/assets/showcase/verosha-1.png",
      alt: "Hero section of Verosha's landing page",
    },
    secondaryImage: {
      src: "/assets/showcase/verosha-3.png",
      alt: "Landing page of the mark media",
    },
    tertiaryImage: {
      src: "/assets/showcase/verosha-2.png",
      alt: "Landing page of the mark media",
    },
    label: "Verosha",
    logo: <VeroshaLogo />,
    description:
      "Verosha had no digital presence. We built a conversion-focued SEO landing page that ranks, loads fast, looks premium, and converts visitors into bookings.",
    metric: {
      value: "100",
      tagline: "Lighthouse Performance Score",
    },
  },
  {
    primaryImage: {
      src: "/assets/showcase/gudsman-1.png",
      alt: "Hero section of Gudsman's landing page",
    },
    secondaryImage: {
      src: "/assets/showcase/gudsman-2.png",
      alt: "Landing page of the mark media",
    },
    tertiaryImage: {
      src: "/assets/showcase/gudsman-3.png",
      alt: "Landing page of the mark media",
    },
    logo: <GudsmanLogo />,
    label: "The Mark Media",
    description:
      "We built a full-scale Enterprise Resource Planing system with 50+ modules that scaled to 40+ active users.",

    metric: {
      value: "3 mins",
      tagline: "Average Workflow Duration",
    },
  },
];

export default CLIENTWORKDATA;
