import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Agentic Command Center",
        description: "A centralized dashboard for orchestrating 5+ autonomous agents. Features real-time log streaming and intervention modals.",
        tech: ["Next.js", "Python", "WebSockets"],
        link: "#",
        color: "bg-purple-500"
    },
    {
        title: "Self-Healing Infrastructure",
        description: "The core engine behind BonchTech. Automatically detects critical failures in Postgres and restarts services via n8n webhooks.",
        tech: ["n8n", "Docker", "Postgres"],
        link: "#",
        color: "bg-cyan-500"
    },
    {
        title: "Neural Blog Engine",
        description: "Markdown-based CMS with AI-generated summaries and vector-search related posts. Blazing fast static regeneration.",
        tech: ["Next.js", "MDX", "OpenAI"],
        link: "#",
        color: "bg-emerald-500"
    },
    {
        title: "Crypto Sentinel",
        description: "24/7 arbitrage bot monitoring 12 separate exchanges. Executes trades with <50ms latency using Rust backend.",
        tech: ["Rust", "Tokio", "Redis"],
        link: "#",
        color: "bg-amber-500"
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 overflow-hidden relative">
            <div className="absolute inset-0 z-0 bg-neutral-950 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <MotionWrapper type="fade-in" delay={0.1}>
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Return_to_Base
                    </Link>
                </MotionWrapper>

                <div className="mb-16">
                    <MotionWrapper type="slide-up" delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-bold font-rajdhani mb-4 tracking-tighter text-white uppercase">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Works.</span>
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper type="slide-up" delay={0.3}>
                        <p className="text-xl text-neutral-400 font-light font-mono max-w-2xl border-l-2 border-purple-500/50 pl-6">
                            Deployments from the lab. <br /> From autonomous bots to full-stack architectures.
                        </p>
                    </MotionWrapper>
                </div>

                <BentoGrid className="max-w-7xl mx-auto auto-rows-[18rem]">
                    {projects.map((project, i) => (
                        <MotionWrapper key={i} type="scale" delay={0.4 + (i * 0.1)} className={i === 0 || i === 3 ? "md:col-span-2" : ""}>
                            <BentoGridItem
                                title={<span className="text-xl font-bold font-rajdhani uppercase tracking-wide">{project.title}</span>}
                                description={
                                    <div className="mt-2">
                                        <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2 py-1 bg-white/10 text-xs font-mono rounded text-neutral-300 border border-white/5">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                }
                                header={
                                    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-none ${project.color} opacity-20 group-hover/bento:opacity-40 transition-opacity relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
                                        <div className="absolute top-4 right-4 animate-pulse">
                                            <ExternalLink className="w-5 h-5 text-white/50" />
                                        </div>
                                    </div>
                                }
                                className="h-full bg-neutral-900/40 border-white/5 hover:border-purple-500/30 transition-colors group/bento"
                            />
                        </MotionWrapper>
                    ))}
                </BentoGrid>

            </div>
        </main>
    );
}
