import type { SystemData } from "./types"

export const NEXOPS: SystemData = {
  id:       "nexops",
  industry: "Operations Command",
  name:     "NEXOPS",
  subtitle: "Logistics · Operations",
  states: {
    fog: {
      heading: "The Fog",
      body:
        "Logistics teams losing 2.4 hours per shipment to data silos. Decisions made on stale information. Crises that were predictable — reacted to instead of prevented. The cost is measured in time, margin, and trust.",
    },
    clearSky: {
      heading: "The Clear Sky",
      body:
        "Zero-latency command center. Every anomaly surfaced before it becomes a crisis. Every decision tracked and auditable. The system responds in under 50ms — faster than the problem can compound.",
      accent: "Responds in under 50ms.",
    },
    stack: {
      heading: "Stack Proof",
      items: [
        "Local-first architecture",
        "Supabase Realtime sync",
        "Predictive anomaly detection",
        "Sub-50ms response layer",
        "Full decision audit trail",
      ],
    },
  },
}