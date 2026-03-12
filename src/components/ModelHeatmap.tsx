"use client";

import React from "react";
import { MODEL_HEATMAP } from "@/lib/data";
import { MODEL_COLORS } from "@/lib/colors";

const MODELS = [
  { key: "gpt" as const, label: "GPT-5.4" },
  { key: "grok" as const, label: "Grok-4" },
  { key: "claude" as const, label: "Claude" },
  { key: "qwen" as const, label: "Qwen" },
];

// Show a representative sampling — stop after SCREAM
const DISPLAY_TICKERS = MODEL_HEATMAP.slice(0, MODEL_HEATMAP.findIndex((e) => e.ticker === "SCREAM") + 1);

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

export default function ModelHeatmap() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Do All 4 AI Models Agree?
      </h2>
      <p className="section-description mb-8">
        Each cell shows how often a specific model buys a specific ticker. Green = buys it a lot,
        red = avoids it. All 4 models show the same pattern: they all prefer animals over everything else.
      </p>

      <div className="mii-card p-4 sm:p-6 md:p-8">
        <p className="text-xs text-white/40 mb-3 sm:hidden">Scroll horizontally to see all models &rarr;</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: 420 }}>
            <thead>
              <tr>
                <th className="p-2 text-left text-sm font-bold text-white/70 w-24">Ticker</th>
                {MODELS.map(({ key, label }) => (
                  <th key={key} className="p-2 text-center text-sm font-bold" style={{ color: MODEL_COLORS[key] }}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DISPLAY_TICKERS.map((entry) => (
                <tr key={entry.ticker}>
                  <td className="p-2 text-sm font-bold text-white">{entry.ticker}</td>
                  {MODELS.map(({ key }) => {
                    const value = entry[key];
                    const bg = getHeatColor(value);
                    const textColor = getTextColor(bg);
                    return (
                      <td key={key} className="p-1">
                        <div
                          className="flex items-center justify-center h-[44px] rounded font-bold text-sm"
                          style={{ backgroundColor: bg, color: textColor }}
                        >
                          {value.toFixed(1)}%
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/40 mt-3 text-center italic">
          Showing {DISPLAY_TICKERS.length} of {MODEL_HEATMAP.length} finalists
        </p>
      </div>
    </div>
  );
}
