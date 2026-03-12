"use client";

import React from "react";
import { MODEL_HEATMAP } from "@/lib/data";
import { MODEL_COLORS } from "@/lib/colors";

const MODELS = [
  { key: "gpt" as const, label: "GPT-5.4" },
  { key: "grok" as const, label: "Grok-4" },
  { key: "claude" as const, label: "Claude Opus 4.6" },
  { key: "qwen" as const, label: "Qwen3-235B" },
];

const TICKERS = MODEL_HEATMAP.map((e) => e.ticker);

function getHeatColor(value: number): string {
  if (value >= 18) return "#1a6b37";
  if (value >= 15) return "#2e8b47";
  if (value >= 13) return "#4caf50";
  if (value >= 12) return "#8bc34a";
  if (value >= 11) return "#cddc39";
  if (value >= 10) return "#fff176";
  if (value >= 9) return "#ffd54f";
  if (value >= 8) return "#ffb74d";
  if (value >= 7) return "#ff8a65";
  return "#ef5350";
}

function getTextColor(bg: string): string {
  const hex = bg.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 0.55 ? "#111111" : "#ffffff";
}

const LEGEND_STOPS = [
  { value: 0, color: "#ef5350" },
  { value: 5, color: "#ff8a65" },
  { value: 8, color: "#ffb74d" },
  { value: 10, color: "#fff176" },
  { value: 12, color: "#cddc39" },
  { value: 15, color: "#4caf50" },
  { value: 20, color: "#1a6b37" },
];

export default function ModelHeatmap() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Do All 4 AI Models Agree?
      </h2>
      <p className="section-description mb-8">
        Each cell shows how often a specific model buys a specific ticker. Green = buys it a lot,
        red = avoids it. The striking thing: all 4 models show the same pattern. It&apos;s not
        just one model being weird — they all prefer animals over everything else.
      </p>

      <div className="mii-card p-4 sm:p-6 md:p-8">
        <p className="text-xs text-white/40 mb-3 md:hidden">Scroll horizontally to see all tickers &rarr;</p>
        <div className="flex gap-6">
          <div className="flex-1 overflow-x-auto -mx-2 px-2">
            <div
              className="grid"
              style={{
                gridTemplateColumns: `160px repeat(${TICKERS.length}, minmax(65px, 1fr))`,
                gap: "3px",
              }}
            >
              <div />
              {TICKERS.map((ticker) => (
                <div key={ticker} className="flex items-end justify-center pb-1" style={{ height: 65 }}>
                  <span
                    className="text-xs font-bold text-[#ccc] whitespace-nowrap"
                    style={{ transform: "rotate(-45deg)", transformOrigin: "center center" }}
                  >
                    {ticker}
                  </span>
                </div>
              ))}

              {MODELS.map(({ key, label }) => (
                <React.Fragment key={key}>
                  <div
                    className="flex items-center text-sm font-bold truncate pr-2"
                    style={{ color: MODEL_COLORS[key] }}
                  >
                    {label}
                  </div>
                  {MODEL_HEATMAP.map((entry) => {
                    const value = entry[key];
                    const bg = getHeatColor(value);
                    const textColor = getTextColor(bg);
                    return (
                      <div
                        key={`${key}-${entry.ticker}`}
                        className="flex items-center justify-center min-w-[65px] h-[55px] rounded font-bold text-sm"
                        style={{ backgroundColor: bg, color: textColor }}
                      >
                        {value.toFixed(1)}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center gap-1 min-w-[60px]">
            <span className="text-xs text-white/70 font-bold mb-1">Buy Rate (%)</span>
            <div className="flex flex-col-reverse gap-0.5">
              {LEGEND_STOPS.map((stop) => {
                const textColor = getTextColor(stop.color);
                return (
                  <div
                    key={stop.value}
                    className="flex items-center justify-center w-[52px] h-[30px] rounded text-xs font-bold"
                    style={{ backgroundColor: stop.color, color: textColor }}
                  >
                    {stop.value === 20 ? "20+" : stop.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
