"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "ABOUT", href: "#manifesto" },
  { label: "NETWORK", href: "#network" },
  { label: "ENTER", href: "#waitlist" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b"
      style={{
        background: "rgba(8, 8, 8, 0.9)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="h-full w-full flex items-center justify-between px-6 md:px-10">
        <Link
          href="#top"
          className="font-display text-white"
          style={{ fontSize: "20px", letterSpacing: "0.4em" }}
        >
          WINTERGARDEN
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-white-dim hover:text-white transition-colors"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    transitionDuration: "150ms",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#waitlist"
            data-cursor
            className="font-display inline-flex items-center border border-tiffany text-tiffany hover:bg-tiffany hover:text-black transition-colors"
            style={{
              fontSize: "13px",
              letterSpacing: "0.3em",
              padding: "8px 20px",
              transitionDuration: "150ms",
            }}
          >
            JOIN WAITLIST
          </Link>
        </div>
      </nav>
    </header>
  );
}
