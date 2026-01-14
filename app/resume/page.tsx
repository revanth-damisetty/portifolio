import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export const metadata = {
    title: 'Resume | Revanth Damisetty',
    description: 'View and download my resume.',
}

export default function ResumePage() {
    return (
        <div className="container max-w-4xl py-12 md:py-16 lg:py-24 px-4 md:px-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8">Resume</h1>

            <div className="flex gap-4 mb-8">
                <a href="/resume.pdf" download>
                    <Button size="lg" className="gap-2">
                        <Download className="h-4 w-4" /> Download PDF
                    </Button>
                </a>
                <a href="/resume.pdf" target="_blank">
                    <Button variant="outline" size="lg" className="gap-2">
                        <FileText className="h-4 w-4" /> Open in New Tab
                    </Button>
                </a>
            </div>

            <div className="w-full aspect-[1/1.4] bg-muted rounded-lg border shadow-sm overflow-hidden">
                <iframe
                    src="/resume.pdf"
                    className="w-full h-full"
                    title="Resume PDF"
                />
            </div>
        </div>
    )
}
