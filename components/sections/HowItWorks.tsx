"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const sectionBg = "#0a0a0a";

type Feature = { label: string; desc: string };

type Movement = {
  roman: string;
  movementLabel: string;
  action: string;
  tempo: string;
  body: string;
  features: [Feature, Feature, Feature];
  closer: string;
};

const MOVEMENTS: Movement[] = [
  {
    roman: "I",
    movementLabel: "Primo",
    action: "Perform",
    tempo: "Allegro",
    body: "You play. Wintergarden listens at the level a master listens — capturing every pitch against the equal-tempered standard, every onset against the written beat, every swell and recession of dynamic across the phrase. Nothing is approximated. Nothing is lost.",
    features: [
      { label: "PITCH CAPTURE", desc: "Deviation measured in cents, in real time." },
      { label: "ONSET DETECTION", desc: "Every note event timestamped to the millisecond." },
      { label: "DYNAMIC MAPPING", desc: "Volume contour traced across the full phrase arc." },
    ],
    closer: "The performance is the document.",
  },
  {
    roman: "II",
    movementLabel: "Secondo",
    action: "Analyse",
    tempo: "Andante",
    body: "From your session, a Wintergarden Score is composed. Pitch accuracy, rhythmic consistency, and expressive fidelity are each assessed, weighted, and resolved into a single composite rating — calibrated against a reference corpus of professional recordings, normalised by repertoire and difficulty.",
    features: [
      { label: "ACCURACY RATING", desc: "Pitch and rhythm scored against the notated score." },
      { label: "EXPRESSION INDEX", desc: "Phrasing and dynamic contour evaluated at gesture level." },
      { label: "COMPOSITE SCORE", desc: "A single, reproducible rating on a 0–1000 scale." },
    ],
    closer: "Precise. Verifiable. Permanent.",
  },
  {
    roman: "III",
    movementLabel: "Finale",
    action: "Ascend",
    tempo: "Con brio",
    body: "Your score enters the Society — a ranked cohort of performers assessed by the same standard. Consistent excellence earns recognition and a share of the performance pool: real payments, distributed weekly, proportional to your standing. The record of your achievement is permanent and independently verifiable.",
    features: [
      { label: "RANKED STANDING", desc: "Your score placed within the active performer cohort." },
      { label: "PERFORMANCE POOL", desc: "Weekly distributions to top-ranked performers." },
      { label: "PERMANENT RECORD", desc: "Your results archived and independently verifiable." },
    ],
    closer: "Artistry recognised. Achievement rewarded.",
  },
];

const ECONOMY_NODES: { label: string; sub: string }[] = [
  { label: "You Perform", sub: "Session recorded & analysed" },
  { label: "Score Generated", sub: "0–1000 composite rating" },
  { label: "Ranking Updated", sub: "Cohort position recalculated" },
  { label: "Pool Allocated", sub: "Weekly pool distributed by rank" },
  { label: "Payment Issued", sub: "Credited to your account" },
];

