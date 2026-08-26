"use client"

import { motion } from "framer-motion"
import { Project } from "@/types"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/motion"

interface FeaturedProjectsProps {
    projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24">
            <motion.div
                className="flex flex-col items-center justify-center gap-3 text-center mb-8 md:mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Selected Projects
                </h2>
                <p className="text-muted-foreground">
                    Highlights of my recent engineering projects.
                </p>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {projects.map((project) => (
                    <motion.div key={project.slug} className="h-full" variants={fadeInUp}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex justify-center mt-10">
                <Link href="/projects">
                    <Button variant="ghost">View all projects &rarr;</Button>
                </Link>
            </div>
        </section>
    )
}
