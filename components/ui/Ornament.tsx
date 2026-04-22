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
        style={{
          color: "var(--gold)",
          fontSize: variant === "double" ? "10px" : "13px",
          letterSpacing: variant === "double" ? "0.6em" : "0",
        }}
      >
        {GLYPH[variant]}
      </span>
      {label ? (
        <span
          className="smallcaps"
          style={{
            color: "var(--gold-dim)",
            fontSize: "11px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      ) : null}
      <span
        style={{
          color: "var(--gold)",
          fontSize: variant === "double" ? "10px" : "13px",
          letterSpacing: variant === "double" ? "0.6em" : "0",
        }}
      >
        {GLYPH[variant]}
      </span>
    </div>
  );
}
