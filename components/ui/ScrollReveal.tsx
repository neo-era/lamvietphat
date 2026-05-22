"use client"

import { motion } from "framer-motion"
import { CSSProperties, ReactNode } from "react"

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  y?: number
}

export function ScrollReveal({ children, delay = 0, className, style, y = 32 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealGroup({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealItem({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
