import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const facts = [
  {
    num: "01",
    text: "Co-Founding CTO at Open & Run — building the operating system for small business owners."
  },
  {
    num: "02",
    text: "Full stack engineer for 5+ years. $100K+ earned on Upwork. 100% job success score."
  },
  {
    num: "03",
    text: "I think about the user more than most engineers do. Good code that serves a bad experience is still a bad product."
  },
  {
    num: "04",
    text: "Training five days a week. Tennis three times a week. One hike. Every week, without fail."
  },
  {
    num: "05",
    text: "I've pulled products out of some genuinely hard places. That's what I'm most proud of."
  },
  {
    num: "06",
    text: "New York born. Los Angeles based. Probably at a gym right now."
  }
];

const FactItem = ({ num, text, index }: { num: string; text: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 items-start"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeOut }}
    >
      <span className="text-xs text-brand-accent tracking-widest font-normal w-6 flex-shrink-0 mt-0.5">
        {num}
      </span>
      <p className="text-sm font-light text-ink-secondary leading-relaxed">{text}</p>
    </motion.div>
  );
};

const About = () => {
  const [photoRef, photoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-16 px-6 sm:px-12 lg:px-24 bg-brand-base">
      <div className="container-max mx-auto">
        <div className="label-mono">About</div>
        <div className="accent-line mt-3 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            ref={photoRef}
            className="lg:col-span-5 relative w-full max-w-none lg:max-w-xs border-l-2 border-brand-accent"
            initial={{ opacity: 0 }}
            animate={photoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-brand-surface border border-brand-border" />
            <img
              src="/About/emrich.png"
              alt="Emrich-Michael Perrier"
              className="relative z-10 w-full aspect-[2/3] object-cover object-top"
            />
          </motion.div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="space-y-5 w-full">
              {facts.map((fact, index) => (
                <FactItem key={fact.num} num={fact.num} text={fact.text} index={index} />
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border w-full">
              <a
                href="https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
