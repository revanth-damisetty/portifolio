"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
    const pathname = usePathname()
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

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
                <div className="mr-4 hidden md:flex items-center">
                    <Link href="/" className="mr-8 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block tracking-tight text-white hover:text-[#00ea64] transition-colors">Revanth Damisetty</span>
                    </Link>
                    <div className="flex gap-1 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "px-4 py-2 transition-colors hover:text-white border-b-2 border-transparent hover:border-[#00ea64]",
                                    pathname === route.href ? "text-white border-[#00ea64]" : "text-gray-400"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Support - Minimal initial version */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Link href="/resume" className="hidden sm:inline-flex items-center justify-center rounded-sm text-sm font-medium bg-[#00ea64] text-[#1C1E29] hover:bg-[#00c853] transition-colors h-8 px-4 py-2">
                            Resume
                        </Link>
                    </div>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md whitespace-nowrap text-sm font-medium transition-colors hover:bg-white/10 text-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (
                            theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                        ) : (
                            <span className="h-4 w-4" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}
