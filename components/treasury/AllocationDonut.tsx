"use client";

import { useMemo, useState } from "react";
import type { AllocationSlice } from "@/types/treasury";

type Props = { slices: AllocationSlice[] };

const size = 320;
const cx = size / 2;
const cy = size / 2;
const rOuter = 140;
const rInner = 96;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(startDeg: number, endDeg: number) {
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const p1 = polar(cx, cy, rOuter, startDeg);
  const p2 = polar(cx, cy, rOuter, endDeg);
  const p3 = polar(cx, cy, rInner, endDeg);
  const p4 = polar(cx, cy, rInner, startDeg);
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

export default function AllocationDonut({ slices }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const arcs = useMemo(() => {
    let acc = 0;
    return slices.map((s, i) => {
      const start = acc * 3.6;
      acc += s.pct;
      const end = acc * 3.6;
      return { start, end, slice: s, i };
    });
  }, [slices]);

  const activeSlice = active !== null ? arcs[active].slice : null;

  return (
    <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
      <div className="relative shrink-0">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          role="img"
          aria-label="Token allocation donut chart"
        >
          <circle cx={cx} cy={cy} r={rOuter + 4} fill="none" stroke="var(--wg-rule)" strokeWidth="1" />
          {arcs.map(({ start, end, slice, i }) => (
            <path
              key={i}
              d={arcPath(start, end - 0.6)}
              fill={slice.color}
              opacity={active === null || active === i ? 1 : 0.35}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ transition: "opacity 200ms ease" }}
            />
          ))}
          <circle cx={cx} cy={cy} r={rInner - 4} fill="var(--wg-ink)" />
          <text
            x={cx}
            y={cy - 10}
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "34px",
              fill: "var(--wg-cream)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {activeSlice ? `${activeSlice.pct}%` : "100%"}
          </text>
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              fill: "var(--wg-dim)",
              textTransform: "uppercase",
            }}
          >
            {activeSlice ? activeSlice.label : "WGN Allocation"}
          </text>
        </svg>
      </div>

      <ul className="grid w-full max-w-md grid-cols-1 gap-2">
        {arcs.map(({ slice, i }) => (
          <li
            key={i}
            className="flex items-center justify-between border-b py-2 text-sm"
            style={{
              borderColor: "var(--wg-rule)",
              color: "var(--wg-cream)",
              opacity: active === null || active === i ? 1 : 0.5,
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <span className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ background: slice.color }}
              />
              <span>
                {slice.label}
                {slice.note && (
                  <span
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--wg-dim)",
                    }}
                  >
                    {slice.note}
                  </span>
                )}
              </span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontVariantNumeric: "tabular-nums",
                fontSize: "15px",
              }}
            >
              {slice.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
