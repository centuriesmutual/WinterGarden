"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Wallet as WalletIcon } from "lucide-react";
import {
  mockConnectedWallet,
  stakingTiers,
  tokenMetrics,
  wallet as emptyWallet,
} from "@/lib/treasury/mock";
import type { StakingTierId, WalletState } from "@/types/treasury";

const wallets = [
  { id: "metamask", label: "MetaMask" },
  { id: "walletconnect", label: "WalletConnect" },
  { id: "coinbase", label: "Coinbase Wallet" },
] as const;

function truncate(addr: string) {
  return addr.slice(0, 6) + "…" + addr.slice(-4);
}

function usdFrom(wgn: number) {
  return wgn * tokenMetrics.priceUsd;
}

export default function WalletPanel() {
  const [state, setState] = useState<WalletState>(emptyWallet);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function onConnect(id: string) {
    setConnecting(id);
    await new Promise((r) => setTimeout(r, 650));
    setState(mockConnectedWallet);
    setConnecting(null);
  }

  function onDisconnect() {
    setState(emptyWallet);
  }

  async function onCopyAddress() {
    if (!state.address) return;
    try {
      await navigator.clipboard.writeText(state.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // noop
    }
  }

  if (!state.connected) {
    return (
      <div
        className="rounded-[28px] border p-8"
        style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.5)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "var(--wg-dim)",
            textTransform: "uppercase",
          }}
        >
          Wallet · Disconnected
        </p>
        <h3
          className="mt-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.2vw, 30px)",
            letterSpacing: "-0.01em",
            color: "var(--wg-cream)",
          }}
        >
          Connect your wallet
        </h3>
        <p className="mt-2 max-w-md text-sm" style={{ color: "var(--wg-dim)", lineHeight: 1.6 }}>
          Wintergarden treasury actions require a connected wallet. Pick a provider to continue.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {wallets.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => onConnect(w.id)}
              disabled={!!connecting}
              className="flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors"
              style={{
                borderColor: "var(--wg-rule)",
                color: "var(--wg-cream)",
                background: "rgba(10,18,15,0.6)",
                opacity: connecting && connecting !== w.id ? 0.4 : 1,
              }}
            >
              <span className="flex items-center gap-2">
                <WalletIcon size={16} style={{ color: "var(--wg-mint)" }} />
                {w.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--wg-dim)",
                }}
              >
                {connecting === w.id ? "Connecting…" : "Select"}
              </span>
            </button>
          ))}
        </div>

        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "var(--wg-dim)",
            textTransform: "uppercase",
          }}
        >
          Supported chain · {tokenMetrics.chain}
        </p>
      </div>
    );
  }

  const tiers: { id: StakingTierId; name: string }[] = stakingTiers.map((t) => ({
    id: t.id,
    name: t.name,
  }));

  return (
    <div
      className="rounded-[28px] border p-8"
      style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.5)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "var(--wg-dim)",
              textTransform: "uppercase",
            }}
          >
            Wallet · Connected
          </p>
          <div className="mt-2 flex items-center gap-3">
            <code
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--wg-cream)",
                fontSize: "14px",
                letterSpacing: "0.02em",
              }}
            >
              {truncate(state.address!)}
            </code>
            <button
              type="button"
              aria-label="Copy address"
              onClick={onCopyAddress}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border"
              style={{ borderColor: "var(--wg-rule)", color: "var(--wg-cream)" }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
            </button>
            <a
              href={`https://basescan.org/address/${state.address}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on block explorer"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border"
              style={{ borderColor: "var(--wg-rule)", color: "var(--wg-cream)" }}
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={onDisconnect}
          className="rounded-full border px-3 py-1.5 text-xs"
          style={{ borderColor: "var(--wg-rule)", color: "var(--wg-dim)" }}
        >
          Disconnect
        </button>
      </div>

      {!state.chainOk && (
        <div
          className="mt-4 rounded-xl border px-4 py-3 text-xs"
          style={{ borderColor: "var(--wg-copper)", color: "var(--wg-copper)" }}
        >
          Wrong network — please switch to {tokenMetrics.chain}.
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Metric
          label="WGN Balance"
          value={state.balanceWgn.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          sub={`$${usdFrom(state.balanceWgn).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
        />
        <Metric
          label="Total Staked"
          value={Object.values(state.stakedByTier)
            .reduce((a, b) => a + b, 0)
            .toLocaleString()}
          sub="across all tiers"
        />
        <Metric
          label="Voting Power"
          value={state.votingPower.toLocaleString()}
          sub="staked × tier multiplier"
        />
        <Metric
          label="Pending Rewards"
          value={state.pendingRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          sub="WGN · epoch-based"
          cta="Claim"
        />
      </div>

      <div className="mt-8">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--wg-dim)",
          }}
        >
          Staked by tier
        </p>
        <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
          {tiers.map((t) => (
            <li
              key={t.id}
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: "var(--wg-rule)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--wg-dim)",
                }}
              >
                {t.name}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  color: "var(--wg-cream)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {state.stakedByTier[t.id].toLocaleString()} WGN
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--wg-dim)",
          }}
        >
          Recent transactions
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm" style={{ color: "var(--wg-cream)" }}>
            <thead>
              <tr
                className="text-left"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--wg-dim)",
                }}
              >
                <th className="py-2 pr-4">When</th>
                <th className="py-2 pr-4">Action</th>
                <th className="py-2 pr-4 text-right">Amount</th>
                <th className="py-2">Tx</th>
              </tr>
            </thead>
            <tbody>
              {state.txns.map((t) => (
                <tr key={t.id} className="border-t" style={{ borderColor: "var(--wg-rule)" }}>
                  <td className="py-2 pr-4" style={{ color: "var(--wg-dim)" }}>
                    {new Date(t.at).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-2 pr-4">{t.kind}</td>
                  <td
                    className="py-2 pr-4 text-right"
                    style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}
                  >
                    {t.amount ? t.amount.toLocaleString() + " WGN" : "—"}
                  </td>
                  <td className="py-2" style={{ fontFamily: "var(--font-mono)" }}>
                    {t.hash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  cta,
}: {
  label: string;
  value: string;
  sub?: string;
  cta?: string;
}) {
  return (
    <div className="rounded-xl border p-4" style={{ borderColor: "var(--wg-rule)" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--wg-dim)",
        }}
      >
        {label}
      </p>
      <p
        className="mt-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          color: "var(--wg-cream)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="mt-1 text-xs"
          style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)" }}
        >
          {sub}
        </p>
      )}
      {cta && (
        <button
          type="button"
          className="mt-3 rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: "var(--wg-mint)",
            color: "var(--wg-mint)",
          }}
        >
          {cta}
        </button>
      )}
    </div>
  );
}
