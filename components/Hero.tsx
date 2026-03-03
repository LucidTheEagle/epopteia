"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const DECLARATION =
  "You are not confused. You are operating without clarity. " +
  "There is a difference. One is permanent. The other is solvable."

const BRAND_LETTERS = "EPOPTEIA".split("")

/* ── SACRED GEOMETRY SVG ─────────────────────────────────────────────────── */
/*    Alchemical compass rings — pure CSS rotation, no JS                     */
function GeometryRings() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Outer ring */}
      <div
        className="animate-geo-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "min(900px,140vw)", height: "min(900px,140vw)" }}
      >
        <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.04]">
          <circle cx="450" cy="450" r="448" stroke="#C0C0C0" strokeWidth="0.5" />
          <circle cx="450" cy="450" r="320" stroke="#C0C0C0" strokeWidth="0.5" />
          {/* Hexagram construction lines */}
          <line x1="450" y1="2"   x2="450" y2="898" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="2"   y1="450" x2="898" y2="450" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="127" y1="127" x2="773" y2="773" stroke="#C0C0C0" strokeWidth="0.3" />
          <line x1="773" y1="127" x2="127" y2="773" stroke="#C0C0C0" strokeWidth="0.3" />
          {/* Outer hexagon */}
          <polygon
            points="450,2 840,226 840,674 450,898 60,674 60,226"
            stroke="#C0C0C0" strokeWidth="0.3" fill="none"
          />
          {/* Inner hexagon rotated */}
          <polygon
            points="450,130 750,300 750,600 450,770 150,600 150,300"
            stroke="#C0C0C0" strokeWidth="0.3" fill="none"
          />
        </svg>
      </div>

      {/* Inner ring — counter-rotates */}
      <div
        className="animate-geo-rotate-reverse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "min(500px,80vw)", height: "min(500px,80vw)" }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.03]">
          <circle cx="250" cy="250" r="248" stroke="#C0C0C0" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="160" stroke="#C0C0C0" strokeWidth="0.5" />
          {/* Inner compass */}
          <line x1="250" y1="2"   x2="250" y2="498" stroke="#C0C0C0" strokeWidth="0.4" />
          <line x1="2"   y1="250" x2="498" y2="250" stroke="#C0C0C0" strokeWidth="0.4" />
          <polygon
            points="250,2 498,126 498,374 250,498 2,374 2,126"
            stroke="#C0C0C0" strokeWidth="0.4" fill="none"
          />
          {/* Eye at center */}
          <ellipse cx="250" cy="250" rx="40" ry="20" stroke="#C0C0C0" strokeWidth="0.5" fill="none" />
          <circle  cx="250" cy="250" r="8"   stroke="#C0C0C0" strokeWidth="0.5" fill="none" />
          <circle  cx="250" cy="250" r="2"   fill="#C0C0C0" opacity="0.4" />
        </svg>
      </div>

      {/* Radial silver glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width:      "600px",
          height:     "600px",
          background: "radial-gradient(circle, rgba(192,192,192,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}

/* ── BRAND NAME WITH LETTER STAGGER ──────────────────────────────────────── */
function BrandName({ startDelay }: { startDelay: number }) {
  return (
    <div
      aria-label="Epopteia"
      className="flex items-center justify-center"
    >
      {BRAND_LETTERS.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:    startDelay + i * 0.08,
            duration: 0.5,
            ease:     PREMIUM_EASE,
          }}
          style={{ willChange: "opacity" }}
          className="
            font-ancient font-black
            text-[clamp(52px,9vw,112px)]
            tracking-[0.12em] leading-none
            text-alabaster
          "
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

/* ── SCROLL INDICATOR ────────────────────────────────────────────────────── */
function ScrollIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      aria-hidden="true"
      className="flex flex-col items-center gap-3 mt-16"
    >
      <div
        className="animate-scroll-pulse w-px h-8 bg-gradient-to-b from-transparent to-granite"
      />
      <span className="font-modern text-[10px] uppercase tracking-[0.2em] text-granite">
        Descend
      </span>
    </motion.div>
  )
}

