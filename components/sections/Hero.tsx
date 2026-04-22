"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Spectrogram from "./Spectrogram";
import RuledLine from "@/components/ui/RuledLine";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "var(--black)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div
          className="relative w-full flex flex-col"
          style={{ minHeight: "100svh", paddingTop: "56px" }}
        >
          <div className="hidden md:block absolute top-0 right-0 h-full w-[42vw] pt-20 pr-8 pb-24">
            <Spectrogram />
          </div>

          <div className="relative flex-1 flex items-end">
            <div className="w-full px-6 md:px-10 pb-14 md:pb-24 max-w-full md:max-w-[58vw]">
              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-mono"
                style={{
                  fontSize: "10px",
                  color: "var(--tiffany)",
                  letterSpacing: "0.4em",
                  marginBottom: "24px",
                }}
              >
                § PERFORMANCE INTELLIGENCE SYSTEM
              </m.div>

              <h1
                className="font-display text-white block"
                style={{
                  fontSize: "11vw",
                  lineHeight: 0.85,
                  letterSpacing: "-0.01em",
                }}
              >
                <m.span
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="block"
                >
                  WINTER
                </m.span>
                <m.span
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="block"
                >
                  GARDEN
                </m.span>
              </h1>

              <m.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="font-serif italic"
                style={{
                  fontSize: "20px",
                  color: "var(--white-dim)",
                  marginTop: "20px",
                }}
              >
                Where musicians are measured.
              </m.p>

              <div
                className="font-mono"
                style={{
                  fontSize: "12px",
                  color: "var(--white-ghost)",
                  lineHeight: 2,
                  marginTop: "28px",
                  letterSpacing: "0.08em",
                }}
              >
                {[
                  "Score your performance.",
                  "Compete globally. Earn.",
                ].map((line, i) => (
                  <m.span
                    key={line}
                    className="block"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.95 + i * 0.1 }}
                  >
                    {line}
                  </m.span>
                ))}
              </div>

              <m.div
                className="flex items-center flex-wrap"
                style={{ marginTop: "48px" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Link
                  href="#waitlist"
                  data-cursor
                  className="font-display inline-flex items-center border border-tiffany text-tiffany hover:bg-tiffany hover:text-black transition-colors"
                  style={{
                    fontSize: "15px",
                    letterSpacing: "0.3em",
                    padding: "14px 36px",
                    transitionDuration: "150ms",
                  }}
                >
                  ENTER THE PLATFORM
                </Link>
                <Link
                  href="#manifesto"
                  data-cursor
                  className="group font-mono inline-flex items-center"
                  style={{
                    fontSize: "11px",
                    color: "var(--white-ghost)",
                    marginLeft: "32px",
                    letterSpacing: "0.15em",
                  }}
                >
                  <span className="transition-colors group-hover:text-white-dim group-hover:[text-decoration:underline] group-hover:[text-decoration-color:var(--tiffany)]">
                    → read the manifesto
                  </span>
                </Link>
              </m.div>
            </div>
          </div>

          <div className="w-full">
            <RuledLine label="§ 001 — ORIGIN" sectionNumber="001" />
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
