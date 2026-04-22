/**
 * Standalone terminal-style feature illustrations — dark grid, faux monospace blocks.
 * No live text; geometry and placeholder rects only.
 */

const VB = "0 0 480 260";

const grid = "#1a1a1e";
const rowSep = "#18181c";
const block = "#1e1e22";
const headerBar = "#141418";
const labelTint = "#252530";
const neutral = "#252528";
const green = "#2d6a4f";
const red = "#6b2737";
const settled = "#1a3028";
const pendingAmber = "#1e1a10";

export function WeeklyPayout() {
  return (
    <svg
      viewBox={VB}
      className="w-full h-auto block"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="480" height="260" rx="2" fill="#0d0d0f" />
      {/* column guides */}
      <line x1="12" y1="28" x2="12" y2="252" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="108" y1="28" x2="108" y2="252" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="240" y1="28" x2="240" y2="252" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="380" y1="28" x2="380" y2="252" stroke={grid} strokeWidth="0.5" fill="none" />

      <rect x="0" y="0" width="480" height="28" fill={headerBar} />
      <rect x="12" y="8" width="80" height="5" rx="1" fill={labelTint} />
      <rect x="12" y="16" width="60" height="4" rx="1" fill={labelTint} />
      <rect x="12" y="22" width="40" height="4" rx="1" fill={labelTint} />
      <rect x="428" y="11" width="32" height="6" rx="1" fill={settled} />

      <line x1="0" y1="28" x2="480" y2="28" stroke={rowSep} strokeWidth="0.75" fill="none" />

      {/* faux table header row */}
      <rect x="16" y="36" width="44" height="4" rx="1" fill={block} />
      <rect x="116" y="36" width="52" height="4" rx="1" fill={block} />
      <rect x="248" y="36" width="64" height="4" rx="1" fill={block} />
      <rect x="388" y="36" width="36" height="4" rx="1" fill={block} />

      {/* row separators + distribution rows (rank → amount → status) */}
      {[56, 88, 120, 152, 184, 216].map((y) => (
        <line key={y} x1="0" y1={y} x2="480" y2={y} stroke={rowSep} strokeWidth="0.75" fill="none" />
      ))}

      {/* Rank column: order markers + narrow blocks */}
      <polygon points="24,60 30,68 18,68" fill={green} stroke="none" />
      <rect x="34" y="60" width="28" height="6" rx="1" fill={block} />
      <polygon points="24,92 30,100 18,100" fill={green} stroke="none" />
      <rect x="34" y="92" width="24" height="6" rx="1" fill={block} />
      <polygon points="24,124 30,132 18,132" fill={green} stroke="none" />
      <rect x="34" y="124" width="20" height="6" rx="1" fill={block} />
      <polygon points="24,156 30,164 18,164" fill={neutral} stroke="none" />
      <rect x="34" y="156" width="18" height="6" rx="1" fill={block} />
      <polygon points="24,188 30,196 18,196" fill={red} stroke="none" />
      <rect x="34" y="188" width="16" height="6" rx="1" fill={block} />
      {/* single pending row (amber) */}
      <polygon points="24,220 30,228 18,228" fill={neutral} stroke="none" />
      <rect x="34" y="220" width="14" height="6" rx="1" fill={block} />

      {/* Amount bars — width descends by row (pool split) */}
      <rect x="116" y="58" width="112" height="10" rx="1" fill={settled} />
      <rect x="116" y="90" width="96" height="10" rx="1" fill={settled} />
      <rect x="116" y="122" width="78" height="10" rx="1" fill={settled} />
      <rect x="116" y="154" width="52" height="10" rx="1" fill={settled} />
      <rect x="116" y="186" width="36" height="10" rx="1" fill={settled} />
      <rect x="116" y="218" width="22" height="10" rx="1" fill={pendingAmber} />

      {/* Wire / hash column */}
      <rect x="248" y="58" width="100" height="5" rx="1" fill={block} />
      <rect x="248" y="66" width="72" height="4" rx="1" fill={block} />
      <rect x="248" y="90" width="92" height="5" rx="1" fill={block} />
      <rect x="248" y="98" width="64" height="4" rx="1" fill={block} />
      <rect x="248" y="122" width="84" height="5" rx="1" fill={block} />
      <rect x="248" y="130" width="56" height="4" rx="1" fill={block} />
      <rect x="248" y="154" width="76" height="5" rx="1" fill={block} />
      <rect x="248" y="162" width="48" height="4" rx="1" fill={block} />
      <rect x="248" y="186" width="64" height="5" rx="1" fill={block} />
      <rect x="248" y="194" width="40" height="4" rx="1" fill={block} />
      <rect x="248" y="218" width="48" height="5" rx="1" fill={block} />
      <rect x="248" y="226" width="32" height="4" rx="1" fill={block} />

      {/* Status column */}
      <rect x="388" y="59" width="28" height="8" rx="1" fill={settled} />
      <rect x="388" y="91" width="28" height="8" rx="1" fill={settled} />
      <rect x="388" y="123" width="28" height="8" rx="1" fill={settled} />
      <rect x="388" y="155" width="28" height="8" rx="1" fill={settled} />
      <rect x="388" y="187" width="22" height="8" rx="1" fill={red} />
      <rect x="388" y="219" width="32" height="8" rx="1" fill={block} />

      {/* Down-flow markers in gutter */}
      <line x1="64" y1="70" x2="64" y2="86" stroke={green} strokeWidth="0.5" fill="none" />
      <polygon points="64,86 60,80 68,80" fill={green} stroke="none" />
      <line x1="64" y1="102" x2="64" y2="118" stroke={green} strokeWidth="0.5" fill="none" />
      <polygon points="64,118 60,112 68,112" fill={green} stroke="none" />
      <line x1="64" y1="134" x2="64" y2="150" stroke={neutral} strokeWidth="0.5" fill="none" />
      <polygon points="64,150 60,144 68,144" fill={neutral} stroke="none" />
    </svg>
  );
}

