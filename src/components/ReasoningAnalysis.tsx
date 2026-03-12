"use client";

import { REASONING_STATS, REASONING_MODEL_BREAKDOWN } from "@/lib/data";
import { MODEL_COLORS } from "@/lib/colors";

const MODEL_COLOR_MAP: Record<string, string> = {
  "GPT-5.4": MODEL_COLORS.gpt,
  "Grok-4": MODEL_COLORS.grok,
  "Claude Opus 4.6": MODEL_COLORS.claude,
  "Qwen3-235B": MODEL_COLORS.qwen,
};

export default function ReasoningAnalysis() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        What the AI Actually Says
      </h2>
      <p className="section-description mb-8">
        Every time an AI picks a token, it explains why. We read all {REASONING_STATS.totalResponses.toLocaleString()} explanations
        from Stage 3. The punchline: the AI almost never mentions the ticker name. It talks about
        market data: volume, holders, price action. But it still picks $ANT way more than $MOON.
        The bias is there, but the AI doesn&apos;t seem to know it.
      </p>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="mii-card p-5 text-center">
          <div className="text-3xl font-bold text-white">{REASONING_STATS.totalResponses.toLocaleString()}</div>
          <div className="text-sm text-white/70 mt-1">Explanations Read</div>
        </div>
        <div className="mii-card p-5 text-center">
          <div className="text-3xl font-bold text-white">{REASONING_STATS.avgReasoningLength}</div>
          <div className="text-sm text-white/70 mt-1">Avg Characters</div>
        </div>
        <div className="mii-card p-5 text-center">
          <div className="text-3xl font-bold text-[#e67e22]">{REASONING_STATS.nameEvaluative.pct}%</div>
          <div className="text-sm text-white/70 mt-1">Even Mention the Name</div>
        </div>
        <div className="mii-card p-5 text-center">
          <div className="text-3xl font-bold text-[#2ecc71]">{REASONING_STATS.marketReferences.pct}%</div>
          <div className="text-sm text-white/70 mt-1">Talk About Market Data</div>
        </div>
        <div className="mii-card p-5 text-center">
          <div className="text-3xl font-bold text-[#e74c3c]">{REASONING_STATS.contradictions.pct}%</div>
          <div className="text-sm text-white/70 mt-1">Contradict Themselves</div>
        </div>
      </div>

      {/* Per-model breakdown */}
      <div className="mii-card p-4 sm:p-5 mb-8 overflow-x-auto">
        <h3 className="text-xl font-bold text-white mb-4">Per-Model Breakdown</h3>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 560 }}>
          <thead>
            <tr>
              {["Model", "Traces", "Avg Length", "Name-Evaluative", "Market Refs", "Contradictions"].map((col) => (
                <th key={col} style={{ padding: "12px 16px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#aaa", borderBottom: "2px solid #2a2a2a" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REASONING_MODEL_BREAKDOWN.map((row) => (
              <tr key={row.model}>
                <td style={{ padding: "12px 16px", fontSize: 14, fontWeight: 700, color: MODEL_COLOR_MAP[row.model] || "#fff", borderBottom: "1px solid #222" }}>{row.model}</td>
                <td style={{ padding: "12px 16px", fontSize: 14, color: "#ccc", borderBottom: "1px solid #222" }}>{row.responses}</td>
                <td style={{ padding: "12px 16px", fontSize: 14, color: "#ccc", borderBottom: "1px solid #222" }}>{row.avgLen}</td>
                <td style={{ padding: "12px 16px", fontSize: 14, color: "#e67e22", fontWeight: 700, borderBottom: "1px solid #222" }}>{row.nameEval}</td>
                <td style={{ padding: "12px 16px", fontSize: 14, color: "#2ecc71", fontWeight: 700, borderBottom: "1px solid #222" }}>{row.market}</td>
                <td style={{ padding: "12px 16px", fontSize: 14, color: "#e74c3c", fontWeight: 700, borderBottom: "1px solid #222" }}>{row.contradictions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Example reasoning traces */}
      <div className="mii-card p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Real AI Explanations</h3>
        <p className="text-white text-base mb-6">
          Here&apos;s what the AI actually writes when it picks a token. Notice: it&apos;s all about
          market data. It never says &quot;I like the name ANT.&quot; But it still picks ANT way more often.
        </p>

        <div className="space-y-4">
          <div className="inference-log p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#8e44ad33", color: "#8e44ad" }}>Claude</span>
              <span className="text-xs text-white/60">chose $ANT over $MOON (same scenario)</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              &quot;Analyzing the portfolio context: $ANT shows strong early metrics with holder count at 234 and
              growing volume-to-mcap ratio of 0.27. The token is 2 hours old with healthy distribution...
              Recommending buy on $ANT.&quot;
            </p>
            <p className="text-white/50 text-xs mt-2 italic">
              No mention of &quot;ANT&quot; by name. Purely market-driven reasoning, yet ANT is selected 15.8% vs MOON at 8.6%
            </p>
          </div>

          <div className="inference-log p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#27ae6033", color: "#27ae60" }}>GPT-5.4</span>
              <span className="text-xs text-white/60">chose $SNAIL over $SIGMA (same scenario)</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              &quot;Looking at momentum indicators across all 8 tokens. $SNAIL has the best volume/mcap ratio
              and holder growth trajectory. The 3-hour age provides enough data for trend confirmation.
              Executing buy on $SNAIL.&quot;
            </p>
            <p className="text-white/50 text-xs mt-2 italic">
              Again, pure market analysis. But when the tickers rotate and SIGMA gets SNAIL&apos;s data,
              SIGMA still gets picked less.
            </p>
          </div>
        </div>
      </div>

      {/* Key finding */}
      <div className="mii-card p-8 border-l-4 border-[#e74c3c]">
        <h3 className="text-xl font-bold text-[#e74c3c] mb-3 uppercase tracking-wider">The Big Takeaway</h3>
        <p className="text-white text-xl leading-relaxed">
          98% of the time, the AI talks about market data. Only 18.7% consider the ticker name
          more deeply in their reasoning. And yet there&apos;s a <span className="text-white font-bold">7.2 percentage point gap</span> between
          the best and worst names, seeing the exact same data. The AI is biased, but it doesn&apos;t
          know it. It thinks it&apos;s making a purely rational, data-driven decision.
        </p>
      </div>
    </div>
  );
}
