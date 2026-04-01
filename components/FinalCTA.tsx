"use client"

const CAL_LINK = "https://cal.com/lucid-theeagle-ebabkz/begin-the-ascent"

export default function FinalCTA() {
  const openBooking = () => window.open(CAL_LINK, "_blank", "noopener,noreferrer")

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        background: "#3a6ea5",
        padding: "0 16px 24px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      {/* Main dialog window */}
      <div
        className="win-window"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Title bar */}
        <div className="win-titlebar" style={{ justifyContent: "space-between" }}>
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
            <span>Epopteia — Clarity Session Scheduler</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Dialog body */}
        <div
          style={{
            background: "#d4d0c8",
            padding: "20px 24px 16px",
          }}
        >
          {/* Icon + message row — like a Windows MessageBox */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            {/* Big icon */}
            <div
              aria-hidden="true"
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #0a246a 0%, #a6caf0 100%)",
                border: "2px solid #fff",
                outline: "1px solid #808080",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              E
            </div>

            {/* Message text */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "10px",
                  color: "#808080",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  marginBottom: "6px",
                }}
              >
                — End of Fog
              </div>
              <h2
                id="cta-heading"
                style={{
                  fontSize: "clamp(18px, 3vw, 28px)",
                  fontWeight: "bold",
                  color: "#0a246a",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                The fog has a solution.
              </h2>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.7",
                  color: "#444",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                One conversation. We diagnose the blur.
                We architect the ascent.
              </p>
            </div>
          </div>

          {/* Separator */}
          <hr style={{ border: "none", borderTop: "1px solid #808080", borderBottom: "1px solid #fff", marginBottom: "14px" }} />

          {/* Detail area — sunken */}
          <div
            style={{
              background: "#fff",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              padding: "10px 12px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {[
              { key: "Engagement:",   value: "One clarity session" },
              { key: "Duration:",     value: "45 minutes" },
              { key: "Outcome:",      value: "Root cause identified. Ascent designed." },
              { key: "Cost:",         value: "One conversation" },
            ].map((row) => (
              <div
                key={row.key}
                style={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "11px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  borderBottom: "1px dotted #d4d0c8",
                  paddingBottom: "3px",
                }}
              >
                <span style={{ color: "#808080", width: "90px", flexShrink: 0 }}>{row.key}</span>
                <span style={{ color: "#000" }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Button row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <button
              onClick={openBooking}
              className="win-btn win-btn-default"
              aria-label="Begin the Ascent — schedule your clarity session"
              style={{
                fontSize: "11px",
                padding: "5px 28px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                fontWeight: "bold",
              }}
            >
              Begin the Ascent
            </button>
            <button
              className="win-btn"
              style={{
                fontSize: "11px",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              Cancel
            </button>
          </div>

          {/* Tagline footnote */}
          <p
            style={{
              marginTop: "12px",
              textAlign: "center",
              fontSize: "10px",
              color: "#808080",
              fontFamily: "'Tahoma', Arial, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontStyle: "italic",
            }}
          >
            Epopteia. Supreme Vision.
          </p>
        </div>
      </div>
    </section>
  )
}
