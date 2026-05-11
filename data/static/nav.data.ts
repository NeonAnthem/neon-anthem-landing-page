import { INavbarItems } from "@/types/navbar.type";

const NAVMENUS: INavbarItems[] = [
  {
    id: "services",
    position: "a",
    label: "Services",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "Services we offer",
        children: [
          {
            label: "High-Converting Landing Page",
            description: "Pages engineered to convert paid traffic into demos.",
            href: "/services/landing-page",
          },
          {
            label: "B2B Website Revamp",
            href: "/services/website-revamp",
            description: "Faster, modern rebuild of your existing B2B site.",
          },
          {
            label: "Custom Solutions",
            href: "/services/custom-enterprise-solutions",
            description:
              "Bespoke software built around your org's exact workflow.",
          },
        ],
        banner: {
          title: "Conversion Strategy",
          subheading: "Target your market with metric & data.",
          cta: { label: "Get a Free Audit", href: "/contact" },
          secondaryCta: {
            label: "Know more",
            href: "/services/conversion-strategy",
          },
        },
      },
      {
        contentType: "list",
        heading: "Go To Market Solutions",
        position: "b",
        span: 1,
        cta: { label: "Vew GTM Solutions", href: "/services/go-to-market" },
        children: [
          {
            label: "Conversion Rate Optimization",
            href: "/services/go-to-market/conversion-rate-optimization",
            description:
              "Stop losing qualified traffic. More demos, same ad spend.",
          },
          {
            label: "Google Business Profile",
            href: "/services/go-to-market/google-business-profile",
            description: "Show up first when buyers search your category.",
          },
          {
            label: "SEO • AEO",
            href: "/services/go-to-market/seo-aeo",
            description: "Rank on Google. Get cited by ChatGPT. Both.",
          },
          {
            label: "Social Strategy",
            href: "/services/go-to-market/social-strategy",
            description:
              "LinkedIn content that drives inbound, not just impressions.",
          },
          {
            label: "Market Intelligence Report",
            href: "/services/go-to-market/market-intelligence-report",
            description:
              "ICP signals, competitor gaps, and whitespace — clearly mapped.",
          },
        ],
      },
      // Image Content For services
      {
        contentType: "image",
        alt: "",
        imageSrc: "/assets/mocks/CMS-editor.webp",
        position: "c",
        span: 1,
      },
    ],
  },
  {
    id: "solutions",
    position: "b",
    label: "Solutions",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 1,
        heading: "Custom Solutions",
        children: [
          {
            label: "System Design",
            href: "/solutions/system-design",
            description:
              "Architecture that scales before your growth demands it.",
          },
          {
            label: "Database Architectures",
            href: "/solutions/database-architectures",
            description:
              "Structured for speed, reliability, and zero data debt.",
          },
          {
            label: "Workflow Automation",
            href: "/solutions/workflow-automation",
            description:
              "Cut manual ops. Ship faster with automated pipelines.",
          },
        ],
        banner: {
          title: "Enterprise Softwares",
          subheading:
            "We build you custom solutions based on your requirements",
          cta: { label: "Get a Free Quote", href: "/custom-solutions/contact" },
          secondaryCta: { label: "Know more", href: "/custom-solutions" },
        },
      },
      {
        contentType: "list",
        position: "b",
        span: 1,
        heading: "Apps & Products",
        children: [
          {
            label: "Inventory Management",
            href: "/solutions/inventory-mangement",
            description:
              "Real-time stock visibility across every location and SKU.",
          },
          {
            label: "CRM",
            href: "/solutions/crm",
            description:
              "Pipeline clarity built for how your sales team works.",
          },
          {
            label: "Field Service",
            href: "/solutions/field-service",
            description: "Dispatch, track, and close jobs from one platform.",
          },
          {
            label: "Custom E-Commerce Store",
            href: "/solutions/custom-e-commerce-store",
            description:
              "Headless storefronts built to convert and scale fast.",
          },
          {
            label: "Bookings tracking & management",
            href: "/solutions/bookings-tracking-&-management",
            description:
              "End-to-end booking ops, from scheduling to completion.",
          },
        ],
        cta: { label: "Explore Enterprise Solutions" },
      },
      {
        contentType: "image",
        position: "ac",
        span: 1,
        imageSrc: "/assets/mocks/custom-application.webp",
        alt: "",
      },
    ],
  },
  {
    id: "industries",
    position: "c",
    label: "Industries",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        cta: { label: "Explore Industires", href: "industries" },
        heading: "Landing Page Industries",
        children: [
          {
            label: "SaaS",
            href: "/industries/saas",
            description:
              "High-converting pages built for PLG and demo-led funnels.",
          },
          {
            label: "B2B Legacy Enterprise",
            href: "/industries/legacy-b2b",
            description:
              "Modernize aging stacks and capture markets you're missing.",
          },
          {
            label: "FinTech",
            description:
              "Compliant, conversion-optimized pages for regulated finance products.",
            href: "industries/fintech",
          },
          {
            label: "Manufacturing",
            description:
              "Digital presence built for long-cycle, high-ticket B2B deals.",
            href: "/industires/manufacturing",
          },
        ],
      },
      {
        contentType: "list",
        position: "ab",
        span: 1,
        cta: { label: "Explore Industires", href: "industries" },
        heading: "Enterprise Industires",
        children: [
          {
            label: "Manufacturing",
            href: "/industries/manufacturing",
            description:
              "ERP integrations and custom tooling built for the floor.",
          },
          {
            label: "Assets & Rentals",
            href: "/industries/legacy-b2b",
            description:
              "Track, manage, and monetize every asset in your fleet.",
          },
          {
            label: "Service Bookings & Field Operations",
            description:
              "Field ops software built for dispatch-heavy service businesses.",
            href: "industries/fintech",
          },
          {
            label: "Real Estate",
            description: "Track materials, scrap & labor.",
            href: "/industires/manufacturing",
          },
        ],
      },
      {
        contentType: "image",
        imageSrc: "/assets/mocks/custom-application.webp",
        alt: "",
        span: 1,
        position: "b",
      },
    ],
  },
  {
    id: "blogs",
    position: "d",
    label: "Resources",
  },
  {
    id: "work",
    position: "e",
    label: "See our work",
    href: "/work",
  },
];

export default NAVMENUS;
