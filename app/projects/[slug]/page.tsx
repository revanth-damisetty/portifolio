import { getProjectBySlug, getProjects } from "@/lib/data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Globe } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from 'react-markdown' // We will fix the import if it's default or named
import { Project } from "@/types"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const projects = await getProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = await getProjectBySlug(params.slug)
    if (!project) return {}

    return {
        title: `${project.title} | Revanth Damisetty`,
        description: project.excerpt,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    return (
        <article className="container max-w-3xl py-12 md:py-16 lg:py-24">
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
            </Link>

            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <div className="flex items-center gap-4 pt-4">
                    {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Github className="h-4 w-4" /> GitHub
                            </Button>
                        </Link>
                    )}
                    {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Globe className="h-4 w-4" /> Live Demo
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
        </article>
    )
}
