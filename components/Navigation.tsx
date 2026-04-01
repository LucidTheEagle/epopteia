"use client"

import { useState } from "react"

const CAL_LINK = "https://cal.com/lucid-theeagle-ebabkz/begin-the-ascent"

const NAV_LINKS = [
  { label: "File",      id: "hero"       },
  { label: "Systems",   id: "work"       },
  { label: "Philosophy",id: "philosophy" },
  { label: "Who",       id: "filter"     },
  { label: "Help",      id: "cta"        },
] as const

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    setActiveMenu(null)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const openBooking = () => window.open(CAL_LINK, "_blank", "noopener,noreferrer")

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif" }}
    >
      {/* ── TASKBAR / TITLE BAR AREA ────────────────────────────────────── */}
      {/* Menu bar row */}
      <div
        className="win-menubar flex items-center justify-between px-2"
        style={{
          background: "#d4d0c8",
          borderBottom: "1px solid #808080",
          height: "22px",
        }}
      >
        {/* Left: brand as "app name" */}
        <div className="flex items-center gap-0">
          {/* App icon placeholder */}
          <div
            aria-hidden="true"
            style={{
              width: "16px",
              height: "16px",
              background: "linear-gradient(135deg, #0a246a 50%, #a6caf0 100%)",
              border: "1px solid #808080",
              marginRight: "4px",
              flexShrink: 0,
            }}
          />
          <span
            className="font-bold"
            style={{ fontSize: "11px", color: "#000", userSelect: "none" }}
          >
            EPOPTEIA
          </span>

          <div
            aria-hidden="true"
            style={{
              width: "1px",
              height: "16px",
              background: "#808080",
              margin: "0 6px",
              borderRight: "1px solid #fff",
            }}
          />

          {/* Menu items */}
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => setActiveMenu(link.label)}
              onMouseLeave={() => setActiveMenu(null)}
              className="win-menu-item"
              style={{
                fontSize: "11px",
                background: activeMenu === link.label ? "#316ac5" : "transparent",
                color: activeMenu === link.label ? "#fff" : "#000",
                border: "none",
                cursor: "default",
                padding: "1px 6px",
                fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: CTA as a small button */}
        <button
          onClick={openBooking}
          aria-label="Begin the Ascent — book a clarity session"
          className="win-btn"
          style={{
            fontSize: "10px",
            padding: "1px 8px",
            height: "18px",
            minWidth: "auto",
            fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
          }}
        >
          Begin the Ascent
        </button>
      </div>

      {/* ── TOOLBAR STRIP ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: "#d4d0c8",
          borderBottom: "1px solid #808080",
          height: "24px",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: "2px",
        }}
      >
        {/* Toolbar button icons as text symbols */}
        {["◄", "►", "⬆", "✕", "⟳"].map((icon, i) => (
          <button
            key={i}
            aria-hidden="true"
            style={{
              width: "22px",
              height: "20px",
              background: "#d4d0c8",
              border: "1px solid transparent",
              fontSize: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "default",
              fontFamily: "'Tahoma', Arial, sans-serif",
              color: i < 2 ? "#808080" : "#000",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.border = "1px solid #316ac5"
              ;(e.currentTarget as HTMLButtonElement).style.background = "#e8e4dc"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.border = "1px solid transparent"
              ;(e.currentTarget as HTMLButtonElement).style.background = "#d4d0c8"
            }}
          >
            {icon}
          </button>
        ))}

        <div
          aria-hidden="true"
          style={{
            width: "1px",
            height: "16px",
            background: "#808080",
            borderRight: "1px solid #fff",
            margin: "0 3px",
          }}
        />

        {/* Address bar */}
        <div
          style={{
            flex: 1,
            height: "18px",
            background: "#fff",
            border: "1px solid",
            borderColor: "#808080 #fff #fff #808080",
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            marginRight: "4px",
          }}
        >
          <span style={{ fontSize: "11px", color: "#000", fontFamily: "'Tahoma', Arial, sans-serif" }}>
            https://epopteia.io/clarity-architecture
          </span>
        </div>

        <button
          style={{
            padding: "1px 8px",
            background: "#d4d0c8",
            border: "1px solid",
            borderColor: "#fff #808080 #808080 #fff",
            fontSize: "11px",
            cursor: "default",
            fontFamily: "'Tahoma', Arial, sans-serif",
            height: "20px",
          }}
        >
          Go
        </button>
      </div>
    </nav>
  )
}
