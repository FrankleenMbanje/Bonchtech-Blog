'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Articles", href: "/blog" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif font-bold text-foreground text-lg tracking-tight hover:text-primary transition-colors"
                >
                    Unplug
                </Link>

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm transition-colors ${pathname === item.href
                                    ? "text-foreground font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="flex sm:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-foreground p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="sm:hidden border-t border-border bg-background"
                    >
                        <div className="max-w-2xl mx-auto px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block text-sm ${pathname === item.href
                                            ? "text-foreground font-medium"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
