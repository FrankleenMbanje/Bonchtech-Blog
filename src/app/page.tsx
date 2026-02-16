import SimpleHero from '@/components/SimpleHero';
import FeaturedPost from '@/components/FeaturedPost';
import BlogGrid from '@/components/BlogGrid';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import ScrollToTop from '@/components/ScrollToTop';
import { getPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

// Server Component
export default async function Home() {
  const posts = getPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SimpleHero />

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <BlogGrid posts={remainingPosts} />

      <Testimonials />

      <Newsletter />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/logo.svg"
                    alt="BonchTech"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-foreground">BonchTech</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                A technology blog focused on modern software development, AI, and the future of computing. 
                Sharing knowledge and best practices for developers worldwide.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <SocialLink href="https://twitter.com/bonchtech" icon={<Twitter size={18} />} label="Twitter" />
                <SocialLink href="https://github.com/bonchtech" icon={<Github size={18} />} label="GitHub" />
                <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialLink href="mailto:contact@bonch.tech" icon={<Mail size={18} />} label="Email" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="#articles">Articles</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                <FooterLink href="/category/ai">AI & Machine Learning</FooterLink>
                <FooterLink href="/category/web">Web Development</FooterLink>
                <FooterLink href="/category/software">Software Engineering</FooterLink>
                <FooterLink href="/category/tutorials">Tutorials</FooterLink>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BonchTech. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
