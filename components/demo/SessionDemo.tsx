"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

type Phase = 0 | 1 | 2 | 3;

const TARGETS: readonly [number, number, number, number] = [93.2, 86.1, 78.4, 91.7];
const METRIC_NAMES = [
  "Intonation",
  "Tempo Fidelity",
  "Rubato & Feel",
  "Expression",
] as const;

const DURATION_FINAL_SEC = 4 * 60 + 12;

function barFillForValue(v: number): string {
  if (v >= 90) return "#2d6a4f";
  if (v >= 80) return "#1e3828";
  return "#3a2a1e";
}

function barWidthPct(value: number, target: number): number {
  const lo = target - 15;
  const hi = target + 2;
  const w = ((value - lo) / (hi - lo)) * 100;
  return Math.max(0, Math.min(100, w));
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function buildWavePath(
  n: number,
  width: number,
  height: number,
  phase: number,
  amplitude: number,
  freq: number,
  jitter: number
): string {
  const points: { x: number; y: number }[] = [];
  const mid = height / 2;
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * width;
    const y =
      mid +
      amplitude * Math.sin(phase + i * freq) +
      jitter * (Math.random() - 0.5);
    points.push({ x, y });
  }
  return points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
}

export default function SessionDemo() {
  const gid = useId().replace(/:/g, "");
  const [phase, setPhase] = useState<Phase>(0);
  const [pathD, setPathD] = useState<string>("");
  const [ghostD, setGhostD] = useState<string>("");
  const [waveColor, setWaveColor] = useState("#2d6a4f");
  const [score, setScore] = useState(0);
  const [metrics, setMetrics] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const [metricStep, setMetricStep] = useState(0);
  const [lineSweep, setLineSweep] = useState(0);
  const [durationSec, setDurationSec] = useState(0);
  const [scanKey, setScanKey] = useState(0);

  const p1StartRef = useRef<number | null>(null);
  const phaseRef = useRef<Phase>(0);
  phaseRef.current = phase;

  const timerP1toP2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerP2toP3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerMetricSettle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalWave = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalMetrics = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalScore = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalAmp = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalDuration = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafLine = useRef<number | null>(null);

  const lastPathRef = useRef("");
  const ampRef = useRef(32);
  const phRef = useRef(0);

  const clearTimers = useCallback(() => {
    if (timerP1toP2.current) clearTimeout(timerP1toP2.current);
    if (timerP2toP3.current) clearTimeout(timerP2toP3.current);
    if (timerMetricSettle.current) clearTimeout(timerMetricSettle.current);
    if (intervalWave.current) clearInterval(intervalWave.current);
    if (intervalMetrics.current) clearInterval(intervalMetrics.current);
    if (intervalScore.current) clearInterval(intervalScore.current);
    if (intervalAmp.current) clearInterval(intervalAmp.current);
    if (intervalDuration.current) clearInterval(intervalDuration.current);
    if (rafLine.current) cancelAnimationFrame(rafLine.current);
    timerP1toP2.current = null;
    timerP2toP3.current = null;
    timerMetricSettle.current = null;
    intervalWave.current = null;
    intervalMetrics.current = null;
    intervalScore.current = null;
    intervalAmp.current = null;
    intervalDuration.current = null;
    rafLine.current = null;
  }, []);

  const beginSession = useCallback(() => {
    if (phaseRef.current !== 0) return;
    clearTimers();
    phaseRef.current = 1;
    setLineSweep(0);
    setPathD("");
    setGhostD("");
    setScore(0);
    setMetrics([0, 0, 0, 0]);
    setMetricStep(0);
    setDurationSec(0);
    setWaveColor("#2d6a4f");
    ampRef.current = 20 + Math.random() * 25;
    phRef.current = 0;
    p1StartRef.current = Date.now();
    setPhase(1); /* ref primed; render syncs */

    intervalAmp.current = setInterval(() => {
      ampRef.current = 20 + Math.random() * 25;
    }, 400);

    const phaseN = 0.15;
    const f = 0.18;
    intervalWave.current = setInterval(() => {
      if (phaseRef.current !== 1) return;
      setGhostD(lastPathRef.current);
      const ph = phRef.current;
      const d = buildWavePath(80, 800, 160, ph, ampRef.current, f, 4);
      phRef.current = ph + phaseN;
      lastPathRef.current = d;
      setPathD(d);
    }, 80);

    intervalDuration.current = setInterval(() => {
      if (phaseRef.current !== 1) return;
      if (!p1StartRef.current) return;
      const elapsed = (Date.now() - p1StartRef.current) / 1000;
      const t = Math.min(1, elapsed / 6);
      setDurationSec(Math.floor(t * DURATION_FINAL_SEC));
    }, 200);

    intervalMetrics.current = setInterval(() => {
      if (phaseRef.current !== 1) return;
      setMetricStep((s) => s + 1);
    }, 300);

    timerP1toP2.current = setTimeout(() => {
      if (intervalWave.current) clearInterval(intervalWave.current);
      if (intervalAmp.current) clearInterval(intervalAmp.current);
      if (intervalDuration.current) clearInterval(intervalDuration.current);
      intervalWave.current = null;
      intervalAmp.current = null;
      intervalDuration.current = null;
      setPathD(lastPathRef.current);
      setGhostD("");
      setScanKey((k) => k + 1);
      phaseRef.current = 2;
      setPhase(2);
    }, 6000);
  }, [clearTimers]);

  useEffect(() => {
    if (phase !== 1) return;
    setMetrics((prev) => {
      const next: [number, number, number, number] = [...prev] as [number, number, number, number];
      for (let i = 0; i < 4; i++) {
        const t = TARGETS[i];
        const s = metricStep;
        const v =
          t - 15 +
          s * 1.2 +
          (Math.random() * 3 - 1.5);
        next[i] = Math.max(t - 15, Math.min(t + 2, v));
      }
      return next;
    });
  }, [metricStep, phase]);

  useEffect(() => {
    if (phase !== 2) return;
    setWaveColor("#2a4a7a");
    if (intervalMetrics.current) {
      clearInterval(intervalMetrics.current);
      intervalMetrics.current = null;
    }
    setMetrics(
      () =>
        TARGETS.map(
          (t) => t + (Math.random() * 4 - 2)
        ) as [number, number, number, number]
    );
    setScore(0);
    const step = 87.4 / 40;
    let cur = 0;
    intervalScore.current = setInterval(() => {
      cur = Math.min(87.4, cur + step);
      setScore(cur);
      if (cur >= 87.4 && intervalScore.current) {
        clearInterval(intervalScore.current);
        intervalScore.current = null;
      }
    }, 50);
    const endScore = setTimeout(() => {
      if (intervalScore.current) {
        clearInterval(intervalScore.current);
        intervalScore.current = null;
      }
      setScore(87.4);
    }, 2000);
    timerP2toP3.current = setTimeout(() => {
      phaseRef.current = 3;
      setPhase(3);
    }, 3000);
    return () => {
      clearTimeout(endScore);
      if (timerP2toP3.current) {
        clearTimeout(timerP2toP3.current);
        timerP2toP3.current = null;
      }
      if (intervalScore.current) {
        clearInterval(intervalScore.current);
        intervalScore.current = null;
      }
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 3) return;
    setScore(87.4);
    setWaveColor("#2d6a4f");
    timerMetricSettle.current = setTimeout(() => {
      setMetrics([...TARGETS] as [number, number, number, number]);
    }, 800);
    let start: number | null = null;
    const run = (ts: number) => {
      if (start == null) start = ts;
      const t = (ts - start) / 800;
      const w = Math.min(1, t);
      setLineSweep(w);
      if (t < 1) {
        rafLine.current = requestAnimationFrame(run);
      } else {
        setLineSweep(1);
      }
    };
    setLineSweep(0);
    rafLine.current = requestAnimationFrame(run);
    return () => {
      if (rafLine.current) cancelAnimationFrame(rafLine.current);
      if (timerMetricSettle.current) clearTimeout(timerMetricSettle.current);
    };
  }, [phase]);

  const replay = useCallback(() => {
    clearTimers();
    phaseRef.current = 0;
    setPhase(0);
    setPathD("");
    setGhostD("");
    setWaveColor("#2d6a4f");
    setScore(0);
    setMetrics([0, 0, 0, 0]);
    setMetricStep(0);
    setLineSweep(0);
    setDurationSec(0);
    setScanKey(0);
    p1StartRef.current = null;
    lastPathRef.current = "";
    phRef.current = 0;
    ampRef.current = 32;
  }, [clearTimers]);

  const requestAccess = useCallback(() => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scoreTextStyle = useMemo(() => {
    const t = Math.min(1, Math.max(0, score / 87.4));
    const b = Math.round(51 + (192 - 51) * t);
    return { color: `rgb(${b},${b},${b})` } as const;
  }, [score]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const statusDotClass = useMemo(() => {
    if (phase === 0) return "bg-[#252528]";
    if (phase === 1) return "bg-[#2d6a4f] shadow-[0_0_0_0_rgba(45,106,79,0.4)]";
    if (phase === 2) return "bg-[#1e3a6a]";
    return "bg-[#2d6a4f]";
  }, [phase]);

  const statusLabel = useMemo(() => {
    if (phase === 0) return "Awaiting session";
    if (phase === 1) return "In Session · Recording";
    if (phase === 2) return "Analysing performance";
    return "Session complete";
  }, [phase]);

  const statusLabelClass = useMemo(() => {
    if (phase === 0) return "text-[#333]";
    if (phase === 1) return "text-[#2d6a4f]";
    if (phase === 2) return "text-[#3a5a8a]";
    return "text-[#2d6a4f]";
  }, [phase]);

  const displayMetrics = useMemo(() => {
    if (phase === 0) return null;
    return metrics;
  }, [phase, metrics]);

  const completedSquares = phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 2 : 3;

  return (
    <section
      id="session-demo"
      className="w-full py-24 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <style>{`
        @keyframes sessionPulse {
          0% { box-shadow: 0 0 0 0 rgba(45,106,79,0.4); }
          100% { box-shadow: 0 0 0 6px rgba(45,106,79,0); }
        }
        @keyframes sessionScan2 {
          0% { left: 0; }
          100% { left: calc(100% - 2px); }
        }
        .session-scan-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          left: 0;
          animation: sessionScan2 2.4s linear 0s 2;
        }
        @keyframes capPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .session-dot-pulse { animation: sessionPulse 1.5s ease-out infinite; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div
          className="flex items-center justify-center gap-3 mb-4"
          style={{ color: "#444" }}
        >
          <span className="w-10 h-px" style={{ background: "#222" }} aria-hidden />
          <p
            className="font-mono text-[10px] uppercase"
            style={{ letterSpacing: "0.4em" }}
          >
            LIVE DEMO
          </p>
          <span className="w-10 h-px" style={{ background: "#222" }} aria-hidden />
        </div>

        <h2
          className="mt-4 mb-4 font-extralight italic"
          style={{
            color: "#d0d0d0",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 200,
            lineHeight: 1.2,
          }}
        >
          Hear what Wintergarden hears.
        </h2>
        <p
          className="text-sm max-w-xl mb-12"
          style={{ color: "#555", lineHeight: 1.8 }}
        >
          A simulated session. Chopin · Nocturne in C<span className="align-super text-[0.7em]">♯</span>{" "}
          Minor. Experience the full scoring arc — capture, analysis, result.
        </p>

        <div
          className="w-full border border-[#1e1e22] overflow-hidden"
          style={{ background: "#0d0d0f" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 min-h-0">
            <div className="md:col-span-3 lg:col-span-7 min-w-0 flex flex-col">
              <div
                className="h-12 flex items-center justify-between px-5 shrink-0"
                style={{
                  background: "#111114",
                  borderBottom: "1px solid #1e1e22",
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusDotClass} ${phase === 1 ? "session-dot-pulse" : ""}`}
                  />
                  <span className={`font-mono text-xs truncate ${statusLabelClass}`}>
                    {statusLabel}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-[#252528] tracking-wide shrink-0">
                  <span>Session 00847</span>
                  <span> · Pianoforte</span>
                </div>
              </div>

              <div
                className="relative overflow-hidden border-b border-[#1e1e22] h-[100px] md:h-[120px] lg:h-[160px] shrink-0"
                style={{ background: "#0a0a0c" }}
              >
                {phase === 0 && (
                  <>
                    <div
                      className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                      style={{ background: "#1e1e22" }}
                    />
                    <p className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[#2a2a2e] tracking-wide text-center px-2">
                      Press Begin Session to start
                    </p>
                  </>
                )}

                {(phase === 1 || phase === 2 || phase === 3) && (
                  <svg
                    className="w-full h-full block transition-colors duration-500"
                    viewBox="0 0 800 160"
                    preserveAspectRatio="none"
                    style={{ color: waveColor }}
                  >
                    <defs>
                      <linearGradient id={`wgL${gid}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#0a0a0c" stopOpacity="1" />
                        <stop offset="1" stopColor="#0a0a0c" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id={`wgR${gid}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#0a0a0c" stopOpacity="0" />
                        <stop offset="1" stopColor="#0a0a0c" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="80"
                      x2="800"
                      y2="80"
                      stroke="#161618"
                      strokeWidth="0.5"
                    />
                    {phase === 1 && ghostD ? (
                      <path
                        d={ghostD}
                        stroke="#1a3028"
                        strokeWidth="0.75"
                        fill="none"
                        opacity="0.4"
                      />
                    ) : null}
                    {pathD ? (
                      <path
                        d={pathD}
                        stroke="currentColor"
                        strokeWidth="1.25"
                        fill="none"
                      />
                    ) : null}
                    {phase === 3 && lineSweep < 1 ? (
                      <line
                        x1="0"
                        y1="80"
                        x2={800 * lineSweep}
                        y2="80"
                        stroke="#2d6a4f"
                        strokeWidth="1.25"
                      />
                    ) : null}
                    {phase === 3 && lineSweep >= 1 ? (
                      <line
                        x1="0"
                        y1="80"
                        x2="800"
                        y2="80"
                        stroke="#2d6a4f"
                        strokeWidth="1"
                        opacity="0.9"
                      />
                    ) : null}
                    {(phase === 1 || phase === 2) && (
                      <line
                        x1="600"
                        y1="0"
                        x2="600"
                        y2="160"
                        stroke="#252528"
                        strokeWidth="0.75"
                        strokeDasharray="3 4"
                      />
                    )}
                    <rect
                      x="0"
                      y="0"
                      width="60"
                      height="160"
                      fill={`url(#wgL${gid})`}
                    />
                    <rect
                      x="740"
                      y="0"
                      width="60"
                      height="160"
                      fill={`url(#wgR${gid})`}
                    />
                  </svg>
                )}

                {phase === 2 && (
                  <div
                    key={scanKey}
                    className="absolute inset-0 pointer-events-none overflow-hidden z-10"
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(30,58,106,0.12)" }}
                    />
                    <div
                      className="session-scan-sweep"
                      style={{ background: "#1e3a6a", opacity: 0.6 }}
                    />
                  </div>
                )}
              </div>

              <div className="px-5 py-6 flex-1 min-h-[120px]">
                {phase === 0 && <div className="min-h-[80px]" />}
                {phase === 1 && (
                  <p
                    className="text-center font-mono text-xs text-[#252528] tracking-wide"
                    style={{ animation: "capPulse 1.5s ease-in-out infinite" }}
                  >
                    Capturing performance data...
                  </p>
                )}
                {phase === 2 && (
                  <div className="text-center transition-colors duration-500">
                    <p
                      className="font-mono font-extralight tabular-nums"
                      style={{
                        fontSize: "clamp(3.5rem, 7vw, 6rem)",
                        ...scoreTextStyle,
                      }}
                    >
                      {score.toFixed(1)}
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase mt-2"
                      style={{ color: "#333", letterSpacing: "0.3em" }}
                    >
                      WINTERGARDEN SCORE
                    </p>
                  </div>
                )}
                {phase === 3 && (
                  <div className="text-center">
                    <p
                      className="font-mono font-extralight text-[#e0e0e0] tabular-nums"
                      style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                    >
                      87.4
                    </p>
                    <p
                      className="font-mono text-[10px] mt-2 uppercase"
                      style={{ color: "#555", letterSpacing: "0.3em" }}
                    >
                      WINTERGARDEN SCORE
                    </p>
                    <div
                      className="w-full h-px mt-4"
                      style={{ background: "#1e1e22" }}
                    />
                    <p className="text-sm italic font-light text-[#666] mt-3">
                      Chopin · Nocturne in C<span className="text-[0.75em] align-super">♯</span> Minor
                    </p>
                    <p className="font-mono text-[10px] text-[#444] tracking-wide mt-2">
                      Global rank #1,847 of 94,210 · Percentile 98th
                    </p>
                    <div
                      className="inline-block mt-3 px-2 h-[14px] leading-[14px] align-middle"
                      style={{
                        background: "#0d1f16",
                        border: "0.5px solid #2d6a4f",
                        borderRadius: 1,
                      }}
                    >
                      <span
                        className="font-mono text-[9px] text-[#2d6a4f] tracking-widest"
                      >
                        VERIFIED
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="md:col-span-2 lg:col-span-5 border-t border-[#1e1e22] lg:border-t-0 lg:border-l flex flex-col p-5"
              style={{ background: "#0d0d0f" }}
            >
              <h3
                className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#333] border-b border-[#1a1a1e] pb-3 mb-4"
              >
                LIVE METRICS
              </h3>

              <div className="grid grid-cols-2 gap-x-4 md:grid-cols-1">
                {METRIC_NAMES.map((name, i) => {
                  const t = TARGETS[i];
                  const m = displayMetrics ? displayMetrics[i] : 0;
                  const showVal =
                    phase === 0
                      ? "—"
                      : phase === 1
                        ? m.toFixed(1)
                        : m.toFixed(1);
                  const w = barWidthPct(phase === 0 ? 0 : m, t);
                  const fill = barFillForValue(phase === 0 ? 0 : m);
                  const vColor =
                    phase === 0
                      ? "text-[#252528]"
                      : phase === 1
                        ? "text-[#2d6a4f]"
                        : phase === 2
                          ? "text-[#3a5a8a]"
                          : "text-[#c0c0c0]";
                  return (
                    <div
                      key={name}
                      className="py-4 border-b border-[#161618] last:border-0"
                    >
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-mono text-xs text-[#666] uppercase tracking-wide">
                          {name}
                        </span>
                        <span
                          className={`font-mono text-xs tabular-nums transition-colors duration-500 ${vColor}`}
                        >
                          {showVal}
                        </span>
                      </div>
                      <div
                        className="mt-2 w-full h-0.5"
                        style={{ background: "#141418" }}
                      >
                        <div
                          className="h-full transition-all duration-300 sm:duration-[600ms] ease-out"
                          style={{
                            width: `${w}%`,
                            background: fill,
                            transitionProperty: "width, background-color",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-auto border-t border-[#1a1a1e] pt-4 mt-6"
              >
                {[
                  ["SESSION", "00847"],
                  ["INSTRUMENT", "Pianoforte"],
                  ["REPERTOIRE", "Romantic"],
                  [
                    "DURATION",
                    phase === 0
                      ? "—"
                      : phase === 1
                        ? formatDuration(durationSec)
                        : "4:12",
                  ],
                ].map(([a, b]) => (
                  <div
                    key={a as string}
                    className="flex justify-between font-mono text-[10px] text-[#252528] mt-1 first:mt-0"
                  >
                    <span className="text-[#252528]">{a}</span>
                    <span
                      className={
                        a === "DURATION" && (phase === 1 || phase === 3)
                          ? "text-[#2d6a4f]"
                          : "text-[#333]"
                      }
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="h-10 flex items-center justify-between px-5 shrink-0"
            style={{
              background: "#0a0a0a",
              borderTop: "1px solid #1e1e22",
            }}
          >
            <span className="font-mono text-[10px] text-[#252528] tracking-wide">
              Wintergarden · Private Beta · Anno MMXXV
            </span>
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 border border-[#1a1a1e] transition-colors duration-300"
                  style={{
                    background: i < completedSquares ? "#2d6a4f" : "#141418",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {phase === 0 && (
            <button
              type="button"
              onClick={beginSession}
              className="font-mono text-sm tracking-[0.15em] uppercase px-10 py-4 border-0 rounded-none transition-colors duration-200 bg-[#f0f0f0] text-[#0a0a0a] hover:bg-white"
            >
              Begin Session
            </button>
          )}
          {phase === 1 && (
            <div
              className="font-mono text-sm tracking-[0.15em] uppercase px-10 py-4 border border-[#1a3028] rounded-none text-[#2d6a4f] select-none"
              style={{ background: "#0d1f16" }}
            >
              Recording...
            </div>
          )}
          {phase === 2 && (
            <div
              className="font-mono text-sm tracking-[0.15em] uppercase px-10 py-4 border border-[#1a2a4a] rounded-none text-[#3a5a8a] select-none"
              style={{ background: "#0a0f1a" }}
            >
              Analysing...
            </div>
          )}
          {phase === 3 && (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={requestAccess}
                className="font-mono text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-none bg-[#f0f0f0] text-[#0a0a0a] border-0 hover:bg-white transition-colors duration-200"
              >
                Request Full Access →
              </button>
              <button
                type="button"
                onClick={replay}
                className="font-mono text-sm tracking-[0.15em] uppercase px-10 py-4 border border-[#222] rounded-none text-[#444] bg-transparent transition-colors duration-200 hover:border-[#444] hover:text-[#888]"
              >
                Replay Session
              </button>
            </div>
          )}
        </div>

        <p className="text-center font-mono text-[10px] text-[#252528] uppercase tracking-widest mt-4">
          Simulation only. No microphone access required.
        </p>
      </div>
    </section>
  );
}
