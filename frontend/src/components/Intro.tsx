import { CodeWindow } from "./ui/CodeWindow";
import { CodeRow as C } from "./ui/CodeRow";

export function Intro() {
    return (
    <section className="h-[600px] bg-slate-950 flex items-center justify-center border-b border-slate-800">
        {/* code window */}
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
    </section>
  );
}