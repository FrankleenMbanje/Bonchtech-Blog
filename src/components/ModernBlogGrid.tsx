'use client';

import { useState } from 'react';
import { ChevronDown, Terminal, Shield, Cpu, Zap, Activity } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

const categories = ["All", "Agents", "DevOps", "Cybersec", "Lifestyle", "Automation"];

const IconMap: Record<string, any> = {
    "Terminal": <Terminal className="h-4 w-4 text-cyan-400" />,
    "Shield": <Shield className="h-4 w-4 text-cyan-400" />,
    "Cpu": <Cpu className="h-4 w-4 text-cyan-400" />,
    "Zap": <Zap className="h-4 w-4 text-cyan-400" />,
    "Activity": <Activity className="h-4 w-4 text-cyan-400" />,
};

interface Post {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
        category: string;
        author: string;
        image: string;
        icon: string;
    };
    content: string;
}

export default function ModernBlogGrid({ initialPosts }: { initialPosts: Post[] }) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = initialPosts.filter(post =>
        selectedCategory === "All" || post.frontmatter.category === selectedCategory
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-20 bg-transparent min-h-screen">
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                <div>
                    <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter font-rajdhani uppercase">
                        Insights & <span className="text-neutral-500">Blueprints</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl text-lg font-mono">
                        System Logs // Deep Dives // Agentic Configs
                    </p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 font-mono tracking-widest uppercase">Sort:</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-white/10 rounded-none text-xs font-mono font-bold text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors uppercase">
                        Newest_First
                        <ChevronDown className="w-3 h-3 text-neutral-500" />
                    </button>
                </div>
            </header>

            {/* Filters */}
            <MotionWrapper type="fade-in" delay={0.2} className="flex gap-2 overflow-x-auto pb-8 mb-4 font-medium scrollbar-hide py-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                            "px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border font-mono",
                            selectedCategory === cat
                                ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30 hover:text-white'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </MotionWrapper>

            {/* Dynamic Grid with Staggered Motion */}
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
                {filteredPosts.map((post, i) => (
                    <MotionWrapper
                        key={post.slug}
                        type="scale"
                        delay={0.1 * i}
                        className={cn("inline-block w-full h-full", i === 3 || i === 6 ? "md:col-span-2" : "")}
                    >
                        <Link href={`/blog/${post.slug}`} className="block h-full w-full group">
                            <BentoGridItem
                                title={
                                    <span className="font-rajdhani text-2xl font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                                        {post.frontmatter.title}
                                    </span>
                                }
                                description={
                                    <span className="font-mono text-xs text-neutral-400 block mt-2 leading-relaxed">
                                        {post.frontmatter.description}
                                    </span>
                                }
                                header={<HeaderImage src={post.frontmatter.image} alt={post.frontmatter.title} />}
                                icon={IconMap[post.frontmatter.icon] || <Terminal className="h-4 w-4 text-neutral-400" />}
                                className="h-full bg-neutral-900/40 border-white/5 hover:border-cyan-500/30 transition-colors"
                            />
                        </Link>
                    </MotionWrapper>
                ))}
            </BentoGrid>

            {filteredPosts.length === 0 && (
                <div className="col-span-3 text-center py-20 text-neutral-600 font-mono tracking-widest text-sm">
                    NO_BLUEPRINTS_FOUND // CHECK_FILTERS
                </div>
            )}
        </div>
    );
}

const HeaderImage = ({ src, alt }: { src: string, alt: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900 overflow-hidden relative group">
        <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-[10px] font-mono text-cyan-500 border border-cyan-500/20 backdrop-blur">
            READ_ACCESS_GRANTED
        </div>
    </div>
);
