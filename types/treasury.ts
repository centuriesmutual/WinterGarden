export type TokenMetrics = {
  priceUsd: number;
  change24hPct: number;
  tvlUsd: number;
  circulatingSupply: number;
  maxSupply: number;
  lastBurnUsd: number;
  updatedAt: string;
  contractAddress: string;
  chain: string;
  explorerUrl: string;
};

export type AllocationSlice = {
  label: string;
  pct: number;
  color: string;
  note?: string;
};

export type VestingSeries = {
  label: string;
  color: string;
  monthly: number[];
};

export type VestingSchedule = {
  totalMonths: number;
  series: VestingSeries[];
};

export type StakingTierId = "verse" | "chorus" | "bridge" | "encore";

export type StakingTier = {
  id: StakingTierId;
  name: string;
  lockupDays: number | null;
  baseApyPct: number;
  multiplier: number;
  minStake: number;
  epochDays: number;
};

export type GradeDimensionId =
  | "liquidity"
  | "revenue"
  | "holders"
  | "activity"
  | "governance"
  | "security";

export type GradeDimension = {
  id: GradeDimensionId;
  label: string;
  score: number;
  deltaLastQuarter: number;
  methodology: string;
  data: { metric: string; value: string }[];
};

export type NetworkGrade = {
  letter: "A+" | "A" | "B+" | "B" | "C+" | "C" | "D" | "F";
  composite: number;
  quarter: string;
  dimensions: GradeDimension[];
  history: { quarter: string; score: number }[];
};

export type WalletTxKind = "Stake" | "Unstake" | "Claim" | "Vote";

export type WalletTx = {
  id: string;
  kind: WalletTxKind;
  amount: number;
  at: string;
  hash: string;
};

export type WalletState = {
  connected: boolean;
  address: string | null;
  chainOk: boolean;
  balanceWgn: number;
  stakedByTier: Record<StakingTierId, number>;
  pendingRewards: number;
  votingPower: number;
  txns: WalletTx[];
};

export type TreasuryFlowNode = {
  id: string;
  label: string;
  valueUsd: number;
  emphasis?: "primary" | "accent" | "muted";
};

export type TreasuryFlowEdge = {
  from: string;
  to: string;
  pct: number;
  valueUsd: number;
};

export type TreasuryFlow = {
  epoch: string;
  nodes: TreasuryFlowNode[];
  edges: TreasuryFlowEdge[];
};

export type ProposalStatus = "active" | "passed" | "failed" | "executed";

export type Proposal = {
  id: string;
  title: string;
  status: ProposalStatus;
  forPct: number;
  againstPct: number;
  closedAt?: string;
};

export type GovernanceState = {
  activeCount: number;
  minProposalStake: number;
  recent: Proposal[];
  forumUrl: string;
};
