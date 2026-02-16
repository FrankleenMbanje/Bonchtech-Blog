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
            title: "Article Not Found | BonchTech",
        };
    }

    const { frontmatter } = post;

    return {
        title: `${frontmatter.title} | BonchTech`,
        description: frontmatter.description,
        keywords: [frontmatter.category, "technology", "programming", "software development"],
        authors: [{ name: frontmatter.author }],
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: frontmatter.publishedAt,
            authors: [frontmatter.author],
            images: [
                {
                    url: frontmatter.image,
                    width: 1200,
                    height: 630,
                    alt: frontmatter.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: frontmatter.title,
            description: frontmatter.description,
            images: [frontmatter.image],
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

// Author data
const authors: Record<string, { bio: string; avatar: string; role: string; twitter?: string }> = {
    "Alex Chen": {
        bio: "Senior AI researcher and tech writer. Previously at Google DeepMind and OpenAI. Passionate about making AI accessible to everyone.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        role: "AI Research Lead",
        twitter: "@alexchen",
    },
    "Sarah Johnson": {
        bio: "Full-stack developer and open source contributor. Specializes in React, Next.js, and modern web architecture.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        role: "Senior Frontend Engineer",
        twitter: "@sarahjdev",
    },
    "Michael Rodriguez": {
        bio: "DevOps engineer with 10+ years of experience. Kubernetes contributor and cloud architecture expert.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        role: "Principal DevOps Engineer",
    },
    "Jennifer Walsh": {
        bio: "Cybersecurity analyst and ethical hacker. Helps organizations build secure systems and trains teams on security best practices.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        role: "Security Architect",
    },
    "David Kim": {
        bio: "Machine learning engineer focused on LLMs and AI systems. Writes about the practical applications of cutting-edge AI.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        role: "ML Engineer",
        twitter: "@davidkimai",
    },
    "Emma Thompson": {
        bio: "Software architect and tech industry analyst. Tracks developer trends and ecosystem evolution.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
        role: "Tech Analyst",
    },
    "Marcus Chen": {
        bio: "TypeScript core contributor and developer advocate. Helps teams adopt type-safe development practices.",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200",
        role: "Developer Advocate",
    },
    "Lisa Park": {
        bio: "Cloud-native specialist and Kubernetes expert. Helps enterprises modernize their infrastructure.",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200",
        role: "Cloud Architect",
    },
    "Robert Zhang": {
        bio: "Infrastructure engineer focused on large-scale distributed systems. Works on data center design and optimization.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
        role: "Infrastructure Engineer",
    },
    "Sophia Martinez": {
        bio: "AI systems architect specializing in autonomous agents. Building the future of intelligent automation.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
        role: "AI Architect",
    },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const readingTime = calculateReadingTime(post.content);
    const relatedPosts = getRelatedPosts(post.slug, post.frontmatter.category);
    const author = authors[post.frontmatter.author] || {
        bio: "Tech writer and developer.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        role: "Writer",
    };

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
            name: post.frontmatter.author,
            jobTitle: author.role,
        },
        publisher: {
            "@type": "Organization",
            name: "BonchTech",
            logo: {
                "@type": "ImageObject",
                url: "https://bonch.tech/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://bonch.tech/blog/${post.slug}`,
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
                    <div className="relative z-10 px-6 lg:px-8 pt-32 pb-16">
                        <div className="max-w-4xl mx-auto">
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                    {post.frontmatter.category}
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                                {post.frontmatter.title}
                            </h1>

                            {/* Description */}
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 text-balance">
                                {post.frontmatter.description}
                            </p>

                            {/* Author Preview */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src={author.avatar}
                                    alt={post.frontmatter.author}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{post.frontmatter.author}</p>
                                    <p className="text-sm text-muted-foreground">{author.role}</p>
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
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(`https://bonch.tech/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://bonch.tech/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://bonch.tech/blog/${post.slug}`)}`}
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
                                {[post.frontmatter.category, "Technology", "Programming"].map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/tag/${tag.toLowerCase()}`}
                                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
                            <div className="flex flex-col md:flex-row gap-6">
                                <Image
                                    src={author.avatar}
                                    alt={post.frontmatter.author}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                Written by {post.frontmatter.author}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{author.role}</p>
                                        </div>
                                        {author.twitter && (
                                            <a
                                                href={`https://twitter.com/${author.twitter.replace('@', '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
                                                <Twitter className="w-4 h-4" />
                                                Follow {author.twitter}
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground">{author.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 lg:px-8 py-16 border-t border-border bg-muted/30">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group block"
                                    >
                                        <article className="bg-card rounded-xl overflow-hidden border border-border hover-lift">
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={relatedPost.frontmatter.image}
                                                    alt={relatedPost.frontmatter.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <span className="text-xs font-medium text-primary">
                                                    {relatedPost.frontmatter.category}
                                                </span>
                                                <h3 className="font-semibold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors">
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
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Enjoyed this article?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
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
                            © {new Date().getFullYear()} BonchTech. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                        </div>
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
                            document.getElementById('reading-progress').style.width = scrolled + '%';
                        });
                    `,
                }}
            />
        </>
    );
}
