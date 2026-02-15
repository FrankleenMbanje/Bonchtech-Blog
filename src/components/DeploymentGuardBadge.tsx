'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

interface AutomationStatus {
    workflowName: string;
    status: 'running' | 'success' | 'failed' | 'idle';
}

export default function DeploymentGuardBadge() {
    const [healingActive, setHealingActive] = useState(false);
    const [statusText, setStatusText] = useState("System Stable");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const res = await fetch('/api/status');
                if (res.ok) {
                    const data: { statuses: AutomationStatus[] } = await res.json();
                    // Check if any "healer" workflow is running
                    const activeHealer = data.statuses.find(s =>
                        s.workflowName.toLowerCase().includes("healer") && s.status === 'running'
                    );

                    if (activeHealer) {
                        setHealingActive(true);
                        setStatusText("AI HEALING IN PROGRESS");
                        setExpanded(true);
                    } else {
                        setHealingActive(false);
                        setStatusText("SYSTEM OPTIMAL");
                        setExpanded(false);
                    }
                }
            } catch (e) {
                // Silent fail
            }
        };

        // Initial check and interval
        checkStatus();
        const interval = setInterval(checkStatus, 2000); // Faster poll for demo
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none">
            <AnimatePresence>
                {healingActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-red-500/10 backdrop-blur-md border border-red-500/50 text-red-500 px-6 py-4 rounded-xl shadow-[0_0_50px_rgba(239,68,68,0.4)] pointer-events-auto flex items-center gap-4"
                    >
                        <div className="relative">
                            <AlertTriangle className="w-8 h-8 animate-bounce" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                        </div>
                        <div>
                            <h3 className="font-bold font-mono tracking-wider text-sm">CRITICAL ALERT</h3>
                            <p className="text-xs text-red-400 font-mono">Autofixing Deployment...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                layout
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-mono font-bold transition-colors duration-500 backdrop-blur-sm pointer-events-auto",
                    healingActive
                        ? "bg-neutral-900/90 border-red-500/30 text-red-500"
                        : "bg-neutral-900/50 border-white/10 text-neutral-500 hover:bg-neutral-900 hover:border-[#00f5ff]/50 hover:text-[#00f5ff]"
                )}
            >
                {healingActive ? (
                    <Cpu className="w-3 h-3 animate-spin" />
                ) : (
                    <ShieldCheck className="w-3 h-3" />
                )}
                <span>{statusText}</span>
            </motion.div>
        </div>
    );
}
