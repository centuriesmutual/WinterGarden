import type {
  AllocationSlice,
  GovernanceState,
  NetworkGrade,
  StakingTier,
  TokenMetrics,
  TreasuryFlow,
  VestingSchedule,
  WalletState,
} from "@/types/treasury";

// TODO: replace with real contract address before launch.
export const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";

export const tokenMetrics: TokenMetrics = {
  priceUsd: 0.4821,
  change24hPct: 3.42,
  tvlUsd: 41_820_000,
  circulatingSupply: 218_400_000,
  maxSupply: 1_000_000_000,
  lastBurnUsd: 312_400,
  updatedAt: new Date().toISOString(),
  contractAddress: CONTRACT_ADDRESS,
  chain: "Base · ERC-20",
  explorerUrl: `https://basescan.org/token/${CONTRACT_ADDRESS}`,
};

export const allocations: AllocationSlice[] = [
  { label: "Community & Artists", pct: 40, color: "#1A3A2E" },
  { label: "Staking Rewards", pct: 20, color: "#2F6A4F" },
  { label: "Treasury Reserve", pct: 15, color: "#3E8E6E" },
  {
    label: "Team & Advisors",
    pct: 12,
    color: "#B87333",
    note: "4-year vest · 1-year cliff",
  },
  { label: "Liquidity Provision", pct: 8, color: "#C79A6A" },
  { label: "Ecosystem Grants", pct: 5, color: "#7FFFB4" },
];

function buildVesting(): VestingSchedule {
  const months = 48;
  const tot = 1_000_000_000;
  const comm = new Array<number>(months).fill(0);
  const stak = new Array<number>(months).fill(0);
  const treas = new Array<number>(months).fill(0);
  const team = new Array<number>(months).fill(0);
  const liq = new Array<number>(months).fill(0);
  const grant = new Array<number>(months).fill(0);
  for (let i = 0; i < months; i++) {
    comm[i] = (tot * 0.4) * Math.min(1, (i + 1) / months);
    stak[i] = (tot * 0.2) * Math.min(1, (i + 1) / months);
    treas[i] = (tot * 0.15) * Math.min(1, (i + 1) / 36);
    team[i] = i < 12 ? 0 : (tot * 0.12) * Math.min(1, (i - 11) / 36);
    liq[i] = (tot * 0.08) * (i === 0 ? 1 : 1);
    grant[i] = (tot * 0.05) * Math.min(1, (i + 1) / 24);
  }
  return {
    totalMonths: months,
    series: [
      { label: "Community & Artists", color: "#1A3A2E", monthly: comm },
      { label: "Staking Rewards", color: "#2F6A4F", monthly: stak },
      { label: "Treasury Reserve", color: "#3E8E6E", monthly: treas },
      { label: "Team & Advisors", color: "#B87333", monthly: team },
      { label: "Liquidity Provision", color: "#C79A6A", monthly: liq },
      { label: "Ecosystem Grants", color: "#7FFFB4", monthly: grant },
    ],
  };
}

export const vesting: VestingSchedule = buildVesting();

export const stakingTiers: StakingTier[] = [
  {
    id: "verse",
    name: "Verse",
    lockupDays: null,
    baseApyPct: 6,
    multiplier: 1.0,
    minStake: 100,
    epochDays: 7,
  },
  {
    id: "chorus",
    name: "Chorus",
    lockupDays: 90,
    baseApyPct: 11,
    multiplier: 1.25,
    minStake: 1_000,
    epochDays: 7,
  },
  {
    id: "bridge",
    name: "Bridge",
    lockupDays: 180,
    baseApyPct: 16,
    multiplier: 1.5,
    minStake: 10_000,
    epochDays: 7,
  },
  {
    id: "encore",
    name: "Encore",
    lockupDays: 365,
    baseApyPct: 24,
    multiplier: 2.0,
    minStake: 50_000,
    epochDays: 7,
  },
];

export const networkGrade: NetworkGrade = {
  letter: "A",
  composite: 91,
  quarter: "Q1 2026",
  dimensions: [
    {
      id: "liquidity",
      label: "Liquidity Depth",
      score: 88,
      deltaLastQuarter: +4,
      methodology:
        "Aggregated DEX liquidity, slippage at $100k notional, and time-weighted bid-ask spread across major venues.",
      data: [
        { metric: "DEX liquidity", value: "$12.4M" },
        { metric: "Slippage @ $100k", value: "0.46%" },
        { metric: "Avg. spread", value: "9 bps" },
      ],
    },
    {
      id: "revenue",
      label: "Revenue Sustainability",
      score: 93,
      deltaLastQuarter: +6,
      methodology:
        "Trailing platform revenue divided by token emissions, with a quality factor for fees accrued to the treasury.",
      data: [
        { metric: "Revenue / Emissions", value: "1.42x" },
        { metric: "Treasury accrual", value: "$4.8M / qtr" },
        { metric: "Burned (qtr)", value: "$312k" },
      ],
    },
    {
      id: "holders",
      label: "Holder Distribution",
      score: 86,
      deltaLastQuarter: +2,
      methodology:
        "Gini coefficient of the holder set, top-10 wallet concentration, and active holder growth.",
      data: [
        { metric: "Gini", value: "0.48" },
        { metric: "Top-10 share", value: "18.6%" },
        { metric: "Holder growth (qtr)", value: "+14.2%" },
      ],
    },
    {
      id: "activity",
      label: "Artist & Venue Activity",
      score: 92,
      deltaLastQuarter: +8,
      methodology:
        "Monthly active performers, new artist signings, and total scored performance volume routed through the platform.",
      data: [
        { metric: "MAP (monthly active performers)", value: "3,180" },
        { metric: "New signings (qtr)", value: "214" },
        { metric: "Performance volume", value: "81,240 sessions" },
      ],
    },
    {
      id: "governance",
      label: "Governance Participation",
      score: 84,
      deltaLastQuarter: -1,
      methodology:
        "Average proposal turnout, unique voter count, and delegation ratio across the quarter.",
      data: [
        { metric: "Avg. turnout", value: "37.4%" },
        { metric: "Unique voters", value: "9,412" },
        { metric: "Delegation ratio", value: "22%" },
      ],
    },
    {
      id: "security",
      label: "Security Posture",
      score: 96,
      deltaLastQuarter: +1,
      methodology:
        "Audit recency, open bug bounty status, and days since last material incident.",
      data: [
        // TODO: replace with real audit firm names before launch.
        { metric: "Last audit", value: "Audit firm — TBD · 42 days" },
        { metric: "Bounty", value: "Active · $500k max" },
        { metric: "Incidents (12mo)", value: "0" },
      ],
    },
  ],
  history: [
    { quarter: "Q2 24", score: 72 },
    { quarter: "Q3 24", score: 76 },
    { quarter: "Q4 24", score: 81 },
    { quarter: "Q1 25", score: 83 },
    { quarter: "Q2 25", score: 85 },
    { quarter: "Q3 25", score: 87 },
    { quarter: "Q4 25", score: 89 },
    { quarter: "Q1 26", score: 91 },
  ],
};

