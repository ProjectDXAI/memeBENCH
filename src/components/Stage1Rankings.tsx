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
import { STAGE1_TOP40, STAGE1_BOTTOM40 } from "@/lib/data";

const GREEN_PALETTE = ["#2ecc71", "#27ae60", "#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#1abc9c", "#16a085", "#2ecc71", "#27ae60"];
const RED_PALETTE = ["#e74c3c", "#c0392b", "#d35400", "#e67e22", "#e74c3c", "#c0392b", "#d35400", "#e67e22", "#e74c3c", "#c0392b"];

const tooltipStyle = {
  backgroundColor: "#1a1a1a",
  border: "1px solid #333",
  borderRadius: "8px",
  color: "#fff",
  fontSize: 13,
};

function Panel({
  title,
  subtitle,
  data,
  palette,
}: {
  title: string;
  subtitle: string;
  data: { ticker: string; buyRate: number }[];
  palette: string[];
}) {
  return (
    <div className="mii-card p-5">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-white/70 mb-4">{subtitle}</p>
      <ResponsiveContainer width="100%" height={650}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 50, bottom: 0, left: 0 }}
        >
          <CartesianGrid stroke="rgba(255,255,255,0.06)" horizontal={false} />
          <XAxis
            type="number"
            stroke="rgba(255,255,255,0.3)"
            tick={{ fill: "#aaa", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="ticker"
            width={100}
            stroke="rgba(255,255,255,0.3)"
            tick={{ fill: "#fff", fontSize: 13, fontWeight: 700 }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            formatter={(value: number) => [`${value}%`, "Buy Rate"]}
          />
          <Bar dataKey="buyRate" radius={[0, 6, 6, 0]}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={palette[idx % palette.length]} />
            ))}
            <LabelList
              dataKey="buyRate"
              position="right"
              fill="#ccc"
              fontSize={12}
              fontWeight={600}
              formatter={(v: number) => `${v}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Stage1Rankings() {
  const top20 = STAGE1_TOP40.slice(0, 20);
  const bottom20 = STAGE1_BOTTOM40.slice(-20);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Stage 1: Initial Screening
      </h2>
      <p className="section-description mb-8">
        We showed all 383 ticker names to the AI models. In each test, the AI sees 8 tokens
        with real market data and has to pick one to buy. The &quot;buy rate&quot; is simply how often
        each ticker got picked — higher means the AI likes that name more.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel
          title="Top 20 — Most Selected"
          subtitle="These tickers were bought most often across all models"
          data={top20}
          palette={GREEN_PALETTE}
        />
        <Panel
          title="Bottom 20 — Least Selected"
          subtitle="These tickers were almost never chosen, even with identical data"
          data={bottom20}
          palette={RED_PALETTE}
        />
      </div>

      <div className="mt-6 mii-card p-5">
        <p className="text-white text-lg leading-relaxed">
          <span className="text-white font-bold">See the pattern?</span> The winners are almost
          all animals — NARWHAL, OTTER, SPIDER, CRICKET. The losers are abstract words, objects, and
          profanity — FUCK, SIGMA, LIQUIDATE, TOWEL. There&apos;s a
          <span className="text-[#4fc3f7] font-bold"> 45 percentage point gap</span> between
          #1 (NARWHAL, 45%) and the bottom (0%). The AI really does judge by name.
        </p>
      </div>
    </div>
  );
}
