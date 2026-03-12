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
          <svg width="130" height="52" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 sm:w-[160px] sm:h-[64px]">
            <line x1="100" y1="10" x2="100" y2="45" stroke="#4fc3f7" strokeWidth="2.5" />
            <line x1="70" y1="22" x2="130" y2="22" stroke="#4fc3f7" strokeWidth="2.5" />
            <circle cx="100" cy="10" r="4" fill="#4fc3f7" />
            <path d="M70 22 L62 38 L78 38 Z" fill="none" stroke="#2ecc71" strokeWidth="2" />
            <path d="M130 22 L122 42 L138 42 Z" fill="none" stroke="#e74c3c" strokeWidth="2" />
            <text x="100" y="62" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Redaction, system-ui, sans-serif" letterSpacing="4">SCALEDBIAS</text>
            <text x="100" y="75" textAnchor="middle" fill="#666" fontSize="9" fontFamily="Redaction, system-ui, sans-serif" letterSpacing="2">MEMECOIN TICKER BIAS</text>
          </svg>
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
          <p>ScaledBias: Memecoin Ticker Name Bias Benchmark</p>
          <p className="mt-1">Part of the <a href="https://terminal.markets" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">terminal.markets</a> benchmark suite, March 2026</p>
          <p className="mt-1">Built by <a href="https://x.com/DXRGai" target="_blank" rel="noopener noreferrer" className="text-[#4fc3f7] hover:underline">DXRG</a></p>
        </footer>
      </div>
    </main>
  );
}
