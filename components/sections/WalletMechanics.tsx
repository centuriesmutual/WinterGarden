"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const shell = "#0a0a0c";
const borderM = "#141418";
const borderL = "#1e1e22";
const g = {
  p: "#2d6a4f",
  pDim: "#1a3028",
  pDeep: "#0d1f16",
  ink: "#0d0d0f",
  mg: "#888888",
  line: "#161618",
  sub: "#252528",
} as const;

function IllWeeklyRewards() {
  return (
    <svg
      viewBox="0 0 520 400"
      className="w-full h-auto max-h-[min(100vw,28rem)] mx-auto block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="520" height="400" fill={g.ink} />
      <rect x="190" y="20" width="140" height="8" rx="1" fill="#252528" />
      <rect x="220" y="34" width="80" height="5" fill="#1a1a1e" />
      <rect
        x="100"
        y="50"
        width="320"
        height="40"
        rx="20"
        fill={g.pDeep}
        stroke={g.p}
        strokeWidth="1"
      />
      {(
        [
          [122, 70],
          [150, 76],
          [188, 68],
          [230, 74],
          [270, 69],
          [300, 75],
          [210, 78],
          [256, 72],
          [180, 74],
          [240, 77],
          [288, 71],
          [350, 73],
        ] as const
      ).map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={5}
          fill={g.pDim}
          stroke={g.p}
          strokeWidth="0.75"
        />
      ))}
      <line x1="260" y1="62" x2="260" y2="82" stroke={g.p} strokeWidth="1" />
      <path
        d="M 250 66 Q 250 62 258 62 L 266 62 Q 270 62 270 66"
        stroke={g.p}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 250 86 Q 250 90 262 90 Q 270 90 270 86"
        stroke={g.p}
        strokeWidth="1"
        fill="none"
      />
      {(
        [
          [70, 200],
          [150, 200],
          [230, 200],
          [310, 200],
          [390, 200],
        ] as const
      ).map((to, i) => {
        const from = [180, 220, 260, 300, 340][i] ?? 240;
        return (
          <path
            key={i}
            d={`M ${from} 90 C ${from} 130 ${to[0] - 20} 160 ${to[0]} ${to[1]}`}
            stroke={g.p}
            strokeWidth="0.75"
            strokeDasharray="3 3"
            fill="none"
          />
        );
      })}
      {(
        [
          [70, 200],
          [150, 200],
          [230, 200],
          [310, 200],
          [390, 200],
        ] as const
      ).map(([x, y], i) => (
        <path
          key={`t${i}`}
          d={`M ${x - 3} ${y + 4} L ${x} ${y} L ${x + 3} ${y + 4} Z`}
          fill={g.p}
        />
      ))}

      {(
        [
          { x: 50, h: 140, sw: 1, coins: 6, strokeC: g.p },
          { x: 130, h: 100, sw: 0.75, coins: 4, strokeC: g.p },
          { x: 210, h: 70, sw: 0.5, coins: 3, strokeC: g.p },
          { x: 290, h: 45, sw: 0.5, coins: 2, strokeC: "#333338" },
          { x: 370, h: 28, sw: 0.5, coins: 1, strokeC: "#252528" },
        ] as const
      ).map((b, rankIdx) => {
        const top = 200;
        const cy = 170;
        const topThree = rankIdx <= 2;
        return (
          <g key={rankIdx}>
            <circle
              cx={b.x + 20}
              cy={cy - 8}
              r={6}
              stroke={g.mg}
              strokeWidth="1"
            />
            <path
              d={`M ${b.x + 8} ${cy} Q ${b.x + 20} ${cy - 2} ${b.x + 32} ${cy}`}
              stroke={g.mg}
              strokeWidth="1"
            />
            <rect
              x={b.x}
              y={top}
              width="40"
              height={b.h}
              fill={topThree ? g.pDeep : "#141418"}
              stroke={b.strokeC}
              strokeWidth={b.sw}
            />
            {Array.from({ length: b.coins }).map((_, j) => (
              <circle
                key={j}
                cx={b.x + 20}
                cy={top + b.h - 8 - j * 10}
                r={3}
                fill={g.p}
              />
            ))}
            <rect
              x={b.x + 5}
              y="355"
              width="30"
              height="14"
              fill="#0a0a0a"
              stroke="#252528"
              strokeWidth="0.5"
              rx="1"
            />
            <rect
              x={b.x + 11}
              y="360"
              width="12"
              height="4"
              fill="#888"
            />
          </g>
        );
      })}

      <rect
        x="160"
        y="370"
        width="200"
        height="6"
        fill="#1a1a1e"
        rx="1"
      />
    </svg>
  );
}

