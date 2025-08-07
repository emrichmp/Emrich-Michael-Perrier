import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import DemoReel from './components/DemoReel'
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Coaching from "./components/Coaching";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

function App() {
  return (
    <Router>
      <SEO
        title="Emrich-Michael Perrier | Full Stack Developer in Los Angeles | React, Vue, TypeScript Expert"
        description="Emrich-Michael Perrier is a Top Rated Plus Full Stack Developer in Los Angeles with 5+ years experience. Expert in React, Vue, TypeScript, and modern web applications. $100K+ earned on Upwork with 100% satisfaction rate."
        keywords="Emrich-Michael Perrier, Emrich Perrier, Full Stack Developer, Los Angeles Developer, React Developer, Vue Developer, TypeScript Developer, Web Developer Los Angeles, Frontend Developer, Backend Developer, Upwork Developer, Top Rated Plus Developer"
        section="home"
      />
      <div className="min-h-screen bg-[#371e30] text-white w-full overflow-x-hidden">
        <div className="relative h-screen">
          <Hero />
          <Navbar />
        </div>
        <main className="w-full overflow-x-hidden">
          {/* <DemoReel /> */}
          <About />
          <Projects />
          <Experience />
          <Coaching />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
