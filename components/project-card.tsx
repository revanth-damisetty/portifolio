import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe, ArrowRight } from "lucide-react"
import { Project } from "@/types"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden border transition-all hover:border-foreground/20 hover:shadow-lg">
            <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <CardTitle className="leading-snug">
                            {project.title}
                        </CardTitle>
                        <CardDescription>{project.date}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 py-2 flex-1 space-y-4">
                {project.excerpt && (
                    <p className="text-muted-foreground text-sm">{project.excerpt}</p>
                )}

                <div className="space-y-2">
                    {project.techStack && (
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="font-semibold text-foreground">Tech Stack:</span>
                            <span className="text-muted-foreground">{project.techStack.join(", ")}</span>
                        </div>
                    )}
                    {project.methodologies && (
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="font-semibold text-foreground">Methodologies:</span>
                            <span className="text-muted-foreground">{project.methodologies.join(", ")}</span>
                        </div>
                    )}
                </div>

                <ul className="space-y-2 text-sm">
                    {project.impact && (
                        <li className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>
                                <span className="font-medium text-foreground">Impact: </span>
                                {project.impact}
                            </span>
                        </li>
                    )}
                    {project.workflow?.map((point, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="p-6 pt-2 gap-2 mt-auto justify-end">
                {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <Github className="h-3 w-3" /> GitHub
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}
