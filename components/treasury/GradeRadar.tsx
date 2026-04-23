"use client";

import type { GradeDimension } from "@/types/treasury";

type Props = { dimensions: GradeDimension[] };

const W = 360;
const H = 360;
const cx = W / 2;
const cy = H / 2;
const R = 130;

export default function GradeRadar({ dimensions }: Props) {
  const n = dimensions.length;
  const pts = dimensions.map((d, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const radius = (d.score / 100) * R;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      angle,
      label: d.label,
    };
  });

  const rings = [0.25, 0.5, 0.75, 1];
  const axes = Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + R * Math.cos(angle), y: cy + R * Math.sin(angle) };
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={H}
      role="img"
      aria-label="Network grading radar chart"
    >
      {rings.map((k, i) => {
        const poly = Array.from({ length: n }, (_, j) => {
          const a = (j / n) * Math.PI * 2 - Math.PI / 2;
          return `${cx + R * k * Math.cos(a)},${cy + R * k * Math.sin(a)}`;
        }).join(" ");
        return (
          <polygon
            key={i}
            points={poly}
            fill="none"
            stroke="var(--wg-rule)"
            strokeWidth="1"
            strokeDasharray={i === rings.length - 1 ? "0" : "2 4"}
          />
        );
      })}

      {axes.map((a, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={a.x}
          y2={a.y}
          stroke="var(--wg-rule)"
          strokeWidth="1"
        />
      ))}

      <polygon
        points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="var(--wg-moss)"
        opacity="0.45"
        stroke="var(--wg-mint)"
        strokeWidth="1.5"
      />

      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="var(--wg-mint)" />
      ))}

      {dimensions.map((d, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const lx = cx + (R + 22) * Math.cos(a);
        const ly = cy + (R + 22) * Math.sin(a);
        const anchor =
          Math.abs(Math.cos(a)) < 0.2 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
        return (
          <text
            key={d.id}
            x={lx}
            y={ly}
            textAnchor={anchor}
            dominantBaseline="middle"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fill: "var(--wg-dim)",
            }}
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}
