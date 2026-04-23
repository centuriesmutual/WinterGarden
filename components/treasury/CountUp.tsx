"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function CountUp({
  value,
  durationMs = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  style,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const from = 0;
            const to = value;
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / durationMs);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(from + (to - from) * eased);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", ...style }}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
