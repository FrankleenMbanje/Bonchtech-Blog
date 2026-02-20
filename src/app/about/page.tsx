'use client';

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-[5%] w-px h-[400px] bg-gradient-to-b from-transparent via-border to-transparent opacity-40" />
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.05]"
                    style={{ background: 'radial-gradient(circle, #4a7c59 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24">
                <div className="max-w-2xl">

                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs font-medium uppercase tracking-wider group">
                            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="accent-bar" />
                            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                                Our Story
                            </span>
                        </div>
                        <h1 className="font-serif font-bold text-foreground leading-tight mb-10"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                            About <span className="text-primary italic">Unplug.</span>
                        </h1>
                    </motion.div>

                    {/* Content section — prose-like flow */}
                    <div className="space-y-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic border-l-2 border-accent pl-8 py-2"
                        >
                            Hey, I&apos;m <strong className="font-bold not-italic">Frankleen</strong>. I started Unplug because I was tired of feeling like my phone was living my life for me.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6 text-muted-foreground leading-relaxed"
                        >
                            <p>
                                I used to check my screen time and see 7+ hours staring back at me. Notifications controlled my mornings. Doom-scrolling ate my evenings. I knew something had to change — and once I started making changes, I realized how many other people felt the same way.
                            </p>
                            <p>
                                This blog is about <strong className="text-foreground font-medium">practical digital minimalism</strong> — not about going off-grid or throwing your phone in a lake. It&apos;s about being intentional. Choosing what gets your attention. Taking back control, one habit at a time.
                            </p>
                        </motion.div>

                        {/* Feature box — card-elevated */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="card-elevated p-8 lg:p-12 my-12"
                        >
                            <h3 className="font-serif font-bold text-foreground text-2xl mb-8">What you&apos;ll find here:</h3>
                            <ul className="grid gap-6">
                                {[
                                    { title: 'Dumb phone reviews', desc: 'Honest breakdowns of Light Phone, Punkt, and others.', icon: '📱' },
                                    { title: 'Digital detox guides', desc: 'Step-by-step methods that actually work.', icon: '🌿' },
                                    { title: 'Screen time science', desc: 'What the research says about our brains on phones.', icon: '🧠' },
                                    { title: 'Real talk', desc: 'No judgment, no extremism, just honesty.', icon: '💬' },
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span className="text-2xl pt-1 opacity-80">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="pt-12 border-t border-border flex flex-col items-center text-center"
                        >
                            <p className="text-muted-foreground mb-6">
                                Questions? Ideas? Want to share your own unplugging story?
                            </p>
                            <a href="mailto:hello@bonchtech.tech" className="btn-primary group">
                                <Mail size={16} />
                                <span>Get in touch</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer component or simple footer */}
            <footer className="py-12 border-t border-border bg-card/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center text-xs text-muted-foreground uppercase tracking-widest">
                    Unplug · Made by Frankleen
                </div>
            </footer>
        </main>
    );
}
