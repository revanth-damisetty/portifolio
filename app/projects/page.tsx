import { getProjects } from "@/lib/data"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata = {
    title: 'Projects | Revanth Damisetty',
    description: 'A collection of my machine learning and engineering projects.',
}

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <div className="container max-w-screen-2xl py-12 md:py-16 lg:py-24 px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8 items-center text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                        Case studies of ML systems, streaming architectures, and production applications I&apos;ve built.
                    </p>
                </div>
                <ProjectsGrid projects={projects} />
            </div>
        </div>
    )
}
