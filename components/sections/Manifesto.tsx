"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Music } from "lucide-react";

const bg = "#0d0d0d";

const PROCESS = [
  {
    step: "01",
    title: "CAPTURE",
    desc: "Pitch deviation measured to the cent in real time.",
  },
  {
    step: "02",
    title: "ANALYSE",
    desc: "Rhythmic variance mapped to the millisecond, phrase by phrase.",
  },
  {
    step: "03",
    title: "INTERPRET",
    desc: "Expression contour recognised across the full musical gesture.",
  },
  {
    step: "04",
    title: "SCORE",
    desc: "A composite performance score — precise, verifiable, repeatable.",
  },
] as const;

function SectionDivider() {
  return (
    <div className="w-full" style={{ background: bg }}>
      <div
        className="w-full max-w-[min(100%,1400px)] mx-auto"
        style={{ borderTop: "1px solid #1a1a1a" }}
        aria-hidden
      />
    </div>
  );
}

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full"
      style={{ background: bg }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .manifesto-process-nodes { display: grid; grid-template-columns: 1fr; }
            .manifesto-node { box-sizing: border-box; border-bottom: 1px solid #222; }
            @media (max-width: 767.98px) {
              .manifesto-node:last-child { border-bottom: 0; }
            }
            @media (min-width: 768px) and (max-width: 1023.98px) {
              .manifesto-process-nodes {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
              .manifesto-node {
                border: 0;
                border-bottom: 1px solid #222;
                border-right: 1px solid #222;
              }
              .manifesto-node:nth-child(2n) { border-right: 0; }
              .manifesto-node:nth-child(n+3) { border-bottom: 0; }
            }
            @media (min-width: 1024px) {
              .manifesto-node {
                border: 0;
                border-left: 1px solid #222;
              }
              .manifesto-node:first-child { border-left: 0; }
              .manifesto-editorial {
                display: grid;
                grid-template-columns: repeat(12, minmax(0, 1fr));
                grid-template-areas:
                  "label label label label . . . . . . . ."
                  "headline headline headline headline headline headline image image image image image image"
                  "body body body body . . image image image image image image"
                  "process process process process process process process process process process process process"
                  "score score score score . . . . . . . .";
                column-gap: clamp(1rem, 1.5vw, 1.5rem);
                row-gap: clamp(1.25rem, 2.5vw, 2rem);
                align-items: start;
              }
              .me-label { grid-area: label; }
              .me-headline { grid-area: headline; align-self: end; }
              .me-body { grid-area: body; }
              .me-image { grid-area: image; min-height: 0; align-self: stretch; }
              .me-process { grid-area: process; }
              .me-score { grid-area: score; }
              .manifesto-process-nodes {
                grid-template-columns: repeat(4, minmax(0, 1fr));
              }
            }
          `,
        }}
      />

      <LazyMotion features={domAnimation}>
        <div className="manifesto-editorial max-w-[min(100%,1400px)] mx-auto w-full px-5 md:px-10 flex flex-col gap-[clamp(2.5rem,5vw,3.5rem)] py-24 md:py-32 lg:py-40">
          <m.div
            className="me-label order-1 lg:order-none"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <div
              className="flex items-center w-full"
              style={{ color: "#888" }}
            >
              <span
                className="shrink-0 font-mono text-[0.65rem] tracking-[0.32em] uppercase"
                style={{ color: "#999" }}
              >
                MANIFESTO — I
              </span>
              <span
                aria-hidden
                className="shrink-0 ml-3"
                style={{ color: "#444" }}
              >
                ✦
              </span>
              <div
                className="flex-1 h-px ml-4"
                style={{ background: "#222" }}
                aria-hidden
              />
            </div>
          </m.div>

          <m.div
            className="me-headline order-2 lg:order-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.04 }}
            style={{ color: "#f5f5f5" }}
          >
            <h2
              className="font-medium tracking-[-0.02em] leading-[1.02]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 500,
              }}
            >
              The instrument
              <br />
              is not the art.
            </h2>
          </m.div>

          <m.div
            className="me-body order-3 lg:order-none"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div
              className="max-w-prose"
              style={{
                color: "#aaa",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
            >
              <p>
                Music has always been measured — by teachers, by audiences, by
                history. Wintergarden makes that measurement precise,
                verifiable, and financially meaningful.
              </p>
              <p className="mt-6" style={{ color: "#999" }}>
                We are not a streaming service. We are not a practice
                application. We are a conservatory rendered in code — a quiet
                room where the only thing that matters is the sound you make
                now.
              </p>
            </div>
          </m.div>

          <m.div
            className="me-image order-4 lg:order-none w-full flex flex-col lg:min-h-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div
              className="w-full h-full min-h-[280px] flex flex-1 flex-col items-center justify-center px-5 md:min-h-[360px] lg:min-h-[min(100%,_520px)]"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "16px",
                aspectRatio: "3 / 4",
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Music
                className="shrink-0"
                size={28}
                strokeWidth={1.1}
                style={{ color: "#555" }}
                aria-hidden
              />
              <p
                className="text-xs uppercase font-medium"
                style={{
                  color: "#3a3a3a",
                  letterSpacing: "0.2em",
                }}
              >
                Interface preview
              </p>
            </div>
          </m.div>

          <m.div
            className="me-process order-5 lg:order-none w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.16 }}
            style={{ borderTop: "1px solid #1a1a1a" }}
          >
            <p
              className="text-xs uppercase font-medium"
              style={{
                color: "#666",
                letterSpacing: "0.2em",
                paddingTop: "2.5rem",
                paddingBottom: "1.25rem",
              }}
            >
              The Feedback Architecture
            </p>
            <div
              className="manifesto-process-nodes grid w-full"
              style={{ borderTop: "1px solid #222" }}
            >
              {PROCESS.map((node) => (
                <div
                  key={node.step}
                  className="manifesto-node flex flex-col px-6"
                  style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <span
                    className="font-mono leading-none"
                    style={{
                      color: "#333",
                      fontSize: "2rem",
                    }}
                  >
                    {node.step}
                  </span>
                  <span
                    className="text-sm font-medium mt-2"
                    style={{ color: "#ccc" }}
                  >
                    {node.title}
                  </span>
                  <p
                    className="text-xs leading-relaxed mt-2"
                    style={{ color: "#666" }}
                  >
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </m.div>

          <m.div
            className="me-score order-6 lg:order-none w-full"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            style={{
              paddingTop: "2rem",
              paddingBottom: "3rem",
            }}
          >
            <p
              className="text-left max-w-2xl font-light italic"
              style={{
                color: "#888",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: 1.35,
              }}
            >
              Your playing has a score.
            </p>
          </m.div>
        </div>
      </LazyMotion>

      <SectionDivider />
    </section>
  );
}
