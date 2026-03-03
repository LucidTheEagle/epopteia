"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import type { SystemData, CarouselState } from "./types"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const HOVER_INTERVAL_MS  = 1500
const MOBILE_INTERVAL_MS = 3000
const STATE_COUNT        = 3

const STATE_LABELS: Record<CarouselState, string> = {
  0: "The Fog",
  1: "The Clear Sky",
  2: "Stack Proof",
}

/* ── CONTENT RENDERERS ───────────────────────────────────────────────────── */
function FogContent({ data }: { data: SystemData["states"]["fog"] }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="
        font-modern text-[9px] uppercase tracking-[0.25em]
        text-silver-dim
      ">
        {data.heading}
      </span>
      <p className="font-modern text-[13px] leading-[1.8] text-granite">
        {data.body}
      </p>
    </div>
  )
}

function ClearSkyContent({ data }: { data: SystemData["states"]["clearSky"] }) {
  /* Split body at accent phrase to highlight it */
  const parts = data.body.split(data.accent)

  return (
    <div className="flex flex-col gap-4">
      <span className="
        font-modern text-[9px] uppercase tracking-[0.25em]
        text-silver
      ">
        {data.heading}
      </span>
      <p className="font-modern text-[13px] leading-[1.8] text-alabaster">
        {parts[0]}
        <span className="text-silver font-medium">{data.accent}</span>
        {parts[1]}
      </p>
    </div>
  )
}

function StackContent({
  data,
  url,
}: {
  data: SystemData["states"]["stack"]
  url:  string
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="
        font-modern text-[9px] uppercase tracking-[0.25em]
        text-silver-dim
      ">
        {data.heading}
      </span>
      <ul
        aria-label="Technical stack"
        className="flex flex-col gap-2"
      >
        {data.items.map((item) => (
          <li
            key={item}
            className="
              font-modern text-[12px] leading-[1.6]
              text-granite
              flex items-start gap-2
            "
          >
            <span aria-hidden="true" className="text-silver-dim mt-px shrink-0">
              &gt;
            </span>
            {item}
          </li>
        ))}
      </ul>
      {/* Live system link — only visible on stack state */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"View live system — opens in new tab"}
        className="
          group inline-flex items-center gap-2 mt-2
          font-modern text-[10px] uppercase tracking-[0.15em]
          text-silver
          hover:text-alabaster
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver
        "
        onClick={(e) => e.stopPropagation()}
      >
        View System
        <span
          aria-hidden="true"
          className="
            transition-transform duration-200
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </div>
  )
}

/* ── STATE DOTS ──────────────────────────────────────────────────────────── */
function StateDots({
  active,
  total,
}: {
  active: CarouselState
  total:  number
}) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-[6px]"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            width:           i === active ? 16 : 4,
            backgroundColor: i === active ? "#C0C0C0" : "#666666",
          }}
          transition={{ duration: 0.3, ease: PREMIUM_EASE }}
          style={{ willChange: "width, background-color" }}
          className="h-[3px] rounded-none"
        />
      ))}
    </div>
  )
}

/* ── SYSTEM CARD ─────────────────────────────────────────────────────────── */
interface SystemCardProps {
  system:  SystemData
  inView:  boolean
  index:   number
  isMobile: boolean
}

