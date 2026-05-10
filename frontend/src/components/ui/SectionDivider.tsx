"use client";

import { motion, steps } from "framer-motion";
import { Terminal } from "lucide-react";

interface SectionDividerProps {
  command: string;
}

export function SectionDivider({ command }: SectionDividerProps) {
  return (
    <div className="w-full relative py-12 flex items-center justify-center z-10 overflow-hidden bg-slate-950">
      {/* Line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      {/* Terminal command badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-slate-950 px-5 py-2 rounded-full border border-slate-800 flex items-center gap-3 shadow-2xl shadow-black"
      >
        <Terminal className="w-4 h-4 text-slate-500" />
        
        <div className="font-mono text-xs md:text-sm whitespace-nowrap">
          <span className="text-green-400">guest@portfolio</span>
          <span className="text-slate-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-500">$ </span>
          <span className="text-slate-300">{command}</span>
          
          {/* Blinking Cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: steps(2) }}
            className="inline-block w-2 h-4 bg-slate-400 ml-1 translate-y-0.5"
          />
        </div>
      </motion.div>
    </div>
  );
}