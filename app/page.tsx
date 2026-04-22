import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import HowItWorks from "@/components/sections/HowItWorks";
import ScoreDisplay from "@/components/sections/ScoreDisplay";
import GlobalNetwork from "@/components/sections/GlobalNetwork";
import Incentives from "@/components/sections/Incentives";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <HowItWorks />
      <ScoreDisplay />
      <GlobalNetwork />
      <Incentives />
      <CallToAction />
    </>
  );
}
