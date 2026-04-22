"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import RuledLine from "@/components/ui/RuledLine";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="relative px-6 md:px-10 py-28 md:py-40 max-w-[1400px]">
          <span
            aria-hidden
            className="hidden md:block font-display select-none pointer-events-none"
            style={{
              position: "absolute",
              left: 0,
              top: "-20px",
              fontSize: "160px",
              lineHeight: 1,
              color: "var(--teal-ghost)",
              letterSpacing: "-0.01em",
            }}
          >
            01
          </span>

          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative md:ml-[28%] max-w-[640px]"
          >
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.1,
                color: "var(--white)",
              }}
            >
              THE INSTRUMENT IS NOT THE ART.
              <br />
              THE PERFORMANCE IS.
            </p>

            <p
              className="font-mono"
              style={{
                fontSize: "13px",
                lineHeight: 1.9,
                color: "var(--white-dim)",
                marginTop: "32px",
              }}
            >
              Music has always been measured — by teachers,
              <br />
              by audiences, by history. Wintergarden makes
              <br />
              that measurement precise, verifiable, and
              <br />
              financially meaningful.
            </p>

            <p
              className="font-mono"
              style={{
                fontSize: "13px",
                lineHeight: 1.9,
                color: "var(--white-dim)",
                marginTop: "20px",
              }}
            >
              We built a system that listens the way a
              <br />
              master listens. It hears pitch deviation in
              <br />
              cents. It feels rhythmic variance in
              <br />
              milliseconds. It recognizes the shape of
              <br />
              expression in a phrase.
            </p>

            <p
              className="font-serif"
              style={{
                fontSize: "22px",
                lineHeight: 1.6,
                color: "var(--white)",
                marginTop: "32px",
              }}
            >
              Your playing has a <span style={{ color: "var(--tiffany)" }}>score</span>.
              <br />
              That score has a <span style={{ color: "var(--tiffany)" }}>value</span>.
              <br />
              That value is <span style={{ color: "var(--tiffany)" }}>yours</span>.
            </p>
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine label="§ 002 — METHOD" sectionNumber="002" />
    </section>
  );
}
