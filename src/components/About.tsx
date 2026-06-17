import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const facts = [
  {
    num: "01",
    text: "co-founding cto at open & run an operating system built for the people who actually run small businesses."
  },
  {
    num: "02",
    text: "full stack engineer for 5+ years. $200K+ earned on upwork. 100% job success score."
  },
  {
    num: "03",
    text: "most engineers stop at \"does it work.\" i don't. the product isn't done until the experience is right."
  },
  {
    num: "04",
    text: "new york born. los angeles based."
  },
  {
    num: "05",
    text: "outside of my main roles, i like to build for creatives and luxury brands. it's where i get to care as much about how something looks as how it works."
  }
];

const AvailabilityBadge = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 items-start border-l-2 border-brand-accent pl-3 py-1"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="text-xs text-brand-accent tracking-widest font-normal w-6 flex-shrink-0 mt-0.5">
        →
      </span>
      <p className="text-sm font-light text-ink-primary leading-relaxed lowercase">
        currently open to senior full stack or cto-track engineering roles.
      </p>
    </motion.div>
  );
};

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
      <p className="text-sm font-light text-ink-secondary leading-relaxed lowercase">{text}</p>
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
        <div className="label-mono">ABOUT</div>
        <div className="accent-line mt-3 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            ref={photoRef}
            className="lg:col-span-5 relative w-full max-w-none lg:max-w-xs border-l-2 border-brand-accent"
            initial={{ opacity: 0 }}
            animate={photoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-brand-surface border border-brand-border" />
            <img
              src="/About/emrich.webp"
              alt="emrich-michael perrier"
              className="relative z-10 w-full aspect-[2/3] object-cover object-top"
            />
          </motion.div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="space-y-5 w-full">
              {facts.map((fact, index) => (
                <FactItem key={fact.num} num={fact.num} text={fact.text} index={index} />
              ))}
              <div className="mt-2">
                <AvailabilityBadge />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border w-full">
              <a
                href="https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
              >
                RESUME ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
