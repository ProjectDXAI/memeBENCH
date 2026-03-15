"use client";

import { MODEL_COLORS, MODEL_LABELS } from "@/lib/colors";

const MODEL_KEYS = ["claude", "gpt", "grok", "qwen"] as const;

export default function HeroSection() {
  return (
    <section>
      {/* Main title */}
      <div className="text-center mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#4fc3f7] mb-4">
          LLM Benchmark
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          Top LLMs Are Naturally<br />Biased by Ticker Name
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
          We gave 4 frontier LLMs identical market data under 383 different ticker names across 18,560 inference calls on{" "}
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
            DX Terminal Pro
          </a>
          . Animals dominated. Insects beat everything. And every model claimed it was just following the fundamentals.
        </p>
      </div>

      {/* Key insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="insight-card">
          <div className="text-4xl sm:text-5xl font-bold text-[#2ecc71] mb-3">Animals Win</div>
          <p className="text-white font-bold text-xl mb-1">Every Time</p>
          <p className="text-white text-base leading-relaxed">
            Animal tickers get picked up to 84% more often than non-animals, given identical market data across all 4 models.
          </p>
        </div>

        <div className="insight-card">
          <div className="text-4xl sm:text-5xl font-bold text-[#4fc3f7] mb-3">Top 3</div>
          <p className="text-white font-bold text-xl mb-1">Insects Over All</p>
          <p className="text-white text-base leading-relaxed">
            ANT, SNAIL, MANTIS: not cats, dogs, or dolphins. Insects and creepy-crawlies outperform every other category, including other animals.
          </p>
        </div>

        <div className="insight-card">
          <div className="text-4xl sm:text-5xl font-bold text-[#e67e22] mb-3">100%</div>
          <p className="text-white font-bold text-xl mb-1">Silent Bias</p>
          <p className="text-white text-base leading-relaxed">
            Every model claims it&apos;s following fundamentals. Every explanation cites volume, holders, price action. None of them mention the name. The bias is completely invisible.
          </p>
        </div>

        <div className="insight-card">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl sm:text-5xl font-bold text-[#2ecc71]">15.8%</span>
            <span className="text-lg text-[#aaa]">vs</span>
            <span className="text-4xl sm:text-5xl font-bold text-[#e74c3c]">8.6%</span>
          </div>
          <p className="text-white font-bold text-xl mb-1">$ANT vs $MOON</p>
          <p className="text-white text-base leading-relaxed">
            &quot;To the moon&quot; is peak crypto. Doesn&apos;t matter. A bug named ANT still beats it by 84%.
          </p>
        </div>
      </div>

      {/* Models tested */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {MODEL_KEYS.map((key) => (
          <div
            key={key}
            className="px-5 py-2 rounded-full border text-sm font-bold"
            style={{
              borderColor: MODEL_COLORS[key],
              color: MODEL_COLORS[key],
              background: `${MODEL_COLORS[key]}15`,
            }}
          >
            {MODEL_LABELS[key]}
          </div>
        ))}
      </div>

      {/* The visual example — THIS IS THE CENTERPIECE */}
      <div className="mii-card max-w-4xl mx-auto p-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          The Approach
        </h3>
        <p className="text-white text-center text-lg mb-8 max-w-2xl mx-auto">
          We took real trading scenarios from a live crypto agent environment ({" "}
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
            DX Terminal Pro
          </a>
          ). The AI sees 8 tokens with real market stats, growth trends, and holder data, then picks one to buy.
        </p>

        {/* Round 1 */}
        <div className="mb-8">
          <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#4fc3f7] mb-3">
            Round 1: The AI sees this data
          </div>
          <div className="inference-log p-4 sm:p-5 overflow-x-auto">
            <div className="space-y-2 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$ANT</span>
                <span className="log-data text-xs sm:text-sm">MC: $45K | Vol: $12K | 234 holders | 2h old | <span className="text-[#2ecc71]">+12% 5m</span></span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$FOMO</span>
                <span className="log-data text-xs sm:text-sm">MC: $22K | Vol: $3K | 89 holders | 45min | <span className="text-[#e74c3c]">-4% 5m</span></span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$SNAIL</span>
                <span className="log-data text-xs sm:text-sm">MC: $38K | Vol: $8K | 187 holders | 1h old | <span className="text-[#2ecc71]">+6% 5m</span></span>
              </div>
              <div className="log-comment mt-1 text-xs sm:text-sm">... 5 more tokens with varied market data ...</div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222] text-sm sm:text-base">
              <span className="text-white">AI picks: </span>
              <span className="log-buy text-base sm:text-lg">buy $ANT</span>
              <span className="text-white/60"> &quot;Strong holder growth and volume/mcap ratio&quot;</span>
            </div>
          </div>
        </div>

        {/* Round 2 — the swap */}
        <div className="mb-8">
          <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#e67e22] mb-3">
            Round 2: Same data, names shuffled
          </div>
          <div className="inference-log p-4 sm:p-5 overflow-x-auto">
            <div className="space-y-2 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$FOMO</span>
                <span className="log-data text-xs sm:text-sm">MC: $45K | Vol: $12K | 234 holders | 2h old | <span className="text-[#2ecc71]">+12% 5m</span></span>
                <span className="text-[#e67e22] text-[10px] sm:text-xs ml-1 shrink-0">&larr; ANT&apos;s data</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$ANT</span>
                <span className="log-data text-xs sm:text-sm">MC: $22K | Vol: $3K | 89 holders | 45min | <span className="text-[#e74c3c]">-4% 5m</span></span>
                <span className="text-[#e67e22] text-[10px] sm:text-xs ml-1 shrink-0">&larr; FOMO&apos;s data</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="log-ticker text-base sm:text-lg w-16 sm:w-20 shrink-0">$SIGMA</span>
                <span className="log-data text-xs sm:text-sm">MC: $38K | Vol: $8K | 187 holders | 1h old | <span className="text-[#2ecc71]">+6% 5m</span></span>
              </div>
              <div className="log-comment mt-1 text-xs sm:text-sm">... 5 more tokens with varied market data ...</div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222] text-sm sm:text-base">
              <span className="text-white">AI picks: </span>
              <span className="log-buy text-base sm:text-lg">buy $ANT</span>
              <span className="text-white/60"> picks ANT again, even though FOMO has the better data now</span>
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="text-center p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
          <p className="text-xl text-white font-bold mb-2">
            Same data. Different name. Different outcome.
          </p>
          <p className="text-white text-base">
            We did this <span className="text-white font-bold">18,560 times</span> across
            <span className="text-white font-bold"> 383 ticker names</span> and
            <span className="text-white font-bold"> 4 AI models</span>. Every ticker got
            paired with every set of market data, so we know the bias comes from the name alone.
          </p>
        </div>
      </div>

    </section>
  );
}
