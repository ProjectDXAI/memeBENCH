"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { STAGE3_FINAL } from "@/lib/data";

export default function Stage3FinalRankings() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Stage 3: The Final Answer
      </h2>
      <p className="section-description mb-8">
        The 8 most-loved and 8 most-avoided names go head-to-head with even more data —
        1,600 tests per ticker. After all that, here are the definitive winners and losers.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Panel: Buy Rate Rankings */}
        <div className="mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            Buy Rate — How Often Each Ticker is Chosen
          </h3>
          <p className="text-sm text-white/70 mb-4">
            Percentage of scenarios where the model chose to buy this ticker
          </p>
          <div style={{ width: "100%", height: 560 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={STAGE3_FINAL}
                layout="vertical"
                margin={{ top: 10, right: 55, left: 65, bottom: 10 }}
              >
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  type="number"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tick={{ fill: "#aaa" }}
                  label={{
                    value: "Buy Rate (%)",
                    position: "insideBottom",
                    offset: -5,
                    fill: "#aaa",
                    fontSize: 13,
                  }}
                />
                <YAxis
                  type="category"
                  dataKey="ticker"
                  width={60}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={14}
                  tick={{ fill: "#fff", fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 13,
                  }}
                  formatter={(value: number) => [`${value}%`, "Buy Rate"]}
                />
                <Bar dataKey="buyRate" radius={[0, 6, 6, 0]}>
                  {STAGE3_FINAL.map((entry, index) => (
                    <Cell key={`br-${index}`} fill={entry.color} />
                  ))}
                  <LabelList
                    dataKey="buyRate"
                    position="right"
                    fill="#ccc"
                    fontSize={13}
                    fontWeight={700}
                    formatter={(v: number) => `${v}%`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-center">
            <span className="text-[#f39c12] font-bold text-sm">
              7.2pp spread: ANT (15.8%) vs FUCK (8.6%)
            </span>
          </div>
        </div>

        {/* Right Panel: Allocation */}
        <div className="mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            Allocation — How Much Capital is Committed
          </h3>
          <p className="text-sm text-white/70 mb-4">
            When a model does buy, what % of the portfolio does it allocate?
          </p>
          <div style={{ width: "100%", height: 560 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={STAGE3_FINAL}
                layout="vertical"
                margin={{ top: 10, right: 50, left: 65, bottom: 10 }}
              >
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  type="number"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tick={{ fill: "#aaa" }}
                  label={{
                    value: "Allocation (%)",
                    position: "insideBottom",
                    offset: -5,
                    fill: "#aaa",
                    fontSize: 13,
                  }}
                />
                <YAxis
                  type="category"
                  dataKey="ticker"
                  width={60}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={14}
                  tick={{ fill: "#fff", fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 13,
                  }}
                  formatter={(value: number) => [`${value}%`, "Allocation"]}
                />
                <Bar dataKey="allocation" radius={[0, 6, 6, 0]}>
                  {STAGE3_FINAL.map((entry, index) => (
                    <Cell key={`alloc-${index}`} fill={entry.color} />
                  ))}
                  <LabelList
                    dataKey="allocation"
                    position="right"
                    fill="#ccc"
                    fontSize={13}
                    fontWeight={700}
                    formatter={(v: number) => `${v}%`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-center">
            <span className="text-white/70 text-sm">
              Allocation is relatively flat (~26-29%). Bias is in <span className="text-white font-bold">selection</span>, not sizing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
