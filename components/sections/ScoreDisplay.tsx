"use client";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

type Metric = { label: string; value: number; unit?: string };

const METRICS: Metric[] = [
  { label: "Intonation", value: 93.2 },
  { label: "Tempo Fidelity", value: 86.1 },
  { label: "Rubato & Feel", value: 78.4 },
  { label: "Expression", value: 91.7 },
];

function MetricRow({
  metric,
  index,
  inView,
}: {
  metric: Metric;
  index: number;
  inView: boolean;
}) {
  const [fill, setFill] = useState(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = window.setTimeout(() => {
      setFill(metric.value);
    }, index * 100);

    const start = performance.now();
    const duration = 1100;
    const delay = index * 100;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(metric.value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, index, metric.value]);

  return (
    <div
      className="w-full"
      style={{
        padding: "24px 0",
        borderTop: "1px solid var(--gold-ghost)",
      }}
    >
      <div
        className="grid items-baseline"
        style={{
          gridTemplateColumns: "minmax(180px, 1.2fr) 1fr auto",
          gap: "28px",
        }}
      >
        <span
          className="font-serif italic"
          style={{
            fontSize: "17px",
            color: "var(--paper-dim)",
            letterSpacing: "0.02em",
          }}
        >
          {metric.label}
        </span>
        <div
          className="relative w-full"
          style={{ height: "2px", background: "var(--gold-ghost)" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${fill}%`,
              background: "var(--gold)",
              transition: "width 1100ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          />
        </div>
        <span
          className="font-display"
          style={{
            fontSize: "22px",
            color: "var(--paper)",
            letterSpacing: "-0.005em",
            minWidth: "64px",
            textAlign: "right",
            fontWeight: 500,
          }}
        >
          {display.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default function ScoreDisplay() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = 87.4;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section
      id="score"
      ref={ref}
      className="relative w-full"
      style={{
        background:
          "linear-gradient(180deg, var(--black) 0%, var(--ink) 100%)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center">
              <Ornament variant="double" label="Programme of Record" />
            </div>

            <div
              className="relative mx-auto"
              style={{
                marginTop: "56px",
                padding: "72px 48px",
                border: "1px solid var(--gold-deep)",
                background:
                  "linear-gradient(180deg, rgba(18,14,9,0.6), rgba(7,5,3,0.9))",
              }}
            >
              <span
                aria-hidden
                className="absolute"
                style={{
                  inset: "8px",
                  border: "1px solid var(--gold-ghost)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative text-center">
                <div
                  className="font-body smallcaps flex flex-wrap items-center justify-center"
                  style={{
                    fontSize: "10px",
                    color: "var(--gold)",
                    letterSpacing: "0.48em",
                    gap: "14px",
                  }}
                >
                  <span>Session No. 00847</span>
                  <span style={{ color: "var(--paper-shadow)" }}>◆</span>
                  <span>Pianoforte</span>
                  <span style={{ color: "var(--paper-shadow)" }}>◆</span>
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        background: "var(--gold)",
                        animation: "pulse-dot 2.4s ease-in-out infinite",
                      }}
                    />
                    In Session
                  </span>
                </div>

                <m.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  style={{ marginTop: "40px", marginBottom: "28px" }}
                >
                  <div
                    className="font-serif italic"
                    style={{
                      fontSize: "13px",
                      color: "var(--paper-ghost)",
                      letterSpacing: "0.3em",
                      marginBottom: "8px",
                    }}
                  >
                    — A performance of —
                  </div>
                  <div
                    className="font-display italic"
                    style={{
                      fontSize: "22px",
                      color: "var(--paper-dim)",
                      marginBottom: "24px",
                    }}
                  >
                    Chopin · Nocturne in C♯ Minor
                  </div>

                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(110px, 16vw, 176px)",
                      lineHeight: 1,
                      color: "var(--paper)",
                      letterSpacing: "-0.01em",
                      fontWeight: 500,
                    }}
                  >
                    {score.toFixed(1)}
                  </div>
                  <div
                    className="font-body smallcaps"
                    style={{
                      fontSize: "11px",
                      color: "var(--gold)",
                      letterSpacing: "0.55em",
                      marginTop: "6px",
                    }}
                  >
                    Wintergarden Score
                  </div>
                </m.div>

                <div
                  aria-hidden
                  className="mx-auto"
                  style={{
                    width: "80px",
                    height: "1px",
                    background: "var(--gold)",
                    margin: "24px auto 40px",
                  }}
                />
              </div>

              <div className="relative w-full">
                {METRICS.map((metric, idx) => (
                  <MetricRow
                    key={metric.label}
                    metric={metric}
                    index={idx}
                    inView={inView}
                  />
                ))}
                <div style={{ borderTop: "1px solid var(--gold-ghost)" }} />
              </div>

              <div
                className="relative font-serif italic flex flex-wrap items-center justify-center"
                style={{
                  marginTop: "40px",
                  fontSize: "13px",
                  color: "var(--paper-ghost)",
                  gap: "16px",
                  letterSpacing: "0.04em",
                }}
              >
                <span>
                  Global Rank{" "}
                  <span style={{ color: "var(--paper)" }}>№ 1,847</span> of
                  94,210
                </span>
                <span style={{ color: "var(--paper-shadow)" }}>◆</span>
                <span>
                  Percentile{" "}
                  <span style={{ color: "var(--paper)" }}>98th</span>
                </span>
                <span style={{ color: "var(--paper-shadow)" }}>◆</span>
                <span
                  className="font-body smallcaps"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.45em",
                    color: "var(--gold-dim)",
                  }}
                >
                  Verified on Avalanche
                </span>
              </div>
            </div>
          </div>
        </div>
      </LazyMotion>

      <RuledLine label="Opus IV — The Society" sectionNumber="IV" />
    </section>
  );
}
