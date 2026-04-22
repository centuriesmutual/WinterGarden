"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { AudioWaveform } from "lucide-react";

const bg = "#0a0a0a" as const;

const textLoad = { duration: 0.6, ease: "easeOut" as const };
const imageLoad = { duration: 0.7, delay: 0.1, ease: "easeOut" as const };

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full box-border"
      style={{ background: bg, minHeight: "100svh" }}
    >
      <LazyMotion features={domAnimation}>
        <div
          className="box-border flex w-full min-h-screen items-center justify-center pt-[72px] pb-12"
          style={{ background: bg }}
        >
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid w-full grid-cols-1 gap-[clamp(1.5rem,4vw,3rem)] md:grid-cols-12 md:gap-8 xl:gap-12">
              <m.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={textLoad}
                className="col-span-1 flex flex-col py-8 md:col-span-6 lg:col-start-1 lg:col-span-5"
              >
                <div
                  className="mb-8 inline-flex w-fit rounded-full border px-4 py-2"
                  style={{
                    background: "#111114",
                    borderColor: "#1a1a1e",
                  }}
                >
                  <span
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "#444444" }}
                  >
                    Now in private beta · Anno MMXXV
                  </span>
                </div>

                <h1
                  className="mb-8"
                  style={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}
                >
                  <span
                    className="block font-medium"
                    style={{
                      color: "#f5f5f5",
                      fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    }}
                  >
                    Where musicians
                  </span>
                  <span
                    className="mt-0 block font-light"
                    style={{
                      color: "#666666",
                      fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    }}
                  >
                    are measured.
                  </span>
                </h1>

                <p
                  className="mb-8 max-w-md font-light"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    lineHeight: 1.8,
                    color: "#888888",
                  }}
                >
                  A performance intelligence platform that scores your playing
                  with the precision of a master&rsquo;s ear — pitch to the
                  cent, timing to the millisecond, expression to the phrase.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#waitlist"
                    className="inline-flex cursor-pointer items-center justify-center font-mono text-sm uppercase transition-all duration-300 ease-out"
                    style={{
                      letterSpacing: "0.15em",
                      background: "#f0f0f0",
                      color: "#0a0a0a",
                      padding: "12px 32px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "#ffffff";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 30px rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "#f0f0f0";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    Enter the Hall →
                  </Link>
                  <Link
                    href="#manifesto"
                    className="inline-flex cursor-pointer items-center justify-center border bg-transparent font-mono text-sm uppercase transition-all duration-300 ease-out"
                    style={{
                      letterSpacing: "0.15em",
                      borderColor: "#222222",
                      color: "#444444",
                      padding: "12px 32px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#555555";
                      el.style.color = "#888888";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#222222";
                      el.style.color = "#444444";
                    }}
                  >
                    Read the Manifesto
                  </Link>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={imageLoad}
                className="col-span-1 hidden min-h-0 flex-col items-center justify-center p-8 md:col-span-6 md:col-start-7 md:flex lg:col-start-7 lg:col-span-6"
                style={{
                  minHeight: "min(52vh, 520px)",
                  background: "#0d0d0f",
                  border: "1px solid #1a1a1e",
                }}
              >
                <AudioWaveform
                  className="mb-3 shrink-0"
                  size={56}
                  strokeWidth={1.25}
                  style={{ color: "#2a2a2a" }}
                  aria-hidden
                />
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "#3a3a3a" }}
                >
                  Wintergarden Interface
                </p>
                <p
                  className="mt-2 font-mono"
                  style={{ color: "#252528", fontSize: "10px" }}
                >
                  Coming soon
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
