'use client';

import { ArrowRight } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

export default function ModernHero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-white">

            {/* Background with tech-grid overlay (Light Mode) */}
            <div className="absolute inset-0 z-0 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-100/50 blur-[100px] rounded-full mix-blend-multiply animate-pulse-slow" />
            </div>

            {/* Navbar */}
            <header className="absolute top-0 left-0 right-0 z-50">
                <MotionWrapper type="fade-in" delay={0.2}>
                    <Navbar />
                </MotionWrapper>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-4xl">

                    <MotionWrapper type="slide-up" delay={0.4} className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-50 text-cyan-700 text-xs font-mono tracking-widest uppercase flex items-center gap-2 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                            System Online v2.6
                        </span>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.5}>
                        {/* Rajdhani Font with Dark Text */}
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-neutral-900 leading-[0.9] mb-8 font-rajdhani">
                            EXECUTE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-400">
                                AUTONOMY.
                            </span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.6}>
                        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-10 border-l-2 border-neutral-200 pl-6">
                            Deploy self-healing infrastructure. Orchestrate AI agents. <br className="hidden md:block" />
                            Operational blueprints for the post-manual era.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.7} className="flex flex-col sm:flex-row gap-4 items-start">
                        <Link href="/blog/self-healing-infra" className="group relative px-8 py-4 bg-neutral-900 text-white font-bold text-lg rounded-lg hover:bg-neutral-800 transition-all flex items-center gap-2 overflow-hidden shadow-lg hover:shadow-xl">
                            <span className="relative z-10">Deploy Blueprint</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                        </Link>

                        <button className="px-8 py-4 border border-neutral-200 text-neutral-600 font-mono text-sm tracking-widest hover:bg-neutral-50 transition-colors uppercase rounded-lg">
                            Read Documentation
                        </button>
                    </MotionWrapper>

                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
        </section>
    );
}
