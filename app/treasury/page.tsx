import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, FileText, Vote } from "lucide-react";
import AllocationDonut from "@/components/treasury/AllocationDonut";
import VestingArea from "@/components/treasury/VestingArea";
import GradeRadar from "@/components/treasury/GradeRadar";
import GradeHistory from "@/components/treasury/GradeHistory";
import TreasuryFlowDiagram from "@/components/treasury/TreasuryFlowDiagram";
import StakingCalculator from "@/components/treasury/StakingCalculator";
import WalletPanel from "@/components/treasury/WalletPanel";
import CountUp from "@/components/treasury/CountUp";
import CopyAddress from "@/components/treasury/CopyAddress";
import {
  allocations,
  governance,
  networkGrade,
  stakingTiers,
  tokenMetrics,
  treasuryFlow,
  vesting,
} from "@/lib/treasury/mock";

export const metadata: Metadata = {
  title: "Treasury — Wintergarden",
  description:
    "Wintergarden's treasury: tokenomics, staking, wallet, and the quarterly network grading system. Community-owned, transparently audited, on-chain.",
  openGraph: {
    title: "Wintergarden Treasury",
    description:
      "Tokenomics, staking mechanics, wallet, and quarterly network grades.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wintergarden",
  parentOrganization: { "@type": "Organization", name: "Centuries Mutual" },
  url: "https://wintergarden.app",
};

export default function TreasuryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <TreasuryHero />
      <Tokenomics />
      <Staking />
      <WalletSection />
      <Grading />
      <Flows />
      <Governance />
      <Disclaimer />
    </>
  );
}

// ---------------------------------------------------------------------------
// Shared shell helpers
// ---------------------------------------------------------------------------

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative w-full border-b"
      style={{ borderColor: "var(--wg-rule)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 py-20 md:px-8 md:py-28">
        <header className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--wg-dim)",
              }}
            >
              {eyebrow}
            </p>
            <h2
              className="mt-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 5vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "var(--wg-cream)",
              }}
            >
              {title}
            </h2>
          </div>
          {intro && (
            <p
              className="max-w-lg text-sm md:text-base"
              style={{ color: "var(--wg-dim)", lineHeight: 1.7 }}
            >
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

function TreasuryHero() {
  const updated = new Date(tokenMetrics.updatedAt);
  const updatedStr = updated.toUTCString().replace("GMT", "UTC");
  const gradeLetter = networkGrade.letter;
  const composite = networkGrade.composite;

  return (
    <section
      id="treasury-hero"
      className="relative w-full border-b"
      style={{ borderColor: "var(--wg-rule)" }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 py-20 md:grid-cols-3 md:gap-6 md:px-8 md:py-28">
        <HeroStat
          label="Total Value Locked"
          value={
            <CountUp value={tokenMetrics.tvlUsd} prefix="$" decimals={0} />
          }
          sub={`${tokenMetrics.chain}`}
        />
        <HeroStat
          label="WGN Price"
          value={
            <>
              <CountUp value={tokenMetrics.priceUsd} prefix="$" decimals={4} />
            </>
          }
          sub={
            <span
              className="inline-flex items-center gap-1"
              style={{
                color:
                  tokenMetrics.change24hPct >= 0
                    ? "var(--wg-mint)"
                    : "var(--wg-copper)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tokenMetrics.change24hPct >= 0 ? (
                <ArrowUpRight size={14} />
              ) : (
                <ArrowDownRight size={14} />
              )}
              {tokenMetrics.change24hPct >= 0 ? "+" : ""}
              {tokenMetrics.change24hPct.toFixed(2)}% · 24h
            </span>
          }
        />
        <HeroStat
          label="Network Grade"
          value={
            <span className="flex items-baseline gap-3">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 6vw, 72px)",
                  color: "var(--wg-mint)",
                  lineHeight: 1,
                }}
              >
                {gradeLetter}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  color: "var(--wg-cream)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <CountUp value={composite} />
                /100
              </span>
            </span>
          }
          sub={`${networkGrade.quarter} · live composite`}
        />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-20 md:px-8 md:pb-28">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 8vw, 128px)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            color: "var(--wg-cream)",
            maxWidth: "14ch",
          }}
        >
          The <em className="not-italic" style={{ color: "var(--wg-mint)", fontStyle: "italic" }}>Treasury</em>.
        </h1>
        <p
          className="mt-6 max-w-2xl"
          style={{
            color: "var(--wg-dim)",
            fontSize: "clamp(15px, 1.2vw, 18px)",
            lineHeight: 1.7,
          }}
        >
          Wintergarden&rsquo;s treasury is community-owned, transparently audited, and backed by
          on-chain performance revenue. Every dollar that flows through the conservatory is
          observable, graded, and governed by the people it serves.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--wg-dim)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: "var(--wg-mint)" }}
              aria-hidden
            />
            Live · updated {updatedStr}
          </span>
          <CopyAddress
            address={tokenMetrics.contractAddress}
            explorerUrl={tokenMetrics.explorerUrl}
          />
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col gap-2 border-l pl-6"
      style={{ borderColor: "var(--wg-rule)" }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--wg-dim)",
        }}
      >
        {label}
      </p>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(34px, 4vw, 52px)",
          lineHeight: 1.05,
          color: "var(--wg-cream)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      <p className="text-sm" style={{ color: "var(--wg-dim)" }}>
        {sub}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Tokenomics
