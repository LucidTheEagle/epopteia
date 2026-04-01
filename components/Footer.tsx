"use client"

const SYSTEM_LINKS = [
  { label: "PRISM",         href: "https://prism-mu-one.vercel.app/" },
  { label: "NexOps",        href: "https://nexops-three.vercel.app/" },
  { label: "Ascent Ledger", href: "https://ascent-ledger.vercel.app/" },
] as const

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
  { label: "MSA",              href: "/msa"     },
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      aria-label="Epopteia site footer"
      style={{
        background: "#3a6ea5",
        padding: "0 16px 16px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      {/* Windows Explorer-style footer window */}
      <div
        className="win-window"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Title bar */}
        <div
          className="win-titlebar"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              aria-hidden="true"
              style={{
                width: "14px",
                height: "14px",
                background: "linear-gradient(135deg, #fff 30%, #a6caf0 100%)",
                border: "1px solid rgba(255,255,255,0.3)",
                flexShrink: 0,
              }}
            />
            <span>Epopteia — Supreme Vision</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Footer body */}
        <div
          style={{
            background: "#d4d0c8",
            padding: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
          }}
        >
          {/* Col 1 — Brand */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "0.18em",
                color: "#0a246a",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              EPOPTEIA
            </span>

            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.7",
                color: "#555",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              Clarity where there is blur, fog, and smoke. The end of
              confusion. The beginning of altitude.
            </p>

            <p
              style={{
                fontSize: "10px",
                color: "#808080",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              eh-pop-TEY-ah
            </p>

            <hr style={{ border: "none", borderTop: "1px solid #d4d0c8" }} />

            <span
              style={{
                fontSize: "10px",
                color: "#808080",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontFamily: "'Tahoma', Arial, sans-serif",
                fontStyle: "italic",
              }}
            >
              Supreme Vision.
            </span>
          </div>

          {/* Col 2 — Systems */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                background: "#d4d0c8",
                border: "1px solid",
                borderColor: "#808080 #fff #fff #808080",
                padding: "2px 6px",
                fontSize: "10px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "4px",
              }}
            >
              Systems
            </div>

            <nav aria-label="Epopteia systems navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "3px" }} role="list">
                {SYSTEM_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "11px",
                        color: "#0000ee",
                        textDecoration: "underline",
                        fontFamily: "'Tahoma', Arial, sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Legal */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                background: "#d4d0c8",
                border: "1px solid",
                borderColor: "#808080 #fff #fff #808080",
                padding: "2px 6px",
                fontSize: "10px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "4px",
              }}
            >
              Legal
            </div>

            <nav aria-label="Legal pages navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "3px" }} role="list">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "11px",
                        color: "#0000ee",
                        textDecoration: "underline",
                        fontFamily: "'Tahoma', Arial, sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Status bar / bottom bar */}
        <div
          className="win-statusbar"
          style={{ justifyContent: "space-between" }}
        >
          <span className="win-statusbar-panel">
            © {currentYear} Epopteia. All rights reserved.
          </span>
          <span
            className="win-statusbar-panel"
            style={{ fontStyle: "italic" }}
          >
            Supreme Vision.
          </span>
        </div>
      </div>

      {/* Windows taskbar at the very bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "28px",
          background: "#d4d0c8",
          borderTop: "2px solid",
          borderColor: "#fff #808080 #808080 #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4px",
          zIndex: 100,
        }}
      >
        {/* Start button */}
        <button
          style={{
            height: "22px",
            padding: "0 8px 0 4px",
            background: "#d4d0c8",
            border: "1px solid",
            borderColor: "#fff #808080 #808080 #fff",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "'Tahoma', Arial, sans-serif",
            cursor: "default",
            color: "#000",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "linear-gradient(135deg, #0a246a 0%, #a6caf0 100%)",
              border: "1px solid #808080",
            }}
          />
          Start
        </button>

        {/* Separator */}
        <div
          style={{
            width: "1px",
            height: "18px",
            background: "#808080",
            borderRight: "1px solid #fff",
            margin: "0 4px",
          }}
        />

        {/* Quick launch icons */}
        <div style={{ display: "flex", gap: "2px", flex: 1 }}>
          <div
            style={{
              height: "20px",
              padding: "0 8px",
              background: "#bdb8b0",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              display: "flex",
              alignItems: "center",
              fontSize: "10px",
              fontFamily: "'Tahoma', Arial, sans-serif",
              color: "#000",
              cursor: "default",
              maxWidth: "160px",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            Epopteia — Clarity Architecture...
          </div>
        </div>

        {/* System clock */}
        <div
          style={{
            border: "1px solid",
            borderColor: "#808080 #fff #fff #808080",
            padding: "2px 8px",
            fontSize: "11px",
            fontFamily: "'Tahoma', Arial, sans-serif",
            color: "#000",
          }}
        >
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      {/* Padding for taskbar */}
      <div style={{ height: "28px" }} />
    </footer>
  )
}
