import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Patents from "@/components/Patents";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <div className="flex flex-col px-4 lg:px-8 gap-10">
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Patents />
      {/* <Contact /> */}
    </div>
  );
}
