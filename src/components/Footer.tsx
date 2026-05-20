import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionLine = motion.line;
const MotionPath = motion.path;

const linkClassName = "hover:text-brand-accent transition-colors duration-200";

const Footer = () => {
  const year = new Date().getFullYear();
  const [linksRef, linksInView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <footer className="bg-brand-base">
      <div ref={linksRef} className="px-6 pt-3 pb-5 sm:px-12 lg:px-24">
        <div className="container-max mx-auto">
          <div className="relative flex items-center">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <MotionLine
                x1="40"
                y1="6"
                x2="0"
                y2="6"
                stroke="#262626"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={linksInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              />
              <MotionPath
                d="M8 1L1 6L8 11"
                stroke="#262626"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={linksInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.6 }}
              />
            </svg>
            <motion.span
              className="label-mono text-ink-muted text-[10px] ml-2"
              initial={{ opacity: 0 }}
              animate={linksInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.9 }}
            >
              Links
            </motion.span>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-border py-8 px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <p className="label-mono text-ink-muted pl-3 sm:pl-4">
            © {year} Emrich-Michael Perrier
          </p>
          <div className="flex flex-col items-end">
            <span className="text-xs font-light text-ink-muted">
              Designed and coded by yours truly. Built with React & TypeScript, deployed with{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Vercel
              </a>
              . Set in{" "}
              <a
                href="https://rsms.me/inter/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Inter
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
