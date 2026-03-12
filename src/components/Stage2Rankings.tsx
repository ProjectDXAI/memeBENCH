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
  ReferenceLine,
  LabelList,
} from "recharts";
import { STAGE2_FINALISTS } from "@/lib/data";

const chartData = STAGE2_FINALISTS.map((d) => ({
  ...d,
  label: d.ticker,
}));

export default function Stage2Rankings() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Stage 2: The Fair Retest
      </h2>
      <p className="section-description mb-6">
        The top 64 names from Stage 1 get retested, but now we rotate which name gets which
        market data. So if $ANT had the best stats in round 1, $FUCK gets those same stats in
        round 2. After 960 tests per ticker, if a name still wins, it&apos;s the name doing the work.
      </p>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm text-white mb-4">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: "#2ecc71" }} />
          Animal ticker
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: "#e74c3c" }} />
          Non-animal ticker
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-0.5 w-6 border-t-2 border-dashed border-[#999]" />
          Mean (11.8%)
        </span>
      </div>

      <div className="mii-card p-3 sm:p-4 max-h-[800px] overflow-y-auto overflow-x-auto">
        <div style={{ width: "100%", minWidth: 360, height: 2000 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 45, left: 5, bottom: 20 }}
            >
              <CartesianGrid stroke="rgba(255,255,255,0.06)" horizontal={false} />
              <XAxis
                type="number"
                stroke="rgba(255,255,255,0.3)"
                fontSize={12}
                tick={{ fill: "#aaa" }}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={70}
                stroke="rgba(255,255,255,0.3)"
                fontSize={13}
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
              <ReferenceLine
                x={11.8}
                stroke="#666"
                strokeDasharray="5 5"
                label={{ value: "mean = 11.8%", fill: "#888", fontSize: 12, position: "top" }}
              />
              <Bar dataKey="buyRate" radius={[0, 6, 6, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.isAnimal ? "#2ecc71" : "#e74c3c"} />
                ))}
                <LabelList
                  dataKey="buyRate"
                  position="right"
                  fill="#ccc"
                  fontSize={11}
                  fontWeight={600}
                  formatter={(v: number) => `${v}%`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 mii-card p-5">
        <p className="text-white text-lg leading-relaxed">
          <span className="text-white font-bold">Look at the colors:</span> Green bars are animals,
          red bars are everything else. The animals cluster at the top, non-animals at the bottom.
          Even when we give $FUCK the exact same pumping market data that $ANT had, the AI
          <span className="text-[#4fc3f7] font-bold"> still picks animals ~2x more often</span>.
        </p>
      </div>
    </section>
  );
}
