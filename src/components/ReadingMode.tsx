'use client';

import { useState, useEffect } from 'react';
import { BookOpen, X } from 'lucide-react';

export default function ReadingMode() {
    const [isReadingMode, setIsReadingMode] = useState(false);

    useEffect(() => {
        if (isReadingMode) {
            document.body.classList.add('reading-mode-active');
        } else {
            document.body.classList.remove('reading-mode-active');
        }

        return () => {
            document.body.classList.remove('reading-mode-active');
        };
    }, [isReadingMode]);

    if (!isReadingMode) {
        return (
            <button
                onClick={() => setIsReadingMode(true)}
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Enter reading mode"
                title="Reading Mode"
            >
                <BookOpen size={18} />
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => setIsReadingMode(false)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
                <X size={16} />
                <span className="text-sm font-medium">Exit Reading Mode</span>
            </button>
        </div>
    );
}
