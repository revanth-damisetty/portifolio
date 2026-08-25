"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const routes = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md text-foreground">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                        Revanth Damisetty
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground border-b-2 border-transparent hover:border-primary/40",
                                pathname === route.href ? "text-foreground border-primary" : "text-muted-foreground"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Link href="/resume" className="ml-2 inline-flex items-center justify-center rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-8 px-4 py-2">
                        Resume
                    </Link>
                </div>

                {/* Right side: Mobile menu button */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent text-foreground focus-visible:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="container max-w-screen-2xl px-4 py-4 space-y-2">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                    pathname === route.href
                                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-center rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-2 px-4 mt-4"
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
