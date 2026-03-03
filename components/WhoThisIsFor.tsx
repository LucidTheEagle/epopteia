"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function WhoThisIsFor() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const inView = useInView(contentRef, { once: true, margin: "-80px" })

  return (
    <section
      id="filter"
      ref={sectionRef}
      aria-labelledby="filter-heading"
      className="relative w-full py-32 md:py-40 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── SECTION LABEL ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          style={{ willChange: "opacity, transform" }}
          aria-hidden="true"
          className="section-label mb-12"
        >
          Who This Is For
        </motion.div>

        {/* ── TWO-COLUMN GRID ───────────────────────────────────────────── */}
        <div
          ref={contentRef}
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-px
            bg-border
          "
        >

          {/* ── LEFT — Qualifier statement ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="bg-obsidian p-10 md:p-14 flex flex-col gap-8"
          >
            <h2
              id="filter-heading"
              className="
                font-ancient font-normal
                text-[clamp(18px,2.2vw,28px)]
                tracking-[0.03em] leading-[1.6]
                text-alabaster
              "
            >
              Epopteia is built for the operator who already suspects the
              problem runs deeper than the surface.
            </h2>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="w-10 h-px bg-silver-dim"
            />

            <p className="
              font-ancient font-normal
              text-[clamp(16px,1.8vw,22px)]
              tracking-[0.03em] leading-[1.65]
              text-granite
            ">
              The founder who knows the fog is structural. The business owner
              who is done explaining their vision to systems that{" "}
              <span className="text-alabaster">cannot see it.</span>
            </p>
          </motion.div>

          {/* ── RIGHT — Binary filter ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="
              bg-obsidian p-10 md:p-14
              flex flex-col justify-center gap-10
            "
            aria-label="Who this is not for, and who it is for"
          >

            {/* NOT for */}
            <div className="flex flex-col gap-4">
              <span className="
                font-modern text-[9px] uppercase tracking-[0.3em]
                text-silver-dim
              ">
                — Not for you
              </span>
              <p className="
                font-modern text-[13px] leading-[1.8]
                text-granite
              ">
                If you are looking for a chatbot,{" "}
                <span className="
                  text-granite line-through
                  decoration-silver-dim decoration-1
                ">
                  this is not for you.
                </span>
              </p>
            </div>

            {/* Hairline divider */}
            <div
              aria-hidden="true"
              className="h-px bg-border w-full"
            />

            {/* FOR */}
            <div className="flex flex-col gap-4">
              <span className="
                font-modern text-[9px] uppercase tracking-[0.3em]
                text-silver
              ">
                — For you
              </span>
              <p className="
                font-modern text-[13px] leading-[1.8]
                text-alabaster
              ">
                If you are looking for clarity as infrastructure —{" "}
                <span className="text-silver font-medium">
                  you are in the right place.
                </span>
              </p>
            </div>

            {/* Subtle CTA nudge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="
                pt-6 border-t border-border
                flex items-center gap-3
              "
            >
              <span
                aria-hidden="true"
                className="w-4 h-px bg-silver-dim shrink-0"
              />
              <span className="
                font-modern text-[10px] uppercase tracking-[0.2em]
                text-silver-dim
              ">
                One conversation. That is all it takes to know.
              </span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}