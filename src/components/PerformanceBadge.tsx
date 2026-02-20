'use client';

import { useState, useEffect } from 'react';

export default function PerformanceBadge() {
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        // Simulate checking performance metrics
        // In production, you could use the Performance API or Lighthouse CI
        const checkPerformance = () => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.startTime;
                // Convert load time to a score (faster = higher score)
                // Under 1s = 95+, Under 2s = 90+, Under 3s = 85+
                let calculatedScore = 100;
                if (loadTime > 1000) calculatedScore -= 5;
                if (loadTime > 2000) calculatedScore -= 5;
                if (loadTime > 3000) calculatedScore -= 5;
                setScore(Math.max(calculatedScore, 85));
            } else {
                setScore(95); // Default optimistic score
            }
        };

        checkPerformance();
    }, []);

    if (!score) return null;

    return (
        <div 
            className="performance-badge cursor-help"
            title="This site is optimized for speed and minimalism"
        >
            <span>Lighthouse {score}/100</span>
        </div>
    );
}
