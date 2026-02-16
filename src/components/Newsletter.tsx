'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setIsSubscribed(true);
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
    };

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 md:p-16"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                            {isSubscribed ? (
                                <Check size={28} className="text-white" />
                            ) : (
                                <Mail size={28} className="text-white" />
                            )}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {isSubscribed ? 'You\'re Subscribed!' : 'Stay in the Loop'}
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            {isSubscribed 
                                ? 'Thank you for subscribing. You\'ll receive our latest articles soon!'
                                : 'Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.'
                            }
                        </p>

                        {/* Form */}
                        {!isSubscribed && (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:border-white/40 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            Subscribe
                                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                        {!isSubscribed && (
                            <p className="text-blue-200 text-sm mt-4">
                                Join 5,000+ developers. Unsubscribe anytime.
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
