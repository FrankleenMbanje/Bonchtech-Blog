'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Perspective</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
                        What People Are Realizing
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        The conversation around screen time is shifting. Here&apos;s what thoughtful voices are saying.
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
                            className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <Quote size={14} className="text-white" />
                            </div>

                            {/* Quote */}
                            <p className="text-foreground leading-relaxed mb-6 italic font-serif text-lg">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}
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
