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
    <main className="min-h-screen bg-background">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold font-serif">
                  U
                </div>
                <span className="font-serif font-bold text-xl text-foreground tracking-tight">
                  Unplug
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                A blog about living intentionally in a hyperconnected world.
                Written by Frankleen for thoughtful people tired of digital noise.
              </p>

              {/* Decorative tagline */}
              <p className="text-xs text-muted-foreground/70 mt-6 tracking-[0.08em] uppercase">
                Less noise, more life.
              </p>
            </div>

            {/* Explore links */}
            <div>
              <h4 className="text-foreground font-semibold mb-5 text-xs uppercase tracking-[0.1em]">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'All Articles', href: '/blog' },
                  { label: 'Start Here', href: '/start-here' },
                  { label: 'Phone Finder', href: '/phone-finder' },
                  { label: 'About Frankleen', href: '/about' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-foreground font-semibold mb-5 text-xs uppercase tracking-[0.1em]">
                Topics
              </h4>
              <ul className="space-y-3">
                {[
                  'Dumb Phone Reviews',
                  'Digital Detox',
                  'Screen Time & Science',
                  'Intentional Living',
                ].map((topic) => (
                  <li key={topic}>
                    <span className="text-muted-foreground text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Unplug · Built with intention by Frankleen
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
