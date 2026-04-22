"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  label: string;
  animate?: boolean;
};

function parseNumeric(value: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
} | null {
  const match = value.match(/^([^\d.-]*)([\d.,]+)([^\d]*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const cleaned = numStr.replace(/,/g, "");
  const num = parseFloat(cleaned);
  if (Number.isNaN(num)) return null;
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { prefix: prefix || "", number: num, suffix: suffix || "", decimals };
}

function formatNumber(n: number, decimals: number, grouped: boolean): string {
  if (grouped) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return n.toFixed(decimals);
}

export default function StatBlock({ value, label, animate = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(value);
  const parsed = parseNumeric(value);
  const grouped = value.includes(",");

  useEffect(() => {
    if (!animate || !parsed) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      setDisplay(
        parsed.prefix +
          formatNumber(0, parsed.decimals, grouped) +
          parsed.suffix
      );
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = parsed.number * eased;
      setDisplay(
        parsed.prefix +
          formatNumber(current, parsed.decimals, grouped) +
          parsed.suffix
      );
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, inView, parsed, value, grouped]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span
        className="font-display"
        style={{
          fontSize: "clamp(44px, 5.2vw, 72px)",
          lineHeight: 1,
          letterSpacing: "-0.005em",
          color: "var(--paper)",
          fontWeight: 500,
        }}
      >
        {display}
      </span>
      <span
        aria-hidden
        style={{
          marginTop: "14px",
          width: "36px",
          height: "1px",
          background: "var(--gold)",
        }}
      />
      <span
        className="font-body smallcaps"
        style={{
          color: "var(--paper-ghost)",
          fontSize: "10px",
          letterSpacing: "0.38em",
          marginTop: "12px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
