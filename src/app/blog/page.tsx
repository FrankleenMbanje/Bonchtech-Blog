import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import { Clock, ArrowUpRight, ArrowLeft } from 'lucide-react';

function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export default function BlogPage() {
    const posts = getPosts();

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 font-serif">
                        All Articles
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
                        Practical guides, honest reviews, and calm thinking about life in a hyperconnected world.
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            const readingTime = calculateReadingTime(post.content);

                            return (
                                <article
                                    key={post.slug}
                                    className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
                                >
                                    {/* Thumbnail */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="block relative h-52 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary" />

                                        {post.frontmatter.image ? (
                                            <img
                                                src={post.frontmatter.image}
                                                alt={post.frontmatter.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30" />
                                            </div>
                                        )}

                                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 dark:bg-card/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                            <ArrowUpRight size={18} className="text-foreground" />
                                        </div>
                                    </Link>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                                {post.frontmatter.category || 'Digital Minimalism'}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <Clock size={12} />
                                                <span>{readingTime}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2 font-serif">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.frontmatter.title}
                                            </Link>
                                        </h2>

                                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                            {post.frontmatter.description}
                                        </p>

                                        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold ring-2 ring-background">
                                                    {post.frontmatter.author.charAt(0)}
                                                </div>
                                                <span className="text-sm font-medium text-muted-foreground">
                                                    {post.frontmatter.author}
                                                </span>
                                            </div>
                                            <time className="text-xs text-muted-foreground">
                                                {new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </time>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-muted-foreground text-lg">No articles yet. Check back soon.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
