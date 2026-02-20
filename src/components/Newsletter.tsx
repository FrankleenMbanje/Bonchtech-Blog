'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <section className="py-24 bg-muted/40 relative overflow-hidden">
            {/* Decorative background */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-[0.04]"
                    style={{ background: 'radial-gradient(circle, #4a7c59 0%, transparent 70%)' }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="accent-bar" />
                        <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                            Newsletter
                        </span>
                    </div>

                    <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl tracking-tight mb-4">
                        One email per week.
                        <br />
                        <span className="text-primary italic">No noise.</span>
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Practical ideas for a less distracted life — delivered every Sunday morning.
                        No spam. No fluff. Unsubscribe anytime.
                    </p>

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-3 p-5 rounded-xl border border-primary/30 bg-primary/5"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Check size={14} className="text-primary-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">You&apos;re in!</p>
                                    <p className="text-sm text-muted-foreground mt-0.5">
                                        First issue arrives Sunday.
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="flex gap-3 flex-wrap sm:flex-nowrap"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                                    aria-label="Email address"
                                />
                                <button
                                    type="submit"
                                    className="btn-primary flex-shrink-0"
                                >
                                    <span>Subscribe</span>
                                    <ArrowRight size={16} />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* Social proof */}
                    <p className="mt-4 text-xs text-muted-foreground">
                        Join thoughtful readers making intentional choices online.
                    </p>
                </div>
            </div>
        </section>
    );
}
