import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default async function BlogPage() {
    const posts = getPosts();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Blog</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                            All Articles
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our collection of in-depth articles on software development,
                            AI, web technologies, and the future of computing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover-lift"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Thumbnail */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block relative h-52 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5" />

                                    {post.frontmatter.image ? (
                                        <img
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30" />
                                        </div>
                                    )}

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">
                                            {post.frontmatter.category || 'Tech'}
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                                        <ArrowUpRight size={16} className="text-foreground" />
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            <span>
                                                {new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>5 min read</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                        {post.frontmatter.description}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                            {post.frontmatter.author.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {post.frontmatter.author}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 bg-muted/30 py-12 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} BonchTech. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
