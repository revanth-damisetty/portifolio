"use client"

import { motion } from "framer-motion"
import { Profile } from "@/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { fadeInUp, staggerContainer } from "@/lib/motion"

interface CertificationsProps {
    certifications: Profile["certifications"]
}

export function Certifications({ certifications }: CertificationsProps) {
    if (!certifications || certifications.length === 0) return null

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 border-t border-border/40">
            <motion.div
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Certifications
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Continuous learning and professional development.
                </p>
            </motion.div>
            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {certifications.map((cert, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        <Card className="hover:border-primary/40 transition-colors group relative overflow-hidden">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start gap-2">
                                <div className="bg-white p-2 rounded-full ring-1 ring-border/50 shrink-0 h-16 w-16 flex items-center justify-center overflow-hidden">
                                    {cert.logo ? (
                                        <div className="relative h-12 w-12">
                                            <Image
                                                src={cert.logo}
                                                alt={`${cert.issuer} Logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <Award className="h-8 w-8 text-primary" />
                                    )}
                                </div>
                                {cert.link && (
                                    <Link href={cert.link} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="sr-only">View Certificate</span>
                                    </Link>
                                )}
                            </div>
                            <CardTitle className="mt-4 text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium">
                                {cert.issuer}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                Issued: {cert.date}
                            </p>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
