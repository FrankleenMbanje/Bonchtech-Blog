'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Terminal, Shield, Cpu, Activity, LogIn, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from "next-themes";

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/#blueprints' },
        {
            name: 'Solutions',
            href: '/solutions',
            dropdown: [
                { name: 'Autonomous Agents', icon: <Cpu size={16} />, desc: 'Self-governing bot swarms' },
                { name: 'DevOps Healing', icon: <Activity size={16} />, desc: 'Auto-patching infrastructure' },
                { name: 'Cyber Sentinel', icon: <Shield size={16} />, desc: '24/7 Threat monitoring' },
            ]
        },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: 'mailto:contact@bonch.tech' },
    ];

    return (
        <nav className="flex justify-between items-center w-full max-w-7xl mx-auto p-6 z-50 relative">

            {/* 1. Logo Section */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl rounded-lg shadow-lg group-hover:scale-105 transition-all duration-300">
                    B
                </div>
                <span className="font-mono font-bold text-lg tracking-widest text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-cyan-400 transition-colors">
                    BONCH_OS
                </span>
            </Link>

            {/* 2. Center Navigation */}
            <div className="hidden md:flex items-center gap-8 bg-white/70 dark:bg-black/40 backdrop-blur-md border border-neutral-200 dark:border-white/10 px-8 py-3 rounded-full shadow-sm">
                {navLinks.map((link) => (
                    <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setHovered(link.name)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            href={link.href}
                            className={cn(
                                "flex items-center gap-1 text-sm font-medium transition-colors font-mono uppercase tracking-wider",
                                hovered === link.name
                                    ? "text-neutral-900 dark:text-white"
                                    : "text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white"
                            )}
                        >
                            {link.name}
                            {link.dropdown && (
                                <ChevronDown
                                    size={14}
                                    className={cn("transition-transform duration-300", hovered === link.name ? "rotate-180" : "")}
                                />
                            )}
                        </Link>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {link.dropdown && hovered === link.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/10 rounded-xl shadow-xl backdrop-blur-xl z-50 overflow-hidden"
                                >
                                    <div className="relative z-10 flex flex-col gap-1">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href="#"
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group/item"
                                            >
                                                <div className="mt-0.5 text-neutral-400 dark:text-neutral-500 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-neutral-900 dark:text-white text-xs font-bold font-rajdhani uppercase tracking-wide">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* 3. Right Actions */}
            <div className="flex items-center gap-4">
                <ModeToggle />
                <Link
                    href="#"
                    className="hidden md:flex items-center gap-2 text-sm font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                    <LogIn size={14} />
                    <span>Login</span>
                </Link>

                <Link
                    href="/portfolio"
                    className="h-10 px-6 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-105 transition-all shadow-md"
                >
                    <Terminal size={14} />
                    <span>PORTFOLIO</span>
                </Link>
            </div>

        </nav>
    );
}

function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-900" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
