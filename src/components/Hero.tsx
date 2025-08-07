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
      {/* Video Background - Commented out for now */}
      {/* <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="/hero-poster.jpg"
        >
          <source src="/Hero/Hero.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div> */}

      {/* Cool Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Multi-layer Gradient Background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/20 via-transparent to-red-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Larger Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:120px_120px]" />
        </div>

        {/* Floating Particles - More and varied */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large particles */}
          <div
            className="absolute top-1/5 left-1/5 w-3 h-3 bg-white/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-3/4 right-1/5 w-2.5 h-2.5 bg-cyan-400/30 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-red-400/25 rounded-full animate-pulse"
            style={{ animationDelay: "2.5s", animationDuration: "3.5s" }}
          />

          {/* Medium particles */}
          <div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-pulse"
            style={{ animationDelay: "1.2s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "2.8s" }}
          />

          {/* Small particles */}
          <div
            className="absolute top-1/4 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/6 w-1 h-1 bg-green-400/35 rounded-full animate-pulse"
            style={{ animationDelay: "1.8s", animationDuration: "2.2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.7s", animationDuration: "1.8s" }}
          />
          <div
            className="absolute top-3/5 right-1/2 w-1 h-1 bg-pink-400/25 rounded-full animate-pulse"
            style={{ animationDelay: "2.2s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute bottom-1/2 left-2/3 w-1 h-1 bg-orange-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
          />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "4s" }}
          />
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "4s" }}
          />
          <div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "5s" }}
          />
          <div
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/12 to-transparent animate-pulse"
            style={{ animationDelay: "3s", animationDuration: "5s" }}
          />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/6 left-1/6 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          />
          <div
            className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-red-500/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "3s", animationDuration: "6s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "7s" }}
          />
        </div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/25" />
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
            Full Stack Developer in Los Angeles
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light mb-6 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            React • Vue • TypeScript • Modern Web Applications
          </motion.p>

          <motion.div
            className="text-sm sm:text-base text-gray-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <p>Top Rated Plus Developer • 5+ Years Experience • 100% Satisfaction Rate</p>
            <p>$100K+ Earned on Upwork • Los Angeles Based</p>
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
