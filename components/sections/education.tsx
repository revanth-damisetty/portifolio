import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Profile } from "@/types"

interface EducationProps {
    education: Profile["education"]
}

export function Education({ education }: EducationProps) {
    if (!education || education.length === 0) return null

    return (
        <section className="container max-w-screen-2xl py-14 md:py-18 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center">
                <h2 className="text-4xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                    Education
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Academic foundations that shape my work in applied ML and data science.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {education.map((edu, idx) => (
                    <Card key={idx} className="h-full border-border/70 bg-card">
                        <div className="h-1.5 w-full bg-primary/80" />
                        <CardHeader className="space-y-4">
                            <div className="flex flex-col items-center gap-3">
                                {edu.logo && (
                                    <div className="relative h-20 w-20 rounded-full overflow-hidden border border-border shrink-0 bg-white p-3">
                                        <Image
                                            src={edu.logo}
                                            alt={`${edu.school} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <div className="space-y-1 text-center">
                                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary">{edu.school}</CardTitle>
                                    <CardDescription className="text-base font-medium text-foreground">{edu.degree}</CardDescription>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
                                <Badge variant="outline" className="h-7 px-3 text-[12px]">{edu.dates}</Badge>
                                <span>{edu.location}</span>
                                {edu.gpa && <span className="font-semibold text-foreground">GPA: {edu.gpa}</span>}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-left">
                            {edu.coursework && (
                                <div className="space-y-2">
                                    <div className="text-[12px] font-semibold tracking-wide uppercase text-muted-foreground">Coursework</div>
                                    <div className="flex flex-wrap gap-3">
                                        {edu.coursework.map((c) => (
                                            <Badge key={c} variant="secondary" className="text-[12px]">
                                                {c}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
