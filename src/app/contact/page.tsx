'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you. 
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-card rounded-2xl p-8 border border-border/50">
                                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                                
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-green-700 dark:text-green-300">
                                            Thank you for reaching out. We&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="sponsorship">Sponsorship</option>
                                                <option value="content">Content Suggestion</option>
                                                <option value="technical">Technical Issue</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                                placeholder="Your message..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Contact Cards */}
                            <div className="grid gap-6">
                                <div className="bg-card rounded-2xl p-6 border border-border/50">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                                            <p className="text-muted-foreground mb-2">For general inquiries and support</p>
                                            <a href="mailto:contact@bonch.tech" className="text-primary font-medium hover:underline">
                                                contact@bonch.tech
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card rounded-2xl p-6 border border-border/50">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                                            <p className="text-muted-foreground">
                                                We typically respond within 24-48 hours during business days.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card rounded-2xl p-6 border border-border/50">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Location</h3>
                                            <p className="text-muted-foreground">
                                                Remote-first team distributed across the globe
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-card rounded-2xl p-8 border border-border/50">
                                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                                <p className="text-muted-foreground mb-6">
                                    Follow us on social media for the latest updates, articles, and tech insights.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://twitter.com/bonchtech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                        aria-label="Twitter"
                                    >
                                        <Twitter size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/bonchtech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/company/bonchtech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="mailto:contact@bonch.tech"
                                        className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                        aria-label="Email"
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 bg-muted/30 py-12 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} BonchTech. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
