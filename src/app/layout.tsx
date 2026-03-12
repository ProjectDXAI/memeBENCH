import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaledBias — Memecoin Ticker Name Bias Benchmark",
  description:
    "Do LLMs show systematic bias toward certain memecoin ticker names? 383 tickers, 4 frontier models, 18,560 API calls. Key finding: 7.2pp buy-rate spread between best and worst ticker names seeing identical market data.",
  icons: { icon: "/favicon.png" },
  metadataBase: new URL("https://scaledbias.terminal.markets"),
  openGraph: {
    title: "ScaledBias — Memecoin Ticker Name Bias Benchmark",
    description:
      "7.2pp buy-rate spread between ANT (15.8%) and FOMO (8.6%) seeing identical market data. Bias is 100% implicit. 383 tickers, 4 models, 18,560 calls.",
    url: "https://scaledbias.terminal.markets",
    siteName: "ScaledBias by DXRG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaledBias — Memecoin Ticker Name Bias Benchmark",
    description:
      "Do LLMs prefer certain memecoin names? 7.2pp spread between ANT and FOMO seeing identical data. 383 tickers, 4 models, 18,560 calls.",
    creator: "@DXRGai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
