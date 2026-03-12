"use client";

export default function Methodology() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Methodology
      </h2>
      <p className="section-description mb-8">
        MEMEbench isolates the effect of the ticker name from everything else.
        Here&apos;s how.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Real Trading Scenarios</h3>
          <p className="text-white text-base leading-relaxed">
            Every test uses real market context data from{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
              DX Terminal Pro
            </a>
            , a live AI-powered crypto trading platform. The AI sees real prices, volumes, holder counts,
            growth trends, and token age. Scenarios were generated using varied user directions
            and modeled on real agent decisions and market conditions from the platform.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Synthetic Tickers Only</h3>
          <p className="text-white text-base leading-relaxed">
            All 383 ticker names were synthetically generated. We purposefully avoided any existing
            memecoin tickers and meme references to prevent the AI from drawing on prior knowledge
            of real tokens. Every name in this benchmark is something the models have never seen
            in a trading context before — pure name bias, not familiarity.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Name Rotation (Latin Square)</h3>
          <p className="text-white text-base leading-relaxed">
            The key trick: we rotate which ticker name gets which market data. In round 1,
            $ANT might have the best-looking data. In round 2, $FOMO gets that same data and
            $ANT gets something else. After enough rotations, every name has been paired with
            every set of market stats. Any difference in buy rates = pure name bias.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Forced Choice</h3>
          <p className="text-white text-base leading-relaxed">
            We tell the AI &quot;you MUST buy one of these 8 tokens.&quot; This forces a
            choice every time, so we measure which name it prefers, not whether it
            wants to trade at all. About 93% of responses follow this instruction. Notably,
            Grok-4 had the highest refusal rate, frequently insisting it was
            over-buying despite explicit instructions to choose.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">4 Frontier AI Models</h3>
          <div className="space-y-3">
            <p className="text-white text-base leading-relaxed mb-3">
              We tested 4 leading AI models to see if the bias is universal or model-specific.
              Spoiler: they all do it.
            </p>
            {[
              { name: "Claude Opus 4.6", org: "Anthropic", color: "#8e44ad" },
              { name: "GPT-5.4", org: "OpenAI", color: "#27ae60" },
              { name: "Grok-4", org: "xAI", color: "#e67e22" },
              { name: "Qwen3-235B", org: "Alibaba", color: "#2980b9" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: m.color }} />
                <span className="text-white font-bold">{m.name}</span>
                <span className="text-white/60">({m.org})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Scale</h3>
          <p className="text-white text-base leading-relaxed">
            18,560 inference calls across 383 ticker names. The final 16 tickers each have
            1,600 data points. The patterns we found aren&apos;t flukes — they&apos;re
            statistically robust.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Long-Horizon Validation</h3>
          <p className="text-white text-base leading-relaxed">
            Beyond this point-in-time benchmark, we also tested long-horizon bias over multiple
            turns during pre-launch testing for{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
              DX Terminal Pro
            </a>
            . The results were consistent: the same name biases persist across multi-turn
            trading sessions. The bias doesn&apos;t wash out over time.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Applied to Real Trading</h3>
          <p className="text-white text-base leading-relaxed">
            We used this analysis to select coins for{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
              DX Terminal Pro
            </a>{" "}
            that are largely unbiased, ensuring the platform&apos;s AI agents make decisions
            based on market fundamentals rather than ticker-name preferences. This benchmark
            directly informs how we build trading systems.
          </p>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="mt-8 mii-card p-6 border-l-4 border-[#4fc3f7]">
        <h3 className="text-xl font-bold text-[#4fc3f7] mb-3">Why MEMEbench Exists</h3>
        <p className="text-white text-base leading-relaxed mb-4">
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 font-bold">
            DX Terminal Pro
          </a>{" "}
          is an agents-only, real-money, adversarial memecoin trading market. Thousands of autonomous
          agents executing hundreds of thousands of swaps. Building at that scale surfaces insights
          you can&apos;t get from standard benchmarks.
        </p>
        <p className="text-white text-base leading-relaxed mb-4">
          Trading agents need better and more obscure benchmarks — ones that test the subtle biases
          and failure modes that only show up in real-world adversarial conditions. MEMEbench is one
          of those experiments. It&apos;s part of the{" "}
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
            terminal.markets
          </a>{" "}
          benchmark suite, alongside{" "}
          <a href="https://ceobench.terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
            CEOBench
          </a>
          , with more to come.
        </p>
        <p className="text-white text-base leading-relaxed">
          We believe these experiments are critical to our focus on building the future of onchain agents.
        </p>
      </div>
    </div>
  );
}
