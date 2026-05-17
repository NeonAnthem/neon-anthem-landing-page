import { IFeaturedSolution } from "./featured-solutions.data";

const SOLUTIONS: IFeaturedSolution[] = [
  {
    title: "Web Development",
    description:
      "Visitors land on website, but won't contact you? Your website isn't designed to convert. We engineer your website to convert.",
    image: {
      src: "/assets/showcase/web-development-solution.png",
      alt: "Web Development Solution",
      className: "md:translate-x-1/3",
    },
    isFeatured: true,
    metrics: [
      {
        label: "Conversion-Engineered from the First Scroll",
        tagline:
          "One Goal — Moving the Visitor Closer to a Decision. Not Just Looking Good.",
      },
      {
        label: "Built for Buyers. Not Designers.",
        tagline:
          "Designed around buyers intent - removes hesitation before they bounce.",
      },
    ],
    cta: {
      label: "Ready to Convert?",
      tagline:
        "Get a free audit to see if your current site is costing your leads.",
      href: "/contact",
    },
  },
  {
    title: "Conversion Strategy",
    isFeatured: true,
    description:
      "You're spending on ads. The pipeline isn't growing. The problem isn't your creative - it's that nobody has told you exactly where your market is, who can afford you, and what it takes to reach them.",
    image: {
      src: "/assets/showcase/conversion-strategy-book.png",
      alt: "Conversion Strategy Document for Execution & planning",
    },
    metrics: [
      {
        label: "Market Intelligence Report",
        tagline:
          "Primary market, Competitor gaps map, ICP aligned audiences - by geography, affordability & buyer's intent.",
      },
      {
        label: "90-day Strategic Playbook",
        tagline:
          "Playbook with clear first move. Channel by channel. Week by Week. Executes on day 1 - not after another strategy call.",
      },
    ],
    cta: {
      label: "Dominate Market Share",
      tagline:
        "Get a free audit. We'll identify your biggest conversion leak before the call ends.",
      href: "/contact",
    },
  },
];

export default SOLUTIONS;
