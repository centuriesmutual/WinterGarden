"use client";

import StatBlock from "@/components/ui/StatBlock";
import RuledLine from "@/components/ui/RuledLine";

const STATS = [
  { value: "94,210", label: "REGISTERED PERFORMERS" },
  { value: "1.2M", label: "SESSIONS SCORED" },
  { value: "183", label: "COUNTRIES" },
  { value: "$2.4M", label: "IN REWARDS DISTRIBUTED" },
];

const CITIES = [
  { name: "New York", x: 28, y: 38, delay: 0.1 },
  { name: "London", x: 46, y: 28, delay: 0.2 },
  { name: "Berlin", x: 50, y: 27, delay: 0.3 },
  { name: "Paris", x: 47, y: 31, delay: 0.4 },
  { name: "Moscow", x: 58, y: 25, delay: 0.5 },
  { name: "Tokyo", x: 81, y: 36, delay: 0.6 },
  { name: "Seoul", x: 79, y: 38, delay: 0.7 },
  { name: "Mumbai", x: 66, y: 48, delay: 0.8 },
  { name: "Lagos", x: 48, y: 55, delay: 0.9 },
  { name: "São Paulo", x: 32, y: 65, delay: 1.0 },
  { name: "Sydney", x: 83, y: 68, delay: 1.1 },
  { name: "Mexico City", x: 20, y: 44, delay: 1.2 },
];

function DotGrid() {
  const cols = 48;
  const rows = 22;
  const dots: string[] = [];
  for (let i = 0; i < cols * rows; i++) dots.push("·");
  return (
    <div
      aria-hidden
      className="absolute inset-0 font-mono select-none"
      style={{
        fontSize: "10px",
        color: "var(--white-ghost)",
        opacity: 0.15,
        lineHeight: "12px",
        letterSpacing: "6px",
        padding: "12px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
      }}
    >
      {dots.join(" ")}
    </div>
  );
}

export default function GlobalNetwork() {
  return (
    <section
      id="network"
      className="relative w-full"
      style={{ background: "var(--black)" }}
    >
      <div className="w-full px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: "10px",
                color: "var(--tiffany)",
                letterSpacing: "0.4em",
                marginBottom: "40px",
              }}
            >
              § THE NETWORK
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-14">
              {STATS.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  animate
                />
              ))}
            </div>

            <div
              className="font-mono"
              style={{
                marginTop: "56px",
                fontSize: "11px",
                color: "var(--white-ghost)",
                letterSpacing: "0.15em",
                lineHeight: 1.8,
              }}
            >
              Avalanche Network · Circle USDC · Real-time verified scoring
            </div>
          </div>

          <div className="hidden md:flex lg:justify-end">
            <div
              className="relative"
              style={{
                width: "480px",
                maxWidth: "100%",
                height: "280px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <DotGrid />

              {CITIES.map((city) => (
                <div
                  key={city.name}
                  data-cursor
                  className="group absolute"
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "var(--tiffany)",
                      animation: `pulse-dot 2s ease-in-out infinite`,
                      animationDelay: `${city.delay}s`,
                    }}
                  />
                  <span
                    className="opacity-0 group-hover:opacity-100 font-mono pointer-events-none"
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "8px",
                      fontSize: "8px",
                      color: "var(--tiffany-dim)",
                      letterSpacing: "0.2em",
                      whiteSpace: "nowrap",
                      transition: "opacity 150ms ease",
                    }}
                  >
                    {city.name.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RuledLine label="§ 005 — INCENTIVES" sectionNumber="005" />
    </section>
  );
}
