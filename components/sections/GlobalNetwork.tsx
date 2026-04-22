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
      className="absolute inset-0 font-body select-none"
      style={{
        fontSize: "10px",
        color: "var(--gold-deep)",
        opacity: 0.6,
        lineHeight: "12px",
        letterSpacing: "6px",
        padding: "14px",
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
      <div className="w-full px-6 md:px-10 py-24 md:py-36">
        <div className="text-center" style={{ marginBottom: "72px" }}>
          <Ornament variant="star" label="The Global Society" />
          <h2
            className="font-display italic"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--paper)",
              marginTop: "28px",
              fontWeight: 500,
            }}
          >
            A circle of measured musicians.
          </h2>
          <p
            className="font-serif italic mx-auto"
            style={{
              fontSize: "18px",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-x-10 gap-y-14 lg:gap-y-16">
            {STATS.map((stat) => (
              <StatBlock
                key={stat.label}
                value={stat.value}
                label={stat.label}
                animate
              />
            ))}
          </div>

          <div className="hidden md:flex lg:justify-end">
            <div
              className="relative"
              style={{
                width: "520px",
                maxWidth: "100%",
                height: "300px",
                background: "var(--deep)",
                border: "1px solid var(--gold-ghost)",
                padding: "10px",
              }}
            >
              <div
                className="relative w-full h-full"
                style={{ border: "1px solid var(--gold-deep)" }}
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
                        width: "6px",
                        height: "6px",
                        background: "var(--gold)",
                        animation: "pulse-dot 2.4s ease-in-out infinite",
                        animationDelay: `${city.delay}s`,
                        boxShadow: "0 0 0 1px var(--gold-deep)",
                      }}
                    />
                    <span
                      className="opacity-0 group-hover:opacity-100 font-serif italic pointer-events-none"
                      style={{
                        position: "absolute",
                        top: "-18px",
                        left: "10px",
                        fontSize: "10px",
                        color: "var(--gold)",
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                        transition: "opacity 180ms ease",
                      }}
                    >
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="font-body smallcaps"
                style={{
                  position: "absolute",
                  bottom: "-26px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: "9px",
                  color: "var(--paper-ghost)",
                  letterSpacing: "0.45em",
                }}
              >
                Live · 12 representative cities
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ marginTop: "96px" }}
        >
          <div
            aria-hidden
            style={{
              width: "60px",
              height: "1px",
              background: "var(--gold-deep)",
              margin: "0 auto 24px",
            }}
          />
          <p
            className="font-serif italic"
            style={{
              fontSize: "14px",
              color: "var(--paper-ghost)",
              letterSpacing: "0.18em",
              lineHeight: 1.8,
            }}
          >
            Avalanche Network{" "}
            <span style={{ color: "var(--gold-deep)" }}>·</span> Circle USDC{" "}
            <span style={{ color: "var(--gold-deep)" }}>·</span> Real-time
            Verified Scoring
          </p>
        </div>
      </div>

      <RuledLine label="Opus V — The Rewards" sectionNumber="V" />
    </section>
  );
}
