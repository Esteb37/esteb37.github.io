import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Research from "./components/Research";
import RSS2026Featured from "./components/RSS2026Featured";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />
      <main>
        {/* Temporary RSS 2026 entry point; the existing portfolio continues below. */}
        <RSS2026Featured />
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
