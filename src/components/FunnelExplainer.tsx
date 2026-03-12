"use client";

const stages = [
  {
    number: 1,
    name: "Screen",
    subtitle: "Test everything",
    calls: "7,680",
    description:
      "We tested all 383 ticker names. Each one was shown to all 4 AI models in groups of 8, with different market data each time. Think of it like speed dating — every name gets a chance.",
    result: "Top 64 move on",
    accent: "#2ecc71",
    samples: {
      top: ["NARWHAL", "GECKO", "BASILISK", "OTTER", "ANT"],
      bottom: ["FUCK", "LIQUIDATE", "SIGMA", "SCREAM", "FOLDER"],
    },
  },
  {
    number: 2,
    name: "Validate",
    subtitle: "Make it fair",
    calls: "7,680",
    description:
      "The top 64 get retested, but now we rotate which ticker gets which market data. So if $ANT had the best-performing data in round 1, $FUCK gets that same data in round 2. This way we know the results aren't just because one ticker got lucky with good data.",
    result: "Top 8 + Bottom 8 move on",
    accent: "#e67e22",
    samples: {
      top: ["ANT", "MANTIS", "OTTER", "SNAIL", "OWLBEAR"],
      bottom: ["FUCK", "WW3", "FOMO", "DONGLE", "LIQUIDATE"],
    },
  },
  {
    number: 3,
    name: "Deep Dive",
    subtitle: "Be really sure",
    calls: "3,200",
    description:
      "The 8 most-favored and 8 least-favored names get tested with even more data — 50 different market scenarios each, all fully rotated. This gives us rock-solid confidence in the final rankings.",
    result: "Final rankings",
    accent: "#e74c3c",
    samples: {
      top: ["ANT 15.8%", "SNAIL 15.1%", "MANTIS 14.8%"],
      bottom: ["FUCK 8.6%", "FOMO 8.6%", "DONGLE 9.3%"],
    },
  },
];

export default function FunnelExplainer() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The 3-Stage Test
        </h2>
        <p className="section-description mx-auto">
          We narrowed from 383 tickers to 16 across three rounds, getting more rigorous
          each time. At every stage, we rotated which ticker gets which market data —
          so the only thing that stays constant is the name.
        </p>
      </div>

      <div className="space-y-6">
        {stages.map((stage) => (
          <div
            key={stage.number}
            className="mii-card p-6 md:p-8"
            style={{ borderLeft: `4px solid ${stage.accent}` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: stage.accent }}
                  >
                    Stage {stage.number}
                  </span>
                  <span className="text-2xl font-bold text-white">{stage.name}</span>
                  <span className="text-base text-white/70">{stage.subtitle}</span>
                </div>
                <p className="text-white text-lg leading-relaxed mb-4 max-w-2xl">
                  {stage.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#4fc3f7] font-bold">{stage.calls} inference calls</span>
                  <span className="text-white/50">&rarr;</span>
                  <span className="text-white font-bold">{stage.result}</span>
                </div>
              </div>

              <div className="lg:w-80 flex flex-col gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2ecc71] mb-2 block">
                    AI Favorites
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stage.samples.top.map((t) => (
                      <span key={t} className="ticker-sample" style={{ color: "#2ecc71", borderColor: "rgba(46,204,113,0.3)" }}>
                        ${t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e74c3c] mb-2 block">
                    AI Avoids
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stage.samples.bottom.map((t) => (
                      <span key={t} className="ticker-sample" style={{ color: "#e74c3c", borderColor: "rgba(231,76,60,0.3)" }}>
                        ${t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
