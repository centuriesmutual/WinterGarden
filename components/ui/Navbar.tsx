"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Programme", href: "#how-it-works" },
  { label: "Society", href: "#network" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgba(7,5,3,0.94) 0%, rgba(7,5,3,0.88) 80%, rgba(7,5,3,0) 100%)",
        height: "72px",
      }}
    >
      <nav
        className="h-[64px] w-full flex items-center justify-between px-6 md:px-12"
        style={{ borderBottom: "1px solid var(--gold-ghost)" }}
      >
        <Link
          href="#top"
          className="font-display flex flex-col leading-none"
          data-cursor
        >
          <span
            className="smallcaps"
            style={{
              fontSize: "9px",
              color: "var(--gold-dim)",
              letterSpacing: "0.5em",
              marginBottom: "4px",
            }}
          >
            Est. MMXXV
          </span>
          <span
            className="font-display italic"
            style={{
              fontSize: "22px",
              letterSpacing: "0.04em",
              color: "var(--paper)",
            }}
          >
            Wintergarden
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden sm:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  data-cursor
                  className="font-serif italic"
                  style={{
                    fontSize: "15px",
                    letterSpacing: "0.04em",
                    color: "var(--paper-dim)",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--paper-dim)";
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
            className="group inline-flex items-center font-body smallcaps"
            style={{
              fontSize: "11px",
              letterSpacing: "0.4em",
              padding: "10px 22px",
              color: "var(--gold)",
              border: "1px solid var(--gold-deep)",
              background: "transparent",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--gold)";
              el.style.color = "var(--ink)";
              el.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--gold)";
              el.style.borderColor = "var(--gold-deep)";
            }}
          >
            Request Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
