import ClientWorkSection from "./client-work.section";
import CTASection from "./cta.section";
import FoldTestomonial from "./fold.testomonial";
import MoreSolutionsSection from "./more-solutions.section";
import ProcessSection from "./process.section";
import SolutionsSection from "./solutions.section";
import HeroV2 from "./v2.hero";
import ProblemV2 from "./v2.problem";

function LandingPage() {
  return (
    <>
      <HeroV2 />
      <FoldTestomonial />
      <ProblemV2 />
      <SolutionsSection />
      <ProcessSection />
      <MoreSolutionsSection />
      <ClientWorkSection />
      <CTASection />
    </>
  );
}

export { LandingPage as LandingPageV2 };
