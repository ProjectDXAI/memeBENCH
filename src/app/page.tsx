"use client";

import MiiFloor from "@/components/MiiFloor";
import HeroSection from "@/components/HeroSection";
import FunnelExplainer from "@/components/FunnelExplainer";
import Stage1Rankings from "@/components/Stage1Rankings";
import Stage1Categories from "@/components/Stage1Categories";
import Stage2Rankings from "@/components/Stage2Rankings";
import Stage3FinalRankings from "@/components/Stage3FinalRankings";
import ModelHeatmap from "@/components/ModelHeatmap";
import ModelRankings from "@/components/ModelRankings";
import StatedVsRevealed from "@/components/StatedVsRevealed";
import CrossModelAgreement from "@/components/CrossModelAgreement";
import ReasoningAnalysis from "@/components/ReasoningAnalysis";
import Methodology from "@/components/Methodology";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Static checkerboard background */}
      <MiiFloor />

      {/* Minimal header */}
      <header className="relative z-40 px-4 sm:px-6 py-4 flex items-center justify-between gap-2">
        <div className="flex items-center shrink-0">
          <img src="/memebench.png" alt="MEMEbench" className="relative z-10 h-14 sm:h-16 md:h-20 w-auto" />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://x.com/dxrgai"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95"
            title="X / Twitter"
          >
            <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://ceobench.terminal.markets"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95"
            title="CEOBench"
          >
            <span className="relative z-10 text-white text-xs font-bold">CEO</span>
          </a>
          <a
            href="https://terminal.markets"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95"
            title="Terminal Markets"
          >
            <img src="/dxrglogo-05.png" alt="Terminal Markets" className="relative z-10 w-5 h-5 object-contain" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-24">
          <HeroSection />

          <section>
            <FunnelExplainer />
          </section>

          <section>
            <Stage1Rankings />
          </section>

          <section>
            <Stage1Categories />
          </section>

          <section>
            <Stage2Rankings />
          </section>

          <section>
            <Stage3FinalRankings />
          </section>

          <section>
            <StatedVsRevealed />
          </section>

          <section>
            <ModelHeatmap />
          </section>

          <section>
            <ModelRankings />
          </section>

          <section>
            <CrossModelAgreement />
          </section>

          <section>
            <ReasoningAnalysis />
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Key Findings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="insight-card">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl sm:text-5xl font-bold text-[#2ecc71]">15.8%</span>
                  <span className="text-lg text-[#aaa]">vs</span>
                  <span className="text-4xl sm:text-5xl font-bold text-[#e74c3c]">8.6%</span>
                </div>
                <p className="text-white font-bold text-xl mb-1">$ANT vs $FOMO</p>
                <p className="text-white text-base leading-relaxed">
                  Same market data. Same prompt. Only the name changed.
                </p>
              </div>

              <div className="insight-card">
                <div className="text-4xl sm:text-5xl font-bold text-[#4fc3f7] mb-3">Top 3</div>
                <p className="text-white font-bold text-xl mb-1">Insects Dominate</p>
                <p className="text-white text-base leading-relaxed">
                  ANT, SNAIL, MANTIS: insects and creepy-crawlies beat cute animals, memes, and real-world concepts across all models.
                </p>
              </div>

              <div className="insight-card">
                <div className="text-4xl sm:text-5xl font-bold text-[#e67e22] mb-3">100%</div>
                <p className="text-white font-bold text-xl mb-1">Invisible Bias</p>
                <p className="text-white text-base leading-relaxed">
                  No model ever says &quot;I like this name.&quot; They always cite market data, but still pick favorites.
                </p>
              </div>

              <div className="insight-card">
                <div className="text-4xl sm:text-5xl font-bold text-[#e74c3c] mb-3">Bottom 8</div>
                <p className="text-white font-bold text-xl mb-1">Non-Animals Sink</p>
                <p className="text-white text-base leading-relaxed">
                  MOON, FOMO, SIGMA, LIQUIDATE: even popular crypto and trading terms can&apos;t compete with animal names.
                </p>
              </div>
            </div>
          </section>

          <section>
            <Methodology />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] mt-24 pt-8 pb-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-base leading-relaxed mb-4">
              <a href="https://dxrg.ai" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 font-bold">
                DXRG
              </a>{" "}
              is focused on creating the Claude Code moment for onchain agents with real capital.
              Starting with our live experiment through March 19: over 3,000 agents have already
              traded more than $18M in real volume on{" "}
              <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
                DX Terminal Pro
              </a>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#888]">
              <span>MEMEbench: Memecoin Ticker Name Bias Benchmark</span>
              <span className="text-[#333]">|</span>
              <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white">terminal.markets</a>
              <span className="text-[#333]">|</span>
              <a href="https://ceobench.terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white">CEOBench</a>
              <span className="text-[#333]">|</span>
              <a href="https://dxrg.ai" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white">dxrg.ai</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
