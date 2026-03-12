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
  ErrorBar,
  LabelList,
} from "recharts";
import { STAGE1_CATEGORIES, ANIMAL_VS_NONANIMAL } from "@/lib/data";
import { CATEGORY_COLORS } from "@/lib/colors";

const tooltipStyle = {
  backgroundColor: "#1a1a1a",
  border: "1px solid #333",
  borderRadius: "8px",
  color: "#fff",
  fontSize: 13,
};

export default function Stage1Categories() {
  const chartData = STAGE1_CATEGORIES.map((c) => ({
    label: c.category.replace(/_/g, " "),
    fullLabel: `${c.category.replace(/_/g, " ")} (n=${c.count})`,
    category: c.category,
    mean: c.mean,
    std: c.std,
  }));

  const { animal, nonAnimal, delta } = ANIMAL_VS_NONANIMAL;

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        What Kinds of Names Win?
      </h2>
      <p className="section-description mb-8">
        We grouped all 383 names into categories like &quot;insects,&quot; &quot;food,&quot; &quot;profanity,&quot; etc.
        The pattern is obvious: animals crush everything. But here&apos;s the shocker: <span className="text-[#2ecc71] font-bold">insects</span> don&apos;t
        just beat non-animals, they beat the cute animals too. ANT and MANTIS (both insects) are
        #1 and #3 in the final rankings, outperforming OTTER, NARWHAL, and every other
        &quot;charismatic&quot; animal across all four models.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Category bar chart (2 cols) */}
        <div className="lg:col-span-2 mii-card p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            Average Buy Rate by Category
          </h3>
          <p className="text-sm text-white/70 mb-4">Sorted by mean buy rate, error bars show standard deviation</p>
          <ResponsiveContainer width="100%" height={900}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 0, right: 55, bottom: 0, left: 10 }}
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
                dataKey="label"
                width={140}
                stroke="rgba(255,255,255,0.3)"
                tick={{ fill: "#ccc", fontSize: 12, fontWeight: 600 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                formatter={(value: number, name: string) => {
                  if (name === "mean") return [`${value}%`, "Mean Buy Rate"];
                  return [value, name];
                }}
              />
              <Bar dataKey="mean" radius={[0, 6, 6, 0]}>
                {chartData.map((entry, idx) => (
                  <Cell key={idx} fill={CATEGORY_COLORS[entry.category] || "#888"} />
                ))}
                <ErrorBar
                  dataKey="std"
                  width={4}
                  strokeWidth={1.5}
                  stroke="rgba(255,255,255,0.4)"
                  direction="x"
                />
                <LabelList
                  dataKey="mean"
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

        {/* Right: Animal vs Non-Animal comparison */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
            The Animal Effect
          </h3>
          <p className="text-sm text-white/70">
            The single strongest predictor of buy rate is whether the ticker name is an animal.
          </p>

          <div className="mii-card p-6 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-[#2ecc71] mb-3">
              Animals
            </div>
            <div className="text-5xl font-bold text-[#2ecc71]">
              {animal.mean}%
            </div>
            <div className="text-sm text-white/70 mt-2">
              avg buy rate, {animal.count} tickers
            </div>
            <div className="mt-3 flex flex-wrap gap-1 justify-center">
              {["ANT", "SNAIL", "MANTIS", "OTTER", "NARWHAL"].map((t) => (
                <span key={t} className="ticker-sample text-xs" style={{ color: "#2ecc71", borderColor: "rgba(46,204,113,0.3)" }}>
                  ${t}
                </span>
              ))}
            </div>
          </div>

          <div className="mii-card p-6 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-[#e74c3c] mb-3">
              Non-Animals
            </div>
            <div className="text-5xl font-bold text-[#e74c3c]">
              {nonAnimal.mean}%
            </div>
            <div className="text-sm text-white/70 mt-2">
              avg buy rate, {nonAnimal.count} tickers
            </div>
            <div className="mt-3 flex flex-wrap gap-1 justify-center">
              {["FUCK", "SIGMA", "FOMO", "DONGLE", "WAFFLE"].map((t) => (
                <span key={t} className="ticker-sample text-xs" style={{ color: "#e74c3c", borderColor: "rgba(231,76,60,0.3)" }}>
                  ${t}
                </span>
              ))}
            </div>
          </div>

          <div className="mii-card p-6 text-center border-2 border-[#4fc3f7]/30">
            <div className="text-sm font-bold uppercase tracking-wider text-[#4fc3f7] mb-3">
              Gap
            </div>
            <div className="text-6xl font-bold text-[#4fc3f7]">
              +{delta.toFixed(0)}pp
            </div>
            <div className="text-sm text-white/70 mt-2">
              animal advantage
            </div>
          </div>
        </div>

        {/* Insects Domination Callout */}
        <div className="mt-8 mii-card p-6 border-l-4 border-[#2ecc71]">
          <h3 className="text-xl font-bold text-[#2ecc71] mb-3 uppercase tracking-wider">
            The Insect Surprise
          </h3>
          <p className="text-white text-lg leading-relaxed mb-4">
            You&apos;d expect cute animals like otters and narwhals to win. Instead, <span className="text-[#2ecc71] font-bold">insects dominate</span>.
            In the final Stage 3 rankings, ANT is #1 (15.8%) and MANTIS is #3 (14.8%). They beat OTTER (#6, 13.1%),
            NARWHAL (#5, 13.2%), and every other charismatic animal. This holds across <span className="font-bold">all four models</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2ecc71] mb-1">GPT-5.4</div>
              <div className="text-white font-bold">ANT #1 (20.5%)</div>
              <div className="text-white/70 text-sm">MANTIS #5 (14.5%)</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8e44ad] mb-1">Claude</div>
              <div className="text-white font-bold">MANTIS #1 (17.3%)</div>
              <div className="text-white/70 text-sm">ANT #2 (17.0%)</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2980b9] mb-1">Qwen</div>
              <div className="text-white font-bold">MANTIS #3 (16.8%)</div>
              <div className="text-white/70 text-sm">ANT #5 (14.2%)</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#e67e22] mb-1">Grok</div>
              <div className="text-white font-bold">ANT #3 (11.5%)</div>
              <div className="text-white/70 text-sm">MANTIS #6 (10.5%)</div>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Insects beat dolphins, otters, koalas, and narwhals. Nobody expected that.
          </p>
        </div>
      </div>
    </div>
  );
}
