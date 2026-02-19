import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ScrollToTop from "@/components/ScrollToTop";
import { getPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles | Unplug",
    description: "Essays on digital minimalism, screen time, dumb phones, and living intentionally in a hyperconnected world.",
};

export default function BlogPage() {
    const posts = getPosts();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                {/* Page header */}
                <header className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-3">
                        Articles
                    </h1>
                    <p className="text-muted-foreground">
                        Everything I&apos;ve written about living with less digital noise.
                    </p>
                </header>

                {/* Article list */}
                {posts.length > 0 ? (
                    <div className="divide-y divide-border">
                        {posts.map((post) => {
                            const date = new Date(post.frontmatter.publishedAt);
                            const formattedDate = date.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            });

                            return (
                                <article key={post.slug} className="group py-8 first:pt-0">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <time className="text-xs text-muted-foreground uppercase tracking-wider">
                                            {formattedDate}
                                        </time>
                                        <h2 className="text-xl font-bold text-foreground leading-snug mt-2 mb-2 group-hover:text-primary transition-colors font-serif">
                                            {post.frontmatter.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                            {post.frontmatter.description}
                                        </p>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-muted-foreground py-12">
                        No articles yet. Check back soon.
                    </p>
                )}
            </div>

            <Newsletter />

            {/* Footer */}
            <footer className="border-t border-border">
                <div className="max-w-2xl mx-auto px-6 py-8 flex justify-between items-center text-xs text-muted-foreground">
                    <span>© {new Date().getFullYear()} Unplug</span>
                    <span>by Frankleen</span>
                </div>
            </footer>

            <ScrollToTop />
        </main>
    );
}
