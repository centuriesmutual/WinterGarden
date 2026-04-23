"use client";

import type { NetworkGrade } from "@/types/treasury";

type Props = { history: NetworkGrade["history"] };

const W = 720;
const H = 200;
const PAD_L = 48;
const PAD_R = 24;
const PAD_T = 20;
const PAD_B = 32;

export default function GradeHistory({ history }: Props) {
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const max = 100;
  const min = 60;

  const xFor = (i: number) => PAD_L + (i / (history.length - 1)) * plotW;
  const yFor = (v: number) => PAD_T + plotH - ((v - min) / (max - min)) * plotH;

  const line = history.map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(p.score)}`).join(" ");
  const area =
    line +
    ` L ${xFor(history.length - 1)} ${PAD_T + plotH} L ${xFor(0)} ${PAD_T + plotH} Z`;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        role="img"
        aria-label="Network grade history"
        preserveAspectRatio="none"
      >
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <g key={i}>
            <line
              x1={PAD_L}
              x2={W - PAD_R}
              y1={PAD_T + plotH - t * plotH}
              y2={PAD_T + plotH - t * plotH}
              stroke="var(--wg-rule)"
              strokeDasharray="2 4"
            />
            <text
              x={PAD_L - 8}
              y={PAD_T + plotH - t * plotH + 3}
              textAnchor="end"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fill: "var(--wg-dim)",
              }}
            >
              {Math.round(min + t * (max - min))}
            </text>
          </g>
        ))}
        <path d={area} fill="var(--wg-moss)" opacity="0.35" />
        <path d={line} fill="none" stroke="var(--wg-mint)" strokeWidth="1.5" />
        {history.map((p, i) => (
          <g key={p.quarter}>
            <circle cx={xFor(i)} cy={yFor(p.score)} r="3" fill="var(--wg-mint)" />
            <text
              x={xFor(i)}
              y={H - 10}
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                fill: "var(--wg-dim)",
              }}
            >
              {p.quarter}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
