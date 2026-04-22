"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import RuledLine from "@/components/ui/RuledLine";

type Step = {
  tag: string;
  bigNumber: string;
  heading: string;
  body: string;
};

const STEPS: Step[] = [
  {
    tag: "§ PLAY",
    bigNumber: "01",
    heading: "PERFORM",
    body: "You play your instrument. Wintergarden listens via real-time FFT analysis — pitch, timing, and dynamics captured to the millisecond.",
  },
  {
    tag: "§ SCORE",
    bigNumber: "02",
    heading: "ANALYZE",
    body: "A multi-dimensional Wintergarden Score is calculated. Pitch accuracy. Rhythmic consistency. Expressive quality. Normalized. Verified. On-chain.",
  },
  {
    tag: "§ EARN",
    bigNumber: "03",
    heading: "COMPETE",
    body: "Top performances earn WGT tokens on Avalanche. Compete in ranked events. Stake your score. Prove your ability. Get paid.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      data-cursor
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden"
      style={{
        background: hover ? "var(--panel)" : "var(--surface)",
        borderRight:
          index < STEPS.length - 1 ? "1px solid var(--border)" : "none",
        borderBottom: "1px solid var(--border)",
        borderLeft: hover
          ? "1px solid var(--tiffany)"
          : "1px solid transparent",
        padding: "64px 40px 72px",
        minHeight: "360px",
        transition:
          "background 200ms ease, border-color 200ms ease, border-left-color 200ms ease",
      }}
    >
      <span
        aria-hidden
        className="absolute pointer-events-none select-none font-display"
        style={{
          right: "24px",
          bottom: "-10px",
          fontSize: "120px",
          lineHeight: 1,
          color: "var(--teal-ghost)",
        }}
      >
        {step.bigNumber}
      </span>

      <div
        className="relative font-mono"
        style={{
          fontSize: "10px",
          color: "var(--tiffany)",
          letterSpacing: "0.3em",
        }}
      >
        {step.tag}
      </div>
      <h3
        className="relative font-display text-white"
        style={{
          fontSize: "52px",
          lineHeight: 1,
          marginTop: "16px",
          letterSpacing: "0.02em",
        }}
      >
        {step.heading}
      </h3>
      <p
        className="relative font-mono max-w-[34ch]"
        style={{
          fontSize: "13px",
          lineHeight: 1.8,
          color: "var(--white-dim)",
          marginTop: "16px",
        }}
      >
        {step.body}
      </p>
    </m.div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full"
      style={{ background: "var(--black)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <StepCard key={step.heading} step={step} index={idx} />
          ))}
        </div>
      </LazyMotion>

      <RuledLine label="§ 003 — SIGNAL" sectionNumber="003" />
    </section>
  );
}
