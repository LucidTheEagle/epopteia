"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref        = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [svgHeight, setSvgHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  /* Spring-physics beam head and tail — tuned for premium feel */
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  )

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-full", className)}
    >
      {/* ── BEAM TRACK + DOT ─────────────────────────────────────────── */}
      <div className="absolute -left-4 md:-left-20 top-3">

        {/* Dot indicator */}
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(192, 192, 192, 0.2) 0px 0px 4px 1px",
          }}
          className="
            ml-[27px] h-4 w-4
            border border-silver
            flex items-center justify-center
          "
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "transparent" : "#C0C0C0",
              borderColor:
                scrollYProgress.get() > 0
                  ? "rgba(192, 192, 192, 0.3)"
                  : "#C0C0C0",
            }}
            className="h-2 w-2 border border-silver bg-silver"
          />
        </motion.div>

        {/* SVG track */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Static track — dark, barely visible */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#1e1e1e"
            strokeOpacity="0.6"
            transition={{ duration: 10 }}
          />

          {/* Animated beam — silver gradient */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#silver-gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />

          <defs>
            <motion.linearGradient
              id="silver-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              {/* Crystalline Silver beam — transparent → silver → dim → transparent */}
              <stop stopColor="#C0C0C0" stopOpacity="0"  />
              <stop stopColor="#C0C0C0"                  />
              <stop offset="0.325" stopColor="#888888"   />
              <stop offset="1" stopColor="#C0C0C0" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}