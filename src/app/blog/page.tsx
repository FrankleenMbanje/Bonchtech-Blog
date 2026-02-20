import { getPosts } from "@/lib/blog";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Clock, ArrowRight } from "lucide-react";

function calculateReadingTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    return `${Math.ceil(words / 200)} min`;
}

export default function BlogPage() {
    const posts = getPosts();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page header */}
            <div className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center gap-3 mb-6">
                    <span className="accent-bar" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
                        All Articles
                    </span>
                </div>

                <h1 className="font-serif font-bold text-foreground tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
                    The Archive
                </h1>
                <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                    Everything written so far — on smartphones, screen time,
                    digital detox, and the art of choosing less.
                </p>
            </div>

            {/* Divider */}
            <div className="divider-organic max-w-7xl mx-auto px-6 lg:px-12" />

            {/* Article list */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {posts.length === 0 ? (
                    <p className="text-muted-foreground py-12">No articles yet. Check back soon.</p>
                ) : (
                    <div className="divide-y divide-border">
                        {posts.map((post, index) => {
                            const readingTime = calculateReadingTime(post.content);
                            const date = new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            });

                            return (
                                <article
                                    key={post.slug}
                                    className="group grid lg:grid-cols-[1fr_auto] gap-6 py-10 hover:bg-secondary/20 transition-colors duration-200 rounded-lg px-4 -mx-4"
                                    style={{ animationDelay: `${index * 40}ms` }}
                                >
                                    <div className="flex flex-col gap-3">
                                        {/* Category + meta */}
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            {post.frontmatter.category && (
                                                <>
                                                    <span className="pill">
                                                        {post.frontmatter.category}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                </>
                                            )}
                                            <span>{date}</span>
                                            <span className="w-1 h-1 rounded-full bg-border" />
                                            <div className="flex items-center gap-1">
                                                <Clock size={10} />
                                                <span>{readingTime} read</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="font-serif font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200"
                                            style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}>
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.frontmatter.title}
                                            </Link>
                                        </h2>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed line-clamp-2 max-w-2xl">
                                            {post.frontmatter.description}
                                        </p>
                                    </div>

                                    {/* Thumbnail + CTA */}
                                    <div className="flex lg:flex-col items-start lg:items-end justify-between gap-6 lg:py-2">
                                        {post.frontmatter.image && (
                                            <Link href={`/blog/${post.slug}`}
                                                className="block flex-shrink-0 rounded-lg overflow-hidden img-overlay hover-lift"
                                                style={{ width: '120px', height: '80px' }}
                                            >
                                                <img
                                                    src={post.frontmatter.image}
                                                    alt={post.frontmatter.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </Link>
                                        )}

                                        <Link href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary flex-shrink-0 group/link">
                                            <span>Read</span>
                                            <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="border-t border-border py-12 mt-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-serif">U</div>
                        <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">Unplug</span>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Unplug · by Frankleen
                    </p>
                </div>
            </footer>
        </main>
    );
}
