"use client";

import type { VestingSchedule } from "@/types/treasury";

type Props = { schedule: VestingSchedule };

const W = 720;
const H = 240;
const PAD_L = 48;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 32;

export default function VestingArea({ schedule }: Props) {
  const months = schedule.totalMonths;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;

  const totals = new Array<number>(months).fill(0);
  for (const s of schedule.series) {
    for (let i = 0; i < months; i++) totals[i] += s.monthly[i];
  }
  const maxTotal = Math.max(...totals, 1);

  const stacks: number[][] = schedule.series.map(() => new Array(months).fill(0));
  const running = new Array(months).fill(0);
  schedule.series.forEach((s, idx) => {
    for (let i = 0; i < months; i++) {
      running[i] += s.monthly[i];
      stacks[idx][i] = running[i];
    }
  });

  const xFor = (i: number) => PAD_L + (i / (months - 1)) * plotW;
  const yFor = (v: number) => PAD_T + plotH - (v / maxTotal) * plotH;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        role="img"
        aria-label="Token vesting schedule area chart"
        preserveAspectRatio="none"
      >
        {[0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={PAD_L}
            x2={W - PAD_R}
            y1={PAD_T + plotH - t * plotH}
            y2={PAD_T + plotH - t * plotH}
            stroke="var(--wg-rule)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}

        {[...schedule.series].map((s, idx) => {
          const top = stacks[idx];
          const bottom = idx === 0 ? null : stacks[idx - 1];
          const d: string[] = [];
          d.push(`M ${xFor(0)} ${yFor(top[0])}`);
          for (let i = 1; i < months; i++) d.push(`L ${xFor(i)} ${yFor(top[i])}`);
          if (bottom) {
            for (let i = months - 1; i >= 0; i--) d.push(`L ${xFor(i)} ${yFor(bottom[i])}`);
          } else {
            d.push(`L ${xFor(months - 1)} ${PAD_T + plotH}`);
            d.push(`L ${xFor(0)} ${PAD_T + plotH}`);
          }
          d.push("Z");
          return (
            <path
              key={s.label}
              d={d.join(" ")}
              fill={s.color}
              opacity={0.85}
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="0.5"
            />
          );
        })}

        {[0, 12, 24, 36, 48].map((m) => (
          <g key={m}>
            <line
              x1={xFor(Math.min(m, months - 1))}
              x2={xFor(Math.min(m, months - 1))}
              y1={PAD_T}
              y2={H - PAD_B}
              stroke="var(--wg-rule)"
              strokeDasharray="1 3"
              opacity={0.5}
            />
            <text
              x={xFor(Math.min(m, months - 1))}
              y={H - 10}
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                fill: "var(--wg-dim)",
              }}
            >
              M{m}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
