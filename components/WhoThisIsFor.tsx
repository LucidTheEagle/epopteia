"use client"

export default function WhoThisIsFor() {
  return (
    <section
      id="filter"
      aria-labelledby="filter-heading"
      style={{
        background: "#3a6ea5",
        padding: "0 16px 24px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      {/* Outer window */}
      <div className="win-window" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Title bar */}
        <div className="win-titlebar" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span aria-hidden="true">👤</span>
            <span id="filter-heading">Who This Is For — Access Control</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            background: "#d4d0c8",
            padding: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "12px",
          }}
        >
          {/* Left panel — Qualifier */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Info icon + heading like a Windows dialog */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div
                aria-hidden="true"
                style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #0a246a, #a6caf0)",
                  border: "2px solid #fff",
                  outline: "1px solid #808080",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                i
              </div>
              <h2
                style={{
                  fontSize: "13px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  color: "#000",
                  fontWeight: "normal",
                  lineHeight: "1.6",
                }}
              >
                Epopteia is built for the operator who already suspects the
                problem runs deeper than the surface.
              </h2>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #808080", borderBottom: "1px solid #fff" }} />

            <p
              style={{
                fontSize: "12px",
                lineHeight: "1.7",
                color: "#444",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              The founder who knows the fog is structural. The business owner
              who is done explaining their vision to systems that{" "}
              <strong style={{ color: "#000" }}>cannot see it.</strong>
            </p>
          </div>

          {/* Right panel — Binary filter like a Windows wizard */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#d4d0c8",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            aria-label="Who this is not for, and who it is for"
          >
            {/* Not for — error / warning style */}
            <div
              style={{
                background: "#fff",
                borderBottom: "2px solid #808080",
                padding: "12px 14px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px",
                  background: "#ff0000",
                  border: "2px solid #800000",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "bold",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                ✕
              </div>
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#808080",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    marginBottom: "3px",
                  }}
                >
                  — Not for you
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    lineHeight: "1.7",
                    color: "#808080",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    textDecoration: "line-through",
                    textDecorationColor: "#808080",
                  }}
                >
                  If you are looking for a chatbot, this is not for you.
                </p>
              </div>
            </div>

            {/* For — success style */}
            <div
              style={{
                background: "#f0fff0",
                padding: "12px 14px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                flex: 1,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px",
                  background: "#008000",
                  border: "2px solid #004000",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                ✓
              </div>
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#008000",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    marginBottom: "3px",
                  }}
                >
                  — For you
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    lineHeight: "1.7",
                    color: "#000",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                  }}
                >
                  If you are looking for clarity as infrastructure —{" "}
                  <strong style={{ color: "#000080" }}>
                    you are in the right place.
                  </strong>
                </p>
              </div>
            </div>

            {/* Bottom nudge */}
            <div
              style={{
                borderTop: "1px solid #808080",
                background: "#d4d0c8",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#008000",
                  display: "inline-block",
                  border: "1px solid #004000",
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  color: "#555",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                One conversation. That is all it takes to know.
              </span>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <span className="win-statusbar-panel">Access Control</span>
          <span className="win-statusbar-panel">Clarity Infrastructure</span>
        </div>
      </div>
    </section>
  )
}
