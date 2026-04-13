import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Radical Recruitment",
    default: "Radical Recruitment — AI is everywhere. The human factor is rare.",
  },
  description:
    "Radical Recruitment connects companies with elite AI professionals through a rigorous, human-first selection process built on the APAC framework.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://radicalrecruitment.com"
  ),
  openGraph: {
    type: "website",
    siteName: "Radical Recruitment",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // dark class = dark mode is the default; remove it and add .light for light mode
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* Afacad Flux loaded via Google Fonts CDN per design spec */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
