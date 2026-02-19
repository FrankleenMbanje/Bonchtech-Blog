import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <MotionWrapper type="fade-in" delay={0.1}>
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </MotionWrapper>

                <MotionWrapper type="slide-up" delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-serif">
                        About <span className="text-gradient">Unplug.</span>
                    </h1>
                </MotionWrapper>

                <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <MotionWrapper type="slide-up" delay={0.3}>
                        <p className="border-l-4 border-primary/50 pl-6">
                            Hey, I&apos;m <strong className="text-foreground">Frankleen</strong>. I started Unplug because I was tired of feeling like my phone was living my life for me.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.4}>
                        <p>
                            I used to check my screen time and see 7+ hours staring back at me. Notifications controlled my mornings. Doom-scrolling ate my evenings. I knew something had to change — and once I started making changes, I realized how many other people felt the same way.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.5}>
                        <p>
                            This blog is about <strong className="text-foreground">practical digital minimalism</strong> — not about going off-grid or throwing your phone in a lake. It&apos;s about being intentional. Choosing what gets your attention. Taking back control, one habit at a time.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.6}>
                        <div className="bg-card border border-border/50 p-8 rounded-2xl mt-12">
                            <h3 className="text-foreground font-bold mb-6 text-xl font-serif">What you&apos;ll find here:</h3>
                            <ul className="space-y-4 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Dumb phone reviews</strong> — honest breakdowns of Light Phone, Punkt, and more</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Digital detox guides</strong> — step-by-step methods that actually work</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Screen time science</strong> — what the research says about our brains on phones</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-accent rounded-full mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Real talk</strong> — no judgment, no extremism, just honesty about living with less noise</span>
                                </li>
                            </ul>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper type="slide-up" delay={0.7}>
                        <p className="text-center mt-12 text-base text-muted-foreground">
                            Questions? Ideas? Want to share your own unplugging story?
                            <br />
                            Reach out at <a href="mailto:hello@bonchtech.tech" className="text-primary hover:underline">hello@bonchtech.tech</a>
                        </p>
                    </MotionWrapper>
                </div>
            </div>
        </main>
    );
}
