"use client";

import { useEffect, useRef } from "react";

export default function Spectrogram() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const BAR_WIDTH = 1;
    const GAP = 3;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let barCount = 70;
    let width = 0;
    let height = 0;
    let raf = 0;
    let start = performance.now();
    const phases: number[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      barCount = Math.max(
        40,
        Math.min(80, Math.floor(width / (BAR_WIDTH + GAP)))
      );
      phases.length = 0;
      for (let i = 0; i < barCount; i++) {
        phases.push(Math.random() * Math.PI * 2);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      const totalWidth = barCount * (BAR_WIDTH + GAP) - GAP;
      const offsetX = (width - totalWidth) / 2;

      const heights: number[] = new Array(barCount);
      for (let i = 0; i < barCount; i++) {
        const t = elapsed * 0.6;
        const n =
          Math.sin(t + phases[i]) * 0.35 +
          Math.sin(t * 0.4 + i * 0.12) * 0.25 +
          Math.sin(t * 1.3 + i * 0.05 + phases[i] * 0.5) * 0.2;
        const base = 0.45;
        const amp = 0.45;
        const h = Math.max(0.02, Math.min(1, base + n * amp));
        heights[i] = h;
      }

      const sorted = [...heights].sort((a, b) => b - a);
      const threshold = sorted[Math.floor(barCount * 0.15)] ?? 0.99;

      for (let i = 0; i < barCount; i++) {
        const h = heights[i];
        const barH = h * height;
        const x = offsetX + i * (BAR_WIDTH + GAP);
        const y = (height - barH) / 2;

        ctx.fillStyle = "#242424";
        ctx.fillRect(x, y, BAR_WIDTH, barH);

        if (h >= threshold) {
          const tipH = Math.max(2, barH * 0.08);
          ctx.fillStyle = "#81C5B8";
          ctx.fillRect(x, y, BAR_WIDTH, tipH);
          ctx.fillRect(x, y + barH - tipH, BAR_WIDTH, tipH);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full"
      style={{ willChange: "transform" }}
      aria-hidden
    />
  );
}
