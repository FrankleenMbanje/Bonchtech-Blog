'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Slash } from 'lucide-react';

export default function DigitalDetoxToggle() {
    const [isDetoxMode, setIsDetoxMode] = useState(false);

    useEffect(() => {
        if (isDetoxMode) {
            document.documentElement.classList.add('detox-mode-active');
        } else {
            document.documentElement.classList.remove('detox-mode-active');
        }

        return () => {
            document.documentElement.classList.remove('detox-mode-active');
        };
    }, [isDetoxMode]);

    return (
        <button
            onClick={() => setIsDetoxMode(!isDetoxMode)}
            className={`p-2 rounded-lg transition-colors ${
                isDetoxMode 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
            }`}
            aria-label={isDetoxMode ? 'Exit digital detox mode' : 'Enter digital detox mode'}
            title={isDetoxMode ? 'Exit Digital Detox' : 'Digital Detox Mode'}
        >
            {isDetoxMode ? (
                <div className="relative">
                    <Smartphone size={18} />
                    <Slash size={14} className="absolute -top-1 -right-1" />
                </div>
            ) : (
                <Smartphone size={18} />
            )}
        </button>
    );
}
