import SimpleHero from "@/components/SimpleHero";
import FeaturedPost from "@/components/FeaturedPost";
import BlogGrid from "@/components/BlogGrid";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ScrollToTop from "@/components/ScrollToTop";
import { getPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const posts = getPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1, 7);

  return (
    <main className="min-h-screen bg-background relative">
      {/* Hero */}
      <SimpleHero />

      {/* Featured Post */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Blog Grid */}
      {remainingPosts.length > 0 && <BlogGrid posts={remainingPosts} />}

      {/* Quotes */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📵</span>
                <span className="font-bold text-xl text-foreground font-serif">Unplug</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A blog about living intentionally in a hyperconnected world. Less noise, more life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    About Unplug
                  </Link>
                </li>
              </ul>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Topics</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-muted-foreground text-sm">Dumb Phone Reviews</span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Digital Detox</span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Screen Time & Science</span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Intentional Living</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Unplug. Built with intention.
            </p>
            <p className="text-sm text-muted-foreground">
              by Frankleen
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
