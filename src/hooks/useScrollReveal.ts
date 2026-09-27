'use client'

import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all `.reveal` and `.reveal-group` elements
 * and adds the `is-visible` class when they enter the viewport.
 * Called once from the root layout or page.
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal, .reveal-group')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
