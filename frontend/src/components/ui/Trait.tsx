import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface TraitProps {
    trait: string;
    index: number;
}

export function Trait({trait, index} : TraitProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
            delay: 0.1 * index,
            duration: 0.3,
            }}
            viewport={{ once: true }}
            className="px-4 py-2 bg-slate-800 text-slate-300 rounded-md border border-slate-700 font-mono text-sm flex items-center gap-2"
        >
            <ChevronRight className="w-3 h-3 text-purple-400" />
            {trait}
        </motion.span>
    );
}