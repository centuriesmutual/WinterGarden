"use client";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RuledLine from "@/components/ui/RuledLine";

type Metric = { label: string; value: number };

const METRICS: Metric[] = [
  { label: "PITCH ACCURACY", value: 93.2 },
  { label: "TIMING DEVIATION", value: 86.1 },
  { label: "RHYTHMIC FEEL", value: 78.4 },
  { label: "EXPRESSION", value: 91.7 },
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
    const duration = 800;
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
      className="grid items-center w-full"
      style={{
        gridTemplateColumns: "200px 1fr 80px",
        gap: "24px",
        padding: "22px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span
        className="font-mono"
        style={{
          fontSize: "11px",
          color: "var(--white-ghost)",
          letterSpacing: "0.2em",
        }}
      >
        {metric.label}
      </span>
      <div
        className="relative w-full"
        style={{
          height: "2px",
          background: "var(--border-lit)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${fill}%`,
            background: "var(--tiffany)",
            transition: "width 800ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        />
      </div>
      <span
        className="font-mono text-right text-white"
        style={{
          fontSize: "14px",
          letterSpacing: "0.08em",
        }}
      >
        {display.toFixed(1)}
      </span>
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
    const duration = 1200;
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
      style={{ background: "var(--deep)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full px-6 md:px-10 py-24 md:py-32">
          <div
            className="font-mono flex flex-wrap items-center"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "var(--tiffany)",
              gap: "18px",
            }}
          >
            <span>PERFORMANCE ANALYSIS</span>
            <span style={{ color: "var(--white-ghost)" }}>·</span>
            <span>SESSION #00847</span>
            <span style={{ color: "var(--white-ghost)" }}>·</span>
            <span>PIANO</span>
            <span style={{ color: "var(--white-ghost)" }}>·</span>
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  background: "var(--tiffany)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              LIVE
            </span>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-start"
            style={{ marginTop: "56px", marginBottom: "56px" }}
          >
            <div
              className="font-display text-white"
              style={{
                fontSize: "clamp(120px, 18vw, 180px)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              {score.toFixed(1)}
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: "11px",
                color: "var(--tiffany)",
                letterSpacing: "0.4em",
                marginTop: "-8px",
              }}
            >
              WINTERGARDEN SCORE
            </div>
          </m.div>

          <div className="w-full">
            {METRICS.map((metric, idx) => (
              <MetricRow
                key={metric.label}
                metric={metric}
                index={idx}
                inView={inView}
              />
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>

          <div
            className="font-mono flex flex-wrap items-center"
            style={{
              marginTop: "40px",
              fontSize: "10px",
              color: "var(--white-ghost)",
              letterSpacing: "0.2em",
              gap: "18px",
            }}
          >
            <span>GLOBAL RANK: #1,847 of 94,210</span>
            <span>·</span>
            <span>PERCENTILE: 98TH</span>
            <span>·</span>
            <span>INSTRUMENT: PIANO</span>
          </div>
        </div>
      </LazyMotion>

      <RuledLine label="§ 004 — NETWORK" sectionNumber="004" />
    </section>
  );
}
