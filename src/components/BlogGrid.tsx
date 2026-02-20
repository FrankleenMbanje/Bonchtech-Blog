'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function calculateReadingTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    return `${Math.ceil(words / 200)} min`;
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-16 pb-28 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header row */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="accent-bar" />
                            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                                Latest
                            </span>
                        </div>
                        <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl tracking-tight">
                            Recent Reads
                        </h2>
                    </div>

                    <Link href="/blog"
                        className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link">
                        <span>View All</span>
                        <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Grid — intentionally asymmetric: featured large + small cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => {
                        const readingTime = calculateReadingTime(post.content);
                        const date = new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric'
                        });

                        return (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.07,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                className="group card-elevated overflow-hidden flex flex-col"
                            >
                                {/* Card image */}
                                <Link href={`/blog/${post.slug}`}
                                    className="block relative overflow-hidden img-overlay"
                                    style={{ height: '200px' }}
                                >
                                    {post.frontmatter.image ? (
                                        <img
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full"
                                            style={{
                                                background: `linear-gradient(135deg, 
                                                    hsl(${140 + index * 20}, 25%, ${85 - index * 3}%) 0%, 
                                                    hsl(${20 + index * 15}, 35%, ${80 - index * 2}%) 100%)`
                                            }}
                                        />
                                    )}

                                    {/* Category pill on image */}
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 dark:bg-card/90 text-foreground">
                                            {post.frontmatter.category || 'Digital Minimalism'}
                                        </span>
                                    </div>
                                </Link>

                                {/* Card body */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                        <span>{date}</span>
                                        <span className="w-1 h-1 rounded-full bg-border" />
                                        <div className="flex items-center gap-1">
                                            <Clock size={10} />
                                            <span>{readingTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200"
                                        style={{ fontSize: '1.0625rem' }}>
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5 flex-1">
                                        {post.frontmatter.description}
                                    </p>

                                    {/* Footer row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-[10px] font-bold">
                                                {post.frontmatter.author?.charAt(0) ?? 'F'}
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                                {post.frontmatter.author}
                                            </span>
                                        </div>

                                        <Link href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary group/cta">
                                            <span>Read</span>
                                            <ArrowUpRight size={12} className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Mobile "View All" */}
                <div className="mt-10 text-center sm:hidden">
                    <Link href="/blog" className="btn-ghost">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
