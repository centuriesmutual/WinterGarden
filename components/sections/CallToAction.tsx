"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Ornament from "@/components/ui/Ornament";

export default function CallToAction() {
  return (
    <section
      id="waitlist"
      className="relative w-full flex flex-col"
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at center, rgba(201,169,97,0.07) 0%, transparent 55%), var(--ink)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div className="flex-1 flex items-center justify-center w-full px-6 md:px-10 py-32">
          <div
            className="relative text-center w-full max-w-[860px] mx-auto"
            style={{ padding: "80px 48px" }}
          >
            <span
              aria-hidden
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid var(--gold-deep)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: "12px",
                border: "1px solid var(--gold-ghost)",
              }}
            />

            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Ornament variant="fleuron" label="A Formal Invitation" />
            </m.div>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative font-serif italic"
              style={{
                fontSize: "clamp(20px, 2.4vw, 28px)",
                color: "var(--paper-dim)",
                marginTop: "40px",
                lineHeight: 1.5,
              }}
            >
              The hall is silent.
              <br />
              The instrument is tuned.
            </m.p>

            <m.h2
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className="relative font-display italic"
              style={{
                fontSize: "clamp(56px, 11vw, 160px)",
                lineHeight: 1,
                color: "var(--paper)",
                marginTop: "40px",
                letterSpacing: "-0.01em",
                fontWeight: 500,
              }}
            >
              Your score
              <br />
              <span style={{ color: "var(--gold)" }}>awaits.</span>
            </m.h2>

            <m.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex items-center justify-center gap-5 mx-auto"
              style={{
                marginTop: "56px",
                marginBottom: "40px",
                width: "min(420px, 80%)",
              }}
            >
              <span
                aria-hidden
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, var(--gold-deep))",
                }}
              />
              <span
                className="font-serif"
                style={{ color: "var(--gold)", fontSize: "16px" }}
              >
                ◆
              </span>
              <span
                aria-hidden
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to left, transparent, var(--gold-deep))",
                }}
              />
            </m.div>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative font-serif italic"
              style={{
                fontSize: "16px",
                color: "var(--paper-ghost)",
                lineHeight: 1.7,
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              Wintergarden is, at present, a conservatory by invitation. Apply
              for a seat.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="relative"
              style={{ marginTop: "40px" }}
            >
              <Link
                href="#waitlist"
                data-cursor
                className="group inline-flex items-center font-body smallcaps"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.55em",
                  padding: "18px 56px",
                  color: "var(--ink)",
                  background: "var(--gold)",
                  border: "1px solid var(--gold)",
                  transition: "all 220ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.color = "var(--ink)";
                }}
              >
                Request Your Audition
              </Link>
            </m.div>

            <div
              className="relative font-serif italic"
              style={{
                marginTop: "40px",
                fontSize: "13px",
                color: "var(--paper-shadow)",
                letterSpacing: "0.18em",
              }}
            >
              Applicants answered within seven days.
            </div>
          </div>
        </div>

        <footer
          className="w-full"
          style={{
            borderTop: "1px solid var(--gold-ghost)",
            padding: "40px 24px",
          }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
            <div
              className="font-display italic"
              style={{
                fontSize: "22px",
                color: "var(--paper)",
                letterSpacing: "0.02em",
              }}
            >
              Wintergarden
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span
                className="font-body smallcaps"
                style={{
                  fontSize: "10px",
                  color: "var(--paper-ghost)",
                  letterSpacing: "0.45em",
                }}
              >
                © MMXXV
              </span>
              <span style={{ color: "var(--gold-deep)" }}>◆</span>
              <span
                className="font-body smallcaps"
                style={{
                  fontSize: "10px",
                  color: "var(--paper-ghost)",
                  letterSpacing: "0.45em",
                }}
              >
                Centuries Mutual
              </span>
              <span style={{ color: "var(--gold-deep)" }}>◆</span>
              <span
                className="font-body smallcaps"
                style={{
                  fontSize: "10px",
                  color: "var(--paper-ghost)",
                  letterSpacing: "0.45em",
                }}
              >
                Avalanche Network
              </span>
              <span style={{ color: "var(--gold-deep)" }}>◆</span>
              <span
                className="font-body smallcaps"
                style={{
                  fontSize: "10px",
                  color: "var(--paper-ghost)",
                  letterSpacing: "0.45em",
                }}
              >
                Circle USDC
              </span>
            </div>
            <div
              className="font-serif italic text-center"
              style={{
                fontSize: "12px",
                color: "var(--paper-shadow)",
                letterSpacing: "0.04em",
              }}
            >
              A quiet room, lit at two in the morning.
            </div>
          </div>
        </footer>
      </LazyMotion>
    </section>
  );
}
