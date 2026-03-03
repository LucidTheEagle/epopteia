"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const SYSTEM_LINKS = [
  { label: "PRISM",         href: "#systems" },
  { label: "NexOps",        href: "#systems" },
  { label: "Ascent Ledger", href: "#systems" },
] as const

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
  { label: "MSA",              href: "/msa"     },
] as const

/* ── FOOTER LINK ─────────────────────────────────────────────────────────── */
function FooterLink({
  label,
  href,
}: {
  label: string
  href:  string
}) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="
        group relative inline-block
        font-modern text-[12px] leading-[1.6]
        text-granite
        hover:text-alabaster
        transition-colors duration-200
        focus-visible:outline-none focus-visible:text-silver
      "
    >
      {label}
      {/* Underline sweep */}
      <span
        aria-hidden="true"
        className="
          absolute -bottom-px left-0
          h-px w-0 bg-silver-dim
          transition-[width] duration-300
          group-hover:w-full
        "
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
    </a>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const inView    = useInView(footerRef, { once: true, margin: "-40px" })

  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-label="Epopteia site footer"
      className="
        relative w-full
        border-t border-[rgba(255,255,255,0.07)]
        px-6
      "
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── MAIN FOOTER GRID ──────────────────────────────────────────── */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[2fr_1fr_1fr]
            gap-12 md:gap-8
            py-16 md:py-20
          "
        >

          {/* ── COL 1 — Brand + Creed ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="flex flex-col gap-5"
          >
            {/* Brand name */}
            <span className="
              font-ancient font-black
              text-[22px] tracking-[0.18em] uppercase
              text-alabaster
            ">
              EPOPTEIA
            </span>

            {/* Creed excerpt */}
            <p className="
              font-modern text-[12px] leading-[1.8]
              text-granite
              max-w-[300px]
            ">
              Clarity where there is blur, fog, and smoke. The end of
              confusion. The beginning of altitude.
            </p>

            {/* Pronunciation */}
            <span className="
              font-modern text-[10px] uppercase tracking-[0.2em]
              text-silver-dim
            ">
              eh-pop-TEY-ah
            </span>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="w-8 h-px bg-[rgba(255,255,255,0.07)] mt-2"
            />

            {/* Tagline */}
            <span className="
              font-ancient text-[11px] uppercase tracking-[0.25em]
              text-silver-dim italic
            ">
              Supreme Vision.
            </span>
          </motion.div>

          {/* ── COL 2 — Systems ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="flex flex-col gap-4"
          >
            <span className="
              font-modern text-[9px] uppercase tracking-[0.25em]
              text-silver
              mb-2
            ">
              Systems
            </span>

            <nav aria-label="Epopteia systems navigation">
              <ul className="flex flex-col gap-3" role="list">
                {SYSTEM_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── COL 3 — Legal ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: PREMIUM_EASE }}
            style={{ willChange: "opacity, transform" }}
            className="flex flex-col gap-4"
          >
            <span className="
              font-modern text-[9px] uppercase tracking-[0.25em]
              text-silver
              mb-2
            ">
              Legal
            </span>

            <nav aria-label="Legal pages navigation">
              <ul className="flex flex-col gap-3" role="list">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-3
            py-6
            border-t border-[rgba(255,255,255,0.07)]
          "
        >
          <span className="
            font-modern text-[10px] uppercase tracking-[0.15em]
            text-silver-dim
          ">
            © {currentYear} Epopteia. All rights reserved.
          </span>

          <span className="
            font-ancient text-[10px] uppercase tracking-[0.25em]
            text-silver
            italic
          ">
            Supreme Vision.
          </span>
        </motion.div>

      </div>
    </footer>
  )
}