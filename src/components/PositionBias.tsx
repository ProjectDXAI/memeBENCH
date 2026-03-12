"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine, LabelList,
} from "recharts";
import {
  POSITION_BIAS_STAGE2, POSITION_BIAS_STAGE3, POSITION_BIAS_STAGE2_MEAN, POSITION_BIAS_STAGE3_MEAN,
} from "@/lib/data";

const stage2Data = POSITION_BIAS_STAGE2.map((d) => ({ ...d, name: `Slot ${d.slot + 1}` }));
const stage3Data = POSITION_BIAS_STAGE3.map((d) => ({ ...d, name: `Slot ${d.slot + 1}` }));

const GREEN = "#2ecc71";
const RED = "#e74c3c";

interface BiasChartProps {
  title: string;
  data: typeof stage2Data;
  mean: number;
  firstLastRatio: string;
}

function BiasChart({ title, data, mean, firstLastRatio }: BiasChartProps) {
  return (
    <div className="mii-card p-5">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div style={{ width: "100%", height: 380 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 25, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tick={{ fill: "#ccc" }} />
            <YAxis
              stroke="rgba(255,255,255,0.3)" fontSize={12}
              label={{ value: "Buy Rate (%)", angle: -90, position: "insideLeft", fill: "#aaa", fontSize: 13, offset: 0 }}
              tick={{ fill: "#aaa" }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: 8, color: "#fff", fontSize: 13 }}
              formatter={(value: number) => [`${value}%`, "Buy Rate"]}
            />
            <ReferenceLine
              y={mean} stroke="#666" strokeDasharray="5 5"
              label={{ value: `mean=${mean}%`, fill: "#888", fontSize: 12, position: "right" }}
            />
            <Bar dataKey="buyRate" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.buyRate > mean ? GREEN : RED} />
              ))}
              <LabelList dataKey="buyRate" position="top" fill="#ccc" fontSize={12} fontWeight={600} formatter={(v: number) => `${v}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-sm font-bold text-[#4fc3f7]">First/Last ratio: {firstLastRatio}</p>
    </div>
  );
}

export default function PositionBias() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Position Bias Control
      </h2>
      <p className="section-description mb-8">
        Does it matter where a ticker appears in the list? Yes — Slot 3 gets picked ~40-49% of the time
        regardless of stage. This is why Latin square rotation is critical: by cycling every ticker
        through every position, we cancel out position effects and isolate pure name bias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BiasChart title="Stage 2 Position Bias (64 tickers)" data={stage2Data} mean={POSITION_BIAS_STAGE2_MEAN} firstLastRatio="0.50x" />
        <BiasChart title="Stage 3 Position Bias (16 tickers)" data={stage3Data} mean={POSITION_BIAS_STAGE3_MEAN} firstLastRatio="0.73x" />
      </div>
    </section>
  );
}
