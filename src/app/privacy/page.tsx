import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                        Privacy Policy
                    </h1>
                    
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-muted-foreground text-lg mb-8">
                            Last updated: February 16, 2026
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
                        <p className="text-muted-foreground mb-4">
                            BonchTech (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
                        <p className="text-muted-foreground mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Subscribe to our newsletter</li>
                            <li>Contact us through our contact form</li>
                            <li>Comment on articles</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                        <p className="text-muted-foreground mb-4">
                            When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Referring website</li>
                            <li>Pages you view</li>
                            <li>Time spent on pages</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Provide and maintain our website</li>
                            <li>Send you newsletters and updates</li>
                            <li>Respond to your comments and questions</li>
                            <li>Improve our website and content</li>
                            <li>Analyze usage patterns and trends</li>
                            <li>Prevent fraud and abuse</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground mb-4">
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Services</h2>
                        <p className="text-muted-foreground mb-4">
                            We may use third-party service providers to help us operate our website, such as:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Analytics providers (Google Analytics)</li>
                            <li>Email service providers</li>
                            <li>Hosting providers</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
                        <p className="text-muted-foreground mb-4">
                            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
                        <p className="text-muted-foreground mb-4">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing</li>
                            <li>Request data portability</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Policy</h2>
                        <p className="text-muted-foreground mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a href="mailto:privacy@bonch.tech" className="text-primary hover:underline">
                                privacy@bonch.tech
                            </a>
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
