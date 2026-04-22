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
    subtitle: "Artist Against Artist",
    body: "Ranked concerti. Staked pools. Winner-take-most prize structures, settled in USDC via Circle. Your ability, calmly and publicly wagered against the ability of the world.",
  },
];

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
      className="relative card"
      style={{
        padding: "48px 36px 56px",
        minHeight: "440px",
        transition: "transform 300ms ease, border-color 300ms ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        borderColor: hover ? "var(--gold-deep)" : "var(--gold-ghost)",
      }}
    >
      <div
        aria-hidden
        className="inline-flex items-center justify-center"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "9999px",
          border: "1px solid var(--gold-deep)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(201,169,97,0.12), transparent 60%)",
          color: "var(--gold)",
          fontSize: "22px",
          fontWeight: 600,
          fontStyle: "italic",
          letterSpacing: "0.02em",
        }}
      >
        {tenet.numeral}
      </div>

      <h3
        style={{
          fontSize: "32px",
          lineHeight: 1.1,
          color: "var(--paper)",
          letterSpacing: "-0.03em",
          fontWeight: 600,
          marginTop: "24px",
        }}
      >
        {tenet.title}
      </h3>

      <div
        className="smallcaps"
        style={{
          fontSize: "10.5px",
          color: "var(--gold-dim)",
          fontWeight: 500,
          marginTop: "10px",
        }}
      >
        {tenet.subtitle}
      </div>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--paper-dim)",
          marginTop: "22px",
          fontWeight: 400,
        }}
      >
        {tenet.body}
      </p>
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
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-12 text-center">
          <Ornament variant="diamond" label="The Three Tenets" />
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
            What you earn,{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              beyond the music.
            </span>
          </h2>
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TENETS.map((tenet, idx) => (
              <TenetPanel key={tenet.title} tenet={tenet} index={idx} />
            ))}
          </div>
        </div>
      </LazyMotion>

      <RuledLine label="Finale — The Invitation" sectionNumber="VI" />
    </section>
  );
}
