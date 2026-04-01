"use client"

import { useState } from "react"
import { PRISM }         from "./proof/Prism"
import { NEXOPS }        from "./proof/NexOps"
import { ASCENT_LEDGER } from "./proof/AscentLedger"
import type { SystemData } from "./proof/types"

const SYSTEMS = [PRISM, NEXOPS, ASCENT_LEDGER]

type Tab = "fog" | "clearSky" | "stack"

interface SystemCardProps {
  system: SystemData
}

function SystemCard({ system }: SystemCardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("fog")

  const tabs: { id: Tab; label: string }[] = [
    { id: "fog",      label: "The Fog"     },
    { id: "clearSky", label: "Clear Sky"   },
    { id: "stack",    label: "Stack Proof" },
  ]

  const openSystem = () => window.open(system.url, "_blank", "noopener,noreferrer")

  return (
    <div
      className="win-window"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Title bar */}
      <div
        className="win-titlebar"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div
            aria-hidden="true"
            style={{
              width: "12px",
              height: "12px",
              background: "linear-gradient(135deg, #fff 30%, #a6caf0 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              flexShrink: 0,
            }}
          />
          <span>{system.name}</span>
        </div>
        <div className="flex items-center gap-[2px]" aria-hidden="true">
          <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
          <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
          <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
        </div>
      </div>

      {/* Menu bar */}
      <div
        style={{
          background: "#d4d0c8",
          borderBottom: "1px solid #808080",
          padding: "1px 6px",
          display: "flex",
          gap: "0",
          fontSize: "11px",
          fontFamily: "'Tahoma', Arial, sans-serif",
        }}
      >
        <span style={{ padding: "2px 6px", cursor: "default" }}>File</span>
        <span style={{ padding: "2px 6px", cursor: "default" }}>View</span>
        <span style={{ padding: "2px 6px", cursor: "default" }}>Help</span>
      </div>

      {/* Window body */}
      <div style={{ background: "#d4d0c8", padding: "10px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* System info header */}
        <div
          style={{
            background: "#fff",
            border: "1px solid",
            borderColor: "#808080 #fff #fff #808080",
            padding: "8px 10px",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "10px",
                color: "#808080",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "'Tahoma', Arial, sans-serif",
                marginBottom: "2px",
              }}
            >
              {system.industry}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#0a246a",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              {system.name}
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#808080",
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}
            >
              {system.subtitle}
            </div>
          </div>
          <div
            style={{
              background: "#008000",
              color: "#fff",
              fontSize: "9px",
              padding: "2px 6px",
              border: "1px solid #006400",
              fontFamily: "'Tahoma', Arial, sans-serif",
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            LIVE
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "2px",
            padding: "4px 4px 0",
            borderBottom: "1px solid #808080",
            marginBottom: "-1px",
          }}
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "2px 10px 3px",
                background: activeTab === tab.id ? "#d4d0c8" : "#bdb8b0",
                border: "1px solid #808080",
                borderBottom: activeTab === tab.id ? "1px solid #d4d0c8" : "1px solid #808080",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
                fontSize: "11px",
                cursor: "default",
                color: "#000",
                fontFamily: "'Tahoma', Arial, sans-serif",
                position: "relative",
                zIndex: activeTab === tab.id ? 1 : 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          role="tabpanel"
          style={{
            background: "#fff",
            border: "1px solid #808080",
            padding: "10px",
            flex: 1,
            minHeight: "120px",
            fontSize: "11px",
            fontFamily: "'Tahoma', Arial, sans-serif",
            lineHeight: "1.6",
            color: "#000",
            overflowY: "auto",
          }}
        >
          {activeTab === "fog" && (
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#808080",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "6px",
                }}
              >
                {system.states.fog.heading}
              </p>
              <p style={{ color: "#555" }}>{system.states.fog.body}</p>
            </div>
          )}

          {activeTab === "clearSky" && (
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#008000",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "6px",
                }}
              >
                {system.states.clearSky.heading}
              </p>
              <p style={{ color: "#000" }}>
                {system.states.clearSky.body.split(system.states.clearSky.accent).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <strong style={{ color: "#000080" }}>
                        {system.states.clearSky.accent}
                      </strong>
                    )}
                  </span>
                ))}
              </p>
            </div>
          )}

          {activeTab === "stack" && (
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#808080",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "6px",
                }}
              >
                {system.states.stack.heading}
              </p>
              <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "3px" }}>
                {system.states.stack.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "2px 4px",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#0a246a",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontFamily: "Courier New, monospace", fontSize: "11px", color: "#000080" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Launch button */}
        <div style={{ marginTop: "8px", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={openSystem}
            className="win-btn"
            style={{
              fontSize: "11px",
              fontFamily: "'Tahoma', Arial, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Launch System →
          </button>
        </div>
      </div>

      {/* Status bar */}
      <div className="win-statusbar">
        <span className="win-statusbar-panel">Production</span>
        <span className="win-statusbar-panel">{system.subtitle}</span>
      </div>
    </div>
  )
}

export default function Systems() {
  return (
    <section
      id="work"
      aria-labelledby="systems-heading"
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
            <span aria-hidden="true">🗂</span>
            <span id="systems-heading">Production Systems — My Computer</span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>_</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px" }}>□</button>
            <button className="win-titlebar-btn" style={{ fontSize: "7px", color: "#000" }}>✕</button>
          </div>
        </div>

        {/* Toolbar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "11px", color: "#808080", fontFamily: "'Tahoma', Arial, sans-serif" }}>
            Production Systems
          </span>
          <span style={{ fontSize: "11px", color: "#808080" }}>|</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#000", fontFamily: "'Tahoma', Arial, sans-serif" }}>
            The Work. Three Systems. Three Industries.
          </span>
        </div>

        <div style={{ background: "#d4d0c8", padding: "12px" }}>
          {/* Info bar */}
          <div
            style={{
              background: "#fff",
              border: "1px solid",
              borderColor: "#808080 #fff #fff #808080",
              padding: "6px 10px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "14px" }}>ℹ</span>
            <p style={{ fontSize: "11px", color: "#000", fontFamily: "'Tahoma', Arial, sans-serif" }}>
              Each system built to a specific fog state. Each one in production. Click a tab to watch the diagnosis resolve.
            </p>
          </div>

          {/* Systems grid */}
          <div
            role="list"
            aria-label="Epopteia production systems"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "8px",
            }}
          >
            {SYSTEMS.map((system) => (
              <div key={system.id} role="listitem">
                <SystemCard system={system} />
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "8px",
              fontSize: "10px",
              color: "#808080",
              textAlign: "right",
              fontFamily: "'Tahoma', Arial, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Each system is a production deployment — not a prototype.
          </p>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <span className="win-statusbar-panel">3 objects</span>
          <span className="win-statusbar-panel">All in production</span>
        </div>
      </div>
    </section>
  )
}
