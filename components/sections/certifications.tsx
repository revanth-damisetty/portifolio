import { Profile } from "@/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CertificationsProps {
    certifications: Profile["certifications"]
}

export function Certifications({ certifications }: CertificationsProps) {
    if (!certifications || certifications.length === 0) return null

    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 border-t border-border/40">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-10">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Certifications
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Continuous learning and professional development.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                    <Card key={index} className="bg-background border-border/60 hover:border-border transition-colors group relative overflow-hidden">
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
                ))}
            </div>
        </section>
    )
}