// ---------------------------------------------------------------------------

function Tokenomics() {
  const supplyPct = (tokenMetrics.circulatingSupply / tokenMetrics.maxSupply) * 100;

  const utility = [
    { title: "Governance", body: "Vote on proposals and treasury policy." },
    { title: "Staking Rewards", body: "Earn protocol revenue by locking WGN." },
    { title: "Performance Access", body: "Unlock scored sessions and venues." },
    { title: "Fee Discounts", body: "Reduced platform fees for holders and stakers." },
  ];

  return (
    <Section
      id="tokenomics"
      eyebrow="01 · Tokenomics"
      title="Supply, distribution, and unlocks."
      intro="WGN is the unit of account for the Wintergarden economy. Fixed max supply of one billion, deflationary by design, with quarterly burns tied to platform revenue."
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <KpiCard label="Ticker" value="WGN" sub="Base · ERC-20" />
        <KpiCard
          label="Max Supply"
          value={tokenMetrics.maxSupply.toLocaleString()}
          sub="fixed"
        />
        <KpiCard
          label="Circulating"
          value={tokenMetrics.circulatingSupply.toLocaleString()}
          sub={`${supplyPct.toFixed(1)}% of max`}
        />
        <KpiCard
          label="Last Burn"
          value={`$${tokenMetrics.lastBurnUsd.toLocaleString()}`}
          sub="previous quarter"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <AllocationDonut slices={allocations} />
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--wg-dim)",
            }}
          >
            Vesting · 48 months · stacked unlocks
          </p>
          <div
            className="mt-3 rounded-[22px] border p-4"
            style={{ borderColor: "var(--wg-rule)" }}
          >
            <VestingArea schedule={vesting} />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {utility.map((u) => (
          <div
            key={u.title}
            className="rounded-[22px] border p-6"
            style={{ borderColor: "var(--wg-rule)" }}
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
              Utility
            </p>
            <h3
              className="mt-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                color: "var(--wg-cream)",
              }}
            >
              {u.title}
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--wg-dim)", lineHeight: 1.6 }}>
              {u.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function KpiCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div
      className="rounded-[18px] border p-4"
      style={{ borderColor: "var(--wg-rule)" }}
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
        {label}
      </p>
      <p
        className="mt-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "24px",
          color: "var(--wg-cream)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </p>
      <p className="text-xs" style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)" }}>
        {sub}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Staking
// ---------------------------------------------------------------------------

