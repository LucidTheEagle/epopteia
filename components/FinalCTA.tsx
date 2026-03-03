"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const STAGGER_ITEMS = [
  { id: "eyebrow",  delay: 0    },
  { id: "heading",  delay: 0.15 },
  { id: "subline",  delay: 0.30 },
  { id: "cta",      delay: 0.45 },
  { id: "tagline",  delay: 0.60 },
] as const

/* ── GEOMETRY RINGS — static, no rotation (distinct from Hero) ───────────── */
function StaticRings() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "min(700px,120vw)", height: "min(700px,120vw)" }}
      >
        <svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-[0.06]"
        >
          <circle cx="350" cy="350" r="348" stroke="#C0C0C0" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="240" stroke="#C0C0C0" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="140" stroke="#C0C0C0" strokeWidth="0.5" />
          <line x1="350" y1="2"   x2="350" y2="698" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="2"   y1="350" x2="698" y2="350" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="96"  y1="96"  x2="604" y2="604" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="604" y1="96"  x2="96"  y2="604" stroke="#C0C0C0" strokeWidth="0.3" />
          <polygon
            points="350,2 698,176 698,524 350,698 2,524 2,176"
            stroke="#C0C0C0" strokeWidth="0.3" fill="none"
          />
        </svg>
      </div>
      {/* Radial silver glow — center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width:      "700px",
          height:     "700px",
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,192,192,0.09) 0%, rgba(192,192,192,0.04) 40%, transparent 70%)",
        }}
      />
    </div>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const inView = useInView(contentRef, { once: true, margin: "-80px" })

  const openCalLink = () => {
    // TODO: replace # with Epopteia Cal.com link when available
    window.open("#", "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="cta"
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="
        relative w-full
        py-40 md:py-56
        px-6
        border-t border-border
        overflow-hidden
        geo-grid-overlay
      "
    >
      {/* Static geometry rings — distinct from Hero's rotating rings */}
      <StaticRings />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div
          ref={contentRef}
          className="flex flex-col items-center text-center gap-6"
        >

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay:    STAGGER_ITEMS[0].delay,
              duration: 0.7,
              ease:     PREMIUM_EASE,
            }}
            style={{ willChange: "opacity, transform" }}
            aria-hidden="true"
            className="section-label"
          >
            End of Fog
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay:    STAGGER_ITEMS[1].delay,
              duration: 0.8,
              ease:     PREMIUM_EASE,
            }}
            style={{ willChange: "opacity, transform" }}
            className="
              font-ancient font-black
              text-[clamp(36px,6vw,80px)]
              tracking-[0.06em] leading-[1.1]
              text-white
              max-w-[700px]
            "
          >
            The fog has a solution.
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay:    STAGGER_ITEMS[2].delay,
              duration: 0.7,
              ease:     PREMIUM_EASE,
            }}
            style={{ willChange: "opacity, transform" }}
            className="
              font-modern text-[13px] leading-[1.8]
              tracking-[0.08em]
              text-granite
              max-w-[440px]
            "
          >
            One conversation. We diagnose the blur.
            We architect the ascent.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay:    STAGGER_ITEMS[3].delay,
              duration: 0.7,
              ease:     PREMIUM_EASE,
            }}
            style={{ willChange: "opacity, transform" }}
            className="mt-4"
          >
            <button
              onClick={openCalLink}
              aria-label="Begin the Ascent — schedule your clarity session"
              className="
                relative overflow-hidden
                font-modern text-[11px] uppercase tracking-[0.2em]
                px-12 py-5
                text-obsidian bg-silver
                border border-silver
                transition-transform duration-200
                hover:-translate-y-[2px]
                focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-silver
                focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian
                group
                touch-manipulation
              "
            >
              {/* Fill sweep left → right */}
              <span
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-alabaster
                  -translate-x-full
                  transition-transform duration-300
                  group-hover:translate-x-0
                "
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
              <span className="relative z-10">Begin the Ascent</span>
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay:    STAGGER_ITEMS[4].delay,
              duration: 0.6,
              ease:     "easeOut",
            }}
            className="
              font-ancient
              text-[11px] uppercase tracking-[0.3em]
              text-silver-dim
              mt-2
            "
          >
            Epopteia. Supreme Vision.
          </motion.p>

        </div>
      </div>
    </section>
  )
}