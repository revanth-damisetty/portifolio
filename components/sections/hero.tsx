import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, Mail, Github, Linkedin, Code2 } from "lucide-react"
import { Profile } from "@/types"

interface HeroProps {
    profile: Profile
}

export function Hero({ profile }: HeroProps) {
    return (
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center py-8 text-center md:py-12 lg:py-24 px-4 md:px-6">
            <Card className="w-full max-w-6xl bg-card border-border shadow-md rounded-sm overflow-hidden">
                <div className="h-2 bg-[#00ea64] w-full" />
                <CardContent className="flex flex-col items-center p-8 md:p-12 space-y-8">
                    {profile.avatar && (
                        <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-[#00ea64] shadow-md shrink-0 ring-4 ring-card mt-6">
                            <Image
                                src={profile.avatar}
                                alt={profile.name}
                                fill
                                className="object-cover object-[center_35%]"
                                priority
                            />
                        </div>
                    )}
                    <div className="space-y-4 text-center max-w-2xl">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                                Revanth Damisetty
                            </h1>
                            <h2 className="text-lg md:text-xl font-medium text-[#00ea64] font-mono">
                                {profile.title}
                            </h2>
                        </div>

                        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-8">
                            {profile.tagline}
                        </p>

                        <div className="inline-block px-4 py-2 bg-muted/50 text-xs md:text-sm text-foreground/80 font-medium font-mono border border-border rounded-sm">
                            Data Science (Cornell MPS) • Ex-GE Healthcare • ML Systems
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-[#00ea64] transition-colors transform hover:scale-110">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                        <Link href={profile.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#00ea64] transition-colors transform hover:scale-110">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#00ea64] transition-colors transform hover:scale-110">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        {profile.socials.leetcode && (
                            <Link href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#00ea64] transition-colors transform hover:scale-110">
                                <Code2 className="h-6 w-6" />
                                <span className="sr-only">LeetCode</span>
                            </Link>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-border w-full">
                        <Link href="/projects">
                            <Button size="lg" className="rounded-sm bg-[#00ea64] text-[#1C1E29] hover:bg-[#00c853]">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/resume">
                            <Button variant="outline" size="lg" className="rounded-sm border-border hover:bg-muted">
                                Resume <FileText className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="ghost" size="lg" className="rounded-sm hover:text-[#00ea64]">
                                Contact <Mail className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
