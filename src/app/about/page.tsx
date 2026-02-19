import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <article className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-8">
                    About
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        Hi, I&apos;m <strong>Frankleen</strong>.
                    </p>

                    <p>
                        I started Unplug because I noticed something happening to my brain.
                        I couldn&apos;t read a full article without checking my phone. I&apos;d pick
                        it up, scroll for 30 seconds, put it down, and forget what I was
                        doing before. This was happening dozens of times a day.
                    </p>

                    <p>
                        So I started experimenting. I deleted social apps. I bought a dumb
                        phone for weekends. I sat with boredom until it stopped being
                        uncomfortable. Slowly, things changed. My attention came back.
                        My sleep improved. I started reading books again — full books,
                        cover to cover.
                    </p>

                    <p>
                        This blog is where I write about what I&apos;ve learned. Not as a
                        guru or expert — just as someone who went through it and wants
                        to share what actually works.
                    </p>

                    <h2 className="font-serif">What You&apos;ll Find Here</h2>

                    <ul>
                        <li>Research-backed articles on screen time and brain health</li>
                        <li>Practical strategies for reducing digital noise</li>
                        <li>Dumb phone reviews and low-tech tool recommendations</li>
                        <li>Honest writing about the hard parts of disconnecting</li>
                    </ul>

                    <p>
                        No dramatic &quot;throw your phone in the ocean&quot; advice. Just
                        small, sustainable changes that add up.
                    </p>

                    <hr />

                    <p className="text-muted-foreground">
                        Want to get in touch? Reach me at{" "}
                        <a href="mailto:hello@bonchtech.tech" className="text-primary hover:text-foreground transition-colors">
                            hello@bonchtech.tech
                        </a>
                    </p>
                </div>
            </article>

            {/* Minimal footer */}
            <footer className="border-t border-border">
                <div className="max-w-2xl mx-auto px-6 py-8 flex justify-between items-center text-xs text-muted-foreground">
                    <span>© {new Date().getFullYear()} Unplug</span>
                    <span>by Frankleen</span>
                </div>
            </footer>
        </main>
    );
}
