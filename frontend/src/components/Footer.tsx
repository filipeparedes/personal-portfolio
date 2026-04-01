import { Heart } from "lucide-react";
import {CodeRow as C} from "./ui/CodeRow";

export function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/*const madeWith = <3 + React + TypeScript; */}
          <p className="font-mono mb-2">
            <C type="keyword">const</C>{" "}
            <C type="var">madeWith</C>{" "}
            <C type="comment">=</C>{" "}
            <span className="inline-flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
            </span>{" "}
            <C type="comment">+</C>{" "}
            <C type="string">"React"</C>{" "}
            <C type="comment">+</C>{" "}
            <C type="string">"TypeScript"</C>
            <C type="comment">;</C>
          </p>
          <C type="comment">
            © 2026 Filipe Paredes | Todos os direitos reservados
          </C>
        </div>
      </div>
    </footer>
  );
}