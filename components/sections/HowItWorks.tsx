"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  MeritRecord,
  WalletConnect,
  WeeklyPayout,
} from "@/components/illustrations/FeatureIllustrations";

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

/** Terminal-style panels: wallet → merit record → weekly USDC (distinct from page bg). */
const MOVEMENT_ILLUSTRATIONS = [WalletConnect, MeritRecord, WeeklyPayout] as const;

function MovementBlock({ item, index }: { item: Movement; index: number }) {
  const Ill = MOVEMENT_ILLUSTRATIONS[index];
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
      <div className="mt-8 w-full max-w-[min(100%,480px)] mx-auto border-t border-[#161616] pt-8 md:max-w-none md:mx-0">
        <div className="rounded overflow-hidden border border-[#2a2a30] ring-1 ring-white/[0.04]">
          <Ill />
        </div>
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
