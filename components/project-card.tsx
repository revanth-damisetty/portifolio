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
import { Github } from "lucide-react"
import { Project } from "@/types"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:border-primary/60 text-left">
            <CardHeader className="p-6 pb-3 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                        <CardTitle className="text-lg md:text-xl font-semibold text-primary">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs font-medium text-muted-foreground">
                            {project.date}
                        </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end">
                        {project.tags?.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-[11px] px-2 py-0.5">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                {project.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.excerpt}
                    </p>
                )}
            </CardHeader>

            <CardContent className="p-6 pt-0 flex-1 space-y-4">
                {(project.techStack?.length || project.methodologies?.length) && (
                    <div className="space-y-2">
                        <div className="text-[11px] font-semibold tracking-wide uppercase text-muted-foreground">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-[11px]">
                                    {tech}
                                </Badge>
                            ))}
                            {project.methodologies?.map((m) => (
                                <Badge key={m} variant="outline" className="text-[11px]">
                                    {m}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                <ul className="space-y-2 text-sm">
                    {project.impact && (
                        <li className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-foreground">
                                <strong className="text-primary">Result:</strong> {project.impact}
                            </span>
                        </li>
                    )}
                    {project.workflow?.map((point, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0 gap-2 mt-auto justify-start">
                {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <Github className="h-3 w-3" /> GitHub
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}
