'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionWrapperProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    type?: "fade-in" | "slide-up" | "scale" | "blur-in";
};

export default function MotionWrapper({ children, delay = 0, className = "", type = "slide-up" }: MotionWrapperProps) {

    const variants: Record<string, any> = {
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } }
        },
        "slide-up": {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] } }
        },
        "scale": {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay, ease: "backOut" } }
        },
        "blur-in": {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, delay, ease: "easeOut" } }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants[type]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
