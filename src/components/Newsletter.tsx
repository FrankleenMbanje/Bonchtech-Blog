'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
    };

    return (
        <section className="max-w-2xl mx-auto px-6 py-20">
            <div className="border-t border-border pt-16">
                {isSubscribed ? (
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-4">
                            <Check size={18} className="text-primary" />
                        </div>
                        <p className="text-foreground font-medium">You&apos;re in. Welcome to the quiet side.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-serif">
                            Subscribe
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            One email per week. No noise.
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2 disabled:opacity-70 whitespace-nowrap"
                            >
                                {isSubmitting ? (
                                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight size={14} />
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}
