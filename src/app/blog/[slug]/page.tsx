import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Generate static params for all posts at build time
export function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-black text-white/90">
            {/* Immersive Header */}
            <div className="relative w-full h-[60vh] min-h-[500px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.frontmatter.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                </div>

                <div className="absolute inset-0 max-w-4xl mx-auto px-6 flex flex-col justify-end pb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Command Center
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-300">
                            {post.frontmatter.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.frontmatter.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {post.frontmatter.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
                        {post.frontmatter.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                <div className="prose prose-invert prose-lg prose-blue max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-neutral-950 py-12 border-t border-white/10 text-center text-neutral-500 text-sm">
                <p>© 2026 BonchTech Systems.</p>
            </footer>
        </article>
    );
}
