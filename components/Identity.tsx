"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const LAWS = [
  {
    number: "Law I",
    title:  "The Law of Altitude",
    body:   "We solve root causes, not symptoms. We climb above the problem first. From altitude, the answer is always visible.",
  },
  {
    number: "Law IV",
    title:  "The Law of Transparency",
    body:   "No black boxes. You understand every decision the system makes. Clarity is not a feature — it is the foundation.",
  },
  {
    number: "Law V",
    title:  "The Law of the Signature",
    body:   "The system speaks for itself. Quality needs no explanation. Every build is a declaration of standard.",
  },
  {
    number: "Law VII",
    title:  "The Law of Human Uplift",
    body:   "Technology is the servant. Your mind leads. Every system we build frees human attention for higher-order work.",
  },
] as const

/* ── LAW CARD ────────────────────────────────────────────────────────────── */
interface LawCardProps {
  law:    (typeof LAWS)[number]
  index:  number
  inView: boolean
}

function LawCard({ law, index, inView }: LawCardProps) {
  return (
    <motion.article
      aria-label={`${law.number} — ${law.title}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay:    index * 0.1,
        duration: 0.7,
        ease:     PREMIUM_EASE,
      }}
      style={{ willChange: "opacity, transform" }}
      className="
        group relative
        bg-obsidian
        p-8 md:p-10
        flex flex-col gap-4
        overflow-hidden
        transition-colors duration-300
        hover:bg-basalt-lift
      "
    >
      {/* Silver left accent bar — grows height on scroll enter */}
      <motion.span
        aria-hidden="true"
        initial={{ height: "0%" }}
        animate={inView ? { height: "100%" } : {}}
        transition={{
          delay:    index * 0.1 + 0.2,
          duration: 0.6,
          ease:     PREMIUM_EASE,
        }}
        style={{ willChange: "height" }}
        className="
          absolute top-0 left-0
          w-[2px] bg-silver
        "
      />

      {/* Law number */}
      <span className="
        font-modern text-[9px] uppercase tracking-[0.25em]
        text-silver-dim
      ">
        {law.number}
      </span>

      {/* Law title */}
      <h3 className="
        font-ancient font-semibold
        text-[clamp(13px,1.2vw,16px)]
        tracking-[0.05em] leading-snug
        text-silver
      ">
        {law.title}
      </h3>

      {/* Law body */}
      <p className="
        font-modern text-[12px] leading-[1.75]
        text-granite
      ">
        {law.body}
      </p>
    </motion.article>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Identity() {
  const topRef   = useRef<HTMLDivElement>(null)
  const lawsRef  = useRef<HTMLDivElement>(null)

  const topInView  = useInView(topRef,  { once: true, margin: "-80px" })
  const lawsInView = useInView(lawsRef, { once: true, margin: "-60px" })

  return (
    <section
      id="identity"
      aria-labelledby="identity-heading"
      className="relative w-full py-32 md:py-40 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── SECTION LABEL ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={topInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          style={{ willChange: "opacity, transform" }}
          aria-hidden="true"
          className="section-label mb-12"
        >
          What Epopteia Is
        </motion.div>

        {/* ── TOP BLOCK — 2-col: name left, mission right ───────────────── */}
        <div
          ref={topRef}
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-px
            bg-[rgba(255,255,255,0.07)]
            mb-px
          "
        >
          {/* LEFT — Name + etymology */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="bg-obsidian p-10 md:p-14 flex flex-col gap-6"
          >
            {/* Greek tag */}
            <span className="
              font-modern text-[9px] uppercase tracking-[0.3em]
              text-silver
            ">
              Ancient Greek · ἐποπτεία · eh-pop-TEY-ah
            </span>

            {/* Brand name */}
            <h2
              id="identity-heading"
              className="
                font-ancient font-black
                text-[clamp(36px,5vw,64px)]
                tracking-[0.1em] leading-none
                text-alabaster
              "
            >
              EPOPTEIA
            </h2>

            {/* Definition */}
            <blockquote className="
              border-l-2 border-silver-dim
              pl-5
              font-modern text-[13px] leading-[1.75]
              text-granite
              not-italic
            ">
              <p>
                The final stage of initiation in ancient Greek mystery
                traditions — the moment where the seeker moves from mystery
                and confusion into{" "}
                <span className="text-alabaster">direct revelation</span>{" "}
                and absolute clarity.
              </p>
            </blockquote>

            {/* Pronunciation footnote */}
            <span className="
              font-modern text-[10px] uppercase tracking-[0.15em]
              text-silver-dim mt-2
            ">
              Supreme Vision.
            </span>
          </motion.div>

          {/* RIGHT — Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="
              bg-obsidian p-10 md:p-14
              flex flex-col justify-center gap-8
            "
          >
            <span className="
              font-modern text-[9px] uppercase tracking-[0.3em]
              text-silver
            ">
              — Mission
            </span>

            <p className="
              font-ancient font-normal italic
              text-[clamp(18px,2vw,26px)]
              leading-[1.6] tracking-[0.03em]
              text-alabaster
            ">
              To strip away the fog of complexity and architect clarity
              through AI.
            </p>

            <div aria-hidden="true" className="w-10 h-px bg-silver-dim" />

            <p className="
              font-modern text-[13px] leading-[1.75]
              text-granite
              max-w-[400px]
            ">
              Technology is the servant. The goal is to free the human mind
              for higher-order work. Every system built under Epopteia must
              pass through the Seven Laws.
            </p>
          </motion.div>
        </div>

        {/* ── LAWS GRID — 4-col hairline ────────────────────────────────── */}
        <div
          ref={lawsRef}
          role="list"
          aria-label="The Seven Laws of the Epopteia OS — four shown"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-px
            bg-[rgba(255,255,255,0.07)]
          "
        >
          {LAWS.map((law, i) => (
            <div key={law.number} role="listitem">
              <LawCard law={law} index={i} inView={lawsInView} />
            </div>
          ))}
        </div>

        {/* ── SEVEN LAWS NOTE ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={lawsInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="
            mt-6
            font-modern text-[10px] uppercase tracking-[0.2em]
            text-silver-dim
            text-right
          "
        >
          Four of Seven Laws shown.
        </motion.p>

      </div>
    </section>
  )
}