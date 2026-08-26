"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Experience } from "@/types";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface ExperienceHighlightProps {
    experiences: Experience[];
}

export function ExperienceHighlight({ experiences }: ExperienceHighlightProps) {
    if (!experiences || experiences.length === 0) return null;

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24">
            <motion.div
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Experiences
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Condensed snapshots of impact from recent roles.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {experiences.map((role) => {
                    const project = role.projects?.[0];
                    const firstPoint = project?.points?.[0] ?? "";
                    const resultPoint = project?.points?.find(p => p.toLowerCase().startsWith("**result")) ?? "";
                    return (
                        <motion.div key={role.id} className="relative h-full" variants={fadeInUp}>
                        <Card className="relative h-full flex flex-col">
                            <CardHeader className="space-y-3">
                                {role.logo && (
                                    <div className="relative h-20 w-20 rounded-full overflow-hidden border border-border bg-white p-3">
                                        <Image
                                            src={role.logo}
                                            alt={`${role.company} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <CardTitle className="text-lg font-semibold text-primary">{role.title}</CardTitle>
                                    <CardDescription className="text-sm font-medium text-foreground">{role.company}</CardDescription>
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
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className="flex justify-center mt-10">
                <Link href="/experience">
                    <Button variant="ghost">View all experiences &rarr;</Button>
                </Link>
            </div>
        </section>
    )
}
