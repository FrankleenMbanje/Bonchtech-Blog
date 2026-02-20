'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-background/90 backdrop-blur-xl border-b border-border'
                : 'bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

                {/* Logo — serif wordmark */}
                <Link href="/" className="group flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-serif transition-transform duration-200 group-hover:scale-110">
                        U
                    </div>
                    <span className="font-serif font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors duration-200">
                        Unplug
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors duration-200 link-underline ${pathname === item.href
                                    ? 'text-foreground'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile */}
                <div className="flex sm:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="sm:hidden border-t border-border bg-background/95 backdrop-blur-xl"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-2 text-sm font-medium transition-colors ${pathname === item.href
                                            ? 'text-foreground'
                                            : 'text-muted-foreground'
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
