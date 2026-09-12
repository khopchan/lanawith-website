"use client"

import { useEffect, useState } from "react"

const FADE_IN_MS = 1400
const HOLD_MS = 1800
const FADE_OUT_MS = 1400
const TOTAL_MS = FADE_IN_MS + HOLD_MS + FADE_OUT_MS
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)"

/** Prevents React remount / Strict Mode from playing the intro twice in one page load. */
let introLockForThisPageLoad = false

type Phase = "show" | "hiding" | "done"

export default function LogoIntro() {
  const [phase, setPhase] = useState<Phase | "boot">("boot")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done")
      return
    }

    if (introLockForThisPageLoad) {
      setPhase("done")
      return
    }
    introLockForThisPageLoad = true

    setPhase("show")

    const hideTimer = window.setTimeout(() => setPhase("hiding"), FADE_IN_MS + HOLD_MS)
    const doneTimer = window.setTimeout(() => setPhase("done"), TOTAL_MS)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    if (phase !== "hiding") return
    const doneTimer = window.setTimeout(() => setPhase("done"), FADE_OUT_MS)
    return () => window.clearTimeout(doneTimer)
  }, [phase])

  if (phase === "boot" || phase === "done") {
    return null
  }

  const visible = phase === "show"

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-bg-alt"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${FADE_OUT_MS}ms ${EASE}`,
        pointerEvents: visible ? "auto" : "none",
      }}
      role="presentation"
      aria-hidden="true"
      onClick={() => {
        if (phase === "show") setPhase("hiding")
      }}
    >
      <style>{`
        @keyframes lana-logo-in {
          from { opacity: 0; transform: translateY(8px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lana-rule-in {
          from { opacity: 0; transform: scaleX(0.4); }
          to { opacity: 0.7; transform: scaleX(1); }
        }
      `}</style>
      <div className="flex flex-col items-center px-6 text-center">
        <p
          className="font-serif !font-bold text-brand-text text-[2rem] sm:text-5xl md:text-6xl tracking-[0.12em] select-none"
          style={{ animation: `lana-logo-in ${FADE_IN_MS}ms ${EASE} forwards` }}
        >
          LANA WITH.
        </p>
        <span
          className="mt-5 block h-px w-10 bg-brand-border"
          style={{
            opacity: 0,
            animation: `lana-rule-in ${FADE_IN_MS}ms ${EASE} 180ms forwards`,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
