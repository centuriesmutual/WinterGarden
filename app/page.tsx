import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import HowItWorks from "@/components/sections/HowItWorks";
import SessionDemo from "@/components/demo/SessionDemo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <HowItWorks />
      <SessionDemo />
      <div id="waitlist" className="sr-only" tabIndex={-1} />
    </>
  );
}
