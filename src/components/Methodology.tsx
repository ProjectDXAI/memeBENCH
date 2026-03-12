"use client";

export default function Methodology() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        How We Made This Fair
      </h2>
      <p className="section-description mb-8">
        The whole point of this benchmark is to isolate the effect of the ticker NAME
        from everything else. Here&apos;s how we did it.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Real Trading Scenarios</h3>
          <p className="text-white text-base leading-relaxed">
            We didn&apos;t make up fake scenarios. Every test uses real market context data from{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">
              DX Terminal Pro
            </a>
            , a live AI-powered crypto trading platform. The AI sees real prices, volumes, holder counts,
            growth trends, and token age. Scenarios were generated using varied user directions
            beyond just &quot;choose something to buy,&quot; and modeled on real agent decisions and market
            conditions from the platform.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Synthetic Tickers Only</h3>
          <p className="text-white text-base leading-relaxed">
            All 383 ticker names were synthetically generated. We purposefully avoided any existing
            memecoin tickers and existing meme references to prevent the AI from drawing on prior knowledge
            of real tokens. Every name in this benchmark is something the models have never seen
            in a trading context before. This ensures we&apos;re measuring pure name bias, not
            familiarity or sentiment from training data.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Name Rotation (Latin Square)</h3>
          <p className="text-white text-base leading-relaxed">
            The key trick: we rotate which ticker name gets which market data. In round 1,
            $ANT might have the best-looking data. In round 2, $FUCK gets that same data and
            $ANT gets something else. After enough rotations, every name has been paired with
            every set of market stats. So any difference in buy rates = pure name bias.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Forced Choice</h3>
          <p className="text-white text-base leading-relaxed">
            We tell the AI &quot;you MUST buy one of these 8 tokens.&quot; This forces it to make a
            choice every time, so we&apos;re measuring which name it PREFERS, not whether it
            wants to trade at all. About 93% of responses follow this instruction. Notably,
            Grok-4 had the highest refusal rate of any model, frequently insisting it was
            over-buying despite explicit instructions to choose. It was the most opinionated
            about pushing back on the task itself.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">4 Different AI Models</h3>
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
            This isn&apos;t a quick test with a handful of examples. We made 18,560 API calls
            across 383 ticker names. The final 16 tickers each have 1,600 data points.
            The patterns we found aren&apos;t flukes. They&apos;re statistically robust.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Long-Horizon Validation</h3>
          <p className="text-white text-base leading-relaxed">
            Beyond this point-in-time benchmark, we also tested long-horizon bias over multiple
            turns during pre-launch testing for{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">
              DX Terminal Pro
            </a>
            . The results were consistent: the same name biases that show up in a single forced-choice
            test persist across multi-turn trading sessions. The bias isn&apos;t something that washes
            out over time.
          </p>
        </div>

        <div className="mii-card p-6">
          <h3 className="text-xl font-bold text-white mb-4">Applied to Real Trading</h3>
          <p className="text-white text-base leading-relaxed">
            We used this type of analysis to select coins for{" "}
            <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">
              DX Terminal Pro
            </a>{" "}
            that are largely unbiased, ensuring the platform&apos;s AI agents make decisions
            based on market fundamentals rather than ticker-name preferences. This benchmark
            isn&apos;t just academic. It directly informs how we build trading systems.
          </p>
        </div>
      </div>

      {/* DX Terminal Pro Context */}
      <div className="mt-8 mii-card p-6 border-l-4 border-[#4fc3f7]">
        <h3 className="text-xl font-bold text-[#4fc3f7] mb-3">About DX Terminal Pro</h3>
        <p className="text-white text-base leading-relaxed mb-3">
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline font-bold">
            DX Terminal Pro
          </a>{" "}
          is a live AI-powered crypto trading platform where autonomous agents make real trading
          decisions using frontier LLMs. The agent harness framework and market scenarios used in
          this benchmark were modeled directly on real agent decisions and market conditions from
          the platform. This benchmark is part of the{" "}
          <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">
            terminal.markets
          </a>{" "}
          benchmark suite, which includes{" "}
          <a href="https://ceobench.terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">
            CEOBench
          </a>{" "}
          and more to come.
        </p>
      </div>

      {/* Limitations */}
      <div className="mt-6 mii-card p-6">
        <h3 className="text-xl font-bold text-white mb-4">What We Can&apos;t Say</h3>
        <ul className="space-y-3 text-white text-base">
          <li className="flex items-start gap-2">
            <span className="text-[#e74c3c] mt-1 shrink-0">&#x2022;</span>
            <span>Forcing the AI to buy changes its behavior vs. natural trading</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e74c3c] mt-1 shrink-0">&#x2022;</span>
            <span>We only test 8 tickers at a time. Different group sizes might give different results</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e74c3c] mt-1 shrink-0">&#x2022;</span>
            <span>Stage 1 doesn&apos;t do the full name rotation (only Stages 2 and 3 do)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e74c3c] mt-1 shrink-0">&#x2022;</span>
            <span>We can&apos;t read the hidden &quot;thinking&quot; of every model, only what they share</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
