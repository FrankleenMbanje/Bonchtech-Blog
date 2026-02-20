'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Smartphone, MapPin, Music, Camera, DollarSign, Check, ArrowRight } from "lucide-react";

interface Phone {
    name: string;
    brand: string;
    price: string;
    features: string[];
    bestFor: string;
    link: string;
}

const phones: Phone[] = [
    {
        name: "Light Phone II",
        brand: "Light",
        price: "$299",
        features: ["E-ink display", "Calls & Texts", "Alarm", "Podcasts", "Maps (basic)"],
        bestFor: "The purist who wants zero distractions but needs basic tools",
        link: "https://www.thelightphone.com",
    },
    {
        name: "Punkt MP02",
        brand: "Punkt",
        price: "$349",
        features: ["Physical buttons", "4G LTE", "Tethering", "Bluetooth", "Minimalist design"],
        bestFor: "Professionals who need a premium, reliable second phone",
        link: "https://www.punkt.ch",
    },
    {
        name: "Nokia 225 4G",
        brand: "Nokia",
        price: "$49",
        features: ["Physical keypad", "Long battery", "FM Radio", "Snake game", "Durable"],
        bestFor: "Budget-conscious minimalists who want simple reliability",
        link: "https://www.nokia.com",
    },
    {
        name: "Sunbeam F1",
        brand: "Sunbeam",
        price: "$249",
        features: ["Flip phone", "Voice & Text", "Navigation", "Weather", "No browser"],
        bestFor: "Those wanting a flip phone with just the essentials",
        link: "https://www.sunbeamwireless.com",
    },
    {
        name: "Wisephone",
        brand: "Techless",
        price: "$399",
        features: ["No browser", "Calls, Text, Camera", "Maps", "Calculator", "Tools only"],
        bestFor: "Parents wanting a safe phone for kids/teens",
        link: "https://www.techless.com",
    },
    {
        name: "Cat S22 Flip",
        brand: "CAT",
        price: "$89",
        features: ["Rugged", "Android Go", "Physical buttons", "Long battery", "Durable"],
        bestFor: "Outdoor enthusiasts needing durability + basic smart features",
        link: "https://www.catphones.com",
    },
];

type Question = {
    id: string;
    question: string;
    options: {
        value: string;
        label: string;
        icon: React.ElementType;
    }[];
};

const questions: Question[] = [
    {
        id: "maps",
        question: "Do you need navigation/maps?",
        options: [
            { value: "yes", label: "Yes, I need maps", icon: MapPin },
            { value: "no", label: "No, I'm good without", icon: Check },
        ],
    },
    {
        id: "music",
        question: "Do you listen to podcasts or music?",
        options: [
            { value: "yes", label: "Yes, I need audio", icon: Music },
            { value: "no", label: "No, I don't need it", icon: Check },
        ],
    },
    {
        id: "camera",
        question: "Do you need a camera?",
        options: [
            { value: "yes", label: "Yes, basic camera", icon: Camera },
            { value: "no", label: "No camera needed", icon: Check },
        ],
    },
    {
        id: "budget",
        question: "What's your budget?",
        options: [
            { value: "low", label: "Under $100", icon: DollarSign },
            { value: "medium", label: "$100-$300", icon: DollarSign },
            { value: "high", label: "Over $300", icon: DollarSign },
        ],
    },
];

export default function PhoneFinder() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [questions[currentStep].id]: value };
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const getRecommendations = (): Phone[] => {
        let matches = [...phones];

        // Filter by maps
        if (answers.maps === "no") {
            matches = matches.filter(p => !p.features.some(f => f.toLowerCase().includes("map")));
        }

        // Filter by music/podcasts
        if (answers.music === "no") {
            matches = matches.filter(p => !p.features.some(f => f.toLowerCase().includes("podcast") || f.toLowerCase().includes("music")));
        }

        // Filter by camera
        if (answers.camera === "no") {
            matches = matches.filter(p => !p.features.some(f => f.toLowerCase().includes("camera")));
        }

        // Filter by budget
        if (answers.budget === "low") {
            matches = matches.filter(p => parseInt(p.price.replace(/[^0-9]/g, "")) < 100);
        } else if (answers.budget === "medium") {
            matches = matches.filter(p => {
                const price = parseInt(p.price.replace(/[^0-9]/g, ""));
                return price >= 100 && price <= 300;
            });
        } else if (answers.budget === "high") {
            matches = matches.filter(p => parseInt(p.price.replace(/[^0-9]/g, "")) > 300);
        }

        // If no matches, return top picks
        if (matches.length === 0) {
            return phones.slice(0, 3);
        }

        return matches;
    };

    const reset = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResults(false);
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Smartphone size={32} className="text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
                        Minimal Phone Finder
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Answer 4 quick questions and we'll recommend the best dumb phone for your needs.
                        No endless scrolling—just results.
                    </p>
                </div>
            </section>

            {/* Quiz or Results */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    {!showResults ? (
                        <div className="bg-card rounded-2xl border border-border p-8">
                            {/* Progress */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                                    <span>Question {currentStep + 1} of {questions.length}</span>
                                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary transition-all duration-300"
                                        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Question */}
                            <h2 className="text-2xl font-bold text-foreground mb-8 font-serif">
                                {questions[currentStep].question}
                            </h2>

                            {/* Options */}
                            <div className="grid gap-4">
                                {questions[currentStep].options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(option.value)}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                                            <option.icon size={20} className="text-primary" />
                                        </div>
                                        <span className="font-medium text-foreground">{option.label}</span>
                                        <ArrowRight size={18} className="ml-auto text-muted-foreground" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-serif">
                                    Your Recommendations
                                </h2>
                                <p className="text-muted-foreground">
                                    Based on your answers, here are the best phones for you
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {getRecommendations().map((phone) => (
                                    <div
                                        key={phone.name}
                                        className="bg-card rounded-xl border border-border p-6"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground font-serif">
                                                    {phone.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">{phone.brand}</p>
                                            </div>
                                            <span className="text-lg font-bold text-primary">{phone.price}</span>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-4">
                                            {phone.bestFor}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {phone.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={phone.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                                        >
                                            Learn More
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={reset}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
                                >
                                    Start Over
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-8 px-6 lg:px-8 border-t border-border">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground">
                        Note: We are not affiliated with any phone manufacturers. 
                        Prices and availability may vary. Always verify current specs before purchasing.
                    </p>
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