function IllMeritBadges() {
  const cells: readonly [number, number][] = [
    [40, 80],
    [200, 80],
    [360, 80],
    [40, 220],
    [200, 220],
    [360, 220],
  ];
  return (
    <svg
      viewBox="0 0 520 400"
      className="w-full h-auto max-h-[min(100vw,28rem)] mx-auto block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="520" height="400" fill={g.ink} />
      <line x1="0" y1="130" x2="520" y2="130" stroke="#141418" strokeWidth="0.5" />
      <line x1="0" y1="200" x2="520" y2="200" stroke="#141818" strokeWidth="0.5" />
      <line x1="180" y1="60" x2="180" y2="330" stroke="#141418" strokeWidth="0.5" />
      <line x1="340" y1="60" x2="340" y2="330" stroke="#141418" strokeWidth="0.5" />
      <rect x="170" y="18" width="180" height="8" fill="#252528" />
      <rect x="210" y="32" width="100" height="5" fill="#1a1a1e" />
      {cells.map(([ox, oy], i) => {
        const isLocked = i === 5;
        return (
          <g
            key={i}
            opacity={isLocked ? 0.5 : 1}
            transform={`translate(${ox} ${oy})`}
          >
            <rect
              x="0"
              y="0"
              width="120"
              height="120"
              rx="8"
              fill="#0a0a0c"
              stroke="#1e1e22"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="50"
              r="28"
              fill={isLocked ? "#141418" : g.pDeep}
              stroke={isLocked ? "#252528" : g.p}
              strokeWidth="1.5"
            />
            {i === 0 && (
              <>
                <circle cx="58" cy="58" r="5" fill={g.p} />
                <line
                  x1="63"
                  y1="58"
                  x2="63"
                  y2="40"
                  stroke={g.p}
                  strokeWidth="1.5"
                />
                <path
                  d="M 63 40 Q 70 32 70 25"
                  stroke={g.p}
                  strokeWidth="1"
                  fill="none"
                />
              </>
            )}
            {i === 1 && (
              <path
                d="M 60 22 L 66 36 L 82 36 L 70 44 L 74 60 L 60 52 L 46 60 L 50 44 L 38 36 L 54 36 Z"
                fill={g.p}
              />
            )}
            {i === 2 && (
              <path
                d="M 48 22 C 42 22 38 32 48 34 C 56 34 62 52 48 66 C 36 52 48 22 48 22"
                stroke={g.p}
                strokeWidth="2"
                fill="none"
              />
            )}
            {i === 3 && (
              <>
                <path
                  d="M 48 50 Q 50 40 55 45 Q 50 50 45 60"
                  stroke={g.p}
                  strokeWidth="1"
                />
                <path
                  d="M 55 50 Q 57 40 62 45 Q 55 50 50 60"
                  stroke={g.p}
                  strokeWidth="1"
                />
                <path
                  d="M 62 50 Q 64 40 70 45"
                  stroke={g.p}
                  strokeWidth="1"
                />
              </>
            )}
            {i === 4 && (
              <path
                d="M 48 20 L 52 8 L 60 20 L 68 8 L 72 20 L 76 32 L 44 32 Z M 48 20"
                stroke={g.p}
                strokeWidth="1.5"
                fill="none"
              />
            )}
            {isLocked && (
              <>
                <rect
                  x="52"
                  y="50"
                  width="16"
                  height="12"
                  rx="1"
                  stroke="#333338"
                  strokeWidth="1"
                />
                <path
                  d="M 56 50 Q 60 42 64 50"
                  stroke="#333338"
                  strokeWidth="1"
                />
              </>
            )}
            <rect x="30" y="90" width="60" height="5" fill="#252528" rx="1" />
            <rect x="40" y="100" width="40" height="3" fill="#1a1a1e" />
          </g>
        );
      })}
      <line x1="0" y1="355" x2="520" y2="355" stroke={borderL} strokeWidth="0.5" />
      <rect x="190" y="370" width="140" height="5" fill="#1a1a1e" />
      <rect x="220" y="380" width="80" height="4" fill="#161618" />
    </svg>
  );
}

