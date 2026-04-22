"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const sectionBg = "#0a0a0a";

type Movement = {
  roman: string;
  movementLabel: string;
  action: string;
  tempo: string;
  body: string;
};

const MOVEMENTS: Movement[] = [
  {
    roman: "I",
    movementLabel: "Primo",
    action: "Perform",
    tempo: "Allegro",
    body: "You play. Wintergarden records the performance with the same precision the repertoire demands: pitch, time, and dynamics measured continuously. That data is the input to everything that follows — including the settlement path that runs on the Avalanche network. Nothing is approximated. Nothing is lost before scoring.",
  },
  {
    roman: "II",
    movementLabel: "Secondo",
    action: "Analyse",
    tempo: "Andante",
    body: "From your session, a Wintergarden Score is composed: pitch accuracy, rhythmic consistency, and expression are weighted and resolved into a single 0–1000 rating — normalised by repertoire and difficulty. That score is what the ranking and payout logic use; it is the same number every participant is judged against before anything is sent on Avalanche.",
  },
  {
    roman: "III",
    movementLabel: "Finale",
    action: "Ascend",
    tempo: "Con brio",
    body: "Top performers share a USDC pool on Avalanche. Each week, the protocol allocates that pool by rank: your standing in the active cohort sets your share. Payouts are USDC on the Avalanche C-Chain — sent to the wallet you connect to Wintergarden. Finality and fees you expect from Avalanche; the schedule and split are fixed and transparent.",
  },
];

const ECONOMY_NODES: { label: string; sub: string }[] = [
  { label: "You Perform", sub: "Session captured & scored" },
  { label: "Score & rank", sub: "0–1000; cohort position" },
  { label: "Pool on Avalanche", sub: "Weekly USDC pool" },
  { label: "Split by rank", sub: "Share set by standing" },
  { label: "USDC to wallet", sub: "C-Chain transfer to you" },
];

/* Programme illustrations — 400×220 viewBox, stroke-only, ruling-pen feel */
const ILL = "var(--ill-stroke, #2e2e2e)";

function movement1CapturePaths() {
  const a = 133;
  const b = 267;
  const mid: string[] = [];
  let k = 0;
  for (let x = a; x < b - 0.01; x += 0.85) {
    const t = ((x - a) / (b - a)) * Math.PI * 2 * 3.5;
    const y = 110 + 40 * Math.sin(t);
    if (k++ === 0) {
      mid.push(`M ${a} ${y.toFixed(2)}`);
    } else {
      mid.push(`L ${x.toFixed(1)} ${y.toFixed(2)}`);
    }
  }
  mid.push("L 267 110");
  const tail: string[] = ["M 267 110"];
  for (let x = 267.8; x <= 400; x += 0.85) {
    const u = (x - b) / (400 - b);
    const env = 30 * (1 - u) * (1 - u) + 4.5;
    const ph = (x - b) * 0.21;
    const y = 110 + env * Math.sin(ph);
    tail.push(`L ${x.toFixed(1)} ${y.toFixed(2)}`);
  }
  return { accent: mid.join(" "), tail: tail.join(" ") };
}

function IllPerform() {
  const { accent, tail } = movement1CapturePaths();
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="0" y1="110" x2="400" y2="110" stroke="#1e1e1e" strokeWidth={0.75} />
      <path
        d={accent}
        stroke="#444444"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d={tail}
        stroke={ILL}
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="166.3"
        y1="58"
        x2="166.3"
        y2="66"
        stroke="#252525"
        strokeWidth={0.75}
      />
      <line
        x1="200"
        y1="58"
        x2="200"
        y2="66"
        stroke="#252525"
        strokeWidth={0.75}
      />
      <line
        x1="233.7"
        y1="58"
        x2="233.7"
        y2="66"
        stroke="#252525"
        strokeWidth={0.75}
      />
      <line
        x1="133"
        y1="168"
        x2="267"
        y2="168"
        stroke="#1e1e1e"
        strokeWidth={0.75}
      />
      <line
        x1="133"
        y1="162"
        x2="133"
        y2="174"
        stroke="#1e1e1e"
        strokeWidth={0.75}
      />
      <line
        x1="267"
        y1="162"
        x2="267"
        y2="174"
        stroke="#1e1e1e"
        strokeWidth={0.75}
      />
      <line
        x1="380"
        y1="80"
        x2="380"
        y2="140"
        stroke="#333"
        strokeWidth={1}
      />
    </svg>
  );
}

