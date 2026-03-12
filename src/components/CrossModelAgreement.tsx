"use client";

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { SPEARMAN_MATRIX, MODEL_RANKINGS } from "@/lib/data";
import { MODEL_COLORS, MODEL_LABELS } from "@/lib/colors";

function corrColor(value: number): string {
  const t = (value - 0.5) / 0.5;
  const clamped = Math.max(0, Math.min(1, t));
  const r = Math.round(0xe8 + (0xc0 - 0xe8) * clamped);
  const g = Math.round(0xa0 + (0x39 - 0xa0) * clamped);
  const b = Math.round(0xa0 + (0x2b - 0xa0) * clamped);
  return `rgb(${r},${g},${b})`;
}

const MODEL_KEYS = ["gpt", "grok", "claude", "qwen"] as const;
type ScatterPoint = { ticker: string; rank: number };
const scatterByModel: Record<string, ScatterPoint[]> = {};

for (const mr of MODEL_RANKINGS) {
  const sorted = [...mr.tickers].sort((a, b) => b.buyRate - a.buyRate);
  scatterByModel[mr.model] = sorted.map((t, i) => ({ ticker: t.ticker, rank: i + 1 }));
}

const allTickers = [...MODEL_RANKINGS[0].tickers].map((t) => t.ticker).sort();

function buildModelData(modelKey: string) {
  const points = scatterByModel[modelKey];
  return points.map((p) => ({ x: allTickers.indexOf(p.ticker), y: p.rank, ticker: p.ticker }));
}

const SHORT_LABELS = ["GPT-5.4", "Grok-4", "Claude", "Qwen"];

export default function CrossModelAgreement() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        How Much Do the Models Agree?
      </h2>
      <p className="section-description mb-8">
        We compared each model&apos;s rankings to see if they agree on which names are best and worst.
        The numbers below range from 0 (totally different rankings) to 1 (identical rankings).
        Most pairs score 0.5-0.7, meaning they broadly agree. Claude and Qwen agree the most (0.73).
        Grok marches to its own drum (0.51-0.65 with others).
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-4">Agreement Score (0 = disagree, 1 = agree)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-3" />
                  {SHORT_LABELS.map((label) => (
                    <th key={label} className="p-3 text-center text-sm font-bold text-white">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEARMAN_MATRIX.correlations.map((row, i) => (
                  <tr key={SPEARMAN_MATRIX.models[i]}>
                    <td className="p-3 text-right text-sm font-bold text-white">{SHORT_LABELS[i]}</td>
                    {row.map((val, j) => (
                      <td
                        key={j}
                        className="p-3 text-center font-mono text-sm font-bold text-white"
                        style={{ backgroundColor: corrColor(val), borderRadius: 6 }}
                      >
                        {val.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mii-card p-4 sm:p-5 overflow-x-auto">
          <h3 className="text-xl font-bold text-white mb-4">Where Each Model Ranks Each Ticker</h3>
          <div style={{ width: "100%", minWidth: 480, height: 440 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 20, left: 10, bottom: 50 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis
                  type="number" dataKey="x"
                  domain={[-0.5, allTickers.length - 0.5]}
                  ticks={allTickers.map((_, i) => i)}
                  tickFormatter={(i: number) => allTickers[i] ?? ""}
                  stroke="rgba(255,255,255,0.3)" fontSize={10}
                  angle={-45} textAnchor="end" interval={0}
                  tick={{ fill: "#ccc" }}
                />
                <YAxis
                  type="number" dataKey="y"
                  domain={[0.5, 16.5]} reversed
                  stroke="rgba(255,255,255,0.3)" fontSize={12}
                  label={{ value: "Rank (1 = most bought)", angle: -90, position: "insideLeft", fill: "#aaa", fontSize: 12, offset: 0 }}
                  ticks={[1, 4, 8, 12, 16]}
                  tick={{ fill: "#ccc" }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: 8, color: "#fff", fontSize: 13 }}
                  formatter={(value: number, name: string) => {
                    if (name === "y") return [`#${value}`, "Rank"];
                    return [value, name];
                  }}
                  labelFormatter={(label: number) => allTickers[label] ?? `Index ${label}`}
                />
                <Legend wrapperStyle={{ fontSize: 13, color: "#ccc" }} />
                {MODEL_KEYS.map((key) => (
                  <Scatter key={key} name={MODEL_LABELS[key]} data={buildModelData(key)} fill={MODEL_COLORS[key]} />
                ))}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