const BOOK_X = [
  40, 72, 108, 142, 182, 220, 256, 296, 336, 378, 420, 464,
] as const;

function IllLibrary() {
  const shelf1 = 255;
  const shelf2 = 365;
  const hFor = (i: number) => (i < 4 ? 72 + (i % 3) * 4 : 78 + (i % 4) * 2);
  const fillFor = (i: number, row: 1 | 2) => {
    if (row === 2 && i > 6) return i % 2 === 0 ? g.pDim : g.pDeep;
    if (i % 4 === 0) return g.pDim;
    if (i % 4 === 1) return "#141418";
    if (i % 4 === 2) return "#252528";
    return g.pDeep;
  };
  return (
    <svg
      viewBox="0 0 720 400"
      className="w-full h-auto max-h-[min(100vw,32rem)] mx-auto block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="720" height="400" fill={g.ink} />
      <rect x="20" y="20" width="120" height="6" fill="#252528" />
      <rect x="20" y="32" width="70" height="4" fill="#1a1a1e" />
      {[60, 78, 96, 114].map((y) => (
        <line
          key={y}
          x1="40"
          y1={y}
          x2="700"
          y2={y}
          stroke="#161818"
          strokeWidth="0.5"
        />
      ))}
      <polygon
        points="40,120 40,50 90,115 140,108 190,112 240,100 290,92 340,88 390,95 440,82 490,76 540,70 590,78 640,65 690,58 690,130 40,130"
        fill={g.pDim}
        fillOpacity="0.5"
      />
      <polyline
        points="40,120 90,115 140,108 190,112 240,100 290,92 340,88 390,95 440,82 490,76 540,70 590,78 640,65 690,58"
        stroke={g.p}
        strokeWidth="1.5"
        fill="none"
      />
      {(
        [
          [40, 120],
          [90, 115],
          [140, 108],
          [190, 112],
          [240, 100],
          [290, 92],
          [340, 88],
          [390, 95],
          [440, 82],
          [490, 76],
          [540, 70],
          [590, 78],
          [640, 65],
          [690, 58],
        ] as const
      ).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill={g.p} />
      ))}
      <circle cx="690" cy="58" r="4" fill={g.p} />
      <circle cx="690" cy="58" r="8" stroke={g.pDim} strokeWidth="1" fill="none" />
      <rect x="4" y="60" width="14" height="3" fill="#1a1a1e" />
      <rect x="4" y="78" width="14" height="3" fill="#1a1a1e" />
      <rect x="4" y="96" width="14" height="3" fill="#1a1a1e" />
      <rect x="4" y="114" width="14" height="3" fill="#1a1a1e" />
      <line x1="0" y1="150" x2="720" y2="150" stroke={borderL} strokeWidth="0.5" />
      <rect x="20" y="142" width="100" height="5" fill="#1a1a1e" />
      {BOOK_X.map((bx, i) => {
        const w = 28 + (i % 3) * 4;
        const h = 70 + (i % 5) * 2;
        const top = shelf1 - h;
        const f = fillFor(i, 1);
        return (
          <g key={`r1-${i}`}>
            <rect
              x={bx}
              y={top}
              width={w}
              height={h}
              fill={f}
              stroke={f === g.pDim || f === g.pDeep ? g.p : "#252528"}
              strokeWidth="0.5"
            />
            <rect
              x={bx + 4}
              y={top + 20}
              width={w - 8}
              height="2"
              fill={f === g.pDim ? g.p : "#0a0a0c"}
            />
            <rect
              x={bx + 4}
              y={top + 35}
              width={w - 8}
              height="2"
              fill="#0a0a0c"
            />
          </g>
        );
      })}
      <line
        x1="20"
        y1={shelf1}
        x2="700"
        y2={shelf1}
        stroke="#252528"
        strokeWidth="1"
      />
      {BOOK_X.map((bx, i) => {
        const w = 30 + (i % 4) * 2;
        const h = 72 + (i % 3) * 3;
        const top = shelf2 - h;
        const f = fillFor(i + 2, 2);
        return (
          <g key={`r2-${i}`}>
            <rect
              x={bx}
              y={top}
              width={w}
              height={h}
              fill={f}
              stroke={f === g.pDim || f === g.pDeep ? g.p : "#252528"}
              strokeWidth="0.5"
            />
            <rect
              x={bx + 4}
              y={top + 18}
              width={w - 8}
              height="2"
              fill={f === g.pDim ? g.p : "#0a0a0c"}
            />
            <rect
              x={bx + 4}
              y={top + 32}
              width={w - 8}
              height="2"
              fill="#0a0a0c"
            />
          </g>
        );
      })}
      <line
        x1="20"
        y1={shelf2}
        x2="700"
        y2={shelf2}
        stroke="#252528"
        strokeWidth="1"
      />
      <path
        d="M 28 170 L 28 260"
        stroke="#333338"
        strokeWidth="1"
      />
      <path
        d="M 688 170 L 688 260"
        stroke="#333338"
        strokeWidth="1"
      />
      <path
        d="M 28 280 L 28 360"
        stroke="#333338"
        strokeWidth="1"
      />
      <path
        d="M 688 280 L 688 360"
        stroke="#333338"
        strokeWidth="1"
      />
      <path
        d="M 464 265 L 468 255 L 472 265 Z"
        fill={g.p}
      />
    </svg>
  );
}

