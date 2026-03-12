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
          <img src="/memebench.png" alt="MEMEbench" className="relative z-10 h-10 sm:h-12 w-auto" />
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

          <section>
            <Methodology />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] mt-24 pt-8 pb-8 text-center text-sm text-[#888]">
          <p>MEMEbench: Memecoin Ticker Name Bias Benchmark</p>
          <p className="mt-1">Part of the <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">terminal.markets</a> benchmark suite</p>
          <p className="mt-1">Built by <a href="https://x.com/DXRGai" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">DXRG</a></p>
        </footer>
      </div>
    </main>
  );
}
