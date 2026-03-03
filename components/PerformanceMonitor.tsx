"use client"

import { useEffect, useState } from "react"

/* Chrome-only memory API — not in the standard Performance type */
interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize:  number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({ fps: 0, memory: 0 })

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return

    let frameCount = 0
    let lastTime   = performance.now()
    let rafId:     number

    const update = () => {
      const now = performance.now()
      frameCount++

      if (now - lastTime >= 1000) {
        const perf   = performance as PerformanceWithMemory
        const memory = perf.memory
          ? Math.round(perf.memory.usedJSHeapSize / 1024 / 1024)
          : 0

        setMetrics({
          fps: Math.round((frameCount * 1000) / (now - lastTime)),
          memory,
        })

        frameCount = 0
        lastTime   = now
      }

      rafId = requestAnimationFrame(update)
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="
      fixed bottom-4 left-4 z-9999
      bg-obsidian/90
      border border-[rgba(192,192,192,0.15)]
      p-2
      font-modern text-xs
      pointer-events-none
    ">
      <div className={metrics.fps < 30 ? "text-red-500 font-bold" : "text-silver"}>
        FPS: {metrics.fps}
      </div>
      <div className="text-granite">
        RAM: {metrics.memory}MB
      </div>
    </div>
  )
}