function CalloutList({
  rows,
}: {
  rows: readonly { left: string; right: string }[];
}) {
  return (
    <ul className="w-full max-w-md">
      {rows.map((r) => (
        <li
          key={r.left}
          className="flex justify-between items-baseline gap-4 border-t border-[#161818] first:border-0 first:pt-0 py-4"
        >
          <span className="font-mono text-xs text-[#888] uppercase tracking-wide shrink-0">
            {r.left}
          </span>
          <span className="font-mono text-xs text-[#c0c0c0] text-right">
            {r.right}
          </span>
        </li>
      ))}
    </ul>
  );
}

const R1: readonly { left: string; right: string }[] = [
  { left: "Pool size", right: "$50,000 USDC · Week 18" },
  { left: "Distribution", right: "Every Sunday, 00:00 UTC" },
  { left: "Qualification", right: "Top 500 performers by rank" },
];

const R2: readonly { left: string; right: string }[] = [
  { left: "Form", right: "On-chain merit token (non-transferable)" },
  { left: "Unlocks", right: "Score ≥ 75 on verified repertoire" },
  { left: "Verifiable", right: "Public record · always yours" },
];

const R3: readonly { left: string; right: string }[] = [
  { left: "Archived", right: "Unlimited sessions, permanent storage" },
  { left: "Tracked", right: "Score progression by piece and skill" },
  { left: "Private", right: "Yours alone — never sold, never shared" },
];

const nodeEase = { duration: 0.55, ease: "easeOut" as const };

