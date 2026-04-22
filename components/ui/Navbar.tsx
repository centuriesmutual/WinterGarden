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
          "linear-gradient(to bottom, rgba(7,5,3,0.88) 0%, rgba(7,5,3,0.72) 80%, rgba(7,5,3,0) 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        height: "72px",
      }}
    >
      <nav className="h-full w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle at 30% 30%, #E2C47E, var(--gold) 55%, var(--gold-deep))",
              boxShadow: "0 0 0 1px var(--gold-deep), 0 6px 18px -6px rgba(201,169,97,0.5)",
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
                    color: "var(--paper-dim)",
                    padding: "8px 14px",
                    borderRadius: "9999px",
                    display: "inline-flex",
                    transition: "color 180ms ease, background 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--paper)";
                    el.style.background = "rgba(201, 169, 97, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--paper-dim)";
                    el.style.background = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#waitlist"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "13px" }}
          >
            Request Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
