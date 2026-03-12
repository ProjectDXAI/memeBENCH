"use client";

import { MODEL_RANKINGS } from "@/lib/data";
import { MODEL_COLORS } from "@/lib/colors";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList,
} from "recharts";

export default function ModelRankings() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Each Model&apos;s Favorites
      </h2>
      <p className="section-description mb-8">
        Here&apos;s each AI model&apos;s personal ranking of the 16 finalists. The order varies a bit, but
        the pattern is always the same: animals at the top, non-animals at the bottom. GPT-5.4
        is the most biased (13.5pp spread between its #1 and #16), Grok-4 is the most even-handed (6.5pp).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MODEL_RANKINGS.map((ranking) => (
          <div key={ranking.model} className="mii-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold" style={{ color: MODEL_COLORS[ranking.model] ?? ranking.color }}>
                {ranking.modelLabel}
              </h4>
              <span className="text-sm text-white/70">
                Spread: <span className="font-bold text-white">{ranking.spread}</span>
              </span>
            </div>

            <ResponsiveContainer width="100%" height={440}>
              <BarChart
                layout="vertical"
                data={ranking.tickers}
                margin={{ top: 0, right: 50, bottom: 0, left: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                <XAxis type="number" stroke="rgba(255,255,255,0.3)" fontSize={11} tickLine={false} domain={[0, "auto"]} tick={{ fill: "#aaa" }} />
                <YAxis type="category" dataKey="ticker" stroke="rgba(255,255,255,0.3)" fontSize={13} tickLine={false} width={80} tick={{ fill: "#fff", fontWeight: 700 }} />
                <Tooltip
                  contentStyle={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 12, color: "#fff", fontSize: 13 }}
                  formatter={(value: number) => [`${value}%`, "Buy Rate"]}
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                />
                <Bar dataKey="buyRate" radius={[0, 6, 6, 0]}>
                  {ranking.tickers.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                  <LabelList
                    dataKey="buyRate"
                    position="right"
                    formatter={(value: number) => `${value}%`}
                    style={{ fill: "#ccc", fontSize: 12, fontWeight: 700 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
