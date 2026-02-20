'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function calculateReadingTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    return `${Math.ceil(words / 200)} min`;
}

export default function FeaturedPost({ post }: { post: Post }) {
    const readingTime = calculateReadingTime(post.content);
    const date = new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <section id="articles" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Section eyebrow */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="accent-bar" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                        Featured
                    </span>
                </div>

                {/* Featured card — asymmetric split layout */}
                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group card-elevated overflow-hidden"
                >
                    <div className="grid lg:grid-cols-[55%_45%]">

                        {/* Image — with gradient overlay per CLAUDE.md */}
                        <div className="relative min-h-[280px] lg:min-h-[480px] overflow-hidden bg-secondary img-overlay">
                            {post.frontmatter.image ? (
                                <img
                                    src={post.frontmatter.image}
                                    alt={post.frontmatter.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(135deg, color-mix(in srgb, #4a7c59 25%, #f7f4ef) 0%, color-mix(in srgb, #c47c5a 25%, #f7f4ef) 100%)'
                                    }}
                                />
                            )}

                            {/* Category pill over image */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="pill">
                                    {post.frontmatter.category || 'Digital Minimalism'}
                                </span>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="p-10 lg:p-14 flex flex-col justify-center">
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                                <span>{date}</span>
                                <span className="w-1 h-1 rounded-full bg-border" />
                                <div className="flex items-center gap-1">
                                    <Clock size={11} />
                                    <span>{readingTime} read</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="font-serif font-bold text-foreground leading-tight mb-5 group-hover:text-primary transition-colors duration-300"
                                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                                <Link href={`/blog/${post.slug}`}>
                                    {post.frontmatter.title}
                                </Link>
                            </h2>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-8">
                                {post.frontmatter.description}
                            </p>

                            {/* Author + CTA row */}
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                        {post.frontmatter.author?.charAt(0) ?? 'F'}
                                    </div>
                                    <span className="text-sm font-medium text-foreground">
                                        {post.frontmatter.author}
                                    </span>
                                </div>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                                >
                                    <span>Read Article</span>
                                    <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
