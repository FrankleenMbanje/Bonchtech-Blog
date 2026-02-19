import SimpleHero from "@/components/SimpleHero";
import Newsletter from "@/components/Newsletter";
import ScrollToTop from "@/components/ScrollToTop";
import { getPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <SimpleHero />

      {/* Articles — Single column, editorial list */}
      <section id="latest" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-12">
          Latest
        </h2>

        {posts.length > 0 ? (
          <div className="space-y-0 divide-y divide-border">
            {posts.map((post) => {
              const date = new Date(post.frontmatter.publishedAt);
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <article key={post.slug} className="group py-8 first:pt-0">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200 font-serif">
                          {post.frontmatter.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                          {post.frontmatter.description}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <time>{formattedDate}</time>
                          <span className="text-border">·</span>
                          <span>{post.frontmatter.category || 'Digital Minimalism'}</span>
                        </div>
                      </div>

                      {/* Arrow on hover */}
                      <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1 shrink-0">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground">Nothing here yet. Check back soon.</p>
        )}
      </section>

      {/* Newsletter — Simple, inline */}
      <Newsletter />

      {/* Footer — Minimal */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <Link href="/" className="font-serif font-bold text-foreground text-lg">
                Unplug
              </Link>
              <p className="text-sm text-muted-foreground mt-1">Less noise, more life.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground transition-colors">Articles</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Unplug</span>
            <span>by Frankleen</span>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