function Staking() {
  return (
    <Section
      id="staking"
      eyebrow="02 · Staking"
      title="Four tiers. One cadence."
      intro="Stake WGN to earn a share of platform revenue, distributed every 7-day epoch. Longer lockups carry higher APY and larger governance weight."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stakingTiers.map((t) => (
          <div
            key={t.id}
            className="rounded-[22px] border p-6"
            style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.5)" }}
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
              {t.name}
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "38px",
                color: "var(--wg-cream)",
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {t.baseApyPct}% <span style={{ fontSize: "16px", color: "var(--wg-dim)" }}>APY</span>
            </p>
            <dl className="mt-5 flex flex-col gap-2">
              <RowBare label="Lockup" value={t.lockupDays ? `${t.lockupDays} days` : "Flexible"} />
              <RowBare label="Multiplier" value={`${t.multiplier}×`} />
              <RowBare label="Min stake" value={`${t.minStake.toLocaleString()} WGN`} />
              <RowBare label="Epoch" value={`${t.epochDays}d`} />
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <StakingCalculator />
      </div>
    </Section>
  );
}

function RowBare({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--wg-dim)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "14px",
          color: "var(--wg-cream)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Wallet
// ---------------------------------------------------------------------------

function WalletSection() {
  return (
    <Section
      id="wallet"
      eyebrow="03 · Wallet"
      title="Your position, on chain."
      intro="Connect a wallet to view your WGN balance, staked positions, pending rewards, voting power, and the full transaction history of your participation."
    >
      <WalletPanel />
    </Section>
  );
}

// ---------------------------------------------------------------------------
// 5. Grading
// ---------------------------------------------------------------------------

function Grading() {
  return (
    <Section
      id="grading"
      eyebrow="04 · Network Grading"
      title="A quarterly appraisal."
      intro="Every quarter, Wintergarden grades its own network across six dimensions. The composite becomes a letter grade — a public record of where the network actually stands."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {networkGrade.dimensions.map((d) => (
          <div
            key={d.id}
            className="flex flex-col rounded-[22px] border p-6"
            style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.45)" }}
          >
            <div className="flex items-center justify-between">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--wg-dim)",
                }}
              >
                {d.label}
              </p>
              <span
                className="inline-flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color:
                    d.deltaLastQuarter >= 0 ? "var(--wg-mint)" : "var(--wg-copper)",
                }}
                aria-label={`Change vs last quarter: ${d.deltaLastQuarter}`}
              >
                {d.deltaLastQuarter >= 0 ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}
                {d.deltaLastQuarter >= 0 ? "+" : ""}
                {d.deltaLastQuarter}
              </span>
            </div>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "44px",
                color: "var(--wg-cream)",
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {d.score}
              <span style={{ fontSize: "16px", color: "var(--wg-dim)" }}>/100</span>
            </p>
            <p
              className="mt-3 text-sm"
              style={{ color: "var(--wg-dim)", lineHeight: 1.6 }}
            >
              {d.methodology}
            </p>
            <dl className="mt-4 flex flex-col gap-1">
              {d.data.map((row) => (
                <div
                  key={row.metric}
                  className="flex items-baseline justify-between border-t pt-2"
                  style={{ borderColor: "var(--wg-rule)" }}
                >
                  <dt
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--wg-dim)",
                    }}
                  >
                    {row.metric}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      color: "var(--wg-cream)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--wg-dim)",
            }}
          >
            Composite · {networkGrade.quarter}
          </p>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(120px, 14vw, 180px)",
              color: "var(--wg-mint)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            {networkGrade.letter}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "32px",
              color: "var(--wg-cream)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {networkGrade.composite}/100
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--wg-dim)", lineHeight: 1.6 }}>
            A+ ≥ 95 · A ≥ 90 · B+ ≥ 85 · B ≥ 80 · C+ ≥ 75 · C ≥ 70 · D ≥ 60 · F &lt; 60.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: "var(--wg-rule)", color: "var(--wg-cream)" }}
          >
            <FileText size={13} />
            Methodology · quarterly report (PDF)
          </a>
        </div>
        <div className="lg:col-span-3">
          <div className="hidden md:block">
            <GradeRadar dimensions={networkGrade.dimensions} />
          </div>
          <ul className="md:hidden flex flex-col gap-2">
            {networkGrade.dimensions.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm"
                style={{ borderColor: "var(--wg-rule)", color: "var(--wg-cream)" }}
              >
                <span>{d.label}</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {d.score}
                </span>
              </li>
            ))}
          </ul>
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
              History · last 8 quarters
            </p>
            <div
              className="mt-3 rounded-[18px] border p-3"
              style={{ borderColor: "var(--wg-rule)" }}
            >
              <GradeHistory history={networkGrade.history} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// 6. Treasury flows
