"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

const g = {
  a: "#1a1a1a",
  b: "#2a2a2a",
  c: "#333333",
  d: "#444444",
  e: "#555555",
  f: "#666666",
} as const;

function HeroRuledLineDouble() {
  return (
    <div aria-hidden className="w-full">
      <div style={{ height: "1px", background: g.c }} />
      <div className="h-1" />
      <div style={{ height: "1px", background: g.c }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 60%), var(--ink)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div
          className="relative w-full flex flex-col px-5 md:px-10"
          style={{
            minHeight: "100svh",
            paddingTop: "112px",
            paddingBottom: "64px",
          }}
        >
          <div
            aria-hidden
            className="hidden md:block pointer-events-none absolute"
            style={{
              left: "6vw",
              right: "6vw",
              top: "128px",
              bottom: "32px",
              maxHeight: "calc(100% - 160px)",
              border: `1px solid ${g.b}`,
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          />

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="text-center w-full"
            style={{
              fontSize: "clamp(36px, 7.5vw, 100px)",
              lineHeight: 0.98,
              color: "var(--paper)",
              letterSpacing: "-0.04em",
              fontWeight: 700,
              maxWidth: "20ch",
              margin: "0 auto 0",
            }}
          >
            Where musicians
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(180deg, #888888 0%, ${g.f} 55%, ${g.e} 100%)`,
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

          <div
            className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
            style={{ marginTop: "24px" }}
          >
            <div className="flex flex-col text-left w-full min-w-0 order-1">
              <m.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="inline-flex self-start items-center gap-2 w-fit"
                style={{
                  padding: "5px 12px",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: g.f,
                  background: g.a,
                  border: `1px solid ${g.b}`,
                  borderRadius: "9999px",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <span
                  aria-hidden
                  className="rounded-full shrink-0"
                  style={{
                    width: "6px",
                    height: "6px",
                    background: g.e,
                    animation: "pulse-dot 2.4s ease-in-out infinite",
                    boxShadow: "0 0 8px rgba(255,255,255,0.06)",
                  }}
                />
                Now in private beta · Anno MMXXV
              </m.div>

              <m.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                style={{
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  color: "var(--paper-dim)",
                  marginTop: "16px",
                  lineHeight: 1.55,
                  fontWeight: 400,
                  maxWidth: "42ch",
                }}
              >
                A performance intelligence platform that scores your playing
                with the precision of a master&rsquo;s ear — pitch to the
                cent, timing to the millisecond, expression to the phrase.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="flex items-center flex-wrap gap-3"
                style={{ marginTop: "22px" }}
              >
                <Link
                  href="#waitlist"
                  className="inline-flex items-center justify-center font-medium transition-colors"
                  style={{
                    padding: "10px 22px",
                    fontSize: "13px",
                    borderRadius: "9999px",
                    color: "#e8e8e8",
                    background: g.b,
                    border: `1px solid ${g.c}`,
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.04) inset, 0 6px 20px -10px rgba(0,0,0,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = g.c;
                    el.style.borderColor = g.d;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = g.b;
                    el.style.borderColor = g.c;
                  }}
                >
                  Enter the Hall
                  <span style={{ marginLeft: "8px", fontSize: "13px" }}>→</span>
                </Link>
                <Link
                  href="#manifesto"
                  className="inline-flex items-center justify-center font-medium transition-colors"
                  style={{
                    padding: "10px 22px",
                    fontSize: "13px",
                    borderRadius: "9999px",
                    color: g.f,
                    background: "transparent",
                    border: `1px solid ${g.c}`,
                    boxShadow: "0 0 0 0 rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#a0a0a0";
                    el.style.borderColor = g.e;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = g.f;
                    el.style.borderColor = g.c;
                    el.style.background = "transparent";
                    el.style.boxShadow = "none";
                  }}
                >
                  Read the Manifesto
                </Link>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="w-full min-h-[240px] flex flex-col order-2 lg:order-2"
              style={{
                aspectRatio: "16 / 10",
                minHeight: "240px",
                borderRadius: "12px",
                background: "#1e1e1e",
                border: "1px dashed #333333",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px -20px rgba(0,0,0,0.5)",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <ImageIcon
                className="shrink-0"
                size={26}
                strokeWidth={1.25}
                style={{ color: g.e }}
                aria-hidden
              />
              <p
                className="text-center"
                style={{
                  color: g.d,
                  fontSize: "12px",
                  fontWeight: 500,
                  marginTop: "8px",
                }}
              >
                Visual coming soon
              </p>
            </m.div>
          </div>
        </div>
      </LazyMotion>

      <HeroRuledLineDouble />
    </section>
  );
}
