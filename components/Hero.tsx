"use client"

const CAL_LINK = "https://cal.com/lucid-theeagle-ebabkz/begin-the-ascent"

/* ── WIN2K TITLE BAR CONTROLS ────────────────────────────────────────────── */
function TitleBarControls() {
  return (
    <div className="flex items-center gap-[2px]" aria-hidden="true">
      <button
        className="win-titlebar-btn"
        title="Minimize"
        style={{ fontSize: "7px", fontFamily: "Marlett, Arial" }}
      >
        _
      </button>
      <button
        className="win-titlebar-btn"
        title="Maximize"
        style={{ fontSize: "7px", fontFamily: "Marlett, Arial" }}
      >
        □
      </button>
      <button
        className="win-titlebar-btn"
        title="Close"
        style={{ fontSize: "7px", fontFamily: "Marlett, Arial", color: "#000" }}
      >
        ✕
      </button>
    </div>
  )
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Hero() {
  const openCalLink = () => {
    window.open(CAL_LINK, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="hero"
      aria-label="Hero — Epopteia clarity architecture"
      style={{
        paddingTop: "46px", /* offset nav height (22px + 24px) */
        minHeight: "100vh",
        background: "#3a6ea5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px 16px 16px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      {/* ── MAIN WINDOW ──────────────────────────────────────────────── */}
      <div
        className="win-window"
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title Bar */}
        <div className="win-titlebar" style={{ justifyContent: "space-between" }}>
          <div className="flex items-center gap-2">
            {/* App icon */}
            <div
              style={{
                width: "14px",
                height: "14px",
                background: "linear-gradient(135deg, #fff 30%, #a6caf0 100%)",
                border: "1px solid rgba(255,255,255,0.3)",
                flexShrink: 0,
              }}
            />
            <span>Epopteia — Clarity Architecture &amp; AI Systems</span>
          </div>
          <TitleBarControls />
        </div>

        {/* Menu bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            display: "flex",
            gap: 0,
            padding: "1px 2px",
          }}
        >
          {["File", "Edit", "View", "Clarity", "Help"].map((item) => (
            <span
              key={item}
              style={{
                fontSize: "11px",
                padding: "2px 6px",
                cursor: "default",
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: "#000",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Window body */}
        <div style={{ padding: "24px 28px 20px", background: "#d4d0c8" }}>

          {/* ── DECLARATION AREA — like a "document" with sunken inset */}
          <div
            style={{
              background: "#fff",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              padding: "20px 24px",
              marginBottom: "20px",
            }}
          >
            {/* Eyebrow label */}
            <p
              style={{
                fontSize: "10px",
                color: "#808080",
                marginBottom: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              [  CLARITY ARCHITECTURE  —  DIAGNOSTIC NOTICE  ]
            </p>

            {/* Declaration text */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000080",
                fontFamily: "'Tahoma', Arial, sans-serif",
                lineHeight: "1.6",
                marginBottom: "16px",
              }}
            >
              You are not confused. You are operating without clarity.
              <br />
              There is a difference. One is permanent. The other is solvable.
            </p>

            {/* Brand */}
            <div
              style={{
                borderTop: "1px solid #808080",
                borderBottom: "1px solid #fff",
                padding: "12px 0",
                marginBottom: "12px",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(28px, 6vw, 64px)",
                  fontWeight: "bold",
                  letterSpacing: "0.18em",
                  color: "#0a246a",
                  fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
                  lineHeight: 1,
                  textAlign: "center",
                }}
              >
                EPOPTEIA
              </h1>
              <p
                style={{
                  fontSize: "11px",
                  color: "#808080",
                  textAlign: "center",
                  marginTop: "6px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                We architect the ascent.
              </p>
            </div>
          </div>

          {/* ── STATUS LINE ────────────────────────────────────────────── */}
          <div
            style={{
              background: "#d4d0c8",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              padding: "6px 10px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#008000",
                border: "1px solid #808080",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontSize: "11px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: "#000",
              }}
            >
              System Status: <strong>Clarity architecture available.</strong> — 3 systems in production.
            </span>
          </div>

          {/* ── BUTTON ROW ─────────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={openCalLink}
              className="win-btn win-btn-default"
              aria-label="Begin the Ascent — start your clarity session"
              style={{
                fontSize: "11px",
                padding: "5px 24px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                fontWeight: "bold",
              }}
            >
              Begin the Ascent
            </button>
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="win-btn"
              style={{
                fontSize: "11px",
                padding: "5px 20px",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              View Systems
            </button>
            <button
              onClick={() =>
                document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
              }
              className="win-btn"
              style={{
                fontSize: "11px",
                padding: "5px 20px",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              Philosophy
            </button>
          </div>

        </div>

        {/* Status bar */}
        <div className="win-statusbar" style={{ justifyContent: "space-between" }}>
          <span className="win-statusbar-panel">Ready</span>
          <span className="win-statusbar-panel">Clarity Mode: ON</span>
          <span className="win-statusbar-panel">eh-pop-TEY-ah</span>
        </div>
      </div>
    </section>
  )
}
