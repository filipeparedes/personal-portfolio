import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CodeWindowProps {
    title: string;
    children: ReactNode;
    delay?: number; //optional delay for animation
}

export function CodeWindow({ title, children, delay = 0 }: CodeWindowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
                {/* header  */}
                <div className="bg-slate-800/80 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"/>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"/>
                    </div>
                        <span className="text-slate-500 text-sm ml-2 font-mono">{title}</span>
                </div>
                {/* content (children) */}
                <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                    <div className="space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}