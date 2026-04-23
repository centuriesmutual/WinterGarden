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
        {/* Full-height column, content pushed down below navbar */}
        <div
          className="relative w-full flex flex-col"
          style={{ minHeight: "100svh", paddingTop: "88px", paddingBottom: "40px" }}
        >
          {/* THE BORDER IS NOW THE CONTENT WRAPPER */}
          <div
            className="flex-1 mx-[4vw] flex flex-col justify-center px-8 md:px-14"
            style={{
              border: `1px solid ${g.b}`,
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              paddingTop: "56px",
              paddingBottom: "56px",
            }}
          >
            {/* Headline */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className="text-center w-full"
              style={{
                fontSize: "clamp(32px, 6.2vw, 78px)",
                lineHeight: 1.02,
                color: "var(--paper)",
                letterSpacing: "-0.04em",
                fontWeight: 700,
                maxWidth: "14ch",
                margin: "0 auto 8px",
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

            {/* Two-column: text left, image right */}
            <div
              className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
              style={{ marginTop: "12px" }}
            >
              {/* Left: badge + description + CTAs */}
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
                    fontSize: "clamp(13px, 1.05vw, 15px)",
                    color: "var(--paper-dim)",
                    marginTop: "14px",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    maxWidth: "38ch",
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
                      padding: "9px 18px",
                      fontSize: "12px",
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
                      padding: "9px 18px",
                      fontSize: "12px",
                      borderRadius: "9999px",
                      color: g.f,
                      background: "transparent",
                      border: `1px solid ${g.c}`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#a0a0a0";
                      el.style.borderColor = g.e;
                      el.style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = g.f;
                      el.style.borderColor = g.c;
                      el.style.background = "transparent";
                    }}
                  >
                    Read the Manifesto
                  </Link>
                </m.div>
              </div>

              {/* Right: image placeholder */}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                className="w-full flex flex-col order-2 lg:order-2"
                style={{
                  aspectRatio: "15 / 10",
                  minHeight: "220px",
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
        </div>
      </LazyMotion>

      <HeroRuledLineDouble />
    </section>
  );
}
