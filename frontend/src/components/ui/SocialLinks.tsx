import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { CodeWindow } from "./CodeWindow";
import { CodeRow as C } from "./CodeRow";

const socials = [
  { name: "GitHub", icon: <ExternalLink size={14} />, handle: "@filipeparedes", url: "https://github.com", color: "text-slate-400" },
  { name: "LinkedIn", icon: <ExternalLink size={14} />, handle: "/in/filipe-paredes/", url: "https://linkedin.com", color: "text-blue-400" },
  { name: "Itch", icon: <ExternalLink size={14} />, handle: "filipeparedes.itch.io", url: "https://itch.io", color: "text-pink-400" },
  { name: "Email", icon: <Mail size={14} />, handle: "filipeparedes3@gmail.com", url: "mailto:filipeparedes3@gmail.com", color: "text-purple-400" },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CodeWindow title="~/social-links.js">
        <div className="space-y-4 font-mono text-sm">
          <div className="text-slate-600 italic">// Find me online</div>
          
          {socials.map((social, i) => (
            <div key={social.name} className="flex gap-3 items-start group">
              <span className="text-slate-600 w-4 text-right select-none">{i + 1}</span>
              <a 
                href={social.url} 
                target="_blank" 
                className="flex flex-col flex-1 hover:bg-white/5 p-1 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={social.color}>{social.icon}</span>
                  <C type="keyword">const</C> 
                  <C type="var">{social.name.toLowerCase()}</C> 
                  <C type="punct">=</C>
                </div>
                <div className="pl-8">
                  <C type="string">"{social.handle}"</C><C type="punct">;</C>
                </div>
              </a>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-800/50 text-slate-600 italic">
            // I'll answer in ~24h 📬
          </div>
        </div>
      </CodeWindow>
    </motion.div>
  );
}