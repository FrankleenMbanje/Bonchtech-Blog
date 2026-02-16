'use client';

import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ModernHero() {
    return (
        <section className="relative min-h-screen w-full bg-background overflow-hidden">
            <Navbar />
            
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid pointer-events-none" />
            
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 text-sm text-blue-600 dark:text-blue-400">
                            <Sparkles size={14} />
                            Curated Tech Insights
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
                    >
                        Write Better Code,
                        <br />
                        <span className="text-gradient-blue">Faster.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Deep dives into software development, AI, and modern web technologies. 
                        Level up your skills with actionable insights and best practices.
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
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 btn-shine"
                        >
                            Start Reading
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-foreground font-semibold rounded-xl border border-border hover:bg-secondary transition-all duration-300"
                        >
                            About Us
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                    >
                        {[
                            { value: '50+', label: 'Articles' },
                            { value: '10K+', label: 'Readers' },
                            { value: '100%', label: 'Quality' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-muted-foreground mb-6">Trusted by developers from</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        {['Google', 'Microsoft', 'Meta', 'Amazon', 'Netflix'].map((company) => (
                            <span key={company} className="text-lg font-semibold text-muted-foreground">
                                {company}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
