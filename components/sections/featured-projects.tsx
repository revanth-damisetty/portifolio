import { Project } from "@/types"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FeaturedProjectsProps {
    projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-8 md:mb-12">
                <div className="space-y-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Selected Work
                    </h2>
                    <p className="text-muted-foreground">
                        Highlights of my recent engineering projects.
                    </p>
                </div>
                <Link href="/projects">
                    <Button variant="ghost">View all projects &rarr;</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}
