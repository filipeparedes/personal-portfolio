import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/ui/SectionDivider";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Intro />
      <SectionDivider command="cat about_me.txt && jq . skills.json" />
      <About />
      <SectionDivider command="cd projects/" />
      <Projects />
      <SectionDivider command="ssh contact@direct" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
