"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

type Movement = {
  numeral: string;
  movement: string;
  tempo: string;
  title: string;
  body: string;
};

const MOVEMENTS: Movement[] = [
  {
    numeral: "I",
    movement: "Primo",
    tempo: "Allegro",
    title: "Perform",
    body: "You play. Wintergarden listens as a master listens — real-time spectral analysis of every pitch, every onset, every nuance of dynamics, captured to the millisecond.",
  },
  {
    numeral: "II",
    movement: "Secondo",
    tempo: "Andante",
    title: "Analyse",
    body: "A multi-dimensional Wintergarden Score is composed from your performance: accuracy of pitch, consistency of rhythm, eloquence of expression. Normalised, verified, on-chain.",
  },
  {
    numeral: "III",
    movement: "Finale",
    tempo: "Con brio",
    title: "Ascend",
    body: "Your artistry is entered into the Society. Ranked concerti. Curated pools. Rewards in USDC through Circle; honours inscribed on Avalanche. Ability wagered against the world.",
  },
];

function MovementCard({ item, index }: { item: Movement; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <m.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative card overflow-hidden"
      style={{
        padding: "56px 36px 60px",
        minHeight: "460px",
        transition: "transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        borderColor: hover ? "var(--gold-deep)" : "var(--gold-ghost)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none select-none absolute"
        style={{
          left: "50%",
          top: "24px",
          transform: "translateX(-50%)",
          fontSize: "140px",
          lineHeight: 1,
          color: hover ? "var(--gold-deep)" : "var(--gold-ghost)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontStyle: "italic",
          transition: "color 300ms ease",
        }}
      >
        {item.numeral}
      </span>

      <div className="relative" style={{ paddingTop: "80px" }}>
        <div
          className="smallcaps"
          style={{
            fontSize: "10.5px",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          {item.movement}
        </div>

        <h3
          style={{
            fontSize: "36px",
            lineHeight: 1.05,
            marginTop: "14px",
            color: "var(--paper)",
            letterSpacing: "-0.03em",
            fontWeight: 600,
          }}
        >
          {item.title}
        </h3>

        <div
          aria-hidden
          style={{
            width: hover ? "72px" : "32px",
            height: "2px",
            borderRadius: "9999px",
            background: "var(--gold)",
            margin: "20px 0 18px",
            transition: "width 380ms ease",
          }}
        />

        <div
          style={{
            fontSize: "13px",
            color: "var(--gold-dim)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "18px",
          }}
        >
          {item.tempo}
        </div>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "var(--paper-dim)",
            fontWeight: 400,
          }}
        >
          {item.body}
        </p>
      </div>
    </m.article>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full"
      style={{ background: "var(--ink)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-16 text-center">
          <Ornament variant="diamond" label="The Programme" />
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--paper)",
              marginTop: "24px",
              fontWeight: 600,
              letterSpacing: "-0.035em",
            }}
          >
            A concerto in{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              three movements.
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "17px",
              color: "var(--paper-dim)",
              marginTop: "20px",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Every session at Wintergarden follows a single, unbroken form —
            from the first bow-stroke to the ledger.
          </p>
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MOVEMENTS.map((item, idx) => (
              <MovementCard key={item.title} item={item} index={idx} />
            ))}
          </div>
        </div>
      </LazyMotion>

      <RuledLine label="Opus III — The Score" sectionNumber="III" />
    </section>
  );
}
