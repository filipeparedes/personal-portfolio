"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ui/ProjectCard";
import { CodeRow as C} from "./ui/CodeRow";
import { getProjectsData } from "../services/api"


const PER_PAGE = 3;

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjectsData()
        .then(data => setProjects(data))
        .catch(err => console.error("Error fetching projects:", err))
  }, []);

  // Create a loop array by cloning the last items to the start and first items to the end
  const allItems = [
    ...projects.slice(-PER_PAGE),
    ...projects,
    ...projects.slice(0, PER_PAGE),
  ];

  // Start at PER_PAGE to skip the clones and show the first real project
  const [index, setIndex] = useState(PER_PAGE);
  // Toggle to disable animation during "teleports" (instant jumps)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Calculate the horizontal translation based on the current index
  const getX = () => `-${(index * 100) / PER_PAGE}%`;

  useEffect(() => {
    // Check if we hit the cloned items at the end
    if (index >= projects.length + PER_PAGE) {
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition for an instant reset
        setIndex(PER_PAGE);        // Jump back to the first real item
      }, 450); 
    } 
    // Check if we hit the cloned items at the beginning
    else if (index < PER_PAGE) {
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setIndex(projects.length + PER_PAGE - 1); // Jump to the last real item
      }, 450);
    } 
    // Re-enable transition for normal slides
    else {
      setIsTransitioning(true);
    }
  }, [index]);

  return (
    <section className="py-24 bg-slate-950 overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16 mx-auto">
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                      <div><C type="punct" size="xl">{`<section id=`}</C><C type="string" size="xl">"projects"</C><C type="punct"size="xl">{`>`}</C></div>
                  </motion.div>

          {projects.length > PER_PAGE && (
            <div className="flex gap-3">
              <button onClick={() => setIndex(prev => prev - 1)} className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-purple-500 text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => setIndex(prev => prev + 1)} className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-purple-500 text-white transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* project slider */}
        <div className="w-full max-w-[1400px] mx-auto overflow-hidden pt-10 -mt-10"> 
          <motion.div
            className="flex"
            animate={{ x: getX() }}
            transition={isTransitioning ? { type: "spring", stiffness: 200, damping: 25 } : { duration: 0 }}
          >
            {allItems.map((proj, i) => (
              <div
                key={`${proj.title}-${i}`}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <ProjectCard project={proj} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}