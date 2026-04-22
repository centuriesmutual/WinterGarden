type Props = {
  label?: string;
  sectionNumber?: string;
  variant?: "thin" | "double" | "ornamental";
};

export default function RuledLine({
  label,
  sectionNumber,
  variant = "ornamental",
}: Props) {
  if (variant === "double") {
    return (
      <div aria-hidden className="w-full">
        <div style={{ height: "1px", background: "var(--gold-deep)" }} />
        <div style={{ height: "3px" }} />
        <div style={{ height: "1px", background: "var(--gold-deep)" }} />
      </div>
    );
  }

  if (variant === "thin") {
    return (
      <div
        aria-hidden
        className="w-full"
        style={{ height: "1px", background: "var(--border-lit)" }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className="w-full flex items-center"
      style={{ padding: "0 24px" }}
    >
      <span
        className="flex-1 block"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--gold-deep) 30%, var(--gold-deep) 100%)",
        }}
      />
      {label ? (
        <span
          className="smallcaps"
          style={{
            padding: "0 22px",
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--gold-dim)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      ) : (
        <span
          style={{
            padding: "0 18px",
            color: "var(--gold)",
            fontSize: "13px",
          }}
        >
          ◆
        </span>
      )}
      <span
        className="flex-1 block"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, var(--gold-deep) 0%, var(--gold-deep) 70%, transparent)",
        }}
      />
      {sectionNumber ? (
        <span
          style={{
            paddingLeft: "16px",
            color: "var(--paper-ghost)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
          }}
        >
          {sectionNumber}
        </span>
      ) : null}
    </div>
  );
}
