"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Programme", href: "#how-it-works" },
  { label: "Live Demo", href: "#session-demo" },
];

const gray = {
  ink: "#0a0a0a",
  deep: "#1a1a1a",
  line: "#2a2a2a",
  mid: "#333333",
  text: "#444444",
  hover: "#555555",
  active: "#666666",
} as const;

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.75) 80%, rgba(10,10,10,0) 100%)`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        height: "72px",
      }}
    >
      <nav className="h-full w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="rounded-full"
            style={{
              width: "28px",
              height: "28px",
              background: `linear-gradient(145deg, #333333, ${gray.deep})`,
              boxShadow: `0 0 0 1px ${gray.line}, 0 6px 20px -8px rgba(255,255,255,0.04)`,
            }}
          />
          <span
            style={{
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--paper)",
            }}
          >
            Wintergarden
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                    color: "#888888",
                    padding: "8px 14px",
                    borderRadius: "9999px",
                    display: "inline-flex",
                    transition: "color 180ms ease, background 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = gray.active;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#888888";
                    el.style.background = "transparent";
                    el.style.boxShadow = "none";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center font-medium transition-colors"
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              letterSpacing: "0.01em",
              borderRadius: "9999px",
              color: "#e8e8e8",
              background: gray.line,
              border: `1px solid ${gray.mid}`,
              boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 16px -8px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = gray.mid;
              el.style.color = "#f5f5f5";
              el.style.borderColor = "#444444";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = gray.line;
              el.style.color = "#e8e8e8";
              el.style.borderColor = gray.mid;
            }}
          >
            Request Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
