import { motion } from "framer-motion";
import { CodeRow as C } from "./ui/CodeRow";
import { Photo } from "./ui/Photo";
import { ChevronRight } from "lucide-react";
import { Trait } from "./ui/Trait";
import { CodeWindow } from "./ui/CodeWindow";
import { SkillBar } from "./ui/SkillBar";

export function About() {
    const traits = [
        "text",
        "text",
        "Text",
    ];

    const skills = [
        { name: "Lorem ipsum", level: 90, color: "bg-blue-500" },
        { name: "Lorem ipsum", level: 85, color: "bg-purple-400" },
        { name: "Lorem ipsum", level: 80, color: "bg-green-500" },
        { name: "Lorem ipsum", level: 95, color: "bg-cyan-500" },
        { name: "Lorem ipsum", level: 70, color: "bg-indigo-500" },
    ];

    return (
    <section className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <div><C type="punct" size="xl">{`<section id=`}</C><C type="string" size="xl">"about-me"</C><C type="punct"size="xl">{`>`}</C></div>
        </motion.div>

        <div className="max-w-6x1 mx-auto">
            <div className="flex gap-8 lg:gap-12 mb-16">
                <Photo></Photo>
            
                {/* content */}
                <div className="min-w-0 flex-1">
                    <div className="grid lg:grid-cols-2 mb-16 gap-12">
                        {/*Left - Text*/}
                        <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        >
                            <div className="space-y-6">
                                <div>
                                <C type="keyword">01.</C>
                                <h3 className="text-2xl text-white mb-3 mt-2">
                                    Lorem ipsum
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                </div>

                                <div>
                                <C type="keyword">02.</C>
                                <h3 className="text-2xl text-white mb-3 mt-2">
                                    Lorem ipsum
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                </div>

                                <div>
                                <C type="keyword">03.</C>
                                <h3 className="text-2xl text-white mb-3 mt-2">
                                    Lorem ipsum
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {traits.map((trait, index) => (
                                    <Trait key={trait} trait={trait} index={index}></Trait>
                                ))}
                            </div>
                        </motion.div>
                        {/*Right - Skills*/}
                        <CodeWindow title="~/skills.json" bgcolor="bg-slate-950">
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <SkillBar 
                                    key={skill.name} 
                                    skill={skill} 
                                    index={index} 
                                    />
                                ))}
                                <hr className="text-slate-700"></hr>
                                <C type="comment">// Always learning</C>
                            </div>
                        </CodeWindow>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}