import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Github, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: 'Contact | Revanth Damisetty',
    description: 'Get in touch.',
}

export default function ContactPage() {
    return (
        <div className="container max-w-screen-2xl py-12 md:py-16 lg:py-24 px-4 md:px-6 flex flex-col items-center text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left max-w-5xl">
                <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Work Together</h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">
                        I&apos;m currently open to new opportunities in ML Engineering and Data Infrastructure.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="space-y-4 pt-4 w-full flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="h-5 w-5 shrink-0" />
                            <a href="mailto:revanth.damisetty@gmail.com" className="hover:text-[#00ea64] transition-colors">
                                revanth.damisetty@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="h-5 w-5 shrink-0" />
                            <span>Ithaca, NY (Open to Remote)</span>
                        </div>

                        <div className="pt-4 w-full border-t border-border">
                            <p className="text-sm font-semibold text-foreground mb-3">Connect with me:</p>
                            <div className="space-y-3">
                                <Link href="https://github.com/revanth-damisetty" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-[#00ea64] transition-colors group">
                                    <Github className="h-5 w-5 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium group-hover:underline">GitHub</span>
                                        <span className="text-xs">@revanth-damisetty</span>
                                    </div>
                                </Link>
                                <Link href="https://linkedin.com/in/revanth-damisetty" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-[#00ea64] transition-colors group">
                                    <Linkedin className="h-5 w-5 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium group-hover:underline">LinkedIn</span>
                                        <span className="text-xs">@revanth-damisetty</span>
                                    </div>
                                </Link>
                                <Link href="https://leetcode.com/revanthdamisetty" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-[#00ea64] transition-colors group">
                                    <Code2 className="h-5 w-5 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium group-hover:underline">LeetCode</span>
                                        <span className="text-xs">@revanthdamisetty</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
