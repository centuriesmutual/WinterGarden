"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

type Tenet = {
  numeral: string;
  title: string;
  subtitle: string;
  body: string;
};

const TENETS: Tenet[] = [
  {
    numeral: "I",
    title: "Tokens",
    subtitle: "Of Progress Earned",
    body: "WGT is awarded on every verified improvement. Rewards scale with the delta in your score — not its raw value. Only progress is honoured. Mere repetition yields nothing.",
  },
  {
    numeral: "II",
    title: "Reputation",
    subtitle: "A Permanent Record",
    body: "A non-transferable, on-chain account of every verified performance. Your musical character, in perpetuity. Show it to conservatories, labels, collaborators. It cannot be purchased.",
  },
  {
    numeral: "III",
    title: "Competition",
    subtitle: "Of Artist Against Artist",
    body: "Ranked concerti. Staked pools. Winner-take-most prize structures, settled in USDC via Circle. Your ability, calmly and publicly wagered against the ability of the world.",
  },
];

function OrnateFrame({ hover }: { hover: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none transition-colors"
        style={{
          position: "absolute",
          inset: "18px",
          border: "1px solid var(--gold-ghost)",
          opacity: hover ? 1 : 0.5,
          transition: "opacity 300ms ease, border-color 300ms ease",
          borderColor: hover ? "var(--gold-deep)" : "var(--gold-ghost)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: "28px",
          border: "1px solid transparent",
          borderColor: hover ? "var(--gold-ghost)" : "transparent",
          transition: "border-color 300ms ease",
        }}
      />
      {(
        [
          { pos: { top: "14px", left: "14px" }, r: 0 },
          { pos: { top: "14px", right: "14px" }, r: 90 },
          { pos: { bottom: "14px", right: "14px" }, r: 180 },
          { pos: { bottom: "14px", left: "14px" }, r: 270 },
        ] as const
      ).map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none"
          style={{
            position: "absolute",
            ...c.pos,
            width: "14px",
            height: "14px",
            transform: `rotate(${c.r}deg)`,
            borderTop: "1px solid var(--gold)",
            borderLeft: "1px solid var(--gold)",
            opacity: hover ? 1 : 0.6,
            transition: "opacity 300ms ease",
          }}
        />
      ))}
    </>
  );
}

function TenetPanel({ tenet, index }: { tenet: Tenet; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor
      className="relative overflow-hidden text-center"
      style={{
        background: hover ? "var(--deep)" : "var(--surface)",
        padding: "72px 44px 84px",
        minHeight: "480px",
        transition: "background 300ms ease",
      }}
    >
      <OrnateFrame hover={hover} />

      <div className="relative">
        <div
          className="font-display italic"
          style={{
            fontSize: "28px",
            color: "var(--gold)",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          {tenet.numeral}
        </div>

        <div
          aria-hidden
          style={{
            width: "40px",
            height: "1px",
            background: "var(--gold)",
            margin: "18px auto 24px",
          }}
        />

        <h3
          className="font-display italic"
          style={{
            fontSize: "44px",
            lineHeight: 1,
            color: "var(--paper)",
            letterSpacing: "-0.005em",
            fontWeight: 500,
          }}
        >
          {tenet.title}
        </h3>

        <div
          className="font-body smallcaps"
          style={{
            fontSize: "10px",
            color: "var(--gold-dim)",
            letterSpacing: "0.48em",
            marginTop: "14px",
          }}
        >
          {tenet.subtitle}
        </div>

        <p
          className="font-body mx-auto"
          style={{
            fontSize: "15px",
            lineHeight: 1.85,
            color: "var(--paper-dim)",
            maxWidth: "32ch",
            marginTop: "32px",
          }}
        >
          {tenet.body}
        </p>
      </div>
    </m.article>
  );
}

export default function Incentives() {
  return (
    <section
      id="incentives"
      className="relative w-full"
      style={{ background: "var(--ink)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full px-6 md:px-10 pt-24 md:pt-32 pb-12 text-center">
          <Ornament variant="diamond" label="The Three Tenets" />
          <h2
            className="font-display italic"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--paper)",
              marginTop: "28px",
              fontWeight: 500,
            }}
          >
            What you earn, beyond the music.
          </h2>
        </div>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-3"
          style={{
            borderTop: "1px solid var(--gold-ghost)",
            borderBottom: "1px solid var(--gold-ghost)",
            gap: "1px",
            background: "var(--gold-ghost)",
          }}
        >
          {TENETS.map((tenet, idx) => (
            <TenetPanel key={tenet.title} tenet={tenet} index={idx} />
          ))}
        </div>
      </LazyMotion>

      <RuledLine label="Finale — The Invitation" sectionNumber="VI" />
    </section>
  );
}
