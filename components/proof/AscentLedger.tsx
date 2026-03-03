import type { SystemData } from "./types"

export const ASCENT_LEDGER_URL = "https://ascent-ledger.vercel.app/"

export const ASCENT_LEDGER: SystemData = {
  id:       "ascent-ledger",
  industry: "Human Intelligence",
  name:     "ASCENT LEDGER",
  subtitle: "Individual · Performance",
  url: ASCENT_LEDGER_URL,
  states: {
    fog: {
      heading: "The Fog",
      body:
        "High-performing people surviving life and calling it living. Busy every day, ascending nowhere. The patterns that hold you in place are invisible to you — because you are inside them.",
    },
    clearSky: {
      heading: "The Clear Sky",
      body:
        "A diagnostic system that reads your weekly log, identifies the patterns you cannot see yourself, and generates a direct Fog Check — where your thinking is clouded and what the next move is.",
      accent: "The patterns you cannot see yourself.",
    },
    stack: {
      heading: "Stack Proof",
      items: [
        "AI pattern detection engine",
        "Groq inference layer",
        "Graph-layer behavioural analysis",
        "Weekly log processing",
        "Fog Check diagnostic output",
      ],
    },
  },
}