import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Experience from "@/components/Experience";
import ThemeToggle from "./ThemeToggle";
function MyApp() {
  return (
    <div>
      <div className="fixed top-4 left-4 z-[9999] m-4 cursor-pointer backdrop-blur-2xl bg-transparent bg-neutral-100  dark:bg-neutral-800 p-2 rounded-full inline-flex">
        <ThemeToggle />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <NavBar />
    </div>
  );
}

export default MyApp;
