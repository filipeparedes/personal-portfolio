import { motion } from "framer-motion";
import { CodeWindow } from "./CodeWindow";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const fileName = `~/${project.title.toLowerCase().replace(/\s+/g, "-")}.sh`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (index % 3), duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }} 
      className="h-full group"
    >
      <CodeWindow title={fileName}>
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative h-44 overflow-hidden rounded border border-slate-800/50 mb-4 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 px-1">
            <h3 className="text-xl mb-2 text-white font-mono">{project.title}</h3>
            <p className="text-slate-400 mb-4 text-sm line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-[10px] bg-slate-800 text-blue-400 rounded border border-slate-700 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-1 pt-3 border-t border-slate-800 mt-auto">
              <ExternalLink size={14} />
              <a href={project.github} target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-xs">
                repo
              </a>
            </div>
          </div>
        </div>
      </CodeWindow>
    </motion.div>
  );
}