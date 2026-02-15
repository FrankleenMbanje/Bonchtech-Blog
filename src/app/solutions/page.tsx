"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Cpu, Activity, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const solutions = [
    {
        title: "Autonomous Agents",
        description: "Deploy swarms of intelligent agents that can reason, plan, and execute complex workflows without human intervention.",
        icon: <Cpu className="text-cyan-400" size={32} />,
        color: "bg-cyan-500/10 border-cyan-500/20",
        href: "#agents"
    },
    {
        title: "DevOps Healing",
        description: "Infrastructure that fixes itself. Our AI monitors your stack 24/7 and automatically remediates incidents before they cause downtime.",
        icon: <Activity className="text-purple-400" size={32} />,
        color: "bg-purple-500/10 border-purple-500/20",
        href: "#devops"
    },
    {
        title: "Cyber Sentinel",
        description: "AI-powered threat detection that evolves faster than the attackers. Secure your perimeter with predictive defense.",
        icon: <Shield className="text-emerald-400" size={32} />,
        color: "bg-emerald-500/10 border-emerald-500/20",
        href: "#cyber"
    }
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-rajdhani mb-6 tracking-tight">
                        INTELLIGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SOLUTIONS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-mono">
                        Automate the impossible. Our suite of agentic tools powers the next generation of resilient enterprises.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={sol.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",
                                sol.color
                            )}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-black inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {sol.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-rajdhani mb-3 text-neutral-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {sol.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm">
                                {sol.description}
                            </p>

                            <Link
                                href={sol.href}
                                className="flex items-center gap-2 text-sm font-bold font-mono text-neutral-900 dark:text-white group-hover:gap-3 transition-all"
                            >
                                EXPLORE <ArrowRight size={16} />
                            </Link>

                            {/* Decorative Glow */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
