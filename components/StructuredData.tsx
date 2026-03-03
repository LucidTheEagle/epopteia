import React from "react"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://epopteia.io/#organization",
        "name": "Epopteia",
        "url": "https://epopteia.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://epopteia.io/apple-touch-icon.png",
          "width": 180,
          "height": 180
        },
        "sameAs": [
          "https://twitter.com/epopteia"
        ],
        "description": "Clarity architecture through AI. We strip away the fog of complexity and architect clarity for founders, operators, and high-performers."
      },
      {
        "@type": "WebSite",
        "@id": "https://epopteia.io/#website",
        "url": "https://epopteia.io",
        "name": "Epopteia",
        "publisher": {
          "@id": "https://epopteia.io/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Clarity Architecture",
        "provider": {
          "@id": "https://epopteia.io/#organization"
        },
        "description": "Deployment of PRISM, NexOps, and Ascent Ledger systems — document intelligence, operations command, and human performance diagnostics.",
        "areaServed": "Global",
        "serviceType": "AI Systems Architecture"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}