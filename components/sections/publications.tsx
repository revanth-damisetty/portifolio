import { Profile } from "@/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface PublicationsProps {
    publications: Profile["publications"]
}

export function Publications({ publications }: PublicationsProps) {
    if (!publications || publications.length === 0) return null

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 border-t border-border/40">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-10">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Research & Publications
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Contribtions to the academic community in Machine Learning and Cybersecurity.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {publications.map((pub, index) => (
                    <Card key={index} className="bg-muted/50">
                        <CardHeader>
                            <div className="flex justify-between items-start gap-4">
                                {pub.logo && (
                                    <div className="relative h-20 w-20 shrink-0 bg-white dark:bg-card p-1 rounded-sm border border-border flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={pub.logo}
                                            alt={pub.venue}
                                            fill
                                            className={pub.venue.includes("IJSREM") ? "object-cover object-left" : "object-contain p-1"}
                                        />
                                    </div>
                                )}
                                <div className="flex justify-between items-start gap-2 flex-grow">
                                    <div className="space-y-1">
                                        {pub.link ? (
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors inline-flex items-center gap-2 group/link">
                                                <CardTitle className="text-xl">{pub.title}</CardTitle>
                                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                                            </a>
                                        ) : (
                                            <CardTitle className="text-xl">{pub.title}</CardTitle>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <span className="shrink-0 bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold">
                                                {pub.venue}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base text-muted-foreground">
                                {pub.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
