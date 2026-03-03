"use client"

import React, { useState, useEffect, useRef } from "react"

interface LazySectionProps {
  children:    React.ReactNode
  className?:  string
  threshold?:  number
  rootMargin?: string
}

export default function LazySection({
  children,
  className  = "",
  threshold  = 0.1,
  rootMargin = "200px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref                       = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { root: null, rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [rootMargin, threshold])

  return (
    /* No min-h — each section owns its own height.
       No motion wrapper — each section owns its own scroll animations. */
    <div ref={ref} className={className}>
      {isVisible
        ? children
        : <div aria-hidden="true" className="h-24 w-full" />
      }
    </div>
  )
}