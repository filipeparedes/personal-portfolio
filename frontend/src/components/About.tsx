import { motion } from "framer-motion";
import { CodeRow as C } from "./ui/CodeRow";
import { Trait } from "./ui/Trait";
import { CodeWindow } from "./ui/CodeWindow";
import { SkillBar } from "./ui/SkillBar";
import { useState, useEffect } from "react";
import { getAboutData } from "../services/api"

export function About() {
    const [traits, setTraits] = useState<string[]>([]);
    const [skills, setSkills] = useState<any[]>([]);

    useEffect(() => {
        getAboutData()
            .then(data => {
                setTraits(data.traits.map((t: any) => t.text));
                setSkills(data.skills);
            })
            .catch(err => console.error("Error fetching about data:", err));
    }, []);

    return (
    <section className="bg-slate-950 py-24">
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
                            <C type="var">01.</C>
                            <h3 className="text-2xl text-white mb-3 mt-2">
                                Who I am
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Final-year Computer Engineering student based in Portugal, programming since the age of 12. 
                                What started as curiosity turned into a genuine passion for building things that work well under 
                                the hood, from low-level systems in C and C++ to modern backend services in C# and Python.
                            </p>
                            </div>

                            <div>
                            <C type="var">02.</C>
                            <h3 className="text-2xl text-white mb-3 mt-2">
                                What I build
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I gravitate towards backend and systems work, the kind of engineering that 
                                prioritizes performance, reliability and clean architecture. I have hands-on 
                                experience with ASP.NET Core, distributed systems, and systems programming, and I 
                                enjoy tackling problems that require thinking carefully about memory, performance and design.
                            </p>
                            </div>

                            <div>
                            <C type="var">03.</C>
                            <h3 className="text-2xl text-white mb-3 mt-2">
                                What I'm looking for
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I care more about building things that matter than just shipping code. 
                                I'm currently looking for my first opportunity as a Backend Developer,
                                somewhere I can contribute to real systems, keep learning, and grow as an engineer.
                            </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {traits.map((trait, index) => (
                                <Trait key={`${trait}-${index}`} trait={trait} index={index} />
                            ))}
                        </div>
                    </motion.div>
                    {/*Right - Skills*/}
                    <CodeWindow title="~/skills.json">
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <SkillBar 
                                key={skill.id || skill.name} 
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
    </section>
  );
}