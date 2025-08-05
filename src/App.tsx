import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import DemoReel from './components/DemoReel'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#371e30] text-white w-full overflow-x-hidden">
        <div className="relative h-screen">
          <Hero />
          <Navbar />
        </div>
        <main className="w-full overflow-x-hidden">
          <DemoReel />
          <About />
          <Projects />
          <Experience />
          <Blog />
          <Contact />
        </main>
      </div>
    </Router>
  )
}

export default App
