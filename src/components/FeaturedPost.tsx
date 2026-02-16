'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User } from 'lucide-react';

// Calculate reading time
function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export default function FeaturedPost({ post }: { post: Post }) {
    const readingTime = calculateReadingTime(post.content);
    
    return (
        <section className="relative py-24 bg-muted/30" id="articles">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                        Editor&apos;s Pick
                    </h2>
                </motion.div>

                {/* Featured Card */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover-lift"
                >
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative min-h-[300px] lg:min-h-[450px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                            {/* Abstract Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,197,253,0.1),transparent_50%)]" />
                            </div>

                            {post.frontmatter.image ? (
                                <img
                                    src={post.frontmatter.image}
                                    alt={post.frontmatter.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm" />
                                </div>
                            )}

                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Category Badge */}
                            <div className="absolute top-6 left-6">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">
                                    {post.frontmatter.category || 'Technology'}
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            {/* Meta */}
                            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <User size={14} />
                                    <span>{post.frontmatter.author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    <span>{readingTime}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.frontmatter.title}
                                </Link>
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-4">
                                {post.frontmatter.description}
                            </p>

                            {/* Read More */}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                            >
                                Read Full Article
                                <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
