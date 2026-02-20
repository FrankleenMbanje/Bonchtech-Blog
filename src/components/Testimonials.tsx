'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Almost everything will work again if you unplug it for a few minutes... including you.",
        author: "Anne Lamott",
        role: "Bestselling Author",
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "Henry David Thoreau",
        role: "Philosopher",
    },
    {
        quote: "I deliberately got rid of my smartphone. I didn't want it anymore. It was making me miserable.",
        author: "Cal Newport",
        role: "Author, Digital Minimalism",
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Section header — layered, asymmetric */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="accent-bar" />
                            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                                Perspectives
                            </span>
                        </div>
                        <h2 className="font-serif font-bold text-foreground text-3xl md:text-5xl tracking-tight leading-tight">
                            The space between <br />
                            <span className="text-primary italic">connected</span> and <span className="text-primary italic">present</span>.
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-sm leading-relaxed border-l border-border pl-6 italic">
                        The conversation around screen time is shifting. Here's what thoughtful voices are saying.
                    </p>
                </div>

                {/* Perspective cards — layered depth */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="card-elevated p-8 lg:p-10 flex flex-col relative group"
                        >
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 right-8 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                                <Quote size={64} className="text-primary" />
                            </div>

                            {/* Quote content */}
                            <blockquote className="relative z-10 flex-1">
                                <p className="font-serif text-lg lg:text-xl text-foreground leading-relaxed italic mb-8">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </blockquote>

                            {/* Author info */}
                            <footer className="relative z-10 pt-8 border-t border-border mt-auto flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold font-serif text-sm">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <cite className="not-italic font-bold text-foreground text-sm tracking-wide">
                                        {testimonial.author}
                                    </cite>
                                    <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider font-medium">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </footer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
