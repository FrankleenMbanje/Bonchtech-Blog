import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                        Terms of Service
                    </h1>
                    
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-muted-foreground text-lg mb-8">
                            Last updated: February 16, 2026
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Agreement to Terms</h2>
                        <p className="text-muted-foreground mb-4">
                            By accessing or using BonchTech&apos;s website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the website.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use License</h2>
                        <p className="text-muted-foreground mb-4">
                            Permission is granted to temporarily access the materials on BonchTech&apos;s website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Content</h2>
                        <p className="text-muted-foreground mb-4">
                            All content on this website, including articles, tutorials, code examples, and resources, is provided for informational and educational purposes only. While we strive for accuracy, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the content.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Code Examples</h3>
                        <p className="text-muted-foreground mb-4">
                            Code examples provided on this website are offered as-is without warranty. You are responsible for testing and validating any code before using it in production environments. We are not liable for any damages or losses resulting from the use of code examples.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Contributions</h2>
                        <p className="text-muted-foreground mb-4">
                            By submitting comments, feedback, or other content to our website, you grant BonchTech a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Prohibited Activities</h2>
                        <p className="text-muted-foreground mb-4">
                            You agree not to engage in any of the following activities:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Using the website in any way that violates applicable laws or regulations</li>
                            <li>Attempting to interfere with the proper functioning of the website</li>
                            <li>Accessing data not intended for you</li>
                            <li>Circumventing security measures</li>
                            <li>Impersonating another person or entity</li>
                            <li>Engaging in automated data collection without permission</li>
                            <li>Uploading or transmitting viruses or malicious code</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
                        <p className="text-muted-foreground mb-4">
                            The website and its original content, features, and functionality are owned by BonchTech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Trademarks</h3>
                        <p className="text-muted-foreground mb-4">
                            The BonchTech name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of BonchTech or its affiliates. You may not use such marks without our prior written permission.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Links</h2>
                        <p className="text-muted-foreground mb-4">
                            Our website may contain links to third-party websites or services that are not owned or controlled by BonchTech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
                        <p className="text-muted-foreground mb-4">
                            The materials on BonchTech&apos;s website are provided on an &lsquo;as is&rsquo; basis. BonchTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-4">
                            In no event shall BonchTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if BonchTech or an authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Indemnification</h2>
                        <p className="text-muted-foreground mb-4">
                            You agree to defend, indemnify, and hold harmless BonchTech, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Termination</h2>
                        <p className="text-muted-foreground mb-4">
                            We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
                        <p className="text-muted-foreground mb-4">
                            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to Terms</h2>
                        <p className="text-muted-foreground mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about these Terms, please contact us at:{' '}
                            <a href="mailto:legal@bonch.tech" className="text-primary hover:underline">
                                legal@bonch.tech
                            </a>
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Entire Agreement</h2>
                        <p className="text-muted-foreground mb-4">
                            These Terms constitute the entire agreement between us regarding our website, and supersede and replace any prior agreements we might have had between us regarding the website.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="border-t border-border/50 bg-muted/30 py-12 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} BonchTech. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
