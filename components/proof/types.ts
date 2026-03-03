/* ── SHARED TYPES — Proof / Systems ─────────────────────────────────────── */

export interface FogState {
    heading: string
    body:    string
  }
  
  export interface ClearSkyState {
    heading: string
    body:    string
    accent:  string   /* Key phrase rendered in silver */
  }
  
  export interface StackState {
    heading: string
    items:   readonly string[]
  }
  
  export interface SystemStates {
    fog:      FogState
    clearSky: ClearSkyState
    stack:    StackState
  }
  
  export interface SystemData {
    id:       string
    industry: string
    name:     string
    subtitle: string
    states:   SystemStates
  }
  
  export type CarouselState = 0 | 1 | 2