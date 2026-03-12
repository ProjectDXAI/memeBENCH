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
  ReferenceLine,
} from "recharts";

/**
 * Key tickers to highlight — a mix of top and bottom performers.
 * "marketReasoning" represents what % of the AI's explanation focuses on
 * market data (volume, holders, price) rather than the name. It's basically
 * the same for all tickers — proving the AI THINKS it's being rational.
 *
 * "buyRate" is what actually happens — wildly different outcomes.
 */
const COMPARISON_DATA = [
  { ticker: "ANT", buyRate: 15.8, marketReasoning: 98.1, color: "#2ecc71" },
  { ticker: "SNAIL", buyRate: 15.1, marketReasoning: 97.8, color: "#2ecc71" },
  { ticker: "MANTIS", buyRate: 14.8, marketReasoning: 98.3, color: "#2ecc71" },
  { ticker: "CAT", buyRate: 13.5, marketReasoning: 97.9, color: "#f39c12" },
  { ticker: "SIGMA", buyRate: 9.8, marketReasoning: 98.4, color: "#e74c3c" },
  { ticker: "DONGLE", buyRate: 9.3, marketReasoning: 97.9, color: "#e74c3c" },
  { ticker: "FOMO", buyRate: 8.6, marketReasoning: 98.2, color: "#e74c3c" },
  { ticker: "FUCK", buyRate: 8.6, marketReasoning: 97.6, color: "#e74c3c" },
];

const tooltipStyle = {
  backgroundColor: "#1a1a1a",
  border: "1px solid #333",
  borderRadius: "8px",
  color: "#fff",
  fontSize: 13,
};

export default function StatedVsRevealed() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        What They Say vs What They Do
      </h2>
      <p className="section-description mb-8">
        Every AI model claims it&apos;s making decisions based on market data. And when you read
        their explanations, they ARE talking about market data: volume, price, holders.
        But look at what actually happens when they have to pick a token to buy.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: What they say */}
        <div className="mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            &quot;Why I Chose This Token&quot;
          </h3>
          <p className="text-sm text-white/70 mb-4">
            % of reasoning that references market data (volume, holders, price action)
          </p>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={COMPARISON_DATA}
                layout="vertical"
                margin={{ top: 10, right: 55, left: 85, bottom: 10 }}
              >
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  type="number"
                  domain={[90, 100]}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tick={{ fill: "#aaa" }}
                  tickFormatter={(v: number) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="ticker"
                  width={80}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={14}
                  tick={{ fill: "#fff", fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number) => [`${value}%`, "Market-Data Reasoning"]}
                />
                <Bar dataKey="marketReasoning" radius={[0, 6, 6, 0]} fill="#555">
                  {COMPARISON_DATA.map((_, idx) => (
                    <Cell key={idx} fill="#4a4a4a" />
                  ))}
                  <LabelList
                    dataKey="marketReasoning"
                    position="right"
                    fill="#aaa"
                    fontSize={13}
                    fontWeight={600}
                    formatter={(v: number) => `${v}%`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 p-3 rounded-lg bg-[#0d0d0d] border border-[#222] text-center">
            <span className="text-white/70 text-sm">
              All roughly the same. The AI <span className="text-white font-bold">always claims</span> it&apos;s about the data
            </span>
          </div>
        </div>

        {/* Right: What they actually do */}
        <div className="mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            What They Actually Buy
          </h3>
          <p className="text-sm text-white/70 mb-4">
            How often each ticker is actually chosen (seeing the same market data)
          </p>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={COMPARISON_DATA}
                layout="vertical"
                margin={{ top: 10, right: 55, left: 85, bottom: 10 }}
              >
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  type="number"
                  domain={[0, 20]}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={12}
                  tick={{ fill: "#aaa" }}
                  tickFormatter={(v: number) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="ticker"
                  width={80}
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={14}
                  tick={{ fill: "#fff", fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number) => [`${value}%`, "Actual Buy Rate"]}
                />
                <ReferenceLine
                  x={12.5}
                  stroke="#444"
                  strokeDasharray="5 5"
                  label={{
                    value: "expected if rational (12.5%)",
                    fill: "#666",
                    fontSize: 11,
                    position: "top",
                  }}
                />
                <Bar dataKey="buyRate" radius={[0, 6, 6, 0]}>
                  {COMPARISON_DATA.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
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
          <div className="mt-3 p-3 rounded-lg bg-[#0d0d0d] border border-[#222] text-center">
            <span className="text-white font-bold text-sm">
              Wildly different, even though they all claim the same reasoning
            </span>
          </div>
        </div>
      </div>

      {/* Punchline */}
      <div className="mt-8 mii-card p-6 border-l-4 border-[#4fc3f7]">
        <p className="text-white text-lg leading-relaxed">
          <span className="text-white font-bold">This is the core finding.</span> On the left,
          every ticker looks the same. The AI always says &quot;I&apos;m choosing based on market data.&quot;
          On the right, the actual outcomes tell a completely different story. $ANT gets bought
          <span className="text-[#2ecc71] font-bold"> almost twice as often</span> as $FUCK, despite seeing the
          same data and giving the same type of reasoning. The AI has preferences it doesn&apos;t
          know about.
        </p>
      </div>
    </section>
  );
}
