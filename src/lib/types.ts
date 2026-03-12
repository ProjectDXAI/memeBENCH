export interface TickerResult {
  ticker: string;
  buyRate: number;
  category?: string;
  isAnimal?: boolean;
}

export interface CategoryResult {
  category: string;
  count: number;
  mean: number;
  std: number;
}

export interface Stage3Ticker {
  ticker: string;
  buyRate: number;
  allocation: number;
  category: string;
  isAnimal: boolean;
  color: string;
}

export interface ModelHeatmapEntry {
  ticker: string;
  gpt: number;
  grok: number;
  claude: number;
  qwen: number;
}

export interface ModelRanking {
  model: string;
  modelLabel: string;
  color: string;
  spread: string;
  tickers: { ticker: string; buyRate: number; color: string }[];
}

export interface SpearmanEntry {
  model1: string;
  model2: string;
  correlation: number;
}

export interface PositionBiasEntry {
  slot: number;
  buyRate: number;
}

export interface ReasoningModelBreakdown {
  model: string;
  responses: number;
  avgLen: number;
  nameEval: string;
  market: string;
  contradictions: string;
}
