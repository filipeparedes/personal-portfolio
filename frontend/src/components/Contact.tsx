"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SocialLinks } from "./ui/SocialLinks";
import { Send } from "lucide-react";
import { CodeRow as C} from "./ui/CodeRow";
import { ContactModal } from "./ui/ContactModal";  

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <div><C type="punct" size="xl">{`<section id=`}</C><C type="string" size="xl">"contact"</C><C type="punct"size="xl">{`>`}</C></div>
        </motion.div>
      </div>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/*Left side text*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xl">
                <C type="keyword" size="lg">const</C> 
                <C type="var" size="lg">available</C> 
                <C type="punct" size="lg">=</C> 
                <C type="keyword" size="lg">true</C>
                <C type="punct" size="lg">;</C>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>

            <div className="space-y-3 font-mono text-sm text-slate-500">
              <div className="flex gap-2">
                <span className="text-purple-500">→</span>
                <span>Lorem ipsum</span>
              </div>
              <div className="flex gap-2">
                <span className="text-purple-500">→</span>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded border border-purple-500/50 hover:bg-purple-700 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] font-mono group cursor-pointer"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
          <SocialLinks />
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />  {/* 👈 faltava isto */}
    </section>
  );
}