"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Profile } from "@/types"
import { fadeInUp, staggerContainer } from "@/lib/motion"

interface SkillsProps {
    skills: Profile["skills"]
}

export function Skills({ skills }: SkillsProps) {
    const categories = [
        { label: "Languages", items: skills.languages },
        { label: "ML Frameworks", items: skills.ml_frameworks },
        { label: "Data Engineering", items: skills.data_engineering },
        { label: "Deployment", items: skills.deployment },
    ]

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24 border-t border-border/40">
            <motion.div
                className="mx-auto flex max-w-[58rem] flex-col items-start justify-center gap-4 text-center sm:items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Technical Expertise
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A robust stack for building end-to-end ML systems.
                </p>
            </motion.div>
            <motion.div
                className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {categories.map((category) => (
                    <motion.div key={category.label} className="flex flex-col gap-2" variants={fadeInUp}>
                        <h3 className="font-semibold text-lg">{category.label}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
