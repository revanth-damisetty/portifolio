export function Footer() {
    return (
        <footer className="border-t py-8">
            <div className="container max-w-screen-2xl px-4 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm text-muted-foreground">Venkata Sai Revanth Damisetty</p>
                    <p className="text-sm text-muted-foreground">Ithaca, NY · Open to relocation · 3 years OPT remaining</p>
                </div>
                <div className="flex flex-col items-center md:items-end text-sm text-muted-foreground gap-1">
                    <a href="tel:+16073396540" className="hover:text-primary">+1 (607) 339-6540</a>
                    <a href="mailto:revanth.damisetty@gmail.com" className="hover:text-primary">revanth.damisetty@gmail.com</a>
                    <div className="flex gap-3 text-xs mt-1">
                        <a href="https://github.com/revanth-damisetty" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
                        <span className="text-muted-foreground">•</span>
                        <a href="https://linkedin.com/in/revanth-damisetty" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
                        <span className="text-muted-foreground">•</span>
                        <a href="https://leetcode.com/u/revanth_damisetty/" target="_blank" rel="noreferrer" className="hover:text-primary">LeetCode</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
