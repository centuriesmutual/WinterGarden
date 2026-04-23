"use client";

import type { TreasuryFlow } from "@/types/treasury";

type Props = { flow: TreasuryFlow };

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}k`;
  return `$${n.toFixed(0)}`;
}

export default function TreasuryFlowDiagram({ flow }: Props) {
  const cols: Record<string, { x: number; y: number; w: number; h: number }> = {
    revenue: { x: 20, y: 120, w: 180, h: 92 },
    fees: { x: 280, y: 40, w: 180, h: 92 },
    artists: { x: 280, y: 200, w: 180, h: 92 },
    reserve: { x: 540, y: 10, w: 180, h: 76 },
    stakers: { x: 540, y: 104, w: 180, h: 76 },
    burn: { x: 540, y: 198, w: 180, h: 76 },
  };

  function edgePath(fromId: string, toId: string) {
    const a = cols[fromId];
    const b = cols[toId];
    const x1 = a.x + a.w;
    const y1 = a.y + a.h / 2;
    const x2 = b.x;
    const y2 = b.y + b.h / 2;
    const c1 = x1 + (x2 - x1) * 0.55;
    const c2 = x2 - (x2 - x1) * 0.55;
    return `M ${x1} ${y1} C ${c1} ${y1}, ${c2} ${y2}, ${x2} ${y2}`;
  }

  return (
    <div className="w-full overflow-x-auto">
      {/* Desktop / tablet SVG */}
      <svg
        viewBox="0 0 760 300"
        width="100%"
        height={300}
        className="hidden md:block"
        role="img"
        aria-label={`Treasury flow for ${flow.epoch}`}
      >
        {flow.edges.map((e, i) => (
          <g key={i}>
            <path
              d={edgePath(e.from, e.to)}
              stroke="var(--wg-mint)"
              strokeOpacity="0.6"
              strokeWidth={Math.max(1.25, (e.pct / 100) * 6)}
              fill="none"
            />
            <text
              x={
                (cols[e.from].x + cols[e.from].w + cols[e.to].x) / 2
              }
              y={
                (cols[e.from].y + cols[e.from].h / 2 + cols[e.to].y + cols[e.to].h / 2) /
                  2 -
                6
              }
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                fill: "var(--wg-dim)",
              }}
            >
              {e.pct}% · {fmt(e.valueUsd)}
            </text>
          </g>
        ))}

        {flow.nodes.map((n) => {
          const r = cols[n.id];
          const stroke =
            n.emphasis === "accent"
              ? "var(--wg-mint)"
              : n.emphasis === "primary"
              ? "var(--wg-copper)"
              : "var(--wg-rule)";
          return (
            <g key={n.id}>
              <rect
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                rx={14}
                fill="rgba(15,31,26,0.6)"
                stroke={stroke}
                strokeWidth="1"
              />
              <text
                x={r.x + 16}
                y={r.y + 24}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fill: "var(--wg-dim)",
                }}
              >
                {n.id.toUpperCase()}
              </text>
              <text
                x={r.x + 16}
                y={r.y + 48}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "15px",
                  fill: "var(--wg-cream)",
                }}
              >
                {n.label}
              </text>
              <text
                x={r.x + 16}
                y={r.y + r.h - 14}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fill: "var(--wg-cream)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(n.valueUsd)}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mobile list fallback */}
      <ol className="md:hidden flex flex-col gap-3">
        {flow.nodes.map((n, i) => (
          <li
            key={n.id}
            className="rounded-xl border p-4"
            style={{
              borderColor:
                n.emphasis === "accent"
                  ? "var(--wg-mint)"
                  : n.emphasis === "primary"
                  ? "var(--wg-copper)"
                  : "var(--wg-rule)",
              background: "rgba(15,31,26,0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--wg-dim)",
              }}
            >
              Step {i + 1}
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--wg-cream)" }}>
              {n.label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                color: "var(--wg-cream)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {fmt(n.valueUsd)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
