"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { Music, AudioWaveform } from "lucide-react";

const bg = "#0d0d0d";

const ARCHITECTURE_NODES = [
  {
    step: "01",
    stage: "CAPTURE",
    shortTitle: "Acoustic Signal Isolation",
    body: "Every note you play is captured at the waveform level before any processing occurs. Wintergarden isolates the fundamental frequency from harmonic content, separating the performed pitch from resonance, room, and instrument body noise.",
    metricVal: "±0.01¢",
    metricLabel: "pitch resolution",
    tags: ["REAL-TIME", "WAVEFORM", "FUNDAMENTAL ISOLATION"],
  },
  {
    step: "02",
    stage: "ANALYSE",
    shortTitle: "Temporal Mapping",
    body: "Rhythmic intent is reconstructed from the performed event stream and compared against the notated score at the sub-beat level. Variance is mapped phrase by phrase, revealing the difference between expressive timing and technical drift.",
    metricVal: "±1ms",
    metricLabel: "temporal resolution",
    tags: ["SUB-BEAT ANALYSIS", "PHRASE-LEVEL", "DRIFT DETECTION"],
  },
  {
    step: "03",
    stage: "INTERPRET",
    shortTitle: "Expression Recognition",
    body: "Dynamic contour, articulation shape, and phrasing arc are modelled across the full musical gesture — not the individual note. The system distinguishes a deliberate diminuendo from an unintended fade, and a stylistic rubato from a loss of tempo.",
    metricVal: "Phrase-level",
    metricLabel: "expression modelling",
    tags: ["DYNAMIC CONTOUR", "ARTICULATION", "GESTURE ARC"],
  },
  {
    step: "04",
    stage: "SCORE",
    shortTitle: "Composite Performance Rating",
    body: "Pitch accuracy, rhythmic precision, and expressive fidelity are weighted and collapsed into a single composite score — calibrated against a corpus of professional recordings and adjustable by genre, period, and pedagogy. Verifiable. Reproducible. Meaningful.",
    metricVal: "0 – 1000",
    metricLabel: "scoring range",
    tags: ["WEIGHTED COMPOSITE", "CORPUS-CALIBRATED", "REPEATABLE"],
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

function ManifestoClosingCta() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 768px) and (hover: hover) {
              .manifesto-cta-bg {
                background-attachment: fixed;
              }
            }
          `,
        }}
      />
      <div
        className="relative w-[100vw] max-w-[100vw] overflow-x-clip
          ml-[calc(50%_-_50vw)]
          py-32 md:py-40 lg:py-48
          text-center"
        style={{ zIndex: 0 }}
      >
        <div
          className="manifesto-cta-bg absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            backgroundImage: "url('/images/cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.12,
            backgroundAttachment: "scroll",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 75%, #0a0a0a 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-[10] max-w-4xl mx-auto px-6">
          <m.div
            className="flex items-center justify-center gap-3 mb-12"
            style={{ color: "#444" }}
            aria-hidden
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="w-10 h-px shrink-0"
              style={{ background: "#222" }}
              aria-hidden
            />
            <p
              className="font-mono text-[10px] uppercase"
              style={{ letterSpacing: "0.4em" }}
            >
              WINTERGARDEN / PRIVATE BETA
            </p>
            <span
              className="w-10 h-px shrink-0"
              style={{ background: "#222" }}
              aria-hidden
            />
          </m.div>

          <m.p
            className="mb-6 font-extralight italic"
            style={{
              color: "#e8e8e8",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Your playing has a score.
          </m.p>

          <m.p
            className="text-sm font-mono uppercase mb-16"
            style={{ color: "#555555", letterSpacing: "0.2em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Every performance. Archived. Annotated. Yours.
          </m.p>

          <m.p
            className="text-base mb-12 max-w-lg mx-auto"
            style={{ color: "#666666", lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            The system is now accepting its first cohort of performers. Fifteen
            minutes. Your instrument. A complete picture of where you stand.
          </m.p>

          <m.div
            className="flex flex-col items-center justify-center gap-4 md:flex-row
              md:justify-center md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center justify-center font-mono text-sm
                uppercase cursor-pointer
                bg-[#f0f0f0] text-[#0a0a0a] border border-[#f0f0f0] rounded-none
                px-10 py-4 tracking-[0.15em] transition-all duration-300 ease-in-out
                hover:bg-white hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
            >
              Request a Demo
            </button>
            <Link
              href="#manifesto"
              className="inline-flex items-center justify-center font-mono text-sm
                uppercase rounded-none
                border border-[#222222] bg-transparent
                text-[#444444] px-8 py-4 tracking-[0.15em] transition-all duration-300
                hover:border-[#444444] hover:text-[#888888]"
            >
              Read the Manifesto →
            </Link>
          </m.div>

          <p
            className="font-mono text-[10px] uppercase mt-6"
            style={{ color: "#333333", letterSpacing: "0.2em" }}
          >
            No account required. Invite only.
          </p>

          <div
            className="w-full max-w-xs h-px mx-auto mt-20"
            style={{ background: "#1a1a1a" }}
            aria-hidden
          />

          <m.div
            className="flex flex-wrap items-start justify-center gap-12 mt-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {(
              [
                { val: "±0.01¢", label: "pitch resolution" },
                { val: "±1ms", label: "temporal resolution" },
                { val: "0–1000", label: "composite score range" },
              ] as const
            ).map((row) => (
              <div key={row.label} className="text-center min-w-0 max-w-[10rem]">
                <p className="font-mono text-lg" style={{ color: "#555555" }}>
                  {row.val}
                </p>
                <p
                  className="font-mono text-[10px] uppercase mt-1"
                  style={{ color: "#333333", letterSpacing: "0.2em" }}
                >
                  {row.label}
                </p>
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </>
  );
}

function ArchitectureSection() {
  return (
    <div className="w-full">
      <div
        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-3"
        style={{ color: "#444" }}
      >
        <p className="font-mono text-xs uppercase" style={{ letterSpacing: "0.3em" }}>
          THE FEEDBACK ARCHITECTURE
        </p>
        <p className="text-xs italic" style={{ color: "#333" }}>
          Four stages. One score.
        </p>
      </div>
      <div
        className="w-full h-px"
        style={{ background: "#1e1e1e" }}
        aria-hidden
      />

      <div className="mt-0 flex flex-col gap-0 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-stretch min-h-0">
        <div
          className="flex flex-col min-w-0
            md:grid md:grid-cols-2 md:gap-8 md:items-start
            lg:contents"
        >
          <div
            className="flex flex-col
              md:col-span-1
              lg:col-span-5 lg:pr-2"
          >
            {ARCHITECTURE_NODES.map((node, i) => (
              <m.div
                key={node.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="py-10"
                style={{
                  borderBottom:
                    i < ARCHITECTURE_NODES.length - 1 ? "1px solid #1e1e1e" : "none",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span
                    className="font-mono uppercase"
                    style={{
                      color: "#333",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {node.step}
                  </span>
                  <span style={{ color: "#222" }}>/</span>
                  <span
                    className="font-mono text-xs uppercase"
                    style={{ color: "#666", letterSpacing: "0.2em" }}
                  >
                    {node.stage}
                  </span>
                </div>
                <h3
                  className="mt-3 font-light leading-snug"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    color: "#e0e0e0",
                  }}
                >
                  {node.shortTitle}
                </h3>
                <p
                  className="text-sm max-w-prose mt-3"
                  style={{ color: "#777", lineHeight: 1.8 }}
                >
                  {node.body}
                </p>
                <div className="mt-4">
                  <p
                    className="font-mono leading-tight"
                    style={{ color: "#ccc", fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                  >
                    {node.metricVal}
                  </p>
                  <p
                    className="font-mono text-[10px] uppercase mt-1"
                    style={{ color: "#444", letterSpacing: "0.12em" }}
                  >
                    {node.metricLabel}
                  </p>
                </div>
                <p
                  className="font-mono text-[10px] uppercase mt-3"
                  style={{ color: "#333", letterSpacing: "0.2em" }}
                >
                  {node.tags.map((t, j) => (
                    <span key={t}>
                      {j > 0 ? (
                        <span style={{ color: "#222" }}> · </span>
                      ) : null}
                      {t}
                    </span>
                  ))}
                </p>
              </m.div>
            ))}
          </div>

          <div
            className="hidden lg:flex lg:col-span-2 justify-center items-stretch py-0 min-h-0"
            aria-hidden
          >
            <div
              className="w-px self-stretch min-h-[600px] lg:min-h-full"
              style={{ background: "#1e1e1e" }}
            />
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full
              md:col-span-1
              md:row-span-1
              flex flex-col
              min-h-[600px] md:min-h-[520px]
              lg:col-span-5
              mt-8 md:mt-0
              lg:sticky
              lg:top-8
              self-start"
            style={{
              background: "#111111",
              border: "1px solid #1e1e1e",
              borderRadius: "16px",
            }}
          >
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 min-h-[200px]">
              <AudioWaveform size={32} strokeWidth={1} color="#2a2a2a" aria-hidden />
              <p
                className="text-xs font-mono uppercase mt-3"
                style={{ color: "#2a2a2a", letterSpacing: "0.2em" }}
              >
                Score visualisation
              </p>
            </div>
            <div
              className="border-t p-5 flex flex-col gap-4"
              style={{ borderColor: "#1a1a1a" }}
            >
              {[
                { label: "Pitch accuracy", w: "75%" },
                { label: "Rhythmic precision", w: "66.666%" },
                { label: "Expression fidelity", w: "83.333%" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 w-full"
                >
                  <span
                    className="font-mono uppercase shrink-0 w-[7.5rem] sm:w-40"
                    style={{
                      fontSize: "10px",
                      color: "#333",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {row.label}
                  </span>
                  <div
                    className="flex-1 h-1 rounded-full overflow-hidden"
                    style={{ background: "#1e1e1e" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: row.w,
                        background: "#2e2e2e",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>

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
            @media (min-width: 1024px) {
              .manifesto-editorial {
                display: grid;
                grid-template-columns: repeat(12, minmax(0, 1fr));
                grid-template-areas:
                  "label label label label . . . . . . . ."
                  "headline headline headline headline headline headline image image image image image image"
                  "body body body body . . image image image image image image"
                  "architecture architecture architecture architecture architecture architecture architecture architecture architecture architecture architecture architecture";
                column-gap: clamp(1rem, 1.5vw, 1.5rem);
                row-gap: clamp(1.25rem, 2.5vw, 2rem);
                align-items: start;
              }
              .me-label { grid-area: label; }
              .me-headline { grid-area: headline; align-self: end; }
              .me-body { grid-area: body; }
              .me-image { grid-area: image; min-height: 0; align-self: stretch; }
              .me-architecture { grid-area: architecture; }
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
            className="me-architecture order-5 w-full"
            style={{ borderTop: "1px solid #1a1a1a" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ArchitectureSection />
            <ManifestoClosingCta />
          </m.div>
        </div>
      </LazyMotion>

      <SectionDivider />
    </section>
  );
}
