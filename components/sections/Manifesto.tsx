"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Ornament from "@/components/ui/Ornament";
import RuledLine from "@/components/ui/RuledLine";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full"
      style={{ background: "var(--ink)" }}
    >
      <LazyMotion features={domAnimation}>
        <div className="relative w-full max-w-[1120px] mx-auto px-5 md:px-10 py-28 md:py-40">
          <div className="max-w-[720px] mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
              style={{ marginBottom: "32px" }}
            >
              <Ornament variant="star" label="Manifesto — I" />
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.05 }}
              style={{
                fontSize: "clamp(32px, 4.6vw, 56px)",
                lineHeight: 1.1,
                color: "var(--paper)",
                letterSpacing: "-0.035em",
                fontWeight: 600,
              }}
            >
              The instrument is not the art.
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "var(--gold)",
                }}
              >
                The performance is.
              </span>
            </m.h2>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-[680px] mx-auto"
            style={{ marginTop: "56px" }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "var(--paper-dim)",
                fontWeight: 400,
              }}
            >
              Music has always been measured — by teachers, by audiences, by
              history. Wintergarden makes that measurement precise, verifiable,
              and financially meaningful. We have built an instrument that
              listens the way a master listens: hearing pitch deviation in
              cents, feeling rhythmic variance in milliseconds, recognising the
              shape of expression in a phrase.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--paper-ghost)",
                marginTop: "24px",
                fontWeight: 400,
              }}
            >
              We are not a streaming service. We are not a practice application.
              We are a conservatory rendered in code — a quiet room in which
              the only thing that matters is the sound you are making now.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[760px] mx-auto text-center card"
            style={{
              marginTop: "72px",
              padding: "56px 32px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 2.6vw, 30px)",
                lineHeight: 1.5,
                color: "var(--paper)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Your playing has a{" "}
              <span style={{ color: "var(--gold)" }}>score</span>.
              <br />
              That score has a{" "}
              <span style={{ color: "var(--gold)" }}>value</span>.
              <br />
              That value is{" "}
              <span style={{ color: "var(--gold)" }}>yours</span>.
            </p>

            <div
              className="smallcaps"
              style={{
                marginTop: "32px",
                fontSize: "11px",
                color: "var(--paper-ghost)",
                fontWeight: 500,
              }}
            >
              — The Founders
            </div>
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine label="Opus II — The Method" sectionNumber="II" />
    </section>
  );
}
