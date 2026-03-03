"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TracingBeam } from "./ui/tracing-beam"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Quote broken into paragraphs — each staggers in independently */
const QUOTE_PARAGRAPHS = [
  {
    id:     "p1",
    text:   "Most solutions treat the symptom.",
    accent: false,
  },
  {
    id:     "p2",
    text:   "We climb above the problem first.",
    accent: true,
  },
  {
    id:     "p3",
    text:   "From altitude, the root cause is always visible. The system we build targets that —",
    accent: false,
  },
  {
    id:     "p4",
    text:   "nothing else.",
    accent: true,
  },
] as const

/* ── QUOTE PARAGRAPH ─────────────────────────────────────────────────────── */
interface QuoteParagraphProps {
  paragraph: (typeof QUOTE_PARAGRAPHS)[number]
  index:     number
  inView:    boolean
}

function QuoteParagraph({ paragraph, index, inView }: QuoteParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay:    index * 0.2 + 0.1,
        duration: 0.7,
        ease:     PREMIUM_EASE,
      }}
      style={{ willChange: "opacity, transform" }}
      className={`
        font-ancient font-normal italic
        text-[clamp(18px,2.2vw,28px)]
        leading-[1.65] tracking-[0.03em]
        ${paragraph.accent ? "text-alabaster" : "text-granite"}
      `}
    >
      {paragraph.text}
    </motion.p>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  const leftInView  = useInView(leftRef,  { once: true, margin: "-80px" })
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" })

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      aria-labelledby="philosophy-heading"
      className="relative w-full py-32 md:py-40 px-6 section-surface-alt overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── SECTION LABEL ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={leftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          style={{ willChange: "opacity, transform" }}
          aria-hidden="true"
          className="section-label mb-12"
        >
          Philosophy
        </motion.div>

        {/* ── TWO-COLUMN GRID ───────────────────────────────────────────── */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-[1fr_2fr]
            gap-px
            bg-border
          "
        >

          {/* ── LEFT — Law label + heading + descriptor ───────────────── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -16 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="bg-obsidian p-10 md:p-14 flex flex-col gap-6"
          >
            {/* Law tag */}
            <span className="
              font-modern text-[9px] uppercase tracking-[0.3em]
              text-silver
            ">
              — The Seven Laws · Law I
            </span>

            {/* Law heading */}
            <h2
              id="philosophy-heading"
              className="
                font-ancient font-bold
                text-[clamp(28px,3vw,42px)]
                tracking-[0.05em] leading-[1.15]
                text-alabaster
              "
            >
              The Law<br />of Altitude
            </h2>

            {/* Silver rule */}
            <div
              aria-hidden="true"
              className="w-8 h-px bg-silver"
            />

            {/* Descriptor */}
            <p className="
              font-modern text-[12px] leading-[1.8]
              text-granite
              max-w-[280px]
            ">
              The system must solve the root cause, not the symptom.
              We look from above. From altitude, the answer is
              always visible.
            </p>

            {/* Law number — large decorative */}
            <span
              aria-hidden="true"
              className="
                font-ancient font-black
                text-[80px] leading-none tracking-tight
                text-[rgba(192,192,192,0.04)]
                mt-auto select-none
              "
            >
              I
            </span>
          </motion.div>

          {/* ── RIGHT — TracingBeam wraps the expanded quote ──────────── */}
          <div
            ref={rightRef}
            className="bg-obsidian p-10 md:p-14 md:pl-16"
          >
            <TracingBeam className="max-w-none">
              <div
                className="flex flex-col gap-8"
                role="blockquote"
                aria-label="The Law of Altitude — expanded"
              >
                {/* Opening mark */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={rightInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  aria-hidden="true"
                  className="
                    font-ancient text-[64px] leading-none
                    text-silver-dim
                    select-none -mb-4
                  "
                >
                  &quot;
                </motion.span>

                {/* Staggered quote paragraphs */}
                {QUOTE_PARAGRAPHS.map((para, i) => (
                  <QuoteParagraph
                    key={para.id}
                    paragraph={para}
                    index={i}
                    inView={rightInView}
                  />
                ))}

                {/* Closing attribution */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay:    QUOTE_PARAGRAPHS.length * 0.2 + 0.3,
                    duration: 0.6,
                    ease:     PREMIUM_EASE,
                  }}
                  style={{ willChange: "opacity, transform" }}
                  className="
                    pt-8 mt-4
                    border-t border-border
                    flex flex-col gap-2
                  "
                >
                  <span className="
                    font-modern text-[9px] uppercase tracking-[0.3em]
                    text-silver
                  ">
                    — Epopteia · The Seven Laws
                  </span>
                  <p className="
                    font-modern text-[11px] leading-[1.7]
                    text-granite
                    max-w-[420px]
                  ">
                    Every system built under Epopteia is held to this law
                    before any other. Root cause first. Always.
                  </p>
                </motion.div>

              </div>
            </TracingBeam>
          </div>

        </div>

        {/* ── MOBILE FALLBACK NOTE — TracingBeam left border ──────────── */}
        {/*    TracingBeam's absolute-positioned SVG uses -left-4 md:-left-20  */}
        {/*    On mobile this collapses — the section reads cleanly as prose   */}

      </div>
    </section>
  )
}