import NavBar from "../components/NavBar";
import Header from "../components/TopIntro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";

function MyApp() {
  return (
    <div>
      <NavBar />
      <Header />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default MyApp;
