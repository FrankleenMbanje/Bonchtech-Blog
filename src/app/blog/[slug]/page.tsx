import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

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
        authors: [{ name: frontmatter.author }],
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: frontmatter.publishedAt,
            authors: [frontmatter.author],
            images: frontmatter.image ? [{ url: frontmatter.image, alt: frontmatter.title }] : [],
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

// Single author data
const authorData = {
    name: "Frankleen",
    role: "Digital Minimalism Writer",
    bio: "Writing about living intentionally in a hyperconnected world. Dumb phones, screen time, and the art of doing less."
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const readingTime = calculateReadingTime(post.content);
    const date = new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Reading progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
                <div id="reading-bar" className="h-full bg-primary transition-all duration-150 w-0" />
            </div>

            {/* Header / Hero */}
            <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 border-b border-border mb-12 lg:mb-20 overflow-hidden">
                {/* Background decorative elements */}
                <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-[20%] right-[10%] w-px h-[200px] bg-gradient-to-b from-transparent via-border to-transparent opacity-40" />
                    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.04]"
                        style={{ background: 'radial-gradient(circle, #4a7c59 0%, transparent 70%)' }} />
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Back link */}
                    <div className="mb-10">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs font-medium uppercase tracking-widest group">
                            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                            Return to Archive
                        </Link>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="pill">{post.frontmatter.category || 'Digital Minimalism'}</span>
                        <span className="text-muted-foreground/30">•</span>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                            <Clock size={12} className="text-primary/60" />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="font-serif font-bold text-foreground leading-[1.1] mb-8"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
                        {post.frontmatter.title}
                    </h1>

                    {/* Description / Introduction */}
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-accent/30 pl-8 py-2">
                        {post.frontmatter.description}
                    </p>

                    {/* Post Meta */}
                    <div className="flex items-center gap-6 mt-12 pt-10 border-t border-border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-sm">
                                F
                            </div>
                            <div>
                                <div className="text-sm font-bold text-foreground">{authorData.name}</div>
                                <div className="text-xs text-muted-foreground">{date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:grid lg:grid-cols-[1fr_250px] gap-20">
                {/* Main Content Column */}
                <article className="max-w-3xl">
                    {/* Featured Image - Asymmetric offset */}
                    {post.frontmatter.image && (
                        <div className="relative mb-16 lg:-ml-20 lg:-mr-20 group">
                            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden img-overlay card-elevated">
                                <Image
                                    src={post.frontmatter.image}
                                    alt={post.frontmatter.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border border-border/50 text-foreground">
                                Featured Visual
                            </div>
                        </div>
                    )}

                    {/* MDX Content */}
                    <div className="prose prose-luxury">
                        <MDXRemote source={post.content} />
                    </div>

                    {/* Share & Support Bottom Bar */}
                    <div className="mt-20 pt-10 border-t border-border flex flex-wrap justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Share</span>
                            <div className="flex gap-2">
                                {[
                                    { icon: <Twitter size={14} />, label: 'Twitter', href: '#' },
                                    { icon: <Linkedin size={14} />, label: 'LinkedIn', href: '#' },
                                    { icon: <Facebook size={14} />, label: 'Facebook', href: '#' },
                                ].map((s) => (
                                    <button key={s.label} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                                        {s.icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                            <Share2 size={14} />
                            <span>Copy link</span>
                        </button>
                    </div>

                    {/* Author Box */}
                    <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-secondary/30 border border-border flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-3xl flex-shrink-0">
                            F
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-xl text-foreground mb-2">Thoughts from {authorData.name}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {authorData.bio}
                            </p>
                            <Link href="/about" className="link-underline text-xs font-bold text-primary uppercase tracking-widest">
                                Read more about my journey
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Sidebar Column (Desktop only or stack) */}
                <aside className="hidden lg:block space-y-12">
                    <div className="sticky top-32">
                        {/* Summary Box */}
                        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm mb-10">
                            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4">Reading Overview</h5>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Time to read</div>
                                    <div className="font-serif font-bold text-foreground">{readingTime} minutes</div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Topic</div>
                                    <div className="font-serif font-bold text-foreground">{post.frontmatter.category || 'Mindset'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Sidebar */}
                        <div className="flex flex-col gap-4 pl-4 border-l border-border">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-2">Connect</p>
                            <a href="#" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors font-medium">
                                <Twitter size={14} />
                                <span>Twitter</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors font-medium">
                                <Linkedin size={14} />
                                <span>Newsletter</span>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Newsletter section reuse */}
            <div className="border-t border-border">
                {/* Simple footer for post page */}
                <footer className="py-12 px-6 lg:px-12 bg-card/20 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-serif">U</div>
                            <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors uppercase tracking-[0.1em]">Unplug</span>
                        </Link>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                            © {new Date().getFullYear()} Unplug · Writing by Frankleen
                        </p>
                    </div>
                </footer>
            </div>

            {/* Page specific scripts */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.onscroll = function() {
                            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                            var scrolled = (winScroll / height) * 100;
                            var bar = document.getElementById("reading-bar");
                            if (bar) bar.style.width = scrolled + "%";
                        };
                    `
                }}
            />
        </main>
    );
}
