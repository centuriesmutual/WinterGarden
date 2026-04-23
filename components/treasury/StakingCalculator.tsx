"use client";

import { useMemo, useState } from "react";
import { stakingTiers, tokenMetrics } from "@/lib/treasury/mock";
import type { StakingTier } from "@/types/treasury";

function effectiveApy(tier: StakingTier) {
  const epochsPerYear = 365 / tier.epochDays;
  const per = tier.baseApyPct / 100 / epochsPerYear;
  return (Math.pow(1 + per, epochsPerYear) - 1) * 100;
}

function rewards(amount: number, tier: StakingTier, years = 1) {
  const epochsPerYear = 365 / tier.epochDays;
  const per = tier.baseApyPct / 100 / epochsPerYear;
  const total = amount * Math.pow(1 + per, epochsPerYear * years);
  return { total, gain: total - amount };
}

export default function StakingCalculator() {
  const [amount, setAmount] = useState<number>(5_000);
  const [tierId, setTierId] = useState<StakingTier["id"]>("chorus");

  const tier = useMemo(
    () => stakingTiers.find((t) => t.id === tierId) ?? stakingTiers[0],
    [tierId]
  );

  const daily = useMemo(() => {
    const base = (amount * tier.baseApyPct) / 100 / 365;
    return base;
  }, [amount, tier]);
  const monthly = daily * 30;
  const annualCompound = rewards(amount, tier, 1);
  const effective = effectiveApy(tier);

  const minOk = amount >= tier.minStake;

  return (
    <div
      className="rounded-[28px] border p-6 md:p-8"
      style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.5)" }}
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <label className="block">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--wg-dim)",
              }}
            >
              Stake Amount (WGN)
            </span>
            <input
              type="number"
              min={0}
              step={100}
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
              style={{
                borderColor: "var(--wg-rule)",
                color: "var(--wg-cream)",
                fontFamily: "var(--font-display)",
                fontSize: "26px",
                fontVariantNumeric: "tabular-nums",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--wg-mint)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--wg-rule)")}
              aria-describedby="min-stake"
            />
          </label>

          <p
            id="min-stake"
            className="mt-2 text-xs"
            style={{
              color: minOk ? "var(--wg-dim)" : "var(--wg-copper)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Min stake for {tier.name}: {tier.minStake.toLocaleString()} WGN
            {!minOk ? " · amount below minimum" : ""}
          </p>

          <div
            role="radiogroup"
            aria-label="Select staking tier"
            className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4"
          >
            {stakingTiers.map((t) => {
              const active = t.id === tierId;
              return (
                <button
                  key={t.id}
                  role="radio"
                  aria-checked={active}
                  type="button"
                  onClick={() => setTierId(t.id)}
                  className="rounded-xl border px-3 py-3 text-left transition-colors"
                  style={{
                    borderColor: active ? "var(--wg-mint)" : "var(--wg-rule)",
                    background: active ? "rgba(127,255,180,0.08)" : "rgba(10,18,15,0.4)",
                    color: "var(--wg-cream)",
                  }}
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
                      fontSize: "18px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {t.baseApyPct}% APY
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)" }}
                  >
                    {t.lockupDays ? `${t.lockupDays}d lock` : "flexible"} · {t.multiplier}×
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="flex-1 rounded-2xl border p-5"
          style={{ borderColor: "var(--wg-rule)", background: "rgba(10,18,15,0.6)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--wg-dim)",
            }}
          >
            Projected rewards · {tier.name}
          </p>

          <dl className="mt-4 flex flex-col gap-3">
            <Row label="Daily" value={`${daily.toLocaleString(undefined, { maximumFractionDigits: 2 })} WGN`} />
            <Row
              label="Monthly"
              value={`${monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })} WGN`}
            />
            <Row
              label="Annual (compounded weekly)"
              value={`${annualCompound.gain.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })} WGN`}
            />
            <Row
              label="Value at maturity"
              value={`${annualCompound.total.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })} WGN · $${(
                annualCompound.total * tokenMetrics.priceUsd
              ).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
            />
            <Row
              label="Effective APY"
              value={`${effective.toFixed(2)}%`}
              accent
            />
          </dl>

          <p
            className="mt-5 text-xs"
            style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)" }}
          >
            Rewards paid in WGN every {tier.epochDays}-day epoch. Figures are illustrative and not
            financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b pb-2" style={{ borderColor: "var(--wg-rule)" }}>
      <dt
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--wg-dim)",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "17px",
          color: accent ? "var(--wg-mint)" : "var(--wg-cream)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