function MovementBlock({ item, index }: { item: Movement; index: number }) {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
      className="px-8 py-12
        border-b border-[#1e1e1e] last:border-b-0
        md:border-b-0 md:border-t md:border-t-[#1e1e1e] md:first:border-t-0
        lg:border-0"
    >
      <div className="flex justify-between items-baseline mb-6">
        <span
          className="font-mono"
          style={{
            color: "#333",
            fontSize: "11px",
            letterSpacing: "0.2em",
          }}
        >
          {item.roman}
        </span>
        <span
          className="font-mono italic"
          style={{
            color: "#2a2a2a",
            fontSize: "10px",
            letterSpacing: "0.08em",
          }}
        >
          {item.tempo}
        </span>
      </div>
      <div
        className="w-full h-px mb-6"
        style={{ background: "#1e1e1e" }}
        aria-hidden
      />
      <div className="mb-6">
        <p
          className="font-mono uppercase mb-1"
          style={{
            color: "#444",
            fontSize: "10px",
            letterSpacing: "0.3em",
          }}
        >
          {item.movementLabel}
        </p>
        <h3
          className="font-light"
          style={{
            color: "#d0d0d0",
            fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {item.action}
        </h3>
      </div>
      <p
        className="text-sm mb-8"
        style={{ color: "#777", lineHeight: 1.9 }}
      >
        {item.body}
      </p>
      <div>
        {item.features.map((f, i) => (
          <div
            key={f.label}
            className="py-3"
            style={{
              borderTop: i > 0 ? "1px solid #161616" : undefined,
            }}
          >
            <p
              className="font-mono text-xs uppercase"
              style={{ color: "#ccc", letterSpacing: "0.1em" }}
            >
              {f.label}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "#555", lineHeight: 1.6 }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      <p
        className="text-xs italic mt-6 pt-4"
        style={{ color: "#333", borderTop: "1px solid #161616" }}
      >
        {item.closer}
      </p>
    </m.article>
  );
}

function VerticalRule() {
  return (
    <div
      className="hidden lg:block w-px justify-self-center self-stretch"
      style={{ background: "#1e1e1e" }}
      aria-hidden
    />
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full"
      style={{ background: sectionBg }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full max-w-[min(100%,1280px)] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-0">
          <m.header
            className="w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div
              className="flex items-center justify-center gap-3 mb-4"
              style={{ color: "#444" }}
            >
              <span className="w-10 h-px" style={{ background: "#222" }} aria-hidden />
              <p
                className="font-mono text-[10px] uppercase"
                style={{ letterSpacing: "0.4em" }}
              >
                THE PROGRAMME
              </p>
              <span className="w-10 h-px" style={{ background: "#222" }} aria-hidden />
            </div>
            <h2
              className="mb-4 font-extralight italic"
              style={{
                color: "#e0e0e0",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              A concerto in three movements.
            </h2>
            <p
              className="text-sm max-w-2xl mb-16"
              style={{ color: "#555", lineHeight: 1.8 }}
            >
              Every session at Wintergarden follows a single, unbroken form —
              from the first note to the permanent record.
            </p>
            <div className="w-full h-px" style={{ background: "#1e1e1e" }} aria-hidden />
          </m.header>

          <div
            className="grid w-full
              grid-cols-1
              md:grid-cols-3 md:gap-0
              lg:grid-cols-12"
          >
            <div className="lg:col-span-4 min-w-0">
              <MovementBlock item={MOVEMENTS[0]} index={0} />
            </div>
            <div className="lg:col-span-1 min-w-0">
              <VerticalRule />
            </div>
            <div className="lg:col-span-3 min-w-0">
              <MovementBlock item={MOVEMENTS[1]} index={1} />
            </div>
            <div className="lg:col-span-1 min-w-0">
              <VerticalRule />
            </div>
            <div className="lg:col-span-3 min-w-0">
              <MovementBlock item={MOVEMENTS[2]} index={2} />
            </div>
          </div>

          <m.div
            className="w-full border-t"
            style={{ borderColor: "#1e1e1e" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              // 200ms after last movement (stagger 2×150ms) per programme spec
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <div
              className="pt-12 pb-16
                grid grid-cols-1 gap-8
                lg:grid-cols-12 lg:gap-x-6 lg:items-center"
            >
              <p
                className="font-mono text-[10px] uppercase lg:col-span-2"
                style={{ color: "#333", letterSpacing: "0.35em" }}
              >
                THE SESSION ECONOMY
              </p>

              <div className="lg:col-span-8 flex flex-col items-center justify-center gap-0">
                <div className="hidden lg:flex flex-wrap items-start justify-center gap-2 w-full max-w-5xl">
                  {ECONOMY_NODES.map((n, i) => (
                    <div key={n.label} className="flex items-start gap-2 shrink">
                      {i > 0 ? (
                        <span
                          className="font-mono text-xs mt-1 px-0.5"
                          style={{ color: "#252525" }}
                        >
                          →
                        </span>
                      ) : null}
                      <div className="text-center min-w-0 max-w-[7.5rem] sm:max-w-[8.5rem]">
                        <p
                          className="font-mono text-xs uppercase"
                          style={{ color: "#888", letterSpacing: "0.08em" }}
                        >
                          {n.label}
                        </p>
                        <p
                          className="text-[10px] mt-1"
                          style={{ color: "#444", lineHeight: 1.4 }}
                        >
                          {n.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex lg:hidden flex-col w-full max-w-sm mx-auto space-y-4">
                  {ECONOMY_NODES.map((n, i) => (
                    <div key={n.label} className="w-full text-center">
                      {i > 0 ? (
                        <span
                          className="block font-mono text-sm mb-4"
                          style={{ color: "#252525" }}
                        >
                          ↓
                        </span>
                      ) : null}
                      <p
                        className="font-mono text-xs uppercase"
                        style={{ color: "#888", letterSpacing: "0.08em" }}
                      >
                        {n.label}
                      </p>
                      <p
                        className="text-[10px] mt-1"
                        style={{ color: "#444", lineHeight: 1.4 }}
                      >
                        {n.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p
                className="font-mono text-[10px] uppercase text-right lg:col-span-2 lg:justify-self-end w-full"
                style={{ color: "#333", letterSpacing: "0.3em" }}
              >
                Weekly · Transparent · Yours
              </p>
            </div>
          </m.div>

          <m.p
            className="w-full text-center font-light italic"
            style={{
              color: "#555",
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              borderTop: "1px solid #161616",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            The performance is the credential. The score is the proof.
          </m.p>
        </div>
      </LazyMotion>
    </section>
  );
}