export function WalletConnect() {
  return (
    <svg
      viewBox={VB}
      className="w-full h-auto block"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="480" height="260" rx="2" fill="#0d0d0f" />
      <line x1="20" y1="40" x2="20" y2="240" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="160" y1="40" x2="160" y2="240" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="320" y1="40" x2="320" y2="240" stroke={grid} strokeWidth="0.5" fill="none" />

      <rect x="0" y="0" width="480" height="28" fill={headerBar} />
      <rect x="12" y="8" width="72" height="5" rx="1" fill={labelTint} />
      <rect x="12" y="16" width="48" height="4" rx="1" fill={labelTint} />
      <rect x="400" y="10" width="60" height="8" rx="1" fill={settled} />

      <line x1="0" y1="28" x2="480" y2="28" stroke={rowSep} strokeWidth="0.75" fill="none" />

      {/* Left: terminal stack (wallet) */}
      <rect x="28" y="48" width="100" height="12" rx="1" fill={block} />
      <rect x="28" y="64" width="80" height="4" rx="1" fill={block} />
      <rect x="28" y="80" width="64" height="4" rx="1" fill={block} />
      <rect x="28" y="100" width="88" height="56" rx="1" fill="none" stroke={neutral} strokeWidth="0.75" />
      <rect x="36" y="112" width="32" height="4" rx="1" fill={block} />
      <rect x="36" y="120" width="64" height="4" rx="1" fill={block} />
      <rect x="36" y="128" width="48" height="4" rx="1" fill={block} />
      <circle cx="52" cy="96" r="3" fill="none" stroke={green} strokeWidth="0.75" />
      <line x1="60" y1="84" x2="84" y2="100" stroke={green} strokeWidth="0.5" fill="none" />
      <line x1="60" y1="100" x2="84" y2="84" stroke={green} strokeWidth="0.5" fill="none" />

      {/* Center: bridge + single pending (amber) node on wire */}
      <line x1="128" y1="120" x2="352" y2="120" stroke={neutral} strokeWidth="0.75" fill="none" />
      <rect x="188" y="112" width="16" height="16" rx="1" fill={settled} stroke={neutral} strokeWidth="0.5" />
      <rect x="240" y="112" width="20" height="16" rx="1" fill={pendingAmber} stroke={neutral} strokeWidth="0.5" />
      <rect x="272" y="112" width="16" height="16" rx="1" fill={settled} stroke={neutral} strokeWidth="0.5" />
      <line x1="200" y1="150" x2="200" y2="100" stroke={green} strokeWidth="0.5" fill="none" />
      <polygon points="200,100 196,110 204,110" fill={green} stroke="none" />

      {/* Right: C-chain / address column */}
      <rect x="332" y="48" width="128" height="8" rx="1" fill={block} />
      <rect x="332" y="60" width="100" height="4" rx="1" fill={block} />
      <rect x="332" y="80" width="120" height="5" rx="1" fill={block} />
      <rect x="332" y="88" width="80" height="4" rx="1" fill={block} />
      <rect x="332" y="100" width="110" height="5" rx="1" fill={block} />
      <rect x="332" y="108" width="64" height="4" rx="1" fill={block} />
      <rect x="332" y="128" width="128" height="6" rx="1" fill={settled} />
      <rect x="332" y="140" width="90" height="4" rx="1" fill={labelTint} />
      <rect x="332" y="156" width="16" height="6" rx="1" fill={green} />
      <rect x="352" y="156" width="72" height="6" rx="1" fill={block} />
      <rect x="332" y="170" width="16" height="6" rx="1" fill={green} />
      <rect x="352" y="170" width="64" height="6" rx="1" fill={block} />
      <rect x="332" y="196" width="100" height="10" rx="1" fill="none" stroke={grid} strokeWidth="0.5" />
      <line x1="340" y1="204" x2="420" y2="204" stroke={green} strokeWidth="0.75" fill="none" />
      <polygon points="420,204 410,200 410,208" fill={green} stroke="none" />

      {/* row guides */}
      {[176, 200, 224].map((y) => (
        <line key={y} x1="0" y1={y} x2="480" y2={y} stroke={rowSep} strokeWidth="0.5" fill="none" />
      ))}
    </svg>
  );
}

