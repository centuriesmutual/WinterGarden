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
          "radial-gradient(ellipse at center, rgba(201,169,97,0.08) 0%, transparent 55%), var(--ink)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div className="flex-1 flex items-center justify-center w-full px-5 md:px-10 py-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative text-center w-full max-w-[880px] mx-auto card"
            style={{ padding: "72px 40px", borderRadius: "var(--radius-3xl)" }}
          >
            <Ornament variant="fleuron" label="A Formal Invitation" />

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                color: "var(--paper-dim)",
                marginTop: "36px",
                lineHeight: 1.5,
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              The hall is silent. The instrument is tuned.
            </m.p>

            <m.h2
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              style={{
                fontSize: "clamp(56px, 10vw, 140px)",
                lineHeight: 1,
                color: "var(--paper)",
                marginTop: "28px",
                letterSpacing: "-0.045em",
                fontWeight: 700,
              }}
            >
              Your score
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #E8D19A 0%, var(--gold) 60%, var(--gold-dim) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                awaits.
              </span>
            </m.h2>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontSize: "17px",
                color: "var(--paper-ghost)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "40px auto 0",
                fontWeight: 400,
              }}
            >
              Wintergarden is, at present, a conservatory by invitation. Apply
              for a seat.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex items-center justify-center flex-wrap gap-4"
              style={{ marginTop: "32px" }}
            >
              <Link
                href="#waitlist"
                className="btn-primary"
                style={{ padding: "16px 36px", fontSize: "15px" }}
              >
                Request Your Audition
                <span style={{ marginLeft: "10px", fontSize: "16px" }}>→</span>
              </Link>
              <Link href="#manifesto" className="btn-secondary">
                Learn More
              </Link>
            </m.div>

            <div
              style={{
                marginTop: "28px",
                fontSize: "13px",
                color: "var(--paper-shadow)",
                fontWeight: 500,
              }}
            >
              Applicants answered within seven days.
            </div>
          </m.div>
        </div>

        <footer
          className="w-full"
          style={{
            borderTop: "1px solid var(--gold-ghost)",
            padding: "48px 24px",
            background: "rgba(7,5,3,0.6)",
          }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "9999px",
                  background:
                    "radial-gradient(circle at 30% 30%, #E2C47E, var(--gold) 55%, var(--gold-deep))",
                  boxShadow: "0 0 0 1px var(--gold-deep)",
                }}
              />
              <span
                style={{
                  fontSize: "18px",
                  color: "var(--paper)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Wintergarden
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "© MMXXV",
                "Centuries Mutual",
                "Avalanche Network",
                "Circle USDC",
              ].map((label, i, arr) => (
                <span
                  key={label}
                  className="flex items-center gap-3 smallcaps"
                  style={{
                    fontSize: "10.5px",
                    color: "var(--paper-ghost)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                  {i < arr.length - 1 ? (
                    <span style={{ color: "var(--gold-deep)" }}>·</span>
                  ) : null}
                </span>
              ))}
            </div>
            <div
              className="text-center"
              style={{
                fontSize: "13px",
                color: "var(--paper-shadow)",
                fontStyle: "italic",
                fontWeight: 400,
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
