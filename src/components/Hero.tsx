import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-end overflow-hidden"
      ref={ref}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/dpqdfzsq5/video/upload/so_0/v1779225848/Hero_xkv5kc.jpg"
          webkit-playsinline="true"
          className="w-full h-full object-cover scale-110 blur-sm"
        >
          <source src="https://res.cloudinary.com/dpqdfzsq5/video/upload/v1779225848/Hero_xkv5kc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-24 px-6 sm:px-12 lg:px-24 lg:ml-12 text-left">
        <motion.span
          className="label-mono text-brand-accent mb-4 block font-medium sm:font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          Full Stack Engineer & Co-Founding CTO
        </motion.span>

        <h1 className="heading-primary text-ink-primary font-normal tracking-tight">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0, ease: easeOut }}
          >
            Emrich-Michael
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          >
            Perrier
          </motion.span>
        </h1>

        <motion.p
          className="text-ink-secondary text-base font-light mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
        >
          I like to build things and guide people.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("#projects")}
            className="text-sm font-light text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
          >
            View Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="text-sm font-light text-ink-muted hover:text-ink-primary transition-colors duration-200 ml-8"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <div
        className="hidden md:flex absolute right-8 bottom-24 z-10 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="w-px h-24 bg-brand-border" />
        <motion.span
          className="label-mono text-ink-muted text-[10px] [writing-mode:vertical-rl]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
