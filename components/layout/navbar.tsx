"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
    const pathname = usePathname()
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const routes = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#1C1E29] text-white border-b border-[#1C1E29]">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold tracking-tight text-white hover:text-[#00ea64] transition-colors">
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
                                "px-4 py-2 text-sm font-medium transition-colors hover:text-white border-b-2 border-transparent hover:border-[#00ea64]",
                                pathname === route.href ? "text-white border-[#00ea64]" : "text-gray-400"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Link href="/resume" className="ml-2 inline-flex items-center justify-center rounded-sm text-sm font-medium bg-[#00ea64] text-[#1C1E29] hover:bg-[#00c853] transition-colors h-8 px-4 py-2">
                        Resume
                    </Link>
                </div>

                {/* Right side: Theme toggle + Mobile menu button */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 text-white focus-visible:outline-none"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (
                            theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                        ) : (
                            <span className="h-4 w-4" />
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 text-white focus-visible:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#1C1E29]">
                    <div className="container max-w-screen-2xl px-4 py-4 space-y-2">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "block px-4 py-2 text-sm font-medium rounded-sm transition-colors",
                                    pathname === route.href
                                        ? "bg-[#00ea64]/10 text-[#00ea64] border-l-2 border-[#00ea64]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-center rounded-sm text-sm font-medium bg-[#00ea64] text-[#1C1E29] hover:bg-[#00c853] transition-colors py-2 px-4 mt-4"
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
