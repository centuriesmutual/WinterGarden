"use client";

import StatBlock from "@/components/ui/StatBlock";
import RuledLine from "@/components/ui/RuledLine";
import Ornament from "@/components/ui/Ornament";

const STATS = [
  { value: "94,210", label: "Registered Performers" },
  { value: "1.2M", label: "Performances Scored" },
  { value: "183", label: "Nations Represented" },
  { value: "$2.4M", label: "Rewards Distributed" },
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
  const dots: string[] = [];
  for (let i = 0; i < 48 * 22; i++) dots.push("·");
  return (
    <div
      aria-hidden
      className="absolute inset-0 select-none"
      style={{
        fontSize: "10px",
        color: "var(--gold-deep)",
        opacity: 0.5,
        lineHeight: "12px",
        letterSpacing: "6px",
        padding: "18px",
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
      style={{ background: "var(--ink)" }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 py-24 md:py-36">
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <Ornament variant="star" label="The Global Society" />
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--paper)",
              marginTop: "24px",
              fontWeight: 600,
              letterSpacing: "-0.035em",
            }}
          >
            A circle of{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              measured musicians.
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "17px",
              color: "var(--paper-dim)",
              marginTop: "20px",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Performers from every continent, every tradition, every instrument
            — each one verified, each one counted.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="card" style={{ padding: "40px 36px" }}>
            <div className="grid grid-cols-2 gap-x-10 gap-y-12">
              {STATS.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  animate
                />
              ))}
            </div>
          </div>

          <div className="flex lg:justify-end">
            <div
              className="card relative w-full"
              style={{
                maxWidth: "540px",
                padding: "14px",
              }}
            >
              <div
                className="relative w-full"
                style={{
                  height: "300px",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--gold-ghost)",
                  background: "rgba(7,5,3,0.6)",
                  overflow: "hidden",
                }}
              >
                <DotGrid />

                {CITIES.map((city) => (
                  <div
                    key={city.name}
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
                        width: "8px",
                        height: "8px",
                        borderRadius: "9999px",
                        background: "var(--gold)",
                        animation: "pulse-dot 2.4s ease-in-out infinite",
                        animationDelay: `${city.delay}s`,
                        boxShadow: "0 0 10px 2px rgba(201,169,97,0.35)",
                      }}
                    />
                    <span
                      className="opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        position: "absolute",
                        top: "-20px",
                        left: "12px",
                        fontSize: "11px",
                        color: "var(--gold)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        transition: "opacity 180ms ease",
                        padding: "3px 8px",
                        background: "rgba(31,26,15,0.9)",
                        border: "1px solid var(--gold-deep)",
                        borderRadius: "9999px",
                      }}
                    >
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="smallcaps"
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "var(--paper-ghost)",
                  marginTop: "14px",
                  marginBottom: "4px",
                }}
              >
                Live · 12 representative cities
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ marginTop: "64px" }}
        >
          <span className="tag" style={{ fontSize: "10.5px" }}>
            Avalanche Network
          </span>
          <span className="tag" style={{ fontSize: "10.5px" }}>
            Circle USDC
          </span>
          <span className="tag" style={{ fontSize: "10.5px" }}>
            Real-time Verified Scoring
          </span>
        </div>
      </div>

      <RuledLine label="Opus V — The Rewards" sectionNumber="V" />
    </section>
  );
}
