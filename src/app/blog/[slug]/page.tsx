import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found | Unplug",
        };
    }

    const { frontmatter } = post;

    return {
        title: `${frontmatter.title} | Unplug`,
        description: frontmatter.description,
        keywords: [frontmatter.category, "digital minimalism", "screen time", "intentional living"],
        authors: [{ name: frontmatter.author }],
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: frontmatter.publishedAt,
            authors: [frontmatter.author],
            images: frontmatter.image ? [
                {
                    url: frontmatter.image,
                    width: 1200,
                    height: 630,
                    alt: frontmatter.title,
                },
            ] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: frontmatter.title,
            description: frontmatter.description,
            images: frontmatter.image ? [frontmatter.image] : [],
        },
    };
}

// Generate static params for all posts
export function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Calculate reading time
function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

// Get related articles
function getRelatedPosts(currentSlug: string, category: string, count: number = 3) {
    const allPosts = getPosts();
    return allPosts
        .filter(post => post.slug !== currentSlug && post.frontmatter.category === category)
        .slice(0, count);
}

// Single author — Frankleen
const authorData = {
    name: "Frankleen",
    bio: "Writing about living intentionally in a hyperconnected world. Dumb phones, screen time, and the art of doing less.",
    role: "Digital Minimalism Writer",
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const readingTime = calculateReadingTime(post.content);
    const relatedPosts = getRelatedPosts(post.slug, post.frontmatter.category);

    // Generate JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.frontmatter.title,
        description: post.frontmatter.description,
        image: post.frontmatter.image,
        datePublished: post.frontmatter.publishedAt,
        dateModified: post.frontmatter.publishedAt,
        author: {
            "@type": "Person",
            name: "Frankleen",
            jobTitle: authorData.role,
        },
        publisher: {
            "@type": "Organization",
            name: "Unplug",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://bonchtech.tech/blog/${post.slug}`,
        },
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="min-h-screen bg-background">
                {/* Reading Progress Bar */}
                <div className="reading-progress" id="reading-progress" />

                {/* Hero Section */}
                <header className="relative">
                    {/* Background Image */}
                    {post.frontmatter.image && (
                        <div className="absolute inset-0 h-[70vh] min-h-[500px]">
                            <Image
                                src={post.frontmatter.image}
                                alt={post.frontmatter.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                        </div>
                    )}

                    {/* Navigation */}
                    <nav className="relative z-10 px-6 lg:px-8 py-6">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Back to all articles</span>
                            </Link>
                        </div>
                    </nav>

                    {/* Article Header */}
                    <div className={`relative z-10 px-6 lg:px-8 ${post.frontmatter.image ? 'pt-32' : 'pt-16'} pb-16`}>
                        <div className="max-w-4xl mx-auto">
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                    {post.frontmatter.category || 'Digital Minimalism'}
                                </span>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        {readingTime} min read
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance font-serif">
                                {post.frontmatter.title}
                            </h1>

                            {/* Description */}
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 text-balance">
                                {post.frontmatter.description}
                            </p>

                            {/* Author Preview */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                                    F
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Frankleen</p>
                                    <p className="text-sm text-muted-foreground">{authorData.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Share Buttons */}
                        <div className="flex items-center gap-2 mb-12 pb-8 border-b border-border">
                            <span className="text-sm text-muted-foreground mr-2">Share:</span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(`https://bonchtech.tech/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://bonchtech.tech/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://bonchtech.tech/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                                aria-label="Share on Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <button
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all ml-auto"
                                aria-label="Bookmark article"
                            >
                                <Bookmark className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <MDXRemote source={post.content} />
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm text-muted-foreground">Tags:</span>
                                {[post.frontmatter.category || "Digital Minimalism", "Screen Time", "Intentional Living"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                                    F
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground font-serif">
                                        Written by Frankleen
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">{authorData.role}</p>
                                    <p className="text-muted-foreground">{authorData.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 lg:px-8 py-16 border-t border-border bg-muted/30">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-foreground mb-8 font-serif">Related Reads</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group block"
                                    >
                                        <article className="bg-card rounded-xl overflow-hidden border border-border hover-lift">
                                            {relatedPost.frontmatter.image && (
                                                <div className="aspect-video relative">
                                                    <Image
                                                        src={relatedPost.frontmatter.image}
                                                        alt={relatedPost.frontmatter.title}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-4">
                                                <span className="text-xs font-medium text-primary">
                                                    {relatedPost.frontmatter.category}
                                                </span>
                                                <h3 className="font-semibold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors font-serif">
                                                    {relatedPost.frontmatter.title}
                                                </h3>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Newsletter CTA */}
                <section className="px-6 lg:px-8 py-16 border-t border-border">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                            Enjoyed this article?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Get calm, clear thinking about intentional living delivered to your inbox. No spam, no noise.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-6 lg:px-8 py-12 border-t border-border">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Unplug. Built with intention.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            by Frankleen
                        </p>
                    </div>
                </footer>
            </article>

            {/* Reading Progress Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('scroll', () => {
                            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                            const scrolled = (winScroll / height) * 100;
                            const el = document.getElementById('reading-progress');
                            if (el) el.style.width = scrolled + '%';
                        });
                    `,
                }}
            />
        </>
    );
}