/* ── CTA BUTTON ──────────────────────────────────────────────────────────── */
function HeroCTA({ delay, onClick }: { delay: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: PREMIUM_EASE }}
      style={{ willChange: "opacity, transform" }}
      className="flex flex-col items-center gap-6"
    >
      <button
        onClick={onClick}
        aria-label="Begin the Ascent — start your clarity session"
        className="
          relative overflow-hidden
          font-modern text-[11px] uppercase tracking-[0.2em]
          px-10 py-4
          text-obsidian bg-silver
          border border-silver
          transition-transform duration-200 hover:-translate-y-[2px]
          focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-silver focus-visible:ring-offset-2
          focus-visible:ring-offset-obsidian
          group
          touch-manipulation
        "
      >
        {/* Fill sweep */}
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
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Hero() {
  const [hasHydrated, setHasHydrated] = useState(false)
  const [isMobile,    setIsMobile]    = useState(false)
  const prefersReduced                = useReducedMotion()
  const rafRef                        = useRef<number>(0)

  useEffect(() => {
    setHasHydrated(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()

    const handleResize = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(checkMobile)
    }

    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const openCalLink = () => {
    // TODO: replace # with Epopteia Cal.com link when available
    window.open("#", "_blank", "noopener,noreferrer")
  }

  /* When reduced motion is preferred, collapse all delays to near-zero */
  const t = (base: number) => (prefersReduced ? 0 : base)

  /* Letter stagger starts after TextGenerateEffect completes */
  const letterStaggerStart = isMobile ? 1.2 : 2.0

  return (
    <section
      id="hero"
      aria-label="Hero — Epopteia clarity architecture"
      className="
        relative min-h-screen w-full
        flex flex-col items-center justify-center
        overflow-hidden
        px-6
        pt-[72px] {/* offset fixed nav */}
      "
    >
      {/* ── BACKGROUND ─────────────────────────────────────────────────── */}
      <GeometryRings />

      {/* Spotlight — desktop only, silver-tuned */}
      {hasHydrated && !isMobile && (
        <>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(192,192,192,0.12)"
          />
          <Spotlight
            className="-top-40 right-0 md:right-60 md:-top-20"
            fill="rgba(192,192,192,0.06)"
          />
        </>
      )}

      {/* ── CONTENT ────────────────────────────────────────────────────── */}
      <div
        className="
          relative z-10 w-full
          max-w-[800px] mx-auto
          text-center
          flex flex-col items-center
        "
      >

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: t(0.2), duration: 0.7, ease: PREMIUM_EASE }}
          style={{ willChange: "opacity, transform" }}
          className="
            font-modern text-[10px] uppercase tracking-[0.35em]
            text-silver mb-12
          "
          aria-hidden="true"
        >
          — Clarity Architecture
        </motion.div>

        {/* Declaration */}
        <div className="mb-12 md:mb-16 max-w-[680px]">
          {hasHydrated ? (
            <TextGenerateEffect
              words={DECLARATION}
              className="
                font-ancient font-normal
                text-[clamp(18px,2.8vw,32px)]
                leading-[1.55] tracking-[0.03em]
                text-alabaster
              "
              filter={!isMobile && !prefersReduced}
              duration={isMobile ? 0.3 : 0.7}
            />
          ) : (
            /* SSR fallback — prevents CLS, matches final rendered output */
            <p
              className="
                font-ancient font-normal
                text-[clamp(18px,2.8vw,32px)]
                leading-[1.55] tracking-[0.03em]
                text-alabaster
              "
            >
              {DECLARATION}
            </p>
          )}
        </div>

        {/* Brand name — letter stagger */}
        {hasHydrated ? (
          <BrandName startDelay={t(letterStaggerStart)} />
        ) : (
          <p
            aria-label="Epopteia"
            className="
              font-ancient font-black
              text-[clamp(52px,9vw,112px)]
              tracking-[0.12em] leading-none
              text-alabaster
            "
          >
            EPOPTEIA
          </p>
        )}

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:    t(letterStaggerStart + BRAND_LETTERS.length * 0.08 + 0.2),
            duration: 0.7,
            ease:     PREMIUM_EASE,
          }}
          style={{ willChange: "opacity, transform" }}
          className="
            font-modern text-[13px] uppercase tracking-[0.3em]
            text-granite mt-4 mb-12
          "
        >
          We architect the ascent.
        </motion.p>

        {/* CTA */}
        <HeroCTA
          delay={t(letterStaggerStart + BRAND_LETTERS.length * 0.08 + 0.5)}
          onClick={openCalLink}
        />

        {/* Scroll indicator */}
        <ScrollIndicator
          delay={t(letterStaggerStart + BRAND_LETTERS.length * 0.08 + 1.0)}
        />
      </div>
    </section>
  )
}