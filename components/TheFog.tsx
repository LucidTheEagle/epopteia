"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const FOG_STATES = [
  {
    index:   "01",
    subject: "Business Owner",
    title:   "The Data-Drowned Owner",
    body:    "You have more data than decisions. Reports that arrive after the moment has passed. Dashboards that describe the past but offer nothing for tomorrow. You are not uninformed. You are buried.",
    tag:     "Symptom: Information without altitude.",
  },
  {
    index:   "02",
    subject: "Founder",
    title:   "The Decision-Blind Founder",
    body:    "You are moving fast. But fast in the wrong direction is not momentum — it is acceleration toward the wrong wall. The fog does not announce itself. It simply makes every direction look the same.",
    tag:     "Symptom: Speed without clarity.",
  },
  {
    index:   "03",
    subject: "Operations",
    title:   "The Reactive Operations Team",
    body:    "Every crisis feels sudden. It was not. The signals were there — in the data, in the delays, in the pattern. The system was not built to read them. So you read the fire instead of the smoke.",
    tag:     "Symptom: Reaction without foresight.",
  },
] as const

/* ── FOG CARD ────────────────────────────────────────────────────────────── */
interface FogCardProps {
  card:  (typeof FOG_STATES)[number]
  index: number
  inView: boolean
}

function FogCard({ card, index, inView }: FogCardProps) {
  return (
    <motion.article
      aria-label={`Fog state ${card.index} — ${card.title}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay:    index * 0.15,
        duration: 0.7,
        ease:     PREMIUM_EASE,
      }}
      style={{ willChange: "opacity, transform" }}
      className="
        group relative
        bg-obsidian
        p-10 md:p-12
        flex flex-col
        overflow-hidden
        focus-within:bg-basalt-lift
        transition-colors duration-300
      "
    >
      {/* Silver bottom border — slides in from left on hover */}
      <span
        aria-hidden="true"
        className="
          absolute bottom-0 left-0
          h-[2px] w-0 bg-silver
          transition-[width] duration-500
          group-hover:w-full
        "
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />

      {/* Index */}
      <span
        aria-hidden="true"
        className="
          font-modern text-[10px] uppercase tracking-[0.25em]
          text-silver-dim mb-6
        "
      >
        {card.index}
      </span>

      {/* Subject tag */}
      <span className="
        font-modern text-[9px] uppercase tracking-[0.2em]
        text-granite mb-3
      ">
        {card.subject}
      </span>

      {/* Title */}
      <h3 className="
        font-ancient text-[clamp(16px,1.5vw,20px)]
        font-semibold tracking-[0.04em]
        text-alabaster mb-5
        leading-snug
      ">
        {card.title}
      </h3>

      {/* Body */}
      <p className="
        font-modern text-[13px] leading-[1.75]
        text-granite
        flex-1
      ">
        {card.body}
      </p>

      {/* Diagnostic tag */}
      <div className="
        mt-8 pt-6
        border-t border-[rgba(255,255,255,0.07)]
      ">
        <span className="
          font-modern text-[10px] uppercase tracking-[0.15em]
          text-silver-dim
          italic
        ">
          {card.tag}
        </span>
      </div>
    </motion.article>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function TheFog() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })
  const gridInView   = useInView(gridRef,   { once: true, margin: "-60px" })

  return (
    <section
      id="fog"
      ref={sectionRef}
      aria-labelledby="fog-heading"
      className="relative w-full py-32 md:py-40 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── HEADER ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-16 md:mb-20">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            aria-hidden="true"
            className="section-label mb-5"
          >
            Diagnosis
          </motion.div>

          {/* Section heading */}
          <motion.h2
            id="fog-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="
              font-ancient font-normal
              text-[clamp(22px,3vw,36px)]
              tracking-[0.04em] leading-[1.4]
              text-granite
              max-w-[540px]
            "
          >
            You are not the only one{" "}
            <span className="text-alabaster">operating blind.</span>
          </motion.h2>
        </div>

        {/* ── HAIRLINE GRID — 1px gap ───────────────────────────────────── */}
        <div
          ref={gridRef}
          role="list"
          aria-label="Three fog states — diagnostic profiles"
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-px
            bg-[rgba(255,255,255,0.07)]
          "
        >
          {FOG_STATES.map((card, i) => (
            <div key={card.index} role="listitem">
              <FogCard card={card} index={i} inView={gridInView} />
            </div>
          ))}
        </div>

        {/* ── BOTTOM DIVIDER ────────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={gridInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: PREMIUM_EASE }}
          style={{ transformOrigin: "left", willChange: "transform" }}
          aria-hidden="true"
          className="mt-16 h-px bg-[rgba(255,255,255,0.07)]"
        />

      </div>
    </section>
  )
}