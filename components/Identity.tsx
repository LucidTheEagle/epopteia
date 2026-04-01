"use client"

const LAWS = [
  {
    number: "Law I",
    title:  "The Law of Altitude",
    body:   "We solve root causes, not symptoms. We climb above the problem first. From altitude, the answer is always visible.",
  },
  {
    number: "Law IV",
    title:  "The Law of Transparency",
    body:   "No black boxes. You understand every decision the system makes. Clarity is not a feature — it is the foundation.",
  },
  {
    number: "Law V",
    title:  "The Law of the Signature",
    body:   "The system speaks for itself. Quality needs no explanation. Every build is a declaration of standard.",
  },
  {
    number: "Law VII",
    title:  "The Law of Human Uplift",
    body:   "Technology is the servant. Your mind leads. Every system we build frees human attention for higher-order work.",
  },
] as const

export default function Identity() {
  return (
    <section
      id="identity"
      aria-labelledby="identity-heading"
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
            <span aria-hidden="true">ℹ</span>
            <span id="identity-heading">About Epopteia — System Properties</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Tabs bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            display: "flex",
            padding: "4px 8px 0",
            gap: "2px",
          }}
          role="tablist"
        >
          {["General", "Laws", "Mission", "Advanced"].map((tab, i) => (
            <div
              key={tab}
              role="tab"
              aria-selected={i === 0}
              style={{
                padding: "3px 12px 4px",
                background: i === 0 ? "#d4d0c8" : "#bdb8b0",
                border: "1px solid #808080",
                borderBottom: i === 0 ? "1px solid #d4d0c8" : "1px solid #808080",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
                marginBottom: i === 0 ? "-1px" : "0",
                fontSize: "11px",
                cursor: "default",
                color: "#000",
                position: "relative",
                zIndex: i === 0 ? 1 : 0,
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div style={{ background: "#d4d0c8", padding: "16px" }}>
          {/* Two-column top */}
          <div
            style={{
              display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "8px",
            marginBottom: "12px",
            }}
          >
            {/* Left — Identity */}
            <div
              style={{
                border: "1px solid",
                borderColor: "#808080 #fff #fff #808080",
                background: "#fff",
                padding: "14px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  color: "#808080",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "8px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                Ancient Greek · ἐποπτεία · eh-pop-TEY-ah
              </div>

              <h2
                style={{
                  fontSize: "clamp(20px, 4vw, 42px)",
                  fontWeight: "bold",
                  letterSpacing: "0.2em",
                  color: "#0a246a",
                  fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
                  marginBottom: "12px",
                }}
              >
                EPOPTEIA
              </h2>

              {/* Definition in a sunken group box */}
              <div
                style={{
                  background: "#f0f0f0",
                  border: "1px solid",
                  borderColor: "#808080 #fff #fff #808080",
                  padding: "8px 10px",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    lineHeight: "1.65",
                    color: "#000",
                    fontFamily: "'Tahoma', Arial, sans-serif",
                  }}
                >
                  The final stage of initiation in ancient Greek mystery
                  traditions — the moment where the seeker moves from mystery
                  and confusion into{" "}
                  <strong style={{ color: "#000080" }}>direct revelation</strong>{" "}
                  and absolute clarity.
                </p>
              </div>

              <div
                style={{
                  fontSize: "10px",
                  color: "#808080",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                Supreme Vision.
              </div>
            </div>

            {/* Right — Mission */}
            <div
              style={{
                border: "1px solid",
                borderColor: "#808080 #fff #fff #808080",
                background: "#fff",
                padding: "14px",
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
                  letterSpacing: "0.15em",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                — Mission Statement
              </div>

              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#000080",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  lineHeight: "1.6",
                  fontStyle: "italic",
                }}
              >
                To strip away the fog of complexity and architect clarity through AI.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid #808080", borderBottom: "1px solid #fff" }} />

              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "1.7",
                  color: "#444",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                }}
              >
                Technology is the servant. The goal is to free the human mind
                for higher-order work. Every system built under Epopteia must
                pass through the Seven Laws.
              </p>

              {/* Property rows like Windows Properties dialog */}
              <div style={{ marginTop: "auto" }}>
                {[
                  { label: "Founded:", value: "Clarity Architecture" },
                  { label: "Version:", value: "Supreme Vision 1.0" },
                  { label: "Status:", value: "Production" },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      gap: "8px",
                      padding: "2px 0",
                      borderBottom: "1px dotted #d4d0c8",
                      fontSize: "11px",
                      fontFamily: "'Tahoma', Arial, sans-serif",
                    }}
                  >
                    <span style={{ color: "#808080", width: "70px", flexShrink: 0 }}>{row.label}</span>
                    <span style={{ color: "#000" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── LAWS GRID ──────────────────────────────────────────────── */}
          {/* Group box */}
          <div
            style={{
              border: "1px solid #808080",
              borderTop: "none",
              padding: "12px 10px 10px",
              position: "relative",
              marginTop: "16px",
            }}
            role="list"
            aria-label="The Seven Laws of the Epopteia OS — four shown"
          >
            <span
              style={{
                position: "absolute",
                top: "-8px",
                left: "8px",
                background: "#d4d0c8",
                padding: "0 4px",
                fontSize: "11px",
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: "#000",
              }}
            >
              The Seven Laws (4 of 7 shown)
            </span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "8px",
              }}
            >
              {LAWS.map((law) => (
                <div
                  key={law.number}
                  role="listitem"
                  style={{
                    background: "#fff",
                    border: "1px solid",
                    borderColor: "#808080 #fff #fff #808080",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#808080",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                      fontFamily: "'Tahoma', Arial, sans-serif",
                    }}
                  >
                    {law.number}
                  </div>
                  <h3
                    style={{
                      fontSize: "11px",
                      fontWeight: "bold",
                      color: "#000080",
                      fontFamily: "'Tahoma', Arial, sans-serif",
                      marginBottom: "6px",
                    }}
                  >
                    {law.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "11px",
                      lineHeight: "1.55",
                      color: "#444",
                      fontFamily: "'Tahoma', Arial, sans-serif",
                    }}
                  >
                    {law.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OK / Cancel buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "6px",
              marginTop: "14px",
              paddingTop: "10px",
              borderTop: "1px solid #808080",
            }}
          >
            <button className="win-btn win-btn-default" style={{ fontFamily: "'Tahoma', Arial, sans-serif", fontSize: "11px" }}>
              OK
            </button>
            <button className="win-btn" style={{ fontFamily: "'Tahoma', Arial, sans-serif", fontSize: "11px" }}>
              Cancel
            </button>
            <button className="win-btn" style={{ fontFamily: "'Tahoma', Arial, sans-serif", fontSize: "11px" }}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
