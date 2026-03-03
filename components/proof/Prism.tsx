import type { SystemData } from "./types"

export const PRISM_URL = "https://prism-mu-one.vercel.app/"

export const PRISM: SystemData = {
  id:       "prism",
  industry: "Document Intelligence",
  name:     "PRISM",
  subtitle: "Legal · Compliance",
  url: PRISM_URL,
  states: {
    fog: {
      heading: "The Fog",
      body:
        "Legal and compliance teams buried in documents, manually searching for answers that carry risk if missed. One overlooked clause. One missed precedent. The liability is silent until it is not.",
    },
    clearSky: {
      heading: "The Clear Sky",
      body:
        "Upload any document. Ask in plain English. Get verified answers pinned to the exact paragraph — with a confidence score. Zero hallucinations. Every answer is traceable to its source.",
      accent: "Zero hallucinations.",
    },
    stack: {
      heading: "Stack Proof",
      items: [
        "Hybrid Vector + BM25 search",
        "Multi-pass self-critique",
        "GPT-4o reasoning layer",
        "Paragraph-level citation",
        "Confidence scoring engine",
      ],
    },
  },
}