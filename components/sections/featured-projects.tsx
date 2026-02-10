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
            <div className="flex flex-col items-center justify-center gap-3 text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Selected Projects
                </h2>
                <p className="text-muted-foreground">
                    Highlights of my recent engineering projects.
                </p>
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
