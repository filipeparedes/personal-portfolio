import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { CodeWindow } from "./ui/CodeWindow";
import { CodeRow as C } from "./ui/CodeRow";
import { Button } from "./ui/Button";
import { BackgroundAnimation } from "./ui/BackgroundAnimation";

export function Intro() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            <BackgroundAnimation></BackgroundAnimation>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* left side code window */}
                <CodeWindow title="~/portfolio/intro.tsx">
                <div><C type="keyword">const</C> <C type="var">developer</C><C type="punct"> {`= {`} </C></div>
                <div><C type="var">name</C><C type="punct">:</C> <C type="string">"Filipe Paredes"</C><C type="punct">,</C></div>
                <div><C type="var">role</C><C type="punct">:</C> <C type="string">"Junior Software Engineer"</C><C type="punct">,</C></div>
                <div><C type="var">skills</C><C type="punct">:</C> <C type="punct">{`[`}</C><C type="string">"React"</C><C type="punct">, </C><C type="string">"TypeScript"</C><C type="punct">{`],`}</C></div>
                <div><C type="var">passion</C><C type="punct">:</C> <C type="string">"Turning ideas into projects"</C><C type="punct">,</C></div>
                <div><C type="var">status</C><C type="punct">:</C> <C type="string">"Open to Work/Projects"</C><C type="punct">,</C></div>
                <div><C type="punct"> {`};`} </C></div>
                <br></br>
                <div><C type="comment">// Always learning</C></div>
                </CodeWindow>

                {/* right sie elements */}
                <motion.div
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x:50}}
                    transition={{ duration: 0.8, delay: 0.2}}
                    className="text-left lg:text-left"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-8"
                        >
                        <span className="text-8xl"></span>
                    </motion.div>
                        <C type="punct">{"<h1>"}</C>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-blue-400 block">
                            Hello, World!
                        </span>
                        <span className="text-white block mt-2"> I'm Filipe Paredes</span>
                        </h1>
                        <C type="punct">{"<h1>"}</C>

                        <p className="text-xl md:text-2xl text-slate-400 mb-8 mt-6">
                            <span className="text-blue-400 font-mono">$</span> Software Engineer searching to create amazing digital experiences
                        </p>
                        <div className="flex flex-wrap gap-4">
                        <a href="#projects">
                            <Button><Terminal className="w-5 h-5"/>Projects</Button>
                        </a>
                        <a href="#contact">
                            <Button color="slate">Contact<ArrowDown className="w-4 h-4" /></Button>
                        </a>
                        </div>
                </motion.div>
            </div>
        </div>
    </section>
  ); 
}