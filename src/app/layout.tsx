import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEMEbench: Do AI Models Judge Tokens by Their Name?",
  description:
    "We showed 4 frontier LLMs identical market data under 383 different ticker names. $ANT got picked 84% more than $MOON. The AI always claims it's about the data. It's not.",
  icons: { icon: "/favicon.png" },
  metadataBase: new URL("https://memebench.terminal.markets"),
  openGraph: {
    title: "MEMEbench: Do AI Models Judge Tokens by Their Name?",
    description:
      "We showed 4 frontier LLMs identical market data under 383 different ticker names. $ANT got picked 84% more than $MOON. Insects beat memes. Animals beat everything. 18,560 inference calls prove it.",
    url: "https://memebench.terminal.markets",
    siteName: "MEMEbench by DXRG",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MEMEbench: $ANT 15.8% vs $MOON 8.6% buy rate with identical market data" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMEbench: Do AI Models Judge Tokens by Their Name?",
    description:
      "We showed 4 frontier LLMs identical market data under 383 different ticker names. $ANT got picked 84% more than $MOON. Insects beat memes. Animals beat everything.",
    images: ["/og-image.png"],
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
