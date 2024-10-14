import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <div className="px-4 lg:px-8">
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}
