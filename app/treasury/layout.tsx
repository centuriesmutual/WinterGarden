import type { ReactNode } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function TreasuryLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${fraunces.variable} ${jetbrains.variable} treasury-scope relative w-full`}
      style={{
        // Scoped palette
        ["--wg-ink" as string]: "#0F1F1A",
        ["--wg-ink-2" as string]: "#0A1613",
        ["--wg-moss" as string]: "#1A3A2E",
        ["--wg-cream" as string]: "#F5EDE0",
        ["--wg-copper" as string]: "#B87333",
        ["--wg-mint" as string]: "#7FFFB4",
        ["--wg-rule" as string]: "#223027",
        ["--wg-dim" as string]: "#8A9A91",
        background: "var(--wg-ink)",
        color: "var(--wg-cream)",
      }}
    >
      <SubNav />
      {children}
    </div>
  );
}

function SubNav() {
  const items = [
    { label: "Treasury", href: "#treasury-hero" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Staking", href: "#staking" },
    { label: "Wallet", href: "#wallet" },
    { label: "Grading", href: "#grading" },
    { label: "Flows", href: "#flows" },
    { label: "Governance", href: "#governance" },
  ];
  return (
    <div
      className="sticky z-40 w-full border-b"
      style={{
        top: 72,
        borderColor: "var(--wg-rule)",
        background: "rgba(15,31,26,0.88)",
        backdropFilter: "blur(8px)",
      }}
    >
      <nav
        className="mx-auto flex h-12 w-full max-w-[1280px] items-center gap-1 overflow-x-auto px-4 md:px-8"
        aria-label="Treasury section navigation"
      >
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--wg-dim)",
            }}
          >
            {i.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