const ILL2_NOTES: { x: number; y: number }[] = [
  { x: 48, y: 60 },
  { x: 75, y: 85 },
  { x: 95, y: 110 },
  { x: 128, y: 135 },
  { x: 118, y: 60 },
  { x: 188, y: 160 },
  { x: 210, y: 85 },
  { x: 245, y: 110 },
  { x: 60, y: 135 },
];

const ILL2_FX = 360;
const ILL2_FY = 110;

function IllAnalyse() {
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[60, 85, 110, 135, 160].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="#1a1a1a"
          strokeWidth={0.5}
        />
      ))}
      {ILL2_NOTES.map((n) => (
        <line
          key={`ray-${n.x}-${n.y}`}
          x1={n.x}
          y1={n.y}
          x2={ILL2_FX}
          y2={ILL2_FY}
          stroke="#222222"
          strokeWidth={0.75}
        />
      ))}
      {ILL2_NOTES.map((n) => (
        <circle
          key={`nh-${n.x}-${n.y}`}
          cx={n.x}
          cy={n.y}
          r={3}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={0.75}
        />
      ))}
      <circle
        cx={ILL2_FX}
        cy={ILL2_FY}
        r={10}
        fill="none"
        stroke="#444444"
        strokeWidth={1.25}
      />
      <circle
        cx={ILL2_FX}
        cy={ILL2_FY}
        r={3}
        fill="none"
        stroke="#333333"
        strokeWidth={0.75}
      />
      <path
        d="M 342 110 A 18 18 0 1 1 377.1 116.1"
        stroke="#252525"
        strokeWidth={0.5}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 334 110 A 26 26 0 1 1 384.4 119"
        stroke="#252525"
        strokeWidth={0.5}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ILL3_CX = [32, 88, 144, 200, 256, 312, 368];
const ILL3_TOPS = [50, 80, 105, 125, 105, 80, 60];
const ILL3_BW = 5;

function IllAscend() {
  const tTop = ILL3_TOPS[0];
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line
        x1="0"
        y1="180"
        x2="400"
        y2="180"
        stroke="#1e1e1e"
        strokeWidth={0.75}
      />
      {ILL3_CX.map((cx, i) => {
        const y1 = ILL3_TOPS[i];
        const left = cx - ILL3_BW;
        const right = cx + ILL3_BW;
        const accent = i === 0;
        return (
          <g key={cx}>
            <line
              x1={left}
              y1={y1}
              x2={left}
              y2="180"
              stroke={accent ? "#444444" : "#1e1e1e"}
              strokeWidth={accent ? 1.25 : 0.75}
            />
            <line
              x1={right}
              y1={y1}
              x2={right}
              y2="180"
              stroke={accent ? "#444444" : "#1e1e1e"}
              strokeWidth={accent ? 1.25 : 0.75}
            />
            <line
              x1={left}
              y1={y1}
              x2={right}
              y2={y1}
              stroke={accent ? "#444444" : "#1e1e1e"}
              strokeWidth={accent ? 1.25 : 0.75}
            />
          </g>
        );
      })}
      <path
        d="M 32 50 C 52 22 72 22 88 80 C 108 100 128 100 144 105"
        stroke="#222222"
        strokeWidth={0.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="0"
        y1={tTop}
        x2="400"
        y2={tTop}
        stroke="#252525"
        strokeWidth={0.75}
        strokeDasharray="2 4"
      />
      <path
        d="M 27 32 L 37 32 L 32 40.5 Z"
        fill="none"
        stroke="#333333"
        strokeWidth={0.75}
        strokeLinejoin="miter"
      />
    </svg>
  );
}

const ILLUSTRATIONS = [IllPerform, IllAnalyse, IllAscend] as const;

function MovementBlock({ item, index }: { item: Movement; index: number }) {
  const Ill = ILLUSTRATIONS[index];
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
      <p className="text-sm" style={{ color: "#777", lineHeight: 1.9 }}>
        {item.body}
      </p>
      <div className="mt-8 w-full max-w-[480px] mx-auto border-t border-[#161616] pt-8 md:max-w-none md:mx-0">
        <Ill />
      </div>
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
              Wintergarden uses the{" "}
              <span className="text-[#666]">Avalanche</span> network to settle
              rewards: a weekly USDC pool, distributed by your rank, paid to
              the wallet you connect. Practice and performance in three clear
              steps — from the first note to USDC in your wallet.
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
                FROM SESSION TO AVALANCHE
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
                USDC · Avalanche · Weekly
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
            The performance earns your rank. Avalanche delivers your USDC.
          </m.p>
        </div>
      </LazyMotion>
    </section>
  );
}
