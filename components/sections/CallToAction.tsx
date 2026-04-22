"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import RuledLine from "@/components/ui/RuledLine";

export default function CallToAction() {
  return (
    <section
      id="waitlist"
      className="relative w-full flex flex-col"
      style={{
        minHeight: "100svh",
        background: "var(--black)",
      }}
    >
      <LazyMotion features={domAnimation}>
        <div className="flex-1 flex items-center justify-center w-full px-6 md:px-10">
          <div className="text-center w-full max-w-[1200px] flex flex-col items-center">
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-display"
              style={{
                fontSize: "10vw",
                lineHeight: 0.9,
                color: "var(--white-ghost)",
                letterSpacing: "0.01em",
              }}
            >
              YOUR SCORE IS
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-display text-white"
              style={{
                fontSize: "16vw",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              WAITING
            </m.div>

            <div
              aria-hidden
              style={{
                width: "120px",
                height: "1px",
                background: "var(--border-lit)",
                margin: "32px auto",
              }}
            />

            <p
              className="font-mono"
              style={{
                fontSize: "13px",
                color: "var(--white-ghost)",
                letterSpacing: "0.12em",
              }}
            >
              Wintergarden is in private beta. Apply to enter.
            </p>

            <div style={{ marginTop: "40px" }}>
              <Link
                href="#waitlist"
                data-cursor
                className="font-display inline-flex items-center border border-tiffany text-tiffany hover:bg-tiffany hover:text-black transition-colors"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.4em",
                  padding: "16px 56px",
                  transitionDuration: "150ms",
                }}
              >
                REQUEST ACCESS
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <RuledLine />
          <div
            className="w-full text-center font-mono"
            style={{
              fontSize: "10px",
              color: "var(--white-ghost)",
              letterSpacing: "0.2em",
              padding: "24px 16px",
            }}
          >
            © WINTERGARDEN · CENTURIES MUTUAL · AVALANCHE NETWORK · CIRCLE USDC
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
