"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

type Props = {
  address: string;
  explorerUrl?: string;
  className?: string;
};

export default function CopyAddress({ address, explorerUrl, className }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // noop
    }
  }

  return (
    <span
      className={"inline-flex items-center gap-2 " + (className ?? "")}
      style={{ fontFamily: "var(--font-mono, ui-monospace, SFMono-Regular, monospace)" }}
    >
      <span
        className="rounded-md border px-2 py-1"
        style={{
          borderColor: "var(--wg-rule, #223027)",
          color: "var(--wg-cream, #F5EDE0)",
          background: "rgba(255,255,255,0.02)",
          fontSize: "12px",
          letterSpacing: "0.02em",
        }}
        aria-label="Contract address"
      >
        {address}
      </span>
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy address"
        className="inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors"
        style={{ borderColor: "var(--wg-rule, #223027)", color: "var(--wg-cream, #F5EDE0)" }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      {explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on block explorer"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors"
          style={{ borderColor: "var(--wg-rule, #223027)", color: "var(--wg-cream, #F5EDE0)" }}
        >
          <ExternalLink size={14} />
        </a>
      )}
    </span>
  );
}
