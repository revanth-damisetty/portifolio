export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 sm:px-8 max-w-screen-2xl">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by Revanth Damisetty. Source code available on{" "}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    )
}
