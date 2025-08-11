import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          className="w-full h-full object-cover scale-110 blur-sm"
          poster="/About/emrich.png"
        >
          <source src="/Hero/Hero.mp4" type="video/mp4" />
          {/* Fallback for devices that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="heading-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Emrich-Michael Perrier
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-light uppercase tracking-wider mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.div
            className="text-sm sm:text-base text-gray-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <p>Top Rated Plus Developer • 5+ Years Experience • 100% Job Success Score</p>
            <p>$100K+ Earned on Upwork • New York Born • Los Angeles Based</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Arrow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        {/* Top Arrow */}
        <motion.div
          className="w-6 h-6 text-white/50 -mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 13l5 5 5-5"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom Arrow */}
        <motion.div
          className="w-6 h-6 text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 13l5 5 5-5"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
