"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "lana-intro-seen"
const FADE_IN_MS = 700
const HOLD_MS = 900
const FADE_OUT_MS = 600

type Phase = "idle" | "in" | "hold" | "out"

export default function LogoIntro() {
  const [phase, setPhase] = useState<Phase | "skip">("skip")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: number[] = []

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let alreadySeen = false
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1"
    } catch {
      alreadySeen = false
    }

    if (alreadySeen || reducedMotion) {
      if (reducedMotion && !alreadySeen) {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1")
        } catch {
          // ignore
        }
      }
      setPhase("skip")
      setReady(true)
      return
    }

    setPhase("idle")
    setReady(true)

    timers.push(
      window.setTimeout(() => {
        if (!cancelled) setPhase("in")
      }, 20),
    )
    timers.push(
      window.setTimeout(() => {
        if (!cancelled) setPhase("hold")
      }, 20 + FADE_IN_MS),
    )
    timers.push(
      window.setTimeout(() => {
        if (!cancelled) setPhase("out")
      }, 20 + FADE_IN_MS + HOLD_MS),
    )
    timers.push(
      window.setTimeout(() => {
        if (!cancelled) {
          setPhase("skip")
          try {
            sessionStorage.setItem(STORAGE_KEY, "1")
          } catch {
            // ignore
          }
        }
      }, 20 + FADE_IN_MS + HOLD_MS + FADE_OUT_MS),
    )

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  const dismiss = () => {
    setPhase("out")
    window.setTimeout(() => {
      setPhase("skip")
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {
        // ignore
      }
    }, FADE_OUT_MS)
  }

  if (!ready || phase === "skip") {
    return null
  }

  const logoVisible = phase === "in" || phase === "hold"
  const overlayOpaque = phase === "idle" || phase === "in" || phase === "hold"

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
      style={{
        opacity: overlayOpaque ? 1 : 0,
        transition: `opacity ${FADE_OUT_MS}ms ease`,
        pointerEvents: phase === "out" ? "none" : "auto",
      }}
      role="presentation"
      aria-hidden="true"
      onClick={dismiss}
    >
      <p
        className="font-serif text-brand-text text-4xl sm:text-5xl md:text-6xl tracking-wide select-none"
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "scale(1)" : "scale(0.96)",
          transition: `opacity ${FADE_IN_MS}ms ease, transform ${FADE_IN_MS}ms ease`,
        }}
      >
        LANA WITH.
      </p>
    </div>
  )
}
