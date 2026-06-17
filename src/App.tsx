import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Coaching from "./components/Coaching";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <SEO
        title="Emrich | Full Stack Engineer, Los Angeles"
        description="Full stack engineer and Co-Founding CTO based in Los Angeles. 5+ years building SaaS products with React, Next.js, TypeScript, and Node.js. Top Rated Plus on Upwork, 100% job success score."
        keywords="Emrich-Michael Perrier, Emrich Perrier, Full Stack Engineer, Los Angeles Developer, React Developer, TypeScript Developer, Next.js Developer, Node.js Developer, Product Engineer, Web Developer Los Angeles, Upwork Developer, Top Rated Plus Developer, Freelance Developer Los Angeles"
        section="home"
      />
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      <motion.div
        className="min-h-screen w-full overflow-x-hidden bg-brand-base text-ink-primary"
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative h-screen">
          <Hero />
          <Navbar />
        </div>
        <main className="w-full overflow-x-hidden">
          <About />
          <Projects />
          <Experience />
          <Coaching />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  );
}

export default App;
