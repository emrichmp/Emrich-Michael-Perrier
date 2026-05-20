import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PULL_QUOTE =
  "I train five days a week, compete in powerlifting, play tennis, and hike. The same discipline that gets me in the gym is what ships products at 2am.";

const factRows = [
  { left: "Powerlifting", right: "5+ years" },
  { left: "Tennis", right: "3x per week" },
  { left: "Currently building", right: "Open & Run, Helios, Intrinsic Work" },
  { left: "Based in", right: "Los Angeles, CA" }
];

const BORDER_DURATION = 1;
const BORDER_EASE = "easeOut" as const;
const FACT_STAGGER = 0.1;
const FACTS_START_DELAY = 0.12;

const Coaching = () => {
  const [quoteRef, quoteInView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });
  const [factsRef, factsInView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "0px 0px 22% 0px"
  });

  return (
    <section id="coaching" className="section-padding bg-brand-surface">
      <div className="container-max mx-auto">
        <div className="label-mono">Beyond Code</div>
        <div className="accent-line mt-3 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0 }}
            animate={quoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative pl-6"
          >
            <motion.div
              className="absolute left-0 top-0 w-px bg-brand-border"
              initial={{ height: "0%" }}
              animate={quoteInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: BORDER_DURATION, ease: BORDER_EASE }}
            />
            <blockquote className="text-2xl font-light text-ink-primary leading-relaxed">
              {PULL_QUOTE}
            </blockquote>
            <p className="label-mono text-ink-muted mt-6">Los Angeles, CA — New York Born</p>
          </motion.div>

          <div ref={factsRef} className="lg:col-span-6 lg:col-start-7">
            <div>
              {factRows.map((row, index) => (
                <div
                  key={row.left}
                  className="relative flex justify-between items-baseline gap-6 py-5"
                >
                  <motion.div
                    className="absolute top-0 right-0 h-px bg-brand-border"
                    initial={{ width: "0%" }}
                    animate={factsInView ? { width: "100%" } : { width: "0%" }}
                    transition={{
                      duration: BORDER_DURATION,
                      delay: FACTS_START_DELAY + index * FACT_STAGGER,
                      ease: BORDER_EASE
                    }}
                  />
                  {index === factRows.length - 1 && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-brand-border"
                      initial={{ width: "0%" }}
                      animate={factsInView ? { width: "100%" } : { width: "0%" }}
                      transition={{
                        duration: BORDER_DURATION,
                        delay: FACTS_START_DELAY + index * FACT_STAGGER,
                        ease: BORDER_EASE
                      }}
                    />
                  )}
                  <span className="text-sm font-light text-ink-secondary">{row.left}</span>
                  <span className="label-mono text-ink-muted text-right">{row.right}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-light text-ink-secondary leading-relaxed">
              I bring the same precision to code as I do to training — measurable progress,
              intentional systems, no wasted reps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
