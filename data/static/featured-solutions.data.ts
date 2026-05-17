export interface IFeaturedSolution {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  isFeatured?: boolean;
  metrics: [ISolutionCardMetric, ISolutionCardMetric];
  cta: {
    label: string;
    tagline: string;
    href: string;
  };
}

interface ISolutionCardMetric {
  label: string;
  tagline: string;
}
