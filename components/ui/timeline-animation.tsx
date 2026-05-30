'use client'

import { motion } from 'framer-motion'
import { ReactNode, RefObject } from 'react'
import { useInView } from 'framer-motion'

interface TimelineContentProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span'
  className?: string
  animationNum: number
  customVariants?: any
  timelineRef: RefObject<HTMLDivElement>
}

export function TimelineContent({
  children,
  as = 'div',
  className = '',
  animationNum,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const ref = useInView({ once: false, margin: '-100px' })
  const Component = motion[as as keyof typeof motion] || motion.div

  return (
    <Component
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={customVariants}
      custom={animationNum}
      viewport={{ once: false, margin: '-100px' }}
      className={className}
    >
      {children}
    </Component>
  )
}
