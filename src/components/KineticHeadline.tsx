'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxTextProps {
    children: React.ReactNode;
}

export default function KineticHeadline() {
    return (
        <div className="relative flex flex-col items-start justify-center overflow-hidden py-2">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter"
            >
                Building the <br />
                <ScrollVelocityText>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-500 block">
                        Self-Healing Web.
                    </span>
                </ScrollVelocityText>
            </motion.h1>
        </div>
    );
}

function ScrollVelocityText({ children }: ParallaxTextProps) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const skew = useTransform(smoothVelocity, [-1000, 1000], [-30, 30]);
    const x = useTransform(smoothVelocity, [-1000, 1000], [-100, 100]); // Parallax shift

    return (
        <motion.span
            style={{ x, skewX: skew }}
            className="inline-block origin-left will-change-transform"
        >
            {children}
        </motion.span>
    );
}
