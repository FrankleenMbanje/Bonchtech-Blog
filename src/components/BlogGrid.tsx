'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

// Calculate reading time
function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12"
                >
                    <div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Latest</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                            Recent Articles
                        </h2>
                    </div>
                    <Link 
                        href="/blog" 
                        className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                        View All
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => {
                        const readingTime = calculateReadingTime(post.content);
                        
                        return (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover-lift"
                            >
                                {/* Thumbnail */}
                                <Link 
                                    href={`/blog/${post.slug}`} 
                                    className="block relative h-52 overflow-hidden"
                                >
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
                                    
                                    {post.frontmatter.image ? (
                                        <img
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30" />
                                        </div>
                                    )}

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Arrow indicator - bottom right */}
                                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 dark:bg-slate-900/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                        <ArrowUpRight size={18} className="text-foreground" />
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category & Reading Time */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                            {post.frontmatter.category || 'Tech'}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Clock size={12} />
                                            <span>{readingTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                        {post.frontmatter.description}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-background">
                                            {post.frontmatter.author.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {post.frontmatter.author}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
