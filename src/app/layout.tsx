import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEMEbench: Memecoin Ticker Name Bias Benchmark",
  description:
    "AI trading agents pick $ANT 84% more often than $FUCK, seeing identical market data. We tested 4 frontier LLMs across 18,560 inference calls and found they all have strong ticker name preferences they don't know about.",
  icons: { icon: "/favicon.png" },
  metadataBase: new URL("https://scaledbias.terminal.markets"),
  openGraph: {
    title: "MEMEbench: Memecoin Ticker Name Bias Benchmark",
    description:
      "AI trading agents pick $ANT 84% more often than $FUCK, seeing identical market data. 4 frontier LLMs, 383 tickers, 18,560 inference calls. The bias is invisible: they never mention the name, but always pick favorites.",
    url: "https://scaledbias.terminal.markets",
    siteName: "MEMEbench by DXRG",
    images: [{ url: "/memebench.png", width: 800, height: 200, alt: "MEMEbench" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMEbench: Memecoin Ticker Name Bias Benchmark",
    description:
      "AI trading agents pick $ANT 84% more often than $FUCK, seeing identical market data. 4 frontier LLMs, 383 tickers, 18,560 inference calls. The bias is invisible.",
    images: ["/memebench.png"],
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
