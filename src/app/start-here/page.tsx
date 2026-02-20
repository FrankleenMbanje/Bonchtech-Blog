import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, Phone, Brain, Heart, Sparkles } from "lucide-react";

export const metadata = {
    title: "Start Here | Unplug",
    description: "New to digital minimalism? Start here for the best introduction to living intentionally in a hyperconnected world.",
};

export default function StartHere() {
    const steps = [
        {
            icon: Brain,
            title: "Understand the Problem",
            description: "Before you fix anything, you need to understand what's broken. Learn about popcorn brain, attention residue, and why your phone feels addictive.",
            link: "/blog/popcorn-brain",
            linkText: "Read: Popcorn Brain",
        },
        {
            icon: Phone,
            title: "Assess Your Current Setup",
            description: "Check your screen time. Be honest with yourself. How many hours per day? How many pickups? This is your baseline.",
            link: null,
            linkText: null,
        },
        {
            icon: Sparkles,
            title: "Choose Your First Change",
            description: "Don't go cold turkey. Pick ONE thing: delete one app, turn off notifications, or charge your phone outside the bedroom.",
            link: "/phone-finder",
            linkText: "Find a Dumb Phone",
        },
        {
            icon: Heart,
            title: "Build New Habits",
            description: "Replace screen time with something better. Walks. Reading. Conversation. The goal isn't less phone—it's more life.",
            link: "/blog",
            linkText: "Browse All Articles",
        },
    ];

    const principles = [
        {
            title: "Intention Over Abstinence",
            description: "We're not anti-technology. We're pro-intentionality. Use what serves you. Delete what doesn't.",
        },
        {
            title: "Small Steps Beat Big Leaps",
            description: "A 10% reduction in screen time sustained for a year beats a dramatic week-long detox every time.",
        },
        {
            title: "Your Attention is Sacred",
            description: "Companies spend billions to capture it. Guard it like the precious resource it is.",
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Sparkles size={14} />
                        New here?
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
                        Start Here
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Welcome to Unplug. This is your guide to reclaiming your attention in a world designed to steal it.
                        No judgment, no extreme measures—just practical steps toward a more intentional life.
                    </p>
                </div>
            </section>

            {/* The Journey */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center font-serif">
                        Your 4-Step Journey
                    </h2>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="flex gap-6 p-6 bg-card rounded-xl border border-border"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <step.icon size={24} className="text-primary" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm font-semibold text-primary">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 font-serif">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {step.description}
                                    </p>
                                    {step.link && (
                                        <Link
                                            href={step.link}
                                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                                        >
                                            {step.linkText}
                                            <ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-16 px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center font-serif">
                        Our Core Principles
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {principles.map((principle) => (
                            <div
                                key={principle.title}
                                className="p-6 bg-card rounded-xl border border-border"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-3 font-serif">
                                    {principle.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                        Ready to begin?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Start with our most popular article on popcorn brain, or jump straight to finding your ideal phone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/blog/popcorn-brain"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Read Popcorn Brain
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/phone-finder"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-foreground font-semibold rounded-lg border border-border hover:bg-secondary transition-colors"
                        >
                            Find Your Phone
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border py-12 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Unplug. Built with intention.
                    </p>
                </div>
            </footer>
        </main>
    );
}
