import { Mail, MapPin, Github, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: 'Contact | Revanth Damisetty',
    description: 'Get in touch.',
}

export default function ContactPage() {
    return (
        <div className="container max-w-screen-2xl py-12 md:py-24 lg:py-32 px-4 md:px-6 flex flex-col items-center text-center justify-center min-h-[calc(100vh-14rem)]">
            <div className="space-y-12 flex flex-col items-center text-center max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">Let&apos;s Work Together</h1>
                    <p className="text-xl text-muted-foreground md:text-2xl max-w-[800px] leading-relaxed">
                        I&apos;m currently open to new opportunities in ML Engineering and Data Infrastructure.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>

                <div className="space-y-8 w-full flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6 text-muted-foreground w-full">
                        <div className="flex items-center gap-4 group transition-all hover:scale-105 duration-200">
                            <div className="p-3 bg-muted rounded-full group-hover:bg-[#00ea64]/10 transition-colors">
                                <Mail className="h-8 w-8 md:h-10 md:w-10 group-hover:text-[#00ea64] transition-colors" />
                            </div>
                            <a href="mailto:revanth.damisetty@gmail.com" className="hover:text-foreground text-xl md:text-2xl font-medium transition-colors">
                                revanth.damisetty@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 group transition-all hover:scale-105 duration-200">
                            <div className="p-3 bg-muted rounded-full">
                                <MapPin className="h-8 w-8 md:h-10 md:w-10" />
                            </div>
                            <span className="text-xl md:text-2xl font-medium">Ithaca, NY (Open to Remote)</span>
                        </div>
                    </div>

                    <div className="pt-8 w-full border-t border-border mt-8">
                        <p className="text-xl font-semibold text-foreground mb-8">Connect with me:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                            <Link href="https://github.com/revanth-damisetty" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:scale-105 duration-200 group border border-border/50 hover:border-[#00ea64]/50">
                                <Github className="h-10 w-10 md:h-12 md:w-12 mb-4 group-hover:text-[#00ea64] transition-colors" />
                                <span className="text-lg font-bold group-hover:text-[#00ea64] transition-colors mb-1">GitHub</span>
                                <span className="text-base text-muted-foreground">@revanth-damisetty</span>
                            </Link>

                            <Link href="https://linkedin.com/in/revanth-damisetty" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:scale-105 duration-200 group border border-border/50 hover:border-[#00ea64]/50">
                                <Linkedin className="h-10 w-10 md:h-12 md:w-12 mb-4 group-hover:text-[#00ea64] transition-colors" />
                                <span className="text-lg font-bold group-hover:text-[#00ea64] transition-colors mb-1">LinkedIn</span>
                                <span className="text-base text-muted-foreground">@revanth-damisetty</span>
                            </Link>

                            <Link href="https://leetcode.com/revanthdamisetty" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:scale-105 duration-200 group border border-border/50 hover:border-[#00ea64]/50">
                                <Code2 className="h-10 w-10 md:h-12 md:w-12 mb-4 group-hover:text-[#00ea64] transition-colors" />
                                <span className="text-lg font-bold group-hover:text-[#00ea64] transition-colors mb-1">LeetCode</span>
                                <span className="text-base text-muted-foreground">@revanthdamisetty</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
