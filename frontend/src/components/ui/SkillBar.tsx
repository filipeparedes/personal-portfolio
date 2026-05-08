import { motion } from "framer-motion";

interface Skill {
    name: string;
    level: number;
    color: string;
}

interface SkillBarProps {
    skill: Skill;
    index: number;
}

export function SkillBar({skill, index}: SkillBarProps) {
    return(
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-white font-mono text-sm">
                {skill.name}
                </span>
                <span className="text-slate-500 font-mono text-xs">
                {skill.level}%
                </span>
            </div>

            {/* Track (bar background) */}
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                {/* Progress (part that moves) */}
                <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ 
                    duration: 1, 
                    delay: 0.1 * index, 
                    ease: "circOut" 
                }}
                viewport={{ once: true }}
                className={`h-full ${skill.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                />
            </div>
        </div>
    );
}