export interface IFeaturedSolution {
  title: string;
  description: string;
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
