export interface IInfrastructureSolution {
  tag: {
    label: string;
    color: string;
  };
  title: string;
  description: string;
  metrics: {
    value: string;
    tagline: string;
  };
  image: {
    src: string;
    className?: string;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

const INFRASTRUCTURESOLUTIONS: IInfrastructureSolution[] = [
  {
    tag: {
      label: "CMS Solution",
      color: "white",
    },
    image: {
      src: "/assets/showcase/sanity-editor.avif",
      alt: "WIP",
    },
    title: "Marketing Velocity",
    description:
      "Built on a CMS your marketing team can update without touching a developer. Launch campaigns faster. Test messaging in hours, not weeks.",
    metrics: {
      value: "48 hours",
      tagline: "Average campaign update turnaround.",
    },
    cta: {
      label: "Built for fast-moving marketing teams",
      href: "/infra/cms",
    },
  },
  {
    tag: {
      label: "Enterprise Applications",
      color: "red",
    },
    image: {
      src: "/assets/showcase/erp-solution-showcase.png",
      className: "grayscale",
      alt: "ERP Dashboard showcase image",
    },
    title: "Custom Application",
    description:
      "From conversion-focused micro sites to full-scale web applications - built to spec, engineered to perform, owned by you.",
    metrics: {
      value: "50+",
      tagline: "Custom modules built & deployed",
    },
    cta: {
      label: "Built for complex & enterprise app infrastructure",
      href: "/infra/custom-applications",
    },
  },
];

export default INFRASTRUCTURESOLUTIONS;
