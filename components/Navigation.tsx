"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const CAL_LINK = "https://cal.com/lucid-theeagle-ebabkz/begin-the-ascent"

/* Section IDs must match the id="" on each section component exactly:
   Systems.tsx  → id="work"
   Philosophy   → id="philosophy"
   WhoThisIsFor → id="filter"                                               */
const NAV_LINKS = [
  { label: "Systems",    id: "work"       },
  { label: "Philosophy", id: "philosophy" },
  { label: "Work",       id: "filter"     },
] as const

/* ── ABSTRACT MENU ICON ──────────────────────────────────────────────────── */
function EpopteiaMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24" height="16" viewBox="0 0 24 16"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.line
        x1="0" y1="1" x2="24" y2="1"
        stroke="currentColor" strokeWidth="1"
        animate={isOpen
          ? { x1: 4, y1: 4, x2: 20, y2: 12, opacity: 1 }
          : { x1: 0, y1: 1, x2: 24, y2:  1, opacity: 1 }
        }
        transition={{ duration: 0.35, ease: PREMIUM_EASE }}
      />
      <motion.line
        x1="0" y1="8" x2="20" y2="8"
        stroke="currentColor" strokeWidth="1"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.line
        x1="6" y1="15" x2="24" y2="15"
        stroke="currentColor" strokeWidth="1"
        animate={isOpen
          ? { x1: 4, y1: 12, x2: 20, y2: 4, opacity: 1 }
          : { x1: 6, y1: 15, x2: 24, y2: 15, opacity: 1 }
        }
        transition={{ duration: 0.35, ease: PREMIUM_EASE }}
      />
    </svg>
  )
}

/* ── DESKTOP NAV LINK ────────────────────────────────────────────────────── */
function DesktopNavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        font-modern text-xs uppercase tracking-[0.15em]
        text-granite hover:text-alabaster
        transition-colors duration-200
        focus-visible:outline-none focus-visible:text-alabaster
        group
      "
    >
      {label}
      <span
        aria-hidden="true"
        className="
          absolute -bottom-1 left-0
          h-px w-0 bg-silver
          transition-[width] duration-300
          group-hover:w-full
        "
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
    </button>
  )
}

/* ── NAV CTA BUTTON ──────────────────────────────────────────────────────── */
function NavCTAButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Begin the Ascent — book a clarity session"
      className="
        relative overflow-hidden
        font-modern text-[11px] uppercase tracking-[0.15em]
        px-6 py-[10px]
        text-obsidian bg-silver border border-silver
        transition-transform duration-200 hover:-translate-y-px
        focus-visible:outline-none focus-visible:ring-1
        focus-visible:ring-silver focus-visible:ring-offset-2
        focus-visible:ring-offset-obsidian
        group
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute inset-0 bg-alabaster
          -translate-x-full transition-transform duration-300
          group-hover:translate-x-0
        "
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
      <span className="relative z-10">Begin the Ascent</span>
    </button>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Navigation() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rafRef                              = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => setScrolled(window.scrollY > 50))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  const scrollToSection = (id: string) => {
    closeMenu()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  const openBooking = () => window.open(CAL_LINK, "_blank", "noopener,noreferrer")

  return (
    <>
      {/* ── DESKTOP NAV ──────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: PREMIUM_EASE }}
        style={{ willChange: "opacity, transform" }}
        role="navigation"
        aria-label="Main navigation"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-[border-color,background] duration-300
          ${scrolled
            ? "border-b border-border"
            : "border-b border-transparent"
          }
        `}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundColor:      scrolled ? "rgba(5,5,5,0.85)" : "transparent",
            backdropFilter:       scrolled ? "blur(20px)"        : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)"        : "none",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

          <button
            onClick={() => scrollToSection("hero")}
            aria-label="Epopteia — return to top"
            className="
              font-ancient text-lg md:text-xl font-black
              tracking-[0.2em] uppercase text-alabaster
              transition-opacity duration-200 hover:opacity-80
              focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-silver focus-visible:ring-offset-2
              focus-visible:ring-offset-obsidian
            "
          >
            EPOPTEIA
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink
                key={link.id}
                label={link.label}
                onClick={() => scrollToSection(link.id)}
              />
            ))}
            <NavCTAButton onClick={openBooking} />
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="
              md:hidden relative z-50
              p-2 -mr-2
              text-alabaster hover:text-silver
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-silver
              touch-manipulation
            "
          >
            <EpopteiaMenuIcon isOpen={mobileMenuOpen} />
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop — tap anywhere on empty space closes */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-obsidian/95 cursor-pointer"
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              onClick={closeMenu}
              onTouchEnd={(e) => { e.preventDefault(); closeMenu() }}
            />

            {/* Content — NO stopPropagation on wrapper.
                Tapping empty space bubbles to backdrop → closeMenu.
                Each button handles its own stopPropagation.              */}
            <div className="relative h-full flex flex-col items-center justify-center gap-10 px-6 z-10">

              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={(e) => { e.stopPropagation(); scrollToSection(link.id) }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.05, duration: 0.5, ease: PREMIUM_EASE }}
                  style={{ willChange: "opacity, transform" }}
                  className="
                    font-ancient text-2xl uppercase tracking-[0.15em]
                    text-alabaster hover:text-silver
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-1
                    focus-visible:ring-silver
                    touch-manipulation
                  "
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                onClick={(e) => { e.stopPropagation(); openBooking() }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay:    NAV_LINKS.length * 0.08 + 0.1,
                  duration: 0.5,
                  ease:     PREMIUM_EASE,
                }}
                style={{ willChange: "opacity, transform" }}
                aria-label="Begin the Ascent — book a clarity session"
                className="
                  font-modern text-sm uppercase tracking-[0.15em]
                  border border-silver text-silver
                  px-8 py-4
                  hover:bg-silver hover:text-obsidian
                  transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-1
                  focus-visible:ring-silver
                  touch-manipulation
                "
              >
                Begin the Ascent
              </motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}