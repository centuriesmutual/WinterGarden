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

    const duration = 1400;
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
    <div ref={ref} className="flex flex-col">
      <span
        className="font-display text-white block"
        style={{
          fontSize: "clamp(48px, 6vw, 72px)",
          lineHeight: 1,
          letterSpacing: "0.02em",
        }}
      >
        {display}
      </span>
      <span
        className="font-mono block"
        style={{
          color: "var(--white-ghost)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          borderLeft: "1px solid var(--tiffany)",
          paddingLeft: "8px",
          marginTop: "16px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
