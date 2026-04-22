"use client";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

type Metric = { label: string; value: number };

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
        padding: "22px 0",
        borderTop: "1px solid var(--gold-ghost)",
      }}
    >
      <div
        className="grid items-baseline"
        style={{
          gridTemplateColumns: "minmax(160px, 1fr) 1.4fr auto",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            color: "var(--paper-dim)",
            fontWeight: 500,
          }}
        >
          {metric.label}
        </span>
        <div
          className="relative w-full"
          style={{
            height: "6px",
            background: "var(--gold-ghost)",
            borderRadius: "9999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${fill}%`,
              background:
                "linear-gradient(90deg, var(--gold-dim), var(--gold) 70%, #E2C47E)",
              borderRadius: "9999px",
              transition: "width 1100ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              boxShadow: "0 0 12px -2px rgba(201,169,97,0.4)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "20px",
            color: "var(--paper)",
            letterSpacing: "-0.02em",
            minWidth: "60px",
            textAlign: "right",
            fontWeight: 600,
            fontVariantNumeric: "tabular-nums",
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
        <div className="w-full max-w-[1040px] mx-auto px-5 md:px-10 py-24 md:py-36">
          <div className="text-center">
            <Ornament variant="double" label="Programme of Record" />
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card relative mx-auto"
            style={{
              marginTop: "48px",
              padding: "56px 32px",
              borderRadius: "var(--radius-3xl)",
            }}
          >
            <div className="relative text-center">
              <div
                className="inline-flex flex-wrap items-center justify-center smallcaps"
                style={{
                  fontSize: "10.5px",
                  color: "var(--gold)",
                  fontWeight: 500,
                  gap: "14px",
                  padding: "6px 16px",
                  border: "1px solid var(--gold-ghost)",
                  borderRadius: "9999px",
                  background: "rgba(201,169,97,0.05)",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: "var(--gold)",
                    animation: "pulse-dot 2.4s ease-in-out infinite",
                  }}
                />
                Session 00847 · Pianoforte · In Session
              </div>

              <div
                style={{
                  marginTop: "32px",
                  fontSize: "13px",
                  color: "var(--paper-ghost)",
                  fontWeight: 500,
                }}
              >
                A performance of
              </div>
              <div
                style={{
                  fontSize: "22px",
                  color: "var(--paper-dim)",
                  marginTop: "4px",
                  fontStyle: "italic",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                }}
              >
                Chopin · Nocturne in C♯ Minor
              </div>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.15 }}
                style={{ marginTop: "28px", marginBottom: "12px" }}
              >
                <div
                  style={{
                    fontSize: "clamp(96px, 15vw, 160px)",
                    lineHeight: 1,
                    color: "var(--paper)",
                    letterSpacing: "-0.05em",
                    fontWeight: 700,
                    fontVariantNumeric: "tabular-nums",
                    backgroundImage:
                      "linear-gradient(180deg, var(--paper) 0%, #CFC4A8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {score.toFixed(1)}
                </div>
                <div
                  className="smallcaps"
                  style={{
                    fontSize: "11px",
                    color: "var(--gold)",
                    fontWeight: 500,
                    marginTop: "4px",
                  }}
                >
                  Wintergarden Score
                </div>
              </m.div>

              <div
                aria-hidden
                className="mx-auto"
                style={{
                  width: "64px",
                  height: "2px",
                  borderRadius: "9999px",
                  background: "var(--gold)",
                  margin: "28px auto 36px",
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
              className="relative flex flex-wrap items-center justify-center gap-4"
              style={{ marginTop: "36px" }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--paper-ghost)",
                }}
              >
                Global rank{" "}
                <span style={{ color: "var(--paper)", fontWeight: 600 }}>
                  #1,847
                </span>{" "}
                of 94,210
              </div>
              <span style={{ color: "var(--gold-deep)" }}>·</span>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--paper-ghost)",
                }}
              >
                Percentile{" "}
                <span style={{ color: "var(--paper)", fontWeight: 600 }}>
                  98th
                </span>
              </div>
              <span style={{ color: "var(--gold-deep)" }}>·</span>
              <span className="tag" style={{ fontSize: "10px" }}>
                Verified on Avalanche
              </span>
            </div>
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine label="Opus IV — The Society" sectionNumber="IV" />
    </section>
  );
}
