import ModernHero from '@/components/ModernHero';
import ModernBlogGrid from '@/components/ModernBlogGrid';
import { getPosts } from '@/lib/blog';

// Server Component
export default async function Home() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-black text-white/90">
      <ModernHero />

      <div className="relative z-10 -mt-12">
        <ModernBlogGrid initialPosts={posts} />
      </div>

      <footer className="bg-black text-neutral-500 py-12 px-6 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-mono tracking-widest">
          <p>© 2026 BonchTech Systems.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Privacy_Protocol</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Terms_of_Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">System_Status</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
