"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Mail, Github, Linkedin } from "lucide-react"
import { SiLeetcode } from "react-icons/si"
import { Profile } from "@/types"

interface HeroProps {
    profile: Profile
}

export function Hero({ profile }: HeroProps) {
    const avatarRef = useRef<HTMLDivElement>(null)
    const headlineRef = useRef<HTMLDivElement>(null)
    const taglineRef = useRef<HTMLParagraphElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const resumeRef = useRef<HTMLDivElement>(null)
    const socialsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const targets = [avatarRef, headlineRef, taglineRef, badgeRef, resumeRef].map((r) => r.current).filter(Boolean)
        const socialIcons = socialsRef.current ? Array.from(socialsRef.current.children) : []
        const all = [...targets, ...socialIcons]

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) {
            gsap.set(all, { opacity: 1, y: 0, scale: 1 })
            return
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        tl.fromTo(avatarRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 })
            .fromTo(headlineRef.current, { opacity: 0, y: 16, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, "-=0.25")
            .fromTo(taglineRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
            .fromTo(badgeRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
            .fromTo(resumeRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
            .fromTo(socialIcons, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06 }, "-=0.15")

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center py-8 text-center md:py-12 lg:py-24 px-4 md:px-6">
            <Card className="relative w-full max-w-screen-2xl overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.25),transparent_60%)]" />
                <CardContent className="relative flex flex-col items-center p-10 md:p-16 lg:p-20 space-y-8">
                    <div className="flex items-center justify-center gap-4 md:gap-8 mt-6">
                        <div className="relative h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full border border-border bg-white p-3 shadow-md">
                            <Image
                                src="/logos/apple.png"
                                alt="Apple logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {profile.avatar && (
                            <div ref={avatarRef} className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-primary shadow-md shrink-0 ring-4 ring-card opacity-0">
                                <Image
                                    src={profile.avatar}
                                    alt={profile.name}
                                    fill
                                    className="object-cover object-[center_35%]"
                                    priority
                                />
                            </div>
                        )}
                        <div className="relative h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full border border-border bg-white p-3 shadow-md">
                            <Image
                                src="/logos/cornell.jpeg"
                                alt="Cornell University logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div ref={headlineRef} className="space-y-4 text-center max-w-2xl opacity-0">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                                Revanth Damisetty
                            </h1>
                            <h2 className="text-lg md:text-xl font-medium text-primary">
                                {profile.title}
                            </h2>
                        </div>

                        <p ref={taglineRef} className="leading-normal text-muted-foreground sm:text-lg sm:leading-8 opacity-0">
                            {profile.tagline}
                        </p>

                        <div ref={badgeRef} className="inline-block px-4 py-2 bg-muted/50 text-xs md:text-sm text-foreground/80 font-medium border border-border rounded-full opacity-0">
                            Data Science (Cornell MPS) • Ex-GE Healthcare
                        </div>
                    </div>

                    <div ref={resumeRef} className="opacity-0">
                        <Link href="/resume">
                            <Button variant="outline" size="lg">
                                Resume <FileText className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div ref={socialsRef} className="flex items-center gap-6">
                        <Link href={profile.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 opacity-0">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={profile.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 opacity-0">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        {profile.socials.leetcode && (
                            <Link href={profile.socials.leetcode} target="_blank" rel="noreferrer" title="LeetCode" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 opacity-0">
                                <SiLeetcode className="h-6 w-6" />
                                <span className="sr-only">LeetCode</span>
                            </Link>
                        )}
                        <Link href="/contact" title="Contact" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 opacity-0">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Contact</span>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
