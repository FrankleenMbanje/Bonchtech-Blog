'use client';

import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function ModernHero() {
    return (
        <section className="relative w-full bg-background">
            <Navbar />

            <div className="max-w-2xl mx-auto px-6 pt-40 pb-24 text-center">
                {/* Simple, calm headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight font-serif mb-6"
                >
                    Reclaim Your Attention.
                </motion.h1>

                {/* One line description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg text-muted-foreground leading-relaxed mb-10"
                >
                    Thoughts on living intentionally in a hyperconnected world.
                </motion.p>

                {/* Single CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="#latest"
                        className="text-sm font-medium text-primary hover:text-foreground transition-colors link-underline"
                    >
                        Read the latest ↓
                    </Link>
                </motion.div>
            </div>

            {/* Subtle divider */}
            <div className="max-w-2xl mx-auto px-6">
                <div className="border-t border-border" />
            </div>
        </section>
    );
}
