export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] w-full items-center justify-center"
      style={{ background: "var(--wg-ink, #0F1F1A)" }}
      aria-busy
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span
          className="h-2 w-2 animate-pulse rounded-full"
          style={{ background: "var(--wg-mint, #7FFFB4)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono, ui-monospace, monospace)",
            color: "var(--wg-dim, #8A9A91)",
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Loading treasury
        </span>
      </div>
    </div>
  );
}
