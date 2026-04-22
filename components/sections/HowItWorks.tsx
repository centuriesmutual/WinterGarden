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
    body: "You play. Wintergarden listens as a master listens, through real-time spectral analysis of every pitch, every onset, every nuance of dynamics — captured to the millisecond, honoured to the cent.",
  },
  {
    numeral: "II",
    movement: "Secondo",
    tempo: "Andante",
    title: "Analyse",
    body: "A multi-dimensional Wintergarden Score is composed from your performance: accuracy of pitch, consistency of rhythm, eloquence of expression. Normalised against a corpus. Verified on-chain.",
  },
  {
    numeral: "III",
    movement: "Finale",
    tempo: "Con brio",
    title: "Ascend",
    body: "Your artistry is entered into the Society. Ranked concerti. Curated pools. Rewards settled in USDC through Circle; honours inscribed on Avalanche. Your ability — wagered against the world.",
  },
];

function MovementCard({
  item,
  index,
}: {
  item: Movement;
  index: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <m.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor
      className="relative overflow-hidden text-center"
      style={{
        background: hover ? "var(--deep)" : "var(--ink)",
        borderRight:
          index < MOVEMENTS.length - 1
            ? "1px solid var(--gold-ghost)"
            : "none",
        padding: "80px 40px 88px",
        minHeight: "520px",
        transition: "background 300ms ease",
      }}
    >
      <span
        aria-hidden
        className="absolute pointer-events-none select-none font-display italic"
        style={{
          left: "50%",
          top: "24px",
          transform: "translateX(-50%)",
          fontSize: "160px",
          lineHeight: 1,
          color: hover ? "var(--gold-deep)" : "var(--gold-ghost)",
          fontWeight: 400,
          transition: "color 300ms ease",
        }}
      >
        {item.numeral}
      </span>

      <div className="relative" style={{ paddingTop: "92px" }}>
        <div
          className="font-body smallcaps"
          style={{
            fontSize: "10px",
            color: "var(--gold)",
            letterSpacing: "0.5em",
          }}
        >
          {item.movement}
        </div>

        <h3
          className="font-display italic"
          style={{
            fontSize: "44px",
            lineHeight: 1,
            marginTop: "16px",
            color: "var(--paper)",
            letterSpacing: "-0.005em",
            fontWeight: 500,
          }}
        >
          {item.title}
        </h3>

        <div
          aria-hidden
          style={{
            width: hover ? "80px" : "36px",
            height: "1px",
            background: "var(--gold)",
            margin: "24px auto",
            transition: "width 400ms ease",
          }}
        />

        <div
          className="font-serif italic"
          style={{
            fontSize: "13px",
            color: "var(--gold-dim)",
            letterSpacing: "0.12em",
            marginBottom: "18px",
          }}
        >
          {item.tempo}
        </div>

        <p
          className="font-body mx-auto"
          style={{
            fontSize: "15px",
            lineHeight: 1.85,
            color: "var(--paper-dim)",
            maxWidth: "32ch",
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
        <div className="w-full px-6 md:px-10 pt-24 md:pt-32 pb-10 text-center">
          <Ornament variant="diamond" label="The Programme" />
          <h2
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 5.4vw, 68px)",
              lineHeight: 1.05,
              color: "var(--paper)",
              marginTop: "28px",
              fontWeight: 500,
            }}
          >
            A concerto in three movements.
          </h2>
          <p
            className="font-serif italic mx-auto"
            style={{
              fontSize: "18px",
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

        <div
          className="w-full grid grid-cols-1 md:grid-cols-3"
          style={{
            borderTop: "1px solid var(--gold-ghost)",
            borderBottom: "1px solid var(--gold-ghost)",
          }}
        >
          {MOVEMENTS.map((item, idx) => (
            <MovementCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </LazyMotion>

      <RuledLine label="Opus III — The Score" sectionNumber="III" />
    </section>
  );
}
