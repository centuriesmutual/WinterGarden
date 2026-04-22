type Props = {
  label?: string;
  sectionNumber?: string;
};

export default function RuledLine({ label, sectionNumber }: Props) {
  return (
    <div
      className="w-full flex items-center"
      style={{ borderColor: "var(--border-lit)" }}
      aria-hidden
    >
      {label ? (
        <div className="flex items-center w-full">
          <span
            className="font-mono whitespace-nowrap"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "var(--tiffany-dim)",
              padding: "0 16px 0 24px",
            }}
          >
            {label}
          </span>
          <span
            className="flex-1 block"
            style={{
              height: "1px",
              background: "var(--border-lit)",
            }}
          />
          {sectionNumber ? (
            <span
              className="font-display"
              style={{
                fontSize: "11px",
                color: "var(--white-ghost)",
                padding: "0 24px 0 16px",
                letterSpacing: "0.15em",
              }}
            >
              {sectionNumber}
            </span>
          ) : null}
        </div>
      ) : (
        <span
          className="flex-1 block"
          style={{
            height: "1px",
            background: "var(--border-lit)",
          }}
        />
      )}
    </div>
  );
}
