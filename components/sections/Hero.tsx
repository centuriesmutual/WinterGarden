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
          "radial-gradient(ellipse at center, rgba(201,169,97,0.06) 0%, transparent 60%), var(--ink)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div
          className="relative w-full flex flex-col items-center justify-center text-center px-6 md:px-10"
          style={{ minHeight: "100svh", paddingTop: "96px", paddingBottom: "56px" }}
        >
          <div
            aria-hidden
            className="hidden md:block absolute"
            style={{
              left: "6vw",
              right: "6vw",
              top: "120px",
              bottom: "120px",
              border: "1px solid var(--gold-deep)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            className="hidden md:block absolute"
            style={{
              left: "calc(6vw + 10px)",
              right: "calc(6vw + 10px)",
              top: "130px",
              bottom: "130px",
              border: "1px solid var(--gold-ghost)",
              pointerEvents: "none",
            }}
          />

          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-6"
            style={{ marginBottom: "36px" }}
          >
            <span
              aria-hidden
              style={{
                width: "60px",
                height: "1px",
                background: "var(--gold-deep)",
              }}
            />
            <span
              className="font-body smallcaps"
              style={{
                fontSize: "11px",
                color: "var(--gold)",
                letterSpacing: "0.55em",
              }}
            >
              Anno MMXXV
            </span>
            <span
              aria-hidden
              style={{
                width: "60px",
                height: "1px",
                background: "var(--gold-deep)",
              }}
            />
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body smallcaps"
            style={{
              fontSize: "12px",
              color: "var(--paper-dim)",
              letterSpacing: "0.5em",
              marginBottom: "28px",
            }}
          >
            A Conservatory of Measured Performance
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
            className="font-display italic"
            style={{
              fontSize: "clamp(64px, 12vw, 180px)",
              lineHeight: 0.95,
              color: "var(--paper)",
              letterSpacing: "-0.01em",
              fontWeight: 500,
            }}
          >
            Wintergarden
          </m.h1>

          <m.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex items-center justify-center gap-5"
            style={{
              marginTop: "32px",
              width: "min(520px, 80%)",
              transformOrigin: "center",
            }}
          >
            <span
              aria-hidden
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, var(--gold-deep))",
              }}
            />
            <span
              className="font-serif"
              style={{ color: "var(--gold)", fontSize: "18px" }}
            >
              ❦
            </span>
            <span
              aria-hidden
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to left, transparent, var(--gold-deep))",
              }}
            />
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="font-serif italic"
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              color: "var(--paper-dim)",
              marginTop: "28px",
              maxWidth: "640px",
              lineHeight: 1.4,
            }}
          >
            Where the performance is measured,
            <br className="hidden sm:inline" />
            <span> </span>and the measure is the reward.
          </m.p>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="font-body"
            style={{
              fontSize: "15px",
              color: "var(--paper-ghost)",
              lineHeight: 1.8,
              marginTop: "28px",
              maxWidth: "520px",
              fontStyle: "italic",
            }}
          >
            An instrument for the modern performer — scoring pitch, timing, and
            expression with the precision of a master&rsquo;s ear.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            className="flex items-center justify-center flex-wrap gap-8"
            style={{ marginTop: "48px" }}
          >
            <Link
              href="#waitlist"
              data-cursor
              className="group inline-flex items-center font-body smallcaps"
              style={{
                fontSize: "12px",
                letterSpacing: "0.42em",
                padding: "16px 38px",
                color: "var(--ink)",
                background: "var(--gold)",
                border: "1px solid var(--gold)",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold)";
                el.style.color = "var(--ink)";
              }}
            >
              Enter the Hall
            </Link>

            <Link
              href="#manifesto"
              data-cursor
              className="inline-flex items-center font-serif italic"
              style={{
                fontSize: "16px",
                color: "var(--paper-dim)",
                letterSpacing: "0.04em",
                transition: "color 200ms ease",
                paddingBottom: "2px",
                borderBottom: "1px solid var(--gold-deep)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--gold)";
                el.style.borderBottomColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--paper-dim)";
                el.style.borderBottomColor = "var(--gold-deep)";
              }}
            >
              Read the Manifesto
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute left-0 right-0"
            style={{ bottom: "40px", padding: "0 5vw" }}
          >
            <Ornament variant="diamond" label="Opus I — Overture" />
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine variant="double" />
    </section>
  );
}
