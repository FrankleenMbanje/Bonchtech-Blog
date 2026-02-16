'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "The articles on BonchTech have completely changed how I approach software development. The depth of knowledge is incredible.",
        author: "Sarah Chen",
        role: "Senior Developer",
        company: "TechCorp"
    },
    {
        quote: "Finally, a tech blog that doesn't just scratch the surface. Every article teaches me something new and actionable.",
        author: "Marcus Johnson",
        role: "Engineering Lead",
        company: "StartupXYZ"
    },
    {
        quote: "I've been following BonchTech for months now. The quality of content is consistently outstanding. Highly recommended!",
        author: "Emily Rodriguez",
        role: "Full Stack Developer",
        company: "Digital Agency"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                        Loved by Developers
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Join thousands of developers who level up their skills with our content
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <Quote size={14} className="text-white" />
                            </div>

                            {/* Quote */}
                            <p className="text-foreground leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