// ---------------------------------------------------------------------------

function Flows() {
  return (
    <Section
      id="flows"
      eyebrow="05 · Treasury Flows"
      title="Where the money moves."
      intro={`A live snapshot of revenue flows for ${treasuryFlow.epoch}. Every routing is on-chain and verifiable.`}
    >
      <div
        className="rounded-[22px] border p-4 md:p-6"
        style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.45)" }}
      >
        <TreasuryFlowDiagram flow={treasuryFlow} />
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// 7. Governance
// ---------------------------------------------------------------------------

function Governance() {
  return (
    <Section
      id="governance"
      eyebrow="06 · Governance"
      title="Decisions in the open."
      intro="Proposals are executed on-chain. Anyone with sufficient staked WGN can author one; anyone with a staked balance can vote."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <KpiCard
          label="Active Proposals"
          value={String(governance.activeCount)}
          sub="currently in voting"
        />
        <KpiCard
          label="Min Stake to Propose"
          value={`${governance.minProposalStake.toLocaleString()} WGN`}
          sub="author threshold"
        />
        <KpiCard
          label="Forum"
          value="forum.wintergarden.app"
          sub="open discussion"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {governance.recent.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-[22px] border p-6"
            style={{ borderColor: "var(--wg-rule)", background: "rgba(15,31,26,0.45)" }}
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
              {p.id} · {p.status}
            </p>
            <h3
              className="mt-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                color: "var(--wg-cream)",
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h3>
            <div
              aria-hidden
              className="mt-4 h-1.5 w-full overflow-hidden rounded-full"
              style={{ background: "rgba(127,255,180,0.08)" }}
            >
              <div
                className="h-full"
                style={{
                  width: `${p.forPct}%`,
                  background: p.status === "failed" ? "var(--wg-copper)" : "var(--wg-mint)",
                }}
              />
            </div>
            <p
              className="mt-2 text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--wg-dim)" }}
            >
              For {p.forPct.toFixed(1)}% · Against {p.againstPct.toFixed(1)}%
              {p.closedAt && ` · closed ${p.closedAt}`}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={governance.forumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
          style={{ borderColor: "var(--wg-rule)", color: "var(--wg-cream)" }}
        >
          Open forum
        </a>
        <a
          href="#wallet"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          style={{
            background: "var(--wg-mint)",
            color: "var(--wg-ink)",
            fontWeight: 600,
          }}
        >
          <Vote size={14} /> Create a proposal
        </a>
        <span
          className="text-xs"
          style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)" }}
        >
          Requires {governance.minProposalStake.toLocaleString()} WGN staked.
        </span>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Legal disclaimer
// ---------------------------------------------------------------------------

function Disclaimer() {
  return (
    <section
      className="w-full"
      style={{ background: "var(--wg-ink-2)", borderTop: "1px solid var(--wg-rule)" }}
    >
      <div
        className="mx-auto w-full max-w-[1280px] px-4 py-10 text-xs md:px-8"
        style={{ color: "var(--wg-dim)", fontFamily: "var(--font-mono)", lineHeight: 1.7 }}
      >
        {/* TODO: replace with reviewed legal copy before launch. */}
        Wintergarden is a product of Centuries Mutual. All figures on this page are illustrative
        and sourced from on-chain data where available. Nothing presented here constitutes an
        offer, solicitation, or investment advice. Token utility, emissions, and governance
        parameters are subject to change by on-chain vote.
      </div>
    </section>
  );
}
