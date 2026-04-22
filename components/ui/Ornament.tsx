type Variant = "diamond" | "fleuron" | "star" | "double";

type Props = {
  variant?: Variant;
  label?: string;
  className?: string;
};

const GLYPH: Record<Variant, string> = {
  diamond: "◆",
  fleuron: "❦",
  star: "✦",
  double: "◆ ◆",
};

export default function Ornament({
  variant = "diamond",
  label,
  className,
}: Props) {
  return (
    <div
      className={`rule-ornament ${className ?? ""}`}
      role="presentation"
      aria-hidden
    >
      <span
        className="font-serif"
        style={{
          color: "var(--gold)",
          fontSize: variant === "double" ? "10px" : "14px",
          letterSpacing: variant === "double" ? "0.6em" : "0",
        }}
      >
        {GLYPH[variant]}
      </span>
      {label ? (
        <span
          className="font-body smallcaps"
          style={{
            color: "var(--gold-dim)",
            fontSize: "11px",
            letterSpacing: "0.45em",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      ) : null}
      <span
        className="font-serif"
        style={{
          color: "var(--gold)",
          fontSize: variant === "double" ? "10px" : "14px",
          letterSpacing: variant === "double" ? "0.6em" : "0",
        }}
      >
        {GLYPH[variant]}
      </span>
    </div>
  );
}
