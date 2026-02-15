'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface TactileButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'glass';
    children: React.ReactNode;
}

const TactileButton = forwardRef<HTMLButtonElement, TactileButtonProps>(
    ({ className, variant = 'primary', children, ...props }, ref) => {

        // Varied styles
        const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 uppercase tracking-wider rounded-xl overflow-hidden group active:scale-95";

        const variantStyles = {
            primary: "bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1),_0px_4px_0px_0px_#00f5ff,_0px_8px_10px_rgba(0,0,0,0.5)] active:shadow-none active:translate-y-[4px] border border-white/5 hover:brightness-110",
            secondary: "bg-[#111] text-white border-2 border-dashed border-[#00f5ff]/30 hover:border-[#00f5ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:bg-[#00f5ff]/5 active:scale-95",
            glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white shadow-lg active:scale-95",
        };

        return (
            <motion.button
                ref={ref as any}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(baseStyles, variantStyles[variant], className)}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
                {variant === 'primary' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f5ff]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
                )}
            </motion.button>
        );
    }
);
TactileButton.displayName = 'TactileButton';

export default TactileButton;
