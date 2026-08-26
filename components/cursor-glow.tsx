"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorGlow() {
    const [enabled, setEnabled] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 })
    const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 })

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        if (!window.matchMedia("(hover: hover)").matches) return

        setEnabled(true)
        const handleMove = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }
        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    }, [x, y])

    if (!enabled) return null

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-70 blur-[100px] bg-[radial-gradient(circle_at_30%_30%,rgba(141,159,255,0.45),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,103,120,0.4),transparent_55%)]"
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        />
    )
}
