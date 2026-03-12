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
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Do AI Models Judge<br />Memecoins by Name?
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
          We showed 4 top AI models the exact same market data but changed the ticker name.
          Turns out, they have strong favorites — and they don&apos;t even know it.
        </p>
      </div>

      {/* The visual example — THIS IS THE CENTERPIECE */}
      <div className="mii-card max-w-4xl mx-auto p-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Here&apos;s What We Did
        </h3>
        <p className="text-white text-center text-lg mb-8 max-w-2xl mx-auto">
          We took real trading scenarios from a live crypto benchmark. The AI sees 8 tokens
          with real market stats, growth trends, and holder data, then picks one to buy.
        </p>

        {/* Round 1 */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4fc3f7] mb-3">
            Round 1: The AI sees this
          </div>
          <div className="inference-log p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <span className="log-ticker text-lg">$ANT</span>
                <span className="log-data"> MC: $45K | Vol: $12K | 234 holders | 2h old | <span className="text-[#2ecc71]">+12% 5m</span></span>
              </div>
              <div>
                <span className="log-ticker text-lg">$FUCK</span>
                <span className="log-data"> MC: $22K | Vol: $3K | 89 holders | 45min | <span className="text-[#e74c3c]">-4% 5m</span></span>
              </div>
              <div>
                <span className="log-ticker text-lg">$SNAIL</span>
                <span className="log-data"> MC: $38K | Vol: $8K | 187 holders | 1h old | <span className="text-[#2ecc71]">+6% 5m</span></span>
              </div>
              <div className="log-comment">... 5 more tokens with varied market data ...</div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222]">
              <span className="text-white">AI picks: </span>
              <span className="log-buy text-lg">buy $ANT</span>
              <span className="text-white/60"> &quot;Strong holder growth and volume/mcap ratio&quot;</span>
            </div>
          </div>
        </div>

        {/* Round 2 — the swap */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#e67e22] mb-3">
            Round 2: Now we swap the names. $FUCK gets $ANT&apos;s old data:
          </div>
          <div className="inference-log p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <span className="log-ticker text-lg">$FUCK</span>
                <span className="log-data"> MC: $45K | Vol: $12K | 234 holders | 2h old | <span className="text-[#2ecc71]">+12% 5m</span></span>
                <span className="text-[#e67e22] text-xs ml-2">(same data ANT had)</span>
              </div>
              <div>
                <span className="log-ticker text-lg">$ANT</span>
                <span className="log-data"> MC: $22K | Vol: $3K | 89 holders | 45min | <span className="text-[#e74c3c]">-4% 5m</span></span>
              </div>
              <div>
                <span className="log-ticker text-lg">$SIGMA</span>
                <span className="log-data"> MC: $38K | Vol: $8K | 187 holders | 1h old | <span className="text-[#2ecc71]">+6% 5m</span></span>
              </div>
              <div className="log-comment">... 5 more tokens with varied market data ...</div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222]">
              <span className="text-white">AI picks: </span>
              <span className="log-buy text-lg">buy $SIGMA</span>
              <span className="text-white/60"> still avoids $FUCK even though it has the best data now</span>
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

      {/* Key insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="insight-card">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-[#2ecc71]">15.8%</span>
            <span className="text-lg text-[#aaa]">vs</span>
            <span className="text-4xl font-bold text-[#e74c3c]">8.6%</span>
          </div>
          <p className="text-white font-bold text-lg">$ANT vs $FUCK</p>
          <p className="text-white/70 text-sm mt-1">
            Same market data. Same prompt. Only the name changed.
          </p>
        </div>

        <div className="insight-card">
          <div className="text-4xl font-bold text-[#4fc3f7] mb-2">+10pp</div>
          <p className="text-white font-bold text-lg">Animals Win</p>
          <p className="text-white/70 text-sm mt-1">
            Tickers named after animals are bought 10 percentage points more than everything else.
          </p>
        </div>

        <div className="insight-card">
          <div className="text-4xl font-bold text-[#e67e22] mb-2">100%</div>
          <p className="text-white font-bold text-lg">Invisible Bias</p>
          <p className="text-white/70 text-sm mt-1">
            No model ever says &quot;I like this name.&quot; They always cite market data — but still pick favorites.
          </p>
        </div>

        <div className="insight-card">
          <div className="text-4xl font-bold text-[#9b59b6] mb-2">18,560</div>
          <p className="text-white font-bold text-lg">API Calls</p>
          <p className="text-white/70 text-sm mt-1">
            383 tickers, 4 AI models, 3 rounds of testing. Enough data to be sure.
          </p>
        </div>
      </div>

      {/* Models tested */}
      <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
