"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Twitter,
  Instagram,
  Youtube,
  MessageSquare,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";

const linkClass =
  "block text-sm transition-colors duration-200 text-[#777777] hover:text-[#d0d0d0]";

const headerClass =
  "font-mono text-xs uppercase tracking-[0.2em] text-[#444444] mb-0 pb-3 border-b border-[#1e1e1e]";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const columnItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function SocialIconRow() {
  const iconClass =
    "text-[#555555] hover:text-[#cccccc] transition-colors duration-200";
  const size = 16;
  const stroke = 1.5;
  return (
    <div className="flex flex-wrap gap-3 mt-6" aria-label="Social links">
      <Link href="#" className={iconClass} aria-label="X (Twitter)">
        <Twitter size={size} strokeWidth={stroke} />
      </Link>
      <Link href="#" className={iconClass} aria-label="Instagram">
        <Instagram size={size} strokeWidth={stroke} />
      </Link>
      <Link href="#" className={iconClass} aria-label="YouTube">
        <Youtube size={size} strokeWidth={stroke} />
      </Link>
      <Link href="#" className={iconClass} aria-label="Discord community">
        <MessageSquare size={size} strokeWidth={stroke} />
      </Link>
      <Link href="#" className={iconClass} aria-label="GitHub">
        <Github size={size} strokeWidth={stroke} />
      </Link>
    </div>
  );
}

const PRODUCT = [
  { label: "Overview", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Scoring Engine", href: "#" },
  { label: "Performance Archive", href: "#" },
  { label: "Private Beta", href: "#" },
] as const;

const COMPANY = [
  { label: "About Wintergarden", href: "#" },
  { label: "Centuries Mutual", href: "#" },
  { label: "Manifesto", href: "#" },
  { label: "Press & Media", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
] as const;

const LEGAL = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Data & Audio Policy", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Licenses", href: "#" },
] as const;

const CONNECT = [
  { label: "Twitter / X", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
  { label: "Discord Community", icon: MessageSquare },
  { label: "GitHub", icon: Github },
] as const;

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full border-t"
        style={{
          background: "#0a0a0a",
          borderColor: "#1e1e1e",
        }}
      >
        <div className="max-w-[min(100%,1400px)] mx-auto px-5 md:px-10 pt-16 pb-8 md:pb-10 lg:pt-20">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em] mb-8 lg:mb-10"
            style={{ color: "#222222" }}
            aria-hidden
          >
            WG / FOOTER / 001
          </p>

          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-14 lg:gap-x-8 lg:gap-y-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            <m.div
              variants={columnItem}
              className="md:col-span-2 lg:col-span-3 lg:pr-8 lg:border-r lg:border-[#1a1a1a]"
            >
              <p
                className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#f0f0f0]"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Wintergarden
              </p>
              <p className="text-xs text-[#555555] tracking-wide mt-2">
                Performance intelligence. Conservatory precision.
              </p>
              <p
                className="text-xs text-[#444444] max-w-prose leading-relaxed mt-4"
                style={{ lineHeight: 1.6 }}
              >
                A platform that scores musical performance with the precision of
                a master&apos;s ear. Pitch to the cent. Timing to the
                millisecond. Expression to the phrase.
              </p>
              <SocialIconRow />
            </m.div>

            <m.div variants={columnItem} className="md:col-span-1 lg:col-span-2">
              <h3 className={headerClass}>Platform</h3>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Platform">
                {PRODUCT.map((item) => (
                  <Link key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
                <span
                  className="text-sm italic pointer-events-none select-none"
                  style={{ color: "#333333" }}
                >
                  Pricing (coming soon)
                </span>
              </nav>
            </m.div>

            <m.div variants={columnItem} className="md:col-span-1 lg:col-span-2">
              <h3 className={headerClass}>Company</h3>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Company">
                {COMPANY.map((item) => (
                  <Link key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </m.div>

            <m.div variants={columnItem} className="md:col-span-1 lg:col-span-2">
              <h3 className={headerClass}>Legal</h3>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Legal">
                {LEGAL.map((item) => (
                  <Link key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </m.div>

            <m.div variants={columnItem} className="md:col-span-1 lg:col-span-3">
              <h3 className={headerClass}>Connect</h3>
              <div className="mt-4 flex flex-col gap-3">
                {CONNECT.map(({ label, icon: Icon }) => (
                  <Link
                    key={label}
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm text-[#777777] hover:text-[#d0d0d0] transition-colors duration-200"
                  >
                    <Icon
                      className="shrink-0"
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span>{label}</span>
                  </Link>
                ))}
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm mt-1"
                  style={{ color: "#999999" }}
                >
                  <Mail
                    className="shrink-0"
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="group-hover:text-[#d0d0d0] transition-colors duration-200">
                    Newsletter Signup
                  </span>
                  <span className="text-[#666666] group-hover:text-[#cccccc] transition-colors">
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-8 pt-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#444444] mb-2">
                  Early access updates
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent border-0 border-b text-sm text-[#d0d0d0] placeholder:text-[#333333] outline-none focus:border-b-[#444444] transition-colors"
                    style={{ borderBottom: "1px solid #2a2a2a" }}
                    autoComplete="email"
                    aria-label="Email for early access updates"
                  />
                  <button
                    type="button"
                    onClick={() => {}}
                    className="shrink-0 text-xs text-[#666666] hover:text-[#cccccc] transition-colors duration-200 text-left sm:text-right pb-0.5"
                  >
                    Notify me →
                  </button>
                </div>
              </div>
            </m.div>
          </m.div>

          <div
            className="w-full h-px my-10 md:my-12"
            style={{ background: "#1a1a1a" }}
            aria-hidden
          />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-6 lg:justify-between">
            <p className="text-xs shrink-0 order-1" style={{ color: "#333333" }}>
              © 2025 Centuries Mutual Holdings. All rights reserved.
            </p>

            <p
              className="order-2 hidden text-xs uppercase tracking-wide text-center md:block lg:flex-1 lg:px-4"
              style={{ color: "#2a2a2a" }}
            >
              SOC 2 Pending &nbsp;·&nbsp; GDPR Aware &nbsp;·&nbsp; Audio Data:
              Never Sold
            </p>

            <div className="order-3 flex flex-col gap-1.5 text-left lg:text-right lg:shrink-0">
              <div className="flex items-center gap-2 justify-start lg:justify-end">
                <span
                  className="inline-block rounded-full shrink-0"
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#2d4a2d",
                  }}
                  aria-hidden
                />
                <span className="text-xs" style={{ color: "#333333" }}>
                  All systems operational
                </span>
              </div>
              <p
                className="font-mono text-xs lg:text-right"
                style={{ color: "#2a2a2a" }}
              >
                Build MMXXV · Opus I
              </p>
            </div>
          </div>
        </div>
      </m.footer>
    </LazyMotion>
  );
}
