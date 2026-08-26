import { Variants } from "framer-motion"

// Jakub Krehel enter recipe: opacity + translateY + blur, spring with bounce: 0
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", duration: 0.5, bounce: 0 },
    },
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
}
