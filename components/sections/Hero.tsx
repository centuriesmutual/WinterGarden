"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at center, rgba(201,169,97,0.08) 0%, transparent 55%), var(--ink)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div
          className="relative w-full flex flex-col items-center justify-center text-center px-5 md:px-10"
          style={{
            minHeight: "100svh",
            paddingTop: "112px",
            paddingBottom: "64px",
          }}
        >
          <div
            aria-hidden
            className="hidden md:block absolute pointer-events-none"
            style={{
              left: "6vw",
              right: "6vw",
              top: "128px",
              bottom: "128px",
              border: "1px solid var(--gold-ghost)",
              borderRadius: "var(--radius-3xl)",
              background:
                "linear-gradient(180deg, rgba(201,169,97,0.03), transparent 40%)",
            }}
          />

          <m.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="tag relative"
          >
            <span
              aria-hidden
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: "var(--gold)",
                animation: "pulse-dot 2.4s ease-in-out infinite",
              }}
            />
            Now in private beta · Anno MMXXV
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
            className="relative"
            style={{
              fontSize: "clamp(56px, 11vw, 160px)",
              lineHeight: 0.96,
              color: "var(--paper)",
              letterSpacing: "-0.045em",
              fontWeight: 700,
              marginTop: "36px",
              maxWidth: "18ch",
            }}
          >
            Where musicians
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #E8D19A 0%, var(--gold) 60%, var(--gold-dim) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              are measured.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="relative"
            style={{
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "var(--paper-dim)",
              marginTop: "30px",
              maxWidth: "620px",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            A performance intelligence platform that scores your playing with
            the precision of a master&rsquo;s ear — pitch to the cent, timing
            to the millisecond, expression to the phrase.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="relative flex items-center justify-center flex-wrap gap-4"
            style={{ marginTop: "40px" }}
          >
            <Link href="#waitlist" className="btn-primary">
              Enter the Hall
              <span style={{ marginLeft: "10px", fontSize: "15px" }}>→</span>
            </Link>
            <Link href="#manifesto" className="btn-secondary">
              Read the Manifesto
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative flex items-center justify-center gap-6 flex-wrap"
            style={{ marginTop: "56px" }}
          >
            {[
              "Powered by Avalanche",
              "Settled in USDC",
              "Scored in real-time",
            ].map((item) => (
              <div
                key={item}
                className="smallcaps"
                style={{
                  fontSize: "10.5px",
                  color: "var(--paper-ghost)",
                  fontWeight: 500,
                }}
              >
                {item}
              </div>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="absolute left-0 right-0"
            style={{ bottom: "40px", padding: "0 6vw" }}
          >
            <Ornament variant="diamond" label="Opus I — Overture" />
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine variant="double" />
    </section>
  );
}
