"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Systems",    id: "systems"    },
  { label: "Philosophy", id: "philosophy" },
  { label: "Work",       id: "work"       },
] as const

const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ── TYPES ───────────────────────────────────────────────────────────────── */
interface NavLinkProps {
  label: string
  onClick: () => void
  tabIndex?: number
}

/* ── SUB-COMPONENTS ──────────────────────────────────────────────────────── */
function DesktopNavLink({ label, onClick }: NavLinkProps) {
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
      {/* Underline sweep */}
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

function NavCTAButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Begin the Ascent — schedule a clarity session"
      className="
        relative overflow-hidden
        font-modern text-[11px] uppercase tracking-[0.15em]
        px-6 py-[10px]
        text-obsidian bg-silver
        border border-silver
        transition-transform duration-200
        hover:-translate-y-px
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian
        group
      "
    >
      {/* Fill sweep on hover */}
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
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Navigation() {
  const [scrolled,        setScrolled]        = useState(false)
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false)

  /* Scroll state — debounced, passive listener */
  useEffect(() => {
    let raf: number
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* Body scroll lock when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  /* Keyboard: close mobile menu on Escape */
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const openCalLink = () => {
    // TODO: replace # with Epopteia Cal.com link when available
    window.open("#", "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* ── DESKTOP / TABLET NAV ─────────────────────────────────────────── */}
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
            ? "border-b border-[rgba(255,255,255,0.07)]"
            : "border-b border-transparent"
          }
        `}
      >
        {/* Frosted glass backdrop — GPU composited */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
            backdropFilter:  scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

          {/* ── BRAND ──────────────────────────────────────────────────── */}
          <button
            onClick={() => scrollToSection("hero")}
            aria-label="Epopteia — return to top"
            className="
              font-ancient text-lg md:text-xl
              font-black tracking-[0.2em] uppercase
              text-alabaster
              transition-opacity duration-200 hover:opacity-80
              focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-silver focus-visible:ring-offset-2
              focus-visible:ring-offset-obsidian
            "
          >
            EPOPTEIA
          </button>

          {/* ── DESKTOP LINKS ──────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink
                key={link.id}
                label={link.label}
                onClick={() => scrollToSection(link.id)}
              />
            ))}

            <NavCTAButton onClick={openCalLink} />
          </div>

          {/* ── HAMBURGER ──────────────────────────────────────────────── */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="
              md:hidden
              relative z-50
              p-2 -mr-2
              text-alabaster hover:text-silver
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-silver
              touch-manipulation
            "
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
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
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-obsidian/95"
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            />

            {/* Menu content */}
            <div
              className="relative h-full flex flex-col items-center justify-center gap-10 px-6 z-10"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Nav links */}
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.05, duration: 0.5, ease: PREMIUM_EASE }}
                  style={{ willChange: "opacity, transform" }}
                  className="
                    font-ancient text-2xl uppercase tracking-[0.15em]
                    text-alabaster hover:text-silver
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver
                    touch-manipulation
                  "
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                onClick={() => { openCalLink(); setMobileMenuOpen(false) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: NAV_LINKS.length * 0.08 + 0.1,
                  duration: 0.5,
                  ease: PREMIUM_EASE,
                }}
                style={{ willChange: "opacity, transform" }}
                aria-label="Begin the Ascent — schedule a clarity session"
                className="
                  font-modern text-sm uppercase tracking-[0.15em]
                  border border-silver text-silver
                  px-8 py-4
                  hover:bg-silver hover:text-obsidian
                  transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver
                  touch-manipulation
                "
              >
                Begin the Ascent
              </motion.button>

              {/* Dismiss hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                aria-hidden="true"
                className="
                  absolute bottom-10
                  font-modern text-[10px] uppercase tracking-[0.2em]
                  text-granite
                "
              >
                Tap anywhere to close
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}