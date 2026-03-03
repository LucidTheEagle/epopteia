"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { SystemCard } from "./proof/index"
import { PRISM }         from "./proof/Prism"
import { NEXOPS }        from "./proof/NexOps"
import { ASCENT_LEDGER } from "./proof/AscentLedger"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const SYSTEMS = [PRISM, NEXOPS, ASCENT_LEDGER] as const

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Systems() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)
  const rafRef    = useRef<number>(0)

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })
  const gridInView   = useInView(gridRef,   { once: true, margin: "-60px" })

  /* Mobile detection — rAF debounced */
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()

    const handleResize = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(check)
    }

    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section
      id="work"
      aria-labelledby="systems-heading"
      className="relative w-full py-32 md:py-40 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── HEADER ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-16 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            aria-hidden="true"
            className="section-label mb-5"
          >
            Production Systems
          </motion.div>

          <motion.h2
            id="systems-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="
              font-ancient font-normal
              text-[clamp(22px,3vw,36px)]
              tracking-[0.04em] leading-[1.4]
              text-alabaster
              max-w-[560px]
            "
          >
            The Work.{" "}
            <span className="text-granite">
              Three Systems. Three Industries.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="
              font-modern text-[12px] leading-[1.75]
              text-granite
              max-w-[480px] mt-5
            "
          >
            Each system built to a specific fog state. Each one in production.
            Hover a card to watch the diagnosis resolve.
          </motion.p>
        </div>

        {/* ── SYSTEMS GRID — hairline 1px ───────────────────────────────── */}
        <div
          ref={gridRef}
          role="list"
          aria-label="Epopteia production systems"
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-px
            bg-border
          "
        >
          {SYSTEMS.map((system, i) => (
            <div key={system.id} role="listitem">
              <SystemCard
                system={system}
                inView={gridInView}
                index={i}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>

        {/* ── BOTTOM NOTE ───────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
          className="
            mt-6
            font-modern text-[10px] uppercase tracking-[0.2em]
            text-silver-dim
            text-right
          "
        >
          Each system is a production deployment — not a prototype.
        </motion.p>

      </div>
    </section>
  )
}