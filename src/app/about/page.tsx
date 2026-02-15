import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 overflow-hidden relative">
            {/* Background with tech-grid overlay */}
            <div className="absolute inset-0 z-0 bg-neutral-950 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <MotionWrapper type="fade-in" delay={0.1}>
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Return_to_Base
                    </Link>
                </MotionWrapper>

                <MotionWrapper type="slide-up" delay={0.2}>
                    <h1 className="text-6xl md:text-8xl font-bold font-rajdhani mb-8 tracking-tighter text-white">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ARCHITECT.</span>
                    </h1>
                </MotionWrapper>

                <div className="space-y-12 text-lg md:text-xl text-neutral-400 font-light leading-relaxed font-sans">
                    <MotionWrapper type="slide-up" delay={0.3}>
                        <p className="border-l-2 border-cyan-500/50 pl-6">
                            BonchTech is not just a dev shop. It is an <strong className="text-white">agentic operation</strong> designed to bridge the gap between human creativity and autonomous execution.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.4}>
                        <p>
                            We specialize in building self-healing infrastructure, autonomous coding agents, and high-performance web systems that live and breathe.
                            The mission is simple: <strong className="text-white">To remove the friction between thought and deployment.</strong>
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.5}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-white/5 border border-white/10 p-8 rounded-none">
                            <div>
                                <h3 className="text-white font-mono font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                                    CORE_PROTOCOLS
                                </h3>
                                <ul className="space-y-2 text-sm font-mono text-neutral-500">
                                    <li>- Next.js / React Server Components</li>
                                    <li>- Python Automation Scripts</li>
                                    <li>- n8n Workflow Orchestration</li>
                                    <li>- Vector Database Memory</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-mono font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                                    CURRENT_STATUS
                                </h3>
                                <p className="text-sm text-neutral-500 mb-4">
                                    Operating at 100% capacity. Integrating new neural modules for enhanced generative design.
                                </p>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </main>
    );
}
