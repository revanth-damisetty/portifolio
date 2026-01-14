"use client"

import { useState, useMemo } from "react"
import { Project } from "@/types"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

interface ProjectsGridProps {
    projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [search, setSearch] = useState("")
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        projects.forEach((project) => {
            project.tags.forEach((tag) => tags.add(tag))
        })
        return Array.from(tags).sort()
    }, [projects])

    // Filter projects
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.excerpt.toLowerCase().includes(search.toLowerCase())
        const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true
        return matchesSearch && matchesTag
    })

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant={selectedTag === null ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedTag(null)}
                    >
                        All
                    </Badge>
                    {allTags.map((tag) => (
                        <Badge
                            key={tag}
                            variant={selectedTag === tag ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    No projects found matching your criteria.
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            )}
        </div>
    )
}
