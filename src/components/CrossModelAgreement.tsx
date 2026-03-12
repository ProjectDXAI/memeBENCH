"use client";

import { SPEARMAN_MATRIX } from "@/lib/data";

function corrColor(value: number): string {
  if (value >= 1.0) return "#1a1a1a"; // diagonal
  const t = (value - 0.45) / 0.35;
  const clamped = Math.max(0, Math.min(1, t));
  // dim gray → bright green
  const r = Math.round(0x33 + (0x2e - 0x33) * clamped);
  const g = Math.round(0x33 + (0xcc - 0x33) * clamped);
  const b = Math.round(0x33 + (0x71 - 0x33) * clamped);
  return `rgb(${r},${g},${b})`;
}

const SHORT_LABELS = ["GPT-5.4", "Grok-4", "Claude", "Qwen"];

export default function CrossModelAgreement() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        How Much Do the Models Agree?
      </h2>
      <p className="section-description mb-8">
        We compared each model&apos;s rankings to see if they agree on which names are best and worst.
        The scores range from 0 (totally different rankings) to 1 (identical rankings).
        Most pairs score 0.5&ndash;0.7, meaning they broadly agree. Claude and Qwen agree the most (0.73).
        Grok marches to its own drum (0.51&ndash;0.65 with others).
      </p>

      <div className="mii-card p-5 sm:p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-2 text-center">Spearman Rank Correlation</h3>
        <p className="text-sm text-white/50 mb-6 text-center">0 = totally disagree &middot; 1 = identical rankings &middot; greener = more agreement</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="p-3" />
                {SHORT_LABELS.map((label) => (
                  <th key={label} className="p-3 text-center text-sm font-bold text-white">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPEARMAN_MATRIX.correlations.map((row, i) => (
                <tr key={SPEARMAN_MATRIX.models[i]}>
                  <td className="p-3 text-right text-sm font-bold text-white">{SHORT_LABELS[i]}</td>
                  {row.map((val, j) => (
                    <td
                      key={j}
                      className="p-3 text-center font-mono text-sm font-bold text-white"
                      style={{ backgroundColor: corrColor(val), borderRadius: 6 }}
                    >
                      {i === j ? "—" : val.toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
