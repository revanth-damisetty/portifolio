import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/types";

interface ExperienceHighlightProps {
    experiences: Experience[];
}

export function ExperienceHighlight({ experiences }: ExperienceHighlightProps) {
    if (!experiences || experiences.length === 0) return null;

    // Take top 3 experiences
    const featured = experiences.slice(0, 3);

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Experiences
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Condensed snapshots of impact from recent roles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {featured.map((role) => {
                    const project = role.projects?.[0];
                    const firstPoint = project?.points?.[0] ?? "";
                    const resultPoint = project?.points?.find(p => p.toLowerCase().startsWith("**result")) ?? "";
                    return (
                        <Card key={role.id} className="h-full border-border/70 bg-card flex flex-col">
                            <div className="h-1 w-full bg-primary/80" />
                            <CardHeader className="space-y-2">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="space-y-1">
                                        <CardTitle className="text-lg font-semibold text-primary">{role.title}</CardTitle>
                                        <CardDescription className="text-sm font-medium text-foreground">{role.company}</CardDescription>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                    <Badge variant="outline" className="h-6 px-2">{role.dates}</Badge>
                                    <span>{role.location}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3 text-left flex-1">
                                {project && (
                                    <>
                                        <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
                                        {firstPoint && (
                                            <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: firstPoint.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                                        )}
                                        {resultPoint && (
                                            <p className="text-sm font-semibold text-primary leading-relaxed" dangerouslySetInnerHTML={{ __html: resultPoint.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        )}
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    )
}