export function SystemCard({ system, inView, index, isMobile }: SystemCardProps) {
  const [activeState, setActiveState] = useState<CarouselState>(0)
  const intervalRef                   = useRef<ReturnType<typeof setInterval> | null>(null)
  const prefersReduced                = useReducedMotion()

  const advance = useCallback(() => {
    setActiveState((prev) => ((prev + 1) % STATE_COUNT) as CarouselState)
  }, [])

  const reset = useCallback(() => {
    setActiveState(0)
  }, [])

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  /* Mobile: auto-cycle every 3s */
  useEffect(() => {
    if (!isMobile || prefersReduced) return
    intervalRef.current = setInterval(advance, MOBILE_INTERVAL_MS)
    return clearTimer
  }, [isMobile, prefersReduced, advance, clearTimer])

  /* Desktop: start cycling on hover */
  const handleMouseEnter = useCallback(() => {
    if (isMobile || prefersReduced) return
    clearTimer()
    intervalRef.current = setInterval(advance, HOVER_INTERVAL_MS)
  }, [isMobile, prefersReduced, advance, clearTimer])

  /* Desktop: reset on hover exit */
  const handleMouseLeave = useCallback(() => {
    if (isMobile || prefersReduced) return
    clearTimer()
    reset()
  }, [isMobile, prefersReduced, clearTimer, reset])

  /* Tablet: tap advances state, wraps to 0 */
  const handleTap = useCallback(() => {
    if (!isMobile) return
    advance()
  }, [isMobile, advance])

  /* Cleanup on unmount */
  useEffect(() => clearTimer, [clearTimer])

  /* Content animation — explicit TargetAndTransition objects.
     Avoids the variant-label/initial prop type conflict in Framer Motion. */
  const contentEnter  = { opacity: 0, y: 10  } as const
  const contentCenter = { opacity: 1, y: 0   } as const
  const contentExit   = { opacity: 0, y: -10 } as const

  const currentLabel = STATE_LABELS[activeState]

  return (
    <motion.article
      aria-label={`${system.name} — ${system.industry}. Current view: ${currentLabel}`}
      aria-roledescription="carousel card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay:    index * 0.15,
        duration: 0.7,
        ease:     PREMIUM_EASE,
      }}
      style={{ willChange: "opacity, transform" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      className="
        group relative
        bg-basalt
        flex flex-col
        overflow-hidden
        transition-colors duration-300
        hover:bg-basalt-lift
        cursor-default
        md:cursor-pointer
        focus-within:outline-none
        focus-within:ring-1 focus-within:ring-silver
      "
    >
      {/* Top silver accent line — slides in on hover */}
      <span
        aria-hidden="true"
        className="
          absolute top-0 left-0
          h-px w-0 bg-border
          transition-[width] duration-500
          group-hover:w-full
        "
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />

      {/* ── CARD HEADER ────────────────────────────────────────────────── */}
      <div className="px-8 pt-8 pb-6 border-b border-border">
        <span className="
          block font-modern text-[9px] uppercase tracking-[0.25em]
          text-silver-dim mb-3
        ">
          {system.industry}
        </span>

        <h3 className="
          font-ancient font-bold
          text-[clamp(20px,2vw,28px)]
          tracking-[0.08em] leading-none
          text-alabaster mb-2
        ">
          {system.name}
        </h3>

        <span className="
          font-modern text-[10px] uppercase tracking-[0.15em]
          text-silver-dim
        ">
          {system.subtitle}
        </span>
      </div>

      {/* ── CAROUSEL CONTENT AREA ──────────────────────────────────────── */}
      {/*    Fixed min-height prevents layout shift during state transitions */}
      <div
        className="px-8 py-6 flex-1 min-h-[200px]"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`System details — ${currentLabel}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeState}
            initial={contentEnter}
            animate={contentCenter}
            exit={contentExit}
            transition={{ duration: 0.35, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
          >
            {activeState === 0 && (
              <FogContent data={system.states.fog} />
            )}
            {activeState === 1 && (
              <ClearSkyContent data={system.states.clearSky} />
            )}
            {activeState === 2 && (
              <StackContent data={system.states.stack} url={system.url} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CARD FOOTER ────────────────────────────────────────────────── */}
      <div className="
        px-8 pb-8 pt-4
        flex items-center justify-between
        border-t border-border
      ">
        <StateDots active={activeState} total={STATE_COUNT} />

        {/* Interaction hint — desktop only, fades out once hovered */}
        <span
          aria-hidden="true"
          className="
            font-modern text-[9px] uppercase tracking-[0.15em]
            text-silver-dim
            opacity-100 group-hover:opacity-0
            transition-opacity duration-300
            hidden md:block
          "
        >
          Hover to reveal
        </span>

        {/* Mobile tap hint */}
        <span
          aria-hidden="true"
          className="
            font-modern text-[9px] uppercase tracking-[0.15em]
            text-silver-dim
            md:hidden
          "
        >
          Tap to advance
        </span>
      </div>
    </motion.article>
  )
}