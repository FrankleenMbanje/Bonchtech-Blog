'use client';

import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function SimpleHero() {
    return (
        <section className="relative w-full overflow-hidden bg-background">
            <Navbar />

            {/* Background decorative elements — layered depth */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
            >
                {/* Large radial gradient — warm sage glow top-left */}
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
                    style={{ background: 'radial-gradient(circle, #4a7c59 0%, transparent 70%)' }} />

                {/* Terracotta warmth bottom-right */}
                <div className="absolute -bottom-16 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.05]"
                    style={{ background: 'radial-gradient(circle, #c47c5a 0%, transparent 70%)' }} />

                {/* Subtle asymmetric lines — decorative, intentional */}
                <div className="absolute top-40 right-[10%] w-px h-48 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="absolute top-60 right-[15%] w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent opacity-60" />
            </div>

            {/* Main hero content — asymmetric layout */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24 md:pb-32">
                <div className="max-w-3xl">

                    {/* Eyebrow label */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="accent-bar" />
                        <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                            Digital Minimalism
                        </span>
                    </motion.div>

                    {/* Main headline — large, expressive serif */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-8"
                        style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
                    >
                        Reclaim Your
                        <br />
                        <span className="text-primary italic">Attention.</span>
                    </motion.h1>

                    {/* Subheave */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
                    >
                        A blog about living intentionally in a hyperconnected world.
                        Dumb phones, digital detox, and the art of doing less.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link href="#articles" className="btn-primary">
                            Start Reading
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                        >
                            About Frankleen
                        </Link>
                    </motion.div>

                    {/* Real statistics — spaced, intentional */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-border pt-8"
                    >
                        {[
                            { value: '4h 37m', label: 'avg. daily screen time' },
                            { value: '96×', label: 'phone checks per day' },
                            { value: '12 min', label: 'avg. focus span' },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <p className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                                    {value}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1 leading-snug">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Organic divider at bottom */}
            <div className="divider-organic" />
        </section>
    );
}
