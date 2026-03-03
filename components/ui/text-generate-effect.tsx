"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
  filter   = true,
  duration = 0.5,
}: {
  words:     string
  className?: string
  filter?:   boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")

  useEffect(() => {
    if (filter) {
      /* Desktop — blur dissolve word by word */
      animate(
        "span",
        { opacity: 1, filter: "blur(0px)" },
        { duration, delay: stagger(0.2) }
      )
    } else {
      /* Mobile — fast fade, no blur cost */
      animate(
        "span",
        { opacity: 1 },
        { duration: 0.3, delay: stagger(0.05) }
      )
    }
  }, [animate, duration, filter])

  return (
    /* className passed from Hero carries all font/size/color styling.
       No font-bold wrapper here — it would override Cinzel font-normal. */
    <div className={cn(className)}>
      <motion.div ref={scope} className="leading-[inherit]">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            /* Epopteia token — no dark: prefix, no text-black */
            className="text-alabaster opacity-0"
            style={{
              filter:      filter ? "blur(10px)" : "none",
              willChange:  filter ? "opacity, filter" : "opacity",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}