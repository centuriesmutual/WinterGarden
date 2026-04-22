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
        <div className="relative w-full px-6 md:px-10 py-28 md:py-40">
          <div className="max-w-[760px] mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
              style={{ marginBottom: "40px" }}
            >
              <Ornament variant="star" label="Manifesto — I" />
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display italic"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.15,
                color: "var(--paper)",
                letterSpacing: "-0.005em",
                fontWeight: 500,
              }}
            >
              The instrument is not the art.
              <br />
              The performance is.
            </m.h2>

            <m.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              aria-hidden
              style={{
                width: "80px",
                height: "1px",
                background: "var(--gold)",
                margin: "44px auto",
              }}
            />
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-[640px] mx-auto"
          >
            <p
              className="font-body dropcap"
              style={{
                fontSize: "19px",
                lineHeight: 1.8,
                color: "var(--paper-dim)",
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
              className="font-body"
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                color: "var(--paper-ghost)",
                marginTop: "28px",
                fontStyle: "italic",
              }}
            >
              We are not a streaming service. We are not a practice application.
              We are a conservatory rendered in code — a quiet room in which the
              only thing that matters is the sound you are making now.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[760px] mx-auto text-center"
            style={{ marginTop: "64px" }}
          >
            <p
              className="font-display italic"
              style={{
                fontSize: "clamp(22px, 2.6vw, 32px)",
                lineHeight: 1.6,
                color: "var(--paper)",
                fontWeight: 400,
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

            <p
              className="font-body smallcaps"
              style={{
                marginTop: "40px",
                fontSize: "11px",
                color: "var(--paper-ghost)",
                letterSpacing: "0.5em",
              }}
            >
              — The Founders
            </p>
          </m.div>
        </div>
      </LazyMotion>

      <RuledLine label="Opus II — The Method" sectionNumber="II" />
    </section>
  );
}
