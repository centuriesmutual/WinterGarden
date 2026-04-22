"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
};

const GLITCH_CHARS = ["█", "▓", "▒", "░", "§", "#", "▊", "▌"];

export default function GlitchText({
  text,
  className,
  style,
  as: Tag = "span",
}: Props) {
  const [display, setDisplay] = useState(text);
  const [litIdx, setLitIdx] = useState<Set<number>>(new Set());
  const timers = useRef<number[]>([]);

  const runGlitch = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];

    const totalDuration = 400;
    const start = performance.now();
    const len = text.length;

    const swapCount = Math.min(4, Math.max(3, Math.floor(len / 6) + 3));
    const indices = new Set<number>();
    while (indices.size < Math.min(swapCount, len)) {
      const i = Math.floor(Math.random() * len);
      if (text[i] !== " ") indices.add(i);
      else if (indices.size >= len - 1) break;
    }

    setLitIdx(new Set(indices));

    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      if (elapsed >= totalDuration) {
        setDisplay(text);
        setLitIdx(new Set());
        return;
      }
      const chars = text.split("");
      indices.forEach((i) => {
        if (Math.random() > 0.2) {
          chars[i] =
            GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
      });
      setDisplay(chars.join(""));
      raf = window.setTimeout(tick, 60 + Math.random() * 20) as unknown as number;
      timers.current.push(raf);
    };

    tick();
  }, [text]);

  useEffect(() => {
    runGlitch();
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
    };
  }, [runGlitch]);

  return (
    <Tag
      className={className}
      style={style}
      onMouseEnter={runGlitch}
    >
      {display.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            color: litIdx.has(i) ? "var(--tiffany)" : undefined,
          }}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}
