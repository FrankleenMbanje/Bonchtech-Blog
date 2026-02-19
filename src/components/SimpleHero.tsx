'use client';

import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function ModernHero() {
    return (
        <section className="relative min-h-screen w-full bg-background overflow-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                            <Leaf size={14} />
                            Digital Minimalism
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight font-serif"
                    >
                        Reclaim Your
                        <br />
                        <span className="text-gradient">Attention.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        A blog about living intentionally in a hyperconnected world.
                        Dumb phones, digital detox, and the art of doing less.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="#articles"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                        >
                            Start Reading
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-foreground font-semibold rounded-xl border border-border hover:bg-secondary transition-all duration-300"
                        >
                            Why Unplug?
                        </Link>
                    </motion.div>

                    {/* Minimal Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 flex items-center justify-center gap-12 text-center"
                    >
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-foreground font-serif">4.2h</div>
                            <div className="text-sm text-muted-foreground mt-1">Avg. daily screen time</div>
                        </div>
                        <div className="w-px h-10 bg-border"></div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-foreground font-serif">96×</div>
                            <div className="text-sm text-muted-foreground mt-1">Phone checks per day</div>
                        </div>
                        <div className="w-px h-10 bg-border"></div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-foreground font-serif">47%</div>
                            <div className="text-sm text-muted-foreground mt-1">Say they&apos;re addicted</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
