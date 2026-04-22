"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import RuledLine from "@/components/ui/RuledLine";

type Panel = {
  index: string;
  title: string;
  body: string;
};

const PANELS: Panel[] = [
  {
    index: "§ 01",
    title: "TOKENS",
    body: "Earn WGT on every verified performance improvement. Rewards scale with score delta — not raw score. Only progress is rewarded. Grinding yields nothing.",
  },
  {
    index: "§ 02",
    title: "REPUTATION",
    body: "A non-transferable on-chain record of verified performances. Your musical CV. Show it to conservatories, labels, collaborators. It cannot be bought.",
  },
  {
    index: "§ 03",
    title: "COMPETE",
    body: "Ranked global events. Staking pools. Winner-take-most prize structures settled in USDC via Circle. Your ability, wagered against the world.",
  },
];

function ConstructivistTexture() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none"
          style={{
            position: "absolute",
            left: `${-30 + i * 14}%`,
            top: `${-30 + i * 14}%`,
            width: `${200 - i * 28}%`,
            height: `${200 - i * 28}%`,
            border: "1px solid var(--teal-ghost)",
          }}
        />
      ))}
      <span
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          right: "-40%",
          bottom: "-40%",
          width: "120%",
          height: "120%",
          border: "1px solid var(--teal-ghost)",
          transform: "rotate(45deg)",
        }}
      />
    </>
  );
}

function Panel({ panel, index }: { panel: Panel; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor
      className="relative overflow-hidden"
      style={{
        background: "var(--black)",
        borderRight:
          index < PANELS.length - 1 ? "1px solid var(--border)" : "none",
        borderLeft: hover ? "1px solid var(--tiffany)" : "1px solid transparent",
        padding: "48px 40px",
        minHeight: "360px",
        transition: "border-left-color 200ms ease",
      }}
    >
      {hover && <ConstructivistTexture />}

      <div
        className="relative font-mono"
        style={{
          fontSize: "10px",
          color: "var(--tiffany)",
          letterSpacing: "0.3em",
        }}
      >
        {panel.index}
      </div>

      <h3
        className="relative font-display"
        style={{
          fontSize: "44px",
          lineHeight: 1,
          letterSpacing: "0.02em",
          color: hover ? "var(--tiffany)" : "var(--white)",
          marginTop: "24px",
          transition: "color 200ms ease",
        }}
      >
        {panel.title}
      </h3>

      <p
        className="relative font-mono max-w-[34ch]"
        style={{
          fontSize: "13px",
          lineHeight: 1.8,
          color: "var(--white-dim)",
          marginTop: "20px",
        }}
      >
        {panel.body}
      </p>
    </m.div>
  );
}

export default function Incentives() {
  return (
    <section
      id="incentives"
      className="relative w-full"
      style={{ background: "var(--black)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {PANELS.map((panel, idx) => (
            <Panel key={panel.title} panel={panel} index={idx} />
          ))}
        </div>
      </LazyMotion>

      <RuledLine label="§ 006 — ACCESS" sectionNumber="006" />
    </section>
  );
}
