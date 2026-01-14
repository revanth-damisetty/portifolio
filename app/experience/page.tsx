import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { Experience } from "@/types"
import path from "path"
import fs from "fs"

export const metadata = {
    title: 'Experience | Revanth Damisetty',
    description: 'My professional experience.',
}

async function getExperience(): Promise<Experience[]> {
    const filePath = path.join(process.cwd(), "content", "experience.json")
    if (!fs.existsSync(filePath)) return []
    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
}

export default async function ExperiencePage() {
    const experience = await getExperience()

    return (
        <div className="container max-w-6xl py-12 md:py-16 lg:py-24 px-4 md:px-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">Experience</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {experience.map((role) => (
                    <Card key={role.id} className="bg-card">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    {role.logo && (
                                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border shrink-0 bg-white p-1">
                                            <Image
                                                src={role.logo}
                                                alt={`${role.company} Logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <CardTitle className="text-xl md:text-2xl font-bold text-primary">{role.title}</CardTitle>
                                        <CardDescription className="text-lg font-medium text-foreground mt-1">
                                            {role.company}
                                        </CardDescription>
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-end gap-1">
                                    <Badge variant="outline" className="w-fit">{role.dates}</Badge>
                                    <span className="text-sm text-muted-foreground">{role.location}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground">
                                {role.description.map((desc, i) => (
                                    <li key={i} className="pl-1 leading-relaxed">
                                        {/* Parse bold markdown manually if needed, or rely on simple replacement if rendering */}
                                        <span dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3 pt-2 border-t border-border/50">
                                <div className="flex flex-wrap gap-2 items-center">
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">Tech Stack:</span>
                                    {role.techStack?.map(tech => (
                                        <Badge key={tech} variant="secondary" className="text-xs font-medium">{tech}</Badge>
                                    ))}
                                </div>
                                {role.methodologies && (
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">Focus:</span>
                                        {role.methodologies.map(method => (
                                            <Badge key={method} variant="outline" className="text-xs font-medium border-primary/20">{method}</Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
