'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/** Mount this inside the layout to activate scroll reveal globally. */
export default function ScrollRevealInit() {
  useScrollReveal()
  return null
}
