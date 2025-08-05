import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DemoReel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section 
      id="demo-reel" 
      className="section-padding bg-gray-900"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Demo Reel</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            Watch me in action as I code, debug, and build software solutions. 
            From rapid prototyping to production deployment, see my development process in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        >
          <video
            className="w-full h-full object-cover"
            poster="/demo-reel-poster.jpg"
            controls
            preload="metadata"
          >
            <source src="/demo-reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer">
            <motion.div
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-8 h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-lg">
            Full-stack development workflow • React/TypeScript • Node.js • Database design • 
            API development • Testing & deployment
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoReel 