"use client"

const FOG_STATES = [
  {
    index:   "01",
    subject: "Business Owner",
    title:   "The Data-Drowned Owner",
    body:    "You have more data than decisions. Reports that arrive after the moment has passed. Dashboards that describe the past but offer nothing for tomorrow. You are not uninformed. You are buried.",
    tag:     "Symptom: Information without altitude.",
    icon:    "📊",
  },
  {
    index:   "02",
    subject: "Founder",
    title:   "The Decision-Blind Founder",
    body:    "You are moving fast. But fast in the wrong direction is not momentum — it is acceleration toward the wrong wall. The fog does not announce itself. It simply makes every direction look the same.",
    tag:     "Symptom: Speed without clarity.",
    icon:    "🧭",
  },
  {
    index:   "03",
    subject: "Operations",
    title:   "The Reactive Operations Team",
    body:    "Every crisis feels sudden. It was not. The signals were there — in the data, in the delays, in the pattern. The system was not built to read them. So you read the fire instead of the smoke.",
    tag:     "Symptom: Reaction without foresight.",
    icon:    "⚙️",
  },
] as const

interface FogCardProps {
  card: (typeof FOG_STATES)[number]
}

function FogCard({ card }: FogCardProps) {
  return (
    <article
      aria-label={`Fog state ${card.index} — ${card.title}`}
      className="win-window"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Title bar */}
      <div
        className="win-titlebar"
        style={{ justifyContent: "space-between", flexShrink: 0 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span aria-hidden="true" style={{ fontSize: "11px" }}>{card.icon}</span>
          <span>{card.index} — {card.subject}</span>
        </div>
        <div className="flex items-center gap-[2px]" aria-hidden="true">
          <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
          <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
          <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 14px 10px", background: "#d4d0c8", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Title in sunken text field */}
        <div
          style={{
            background: "#fff",
            border: "1px solid",
            borderColor: "#808080 #fff #fff #808080",
            padding: "4px 8px",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#000080",
              fontFamily: "'Tahoma', Arial, sans-serif",
            }}
          >
            {card.title}
          </h3>
        </div>

        {/* Body text */}
        <div
          style={{
            background: "#fff",
            border: "1px solid",
            borderColor: "#808080 #fff #fff #808080",
            padding: "8px",
            flex: 1,
            marginBottom: "8px",
            overflowY: "auto",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              lineHeight: "1.6",
              color: "#000",
              fontFamily: "'Tahoma', Arial, sans-serif",
            }}
          >
            {card.body}
          </p>
        </div>

        {/* Tag — status bar style */}
        <div
          style={{
            borderTop: "1px solid #808080",
            borderBottom: "1px solid #fff",
            padding: "3px 6px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              color: "#808080",
              fontFamily: "'Tahoma', Arial, sans-serif",
              fontStyle: "italic",
            }}
          >
            {card.tag}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function TheFog() {
  return (
    <section
      id="fog"
      aria-labelledby="fog-heading"
      style={{
        background: "#3a6ea5",
        padding: "24px 16px",
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      {/* Section window */}
      <div className="win-window" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Title bar */}
        <div className="win-titlebar" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span aria-hidden="true">⚠</span>
            <span id="fog-heading">Diagnostic Report — The Fog</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "16px", background: "#d4d0c8" }}>
          {/* Header block */}
          <div
            style={{
              background: "#fff8e1",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              padding: "10px 14px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
            role="note"
          >
            <span aria-hidden="true" style={{ fontSize: "22px", lineHeight: 1 }}>⚠</span>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  marginBottom: "4px",
                }}
              >
                Diagnosis
              </p>
              <h2
                style={{
                  fontSize: "13px",
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  color: "#000",
                  fontWeight: "normal",
                }}
              >
                You are not the only one{" "}
                <strong style={{ color: "#0a246a" }}>operating blind.</strong>
              </h2>
            </div>
          </div>

          {/* Cards grid */}
          <div
            role="list"
            aria-label="Three fog states — diagnostic profiles"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "8px",
            }}
          >
            {FOG_STATES.map((card) => (
              <div key={card.index} role="listitem">
                <FogCard card={card} />
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <span className="win-statusbar-panel">3 fog states identified</span>
          <span className="win-statusbar-panel">All solvable</span>
        </div>
      </div>
    </section>
  )
}
