import type { Metadata, Viewport } from "next"
import "./globals.css"
import StructuredData from "@/components/StructuredData"

/* ── VIEWPORT ────────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width:         "device-width",
  initialScale:  1,
  maximumScale:  5,
  themeColor:    "#3a6ea5",
}

/* ── METADATA ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:       "Epopteia — Clarity Architecture & AI Systems",
  description:
    "Epopteia architects clarity through AI. We strip away the fog of complexity and build systems that reveal root causes, eliminate blind spots, and elevate human decision-making. PRISM, NexOps, Ascent Ledger.",

  keywords: [
    "AI systems architecture",
    "clarity architecture",
    "document intelligence",
    "operations command center",
    "AI diagnostic system",
    "business intelligence",
    "workflow automation",
    "legal compliance AI",
    "logistics AI",
    "human performance AI",
    "Epopteia",
    "fog of complexity",
    "root cause analysis",
    "PRISM document AI",
    "NexOps logistics",
    "Ascent Ledger",
  ],

  authors:  [{ name: "Epopteia" }],
  creator:  "Epopteia",
  publisher:"Epopteia",

  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://epopteia.io",
    title:       "Epopteia — Clarity Architecture & AI Systems",
    description:
      "The final stage of initiation. Where mystery becomes direct revelation. We architect the ascent.",
    siteName: "Epopteia",
    images: [
      {
        url:    "https://epopteia.io/og.png",
        width:  1200,
        height: 630,
        alt:    "Epopteia — Supreme Vision. Clarity Architecture.",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Epopteia — Clarity Architecture & AI Systems",
    description: "The end of confusion. We architect the ascent.",
    images:      ["https://epopteia.io/og.png"],
    creator:     "@epopteia",
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  alternates: {
    canonical: "https://epopteia.io",
  },
}

/* ── ROOT LAYOUT ─────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="icon"             href="/favicon.ico"        sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect"  href="https://fonts.googleapis.com" />
        <link rel="preconnect"  href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>

      <body className="bg-[#d4d0c8] text-black">
        {/* Skip-to-content: accessibility requirement */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 win-btn"
        >
          Skip to content
        </a>

        <StructuredData />

        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
