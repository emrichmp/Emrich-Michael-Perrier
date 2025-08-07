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

function App() {
  return (
    <Router>
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
