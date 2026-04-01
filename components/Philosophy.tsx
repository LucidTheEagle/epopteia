"use client"

const QUOTE_PARAGRAPHS = [
  { id: "p1", text: "Most solutions treat the symptom.",                                                         accent: false },
  { id: "p2", text: "We climb above the problem first.",                                                         accent: true  },
  { id: "p3", text: "From altitude, the root cause is always visible. The system we build targets that —",       accent: false },
  { id: "p4", text: "nothing else.",                                                                             accent: true  },
] as const

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      style={{
        background: "#3a6ea5",
        padding: "0 16px 24px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      <div className="win-window" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Title bar */}
        <div className="win-titlebar" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span aria-hidden="true">📋</span>
            <span id="philosophy-heading">Notepad — Philosophy.txt</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Notepad menu */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            padding: "1px 2px",
            display: "flex",
          }}
        >
          {["File", "Edit", "Format", "View", "Help"].map((item) => (
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

        {/* Content area */}
        <div
          style={{
            background: "#d4d0c8",
            padding: "12px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "8px",
          }}
        >
          {/* Left — Law card */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                color: "#808080",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              — The Seven Laws · Law I
            </div>

            <h2
              style={{
                fontSize: "clamp(16px, 2.5vw, 28px)",
                fontWeight: "bold",
                color: "#0a246a",
                fontFamily: "'Tahoma', Arial, sans-serif",
                lineHeight: "1.2",
              }}
            >
              The Law<br />of Altitude
            </h2>

            <hr style={{ border: "none", borderTop: "1px solid #808080", borderBottom: "1px solid #fff", width: "40px" }} />

            <div
              style={{
                background: "#f0f0f0",
                border: "1px solid",
                borderColor: "#808080 #fff #fff #808080",
                padding: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.7",
                  color: "#444",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                The system must solve the root cause, not the symptom.
                We look from above. From altitude, the answer is
                always visible.
              </p>
            </div>

            {/* Law Roman numeral — like a watermark */}
            <div
              style={{
                textAlign: "right",
                fontSize: "48px",
                fontWeight: "bold",
                color: "#e0ddd5",
                fontFamily: "'Tahoma', Arial, sans-serif",
                lineHeight: 1,
                marginTop: "auto",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              I
            </div>
          </div>

          {/* Right — Notepad-style text area with the quote */}
          <div
            style={{
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Ruler bar like Notepad */}
            <div
              aria-hidden="true"
              style={{
                borderBottom: "1px solid #d4d0c8",
                padding: "2px 8px",
                fontSize: "9px",
                fontFamily: "Courier New, monospace",
                color: "#808080",
                background: "#f8f8f8",
                letterSpacing: "0.5em",
                userSelect: "none",
              }}
            >
              |....10....|....20....|....30....|....40....|....50....|....60....|
            </div>

            {/* Text body */}
            <div
              style={{
                padding: "16px 20px",
                flex: 1,
                fontFamily: "Courier New, monospace",
                fontSize: "13px",
                lineHeight: "1.8",
                color: "#000",
                overflowY: "auto",
              }}
              role="blockquote"
              aria-label="The Law of Altitude — expanded"
            >
              {/* Opening quote mark */}
              <span
                aria-hidden="true"
                style={{
                  fontSize: "40px",
                  lineHeight: 1,
                  color: "#808080",
                  display: "block",
                  marginBottom: "4px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                &quot;
              </span>

              {QUOTE_PARAGRAPHS.map((para) => (
                <p
                  key={para.id}
                  style={{
                    marginBottom: "12px",
                    color: para.accent ? "#000080" : "#444",
                    fontWeight: para.accent ? "bold" : "normal",
                    fontStyle: "italic",
                    fontSize: para.accent ? "14px" : "13px",
                  }}
                >
                  {para.text}
                </p>
              ))}

              {/* Attribution */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "10px",
                  borderTop: "1px dashed #808080",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    color: "#808080",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  — Epopteia · The Seven Laws
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#555",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  Every system built under Epopteia is held to this law
                  before any other. Root cause first. Always.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar — Notepad style */}
        <div
          className="win-statusbar"
          style={{ justifyContent: "flex-end" }}
        >
          <span className="win-statusbar-panel">Ln 1, Col 1</span>
          <span className="win-statusbar-panel">100%</span>
          <span className="win-statusbar-panel">Windows (CRLF)</span>
          <span className="win-statusbar-panel">UTF-8</span>
        </div>
      </div>
    </section>
  )
}