export const wallet: WalletState = {
  connected: false,
  address: null,
  chainOk: true,
  balanceWgn: 0,
  stakedByTier: { verse: 0, chorus: 0, bridge: 0, encore: 0 },
  pendingRewards: 0,
  votingPower: 0,
  txns: [],
};

export const mockConnectedWallet: WalletState = {
  connected: true,
  address: "0x7A31bF9c3b28F0c4e8A1bD2c9eC9a4aFb8E31f02",
  chainOk: true,
  balanceWgn: 18_420.52,
  stakedByTier: {
    verse: 250,
    chorus: 3_200,
    bridge: 12_500,
    encore: 0,
  },
  pendingRewards: 214.68,
  votingPower: 24_475,
  txns: [
    { id: "t1", kind: "Claim", amount: 204.1, at: "2026-04-18T11:02:00Z", hash: "0xabc1…f29" },
    { id: "t2", kind: "Stake", amount: 2_500, at: "2026-04-11T08:12:00Z", hash: "0xabc2…b18" },
    { id: "t3", kind: "Vote", amount: 0, at: "2026-04-09T14:30:00Z", hash: "0xabc3…712" },
    { id: "t4", kind: "Stake", amount: 10_000, at: "2026-03-28T09:15:00Z", hash: "0xabc4…a0e" },
    { id: "t5", kind: "Claim", amount: 188.3, at: "2026-03-18T11:02:00Z", hash: "0xabc5…331" },
    { id: "t6", kind: "Unstake", amount: 500, at: "2026-03-09T16:44:00Z", hash: "0xabc6…cc1" },
    { id: "t7", kind: "Vote", amount: 0, at: "2026-03-02T12:05:00Z", hash: "0xabc7…228" },
    { id: "t8", kind: "Stake", amount: 1_200, at: "2026-02-25T10:21:00Z", hash: "0xabc8…4ef" },
    { id: "t9", kind: "Claim", amount: 156.9, at: "2026-02-18T11:02:00Z", hash: "0xabc9…51a" },
    { id: "t10", kind: "Stake", amount: 3_000, at: "2026-02-08T07:00:00Z", hash: "0xabca…dc0" },
  ],
};

export const treasuryFlow: TreasuryFlow = {
  epoch: "Epoch 184",
  nodes: [
    { id: "revenue", label: "Performance Revenue", valueUsd: 2_840_000, emphasis: "primary" },
    { id: "fees", label: "Platform Fees (70%)", valueUsd: 1_988_000 },
    { id: "artists", label: "Artist Payouts (30%)", valueUsd: 852_000, emphasis: "muted" },
    { id: "reserve", label: "Treasury Reserve (40%)", valueUsd: 795_200 },
    { id: "stakers", label: "Staker Rewards (40%)", valueUsd: 795_200, emphasis: "accent" },
    { id: "burn", label: "Buyback & Burn (20%)", valueUsd: 397_600 },
  ],
  edges: [
    { from: "revenue", to: "fees", pct: 70, valueUsd: 1_988_000 },
    { from: "revenue", to: "artists", pct: 30, valueUsd: 852_000 },
    { from: "fees", to: "reserve", pct: 40, valueUsd: 795_200 },
    { from: "fees", to: "stakers", pct: 40, valueUsd: 795_200 },
    { from: "fees", to: "burn", pct: 20, valueUsd: 397_600 },
  ],
};

export const governance: GovernanceState = {
  activeCount: 3,
  minProposalStake: 25_000,
  forumUrl: "https://forum.wintergarden.app",
  recent: [
    {
      id: "WGN-IP-042",
      title: "Add Base Sepolia testnet parity for artist onboarding",
      status: "executed",
      forPct: 92.1,
      againstPct: 7.9,
      closedAt: "2026-04-12",
    },
    {
      id: "WGN-IP-041",
      title: "Expand Ecosystem Grants to include venue integrations",
      status: "passed",
      forPct: 74.5,
      againstPct: 25.5,
      closedAt: "2026-04-03",
    },
    {
      id: "WGN-IP-040",
      title: "Cap team unlocks at 1% supply per quarter",
      status: "failed",
      forPct: 44.2,
      againstPct: 55.8,
      closedAt: "2026-03-21",
    },
  ],
};