export function MeritRecord() {
  return (
    <svg
      viewBox={VB}
      className="w-full h-auto block"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="480" height="260" rx="2" fill="#0d0d0f" />
      <line x1="16" y1="32" x2="16" y2="244" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="120" y1="32" x2="120" y2="244" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="240" y1="32" x2="240" y2="244" stroke={grid} strokeWidth="0.5" fill="none" />
      <line x1="360" y1="32" x2="360" y2="244" stroke={grid} strokeWidth="0.5" fill="none" />

      <rect x="0" y="0" width="480" height="28" fill={headerBar} />
      <rect x="12" y="8" width="96" height="5" rx="1" fill={labelTint} />
      <rect x="12" y="16" width="64" height="4" rx="1" fill={labelTint} />
      <rect x="400" y="10" width="64" height="8" rx="1" fill={block} />
      <rect x="408" y="12" width="20" height="4" rx="1" fill={pendingAmber} />

      <line x1="0" y1="28" x2="480" y2="28" stroke={rowSep} strokeWidth="0.75" fill="none" />

      <rect x="24" y="40" width="40" height="4" rx="1" fill={block} />
      <rect x="132" y="40" width="44" height="4" rx="1" fill={block} />
      <rect x="256" y="40" width="40" height="4" rx="1" fill={block} />
      <rect x="372" y="40" width="36" height="4" rx="1" fill={block} />

      {/* merit grid: 2×3 token frames */}
      {[
        { x: 20, y: 56, mint: true as boolean, lock: false },
        { x: 132, y: 56, mint: false, lock: true },
        { x: 256, y: 56, mint: true, lock: false },
        { x: 20, y: 152, mint: false, lock: false },
        { x: 132, y: 152, mint: true, lock: false },
        { x: 256, y: 152, mint: false, lock: true },
      ].map((cell, i) => (
        <g key={i}>
          <rect
            x={cell.x}
            y={cell.y}
            width="100"
            height="84"
            rx="1"
            fill="none"
            stroke={cell.lock ? red : cell.mint ? green : neutral}
            strokeWidth="0.75"
          />
          {cell.mint ? (
            <rect x={cell.x + 8} y={cell.y + 8} width="84" height="36" rx="1" fill={settled} />
          ) : (
            <rect x={cell.x + 8} y={cell.y + 8} width="84" height="36" rx="1" fill={block} />
          )}
          <rect x={cell.x + 8} y={cell.y + 50} width="60" height="3" rx="1" fill={block} />
          <rect x={cell.x + 8} y={cell.y + 56} width="44" height="3" rx="1" fill={block} />
          {cell.mint && (
            <polygon
              points={`${cell.x + 80},${cell.y + 16} ${cell.x + 88},${cell.y + 24} ${cell.x + 80},${cell.y + 32}`}
              fill={green}
              stroke="none"
            />
          )}
          {cell.lock && (
            <rect
              x={cell.x + 70}
              y={cell.y + 62}
              width="20"
              height="12"
              rx="1"
              fill="none"
              stroke={red}
              strokeWidth="0.5"
            />
          )}
        </g>
      ))}

      {/* Right column: ledger index */}
      <line x1="0" y1="144" x2="480" y2="144" stroke={rowSep} strokeWidth="0.75" fill="none" />
      <rect x="368" y="48" width="96" height="4" rx="1" fill={block} />
      <rect x="368" y="56" width="80" height="4" rx="1" fill={block} />
      <rect x="368" y="100" width="88" height="4" rx="1" fill={block} />
      <rect x="368" y="108" width="64" height="4" rx="1" fill={block} />
      <rect x="368" y="150" width="92" height="4" rx="1" fill={block} />
      <rect x="368" y="158" width="72" height="4" rx="1" fill={block} />
      <rect x="368" y="196" width="20" height="5" rx="1" fill={green} />
      <rect x="392" y="196" width="56" height="5" rx="1" fill={settled} />
      <rect x="368" y="208" width="20" height="5" rx="1" fill={red} />
      <rect x="392" y="208" width="48" height="5" rx="1" fill={block} />
      <polygon points="440,200 450,200 445,192" fill={neutral} stroke="none" />
    </svg>
  );
}