export default function WalletMechanics() {
  return (
    <section
      id="wallet-mechanics"
      className="relative w-full border-t border-b box-border"
      style={{ background: shell, borderColor: borderM }}
    >
      <div id="how-it-works" className="sr-only" aria-hidden />
      <style>{`
        @media (min-width: 1024px) {
          .wm-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: auto auto auto;
            grid-template-areas:
              "ill1 ill1 ill1 ill1 ill1 ill1 txt1 txt1 txt1 txt1 txt1 txt1"
              "txt2 txt2 txt2 txt2 txt2 txt2 ill2 ill2 ill2 ill2 ill2 ill2"
              "ill3 ill3 ill3 ill3 ill3 ill3 ill3 ill3 txt3 txt3 txt3 txt3";
            gap: 0;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-20 w-full">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p
              className="font-mono text-[10px] uppercase"
              style={{ color: "#444", letterSpacing: "0.4em" }}
            >
              Wallet mechanics
            </p>
            <p
              className="font-mono text-[10px] uppercase"
              style={{ color: "#252528", letterSpacing: "0.3em" }}
            >
              USDC · weekly · on-chain
            </p>
          </div>
          <div
            className="w-full h-px mt-3"
            style={{ background: borderL }}
            aria-hidden
          />
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-12">
            <h2
              className="flex-1 font-extralight italic"
              style={{
                color: "#e0e0e0",
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 200,
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
              }}
            >
              Where the work goes.
            </h2>
            <p
              className="max-w-md text-sm"
              style={{ color: "#555", lineHeight: 1.9 }}
            >
              Each session produces three things that belong to you: a payment,
              a permanent record, and a line in your library. Here is what each
              one looks like.
            </p>
          </div>
        </header>

        <LazyMotion features={domAnimation}>
          <div className="wm-grid flex flex-col lg:grid">
            <m.div
              className="p-8 md:p-10 border-b order-1 lg:order-none"
              style={{
                borderColor: borderM,
                gridArea: "ill1",
              }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0 }}
            >
              <IllWeeklyRewards />
            </m.div>
            <m.div
              className="p-8 md:p-10 border-b order-2 lg:order-none lg:border-r-0"
              style={{
                borderColor: borderM,
                gridArea: "txt1",
                borderLeft: "1px solid " + borderM,
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0.15 }}
            >
              <p
                className="font-mono text-[10px] mb-4"
                style={{ color: "#333", letterSpacing: "0.2em" }}
              >
                01
              </p>
              <h3
                className="mb-6 font-extralight"
                style={{
                  color: "#d8d8d8",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                }}
              >
                Weekly Rewards
              </h3>
              <p
                className="text-sm max-w-md mb-8"
                style={{ color: "#666", lineHeight: 1.9 }}
              >
                Every week, a shared pool of USDC is divided among the
                top-ranked performers. Your rank in the active cohort determines
                your share. Payments arrive directly in your connected wallet —
                automatically, on a fixed schedule.
              </p>
              <CalloutList rows={R1} />
            </m.div>

            <m.div
              className="p-8 md:p-10 border-b order-3 lg:order-none lg:border-r"
              style={{
                borderColor: borderM,
                gridArea: "txt2",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0.15 }}
            >
              <p
                className="font-mono text-[10px] mb-4"
                style={{ color: "#333", letterSpacing: "0.2em" }}
              >
                02
              </p>
              <h3
                className="mb-6 font-extralight"
                style={{
                  color: "#d8d8d8",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                }}
              >
                Merit Badges
              </h3>
              <p
                className="text-sm max-w-md mb-8"
                style={{ color: "#666", lineHeight: 1.9 }}
              >
                Each qualifying session earns a permanent badge — a verifiable
                record of what you played, how you scored, and when. Badges are
                yours forever, inscribed on-chain, and cannot be altered, lost,
                or transferred. They are the transcript of your craft.
              </p>
              <CalloutList rows={R2} />
            </m.div>
            <m.div
              className="p-8 md:p-10 border-b order-4 lg:order-none"
              style={{
                borderColor: borderM,
                gridArea: "ill2",
                borderLeft: "1px solid " + borderM,
              }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0 }}
            >
              <IllMeritBadges />
            </m.div>

            <m.div
              className="p-8 md:p-10 border-b order-5 lg:order-none"
              style={{
                borderColor: borderM,
                gridArea: "ill3",
              }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0 }}
            >
              <IllLibrary />
            </m.div>
            <m.div
              className="p-8 md:p-10 order-6 lg:order-none lg:border-l"
              style={{
                borderColor: borderM,
                gridArea: "txt3",
                borderLeft: "1px solid " + borderM,
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...nodeEase, delay: 0.15 }}
            >
              <p
                className="font-mono text-[10px] mb-4"
                style={{ color: "#333", letterSpacing: "0.2em" }}
              >
                03
              </p>
              <h3
                className="mb-6 font-extralight"
                style={{
                  color: "#d8d8d8",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                }}
              >
                Your Library
              </h3>
              <p
                className="text-sm max-w-md mb-8"
                style={{ color: "#666", lineHeight: 1.9 }}
              >
                Every session is archived. Every score is kept. Your library is
                a timeline of your playing — every performance, every piece, every
                evolution of your score. Searchable, filterable, and yours to
                review at any time.
              </p>
              <CalloutList rows={R3} />
            </m.div>
          </div>
        </LazyMotion>

        <div
          className="mt-20 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center border-t pt-8"
          style={{ borderColor: borderM }}
        >
          <p
            className="font-mono text-[10px] uppercase"
            style={{ color: "#333", letterSpacing: "0.4em" }}
          >
            The complete loop
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs text-[#666] uppercase tracking-wide"
          >
            {["Play", "Score", "Earn", "Collect", "Review"].map((n, i, a) => (
              <span key={n} className="flex items-center gap-3 sm:gap-4">
                <span>{n}</span>
                {i < a.length - 1 ? (
                  <span className="text-[#252528]" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <p
            className="font-mono text-[10px] uppercase"
            style={{ color: "#333", letterSpacing: "0.3em" }}
          >
            · yours, always
          </p>
        </div>
      </div>
    </section>
  );
}
