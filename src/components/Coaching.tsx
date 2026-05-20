import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const factRows = [
  { left: "Powerlifting", right: "5+ years" },
  { left: "Tennis", right: "3x per week" },
  { left: "Currently building", right: "Open & Run, Helios, Intrinsic Work" },
  { left: "Based in", right: "Los Angeles, CA" }
];

const Coaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <section id="coaching" className="section-padding bg-brand-surface" ref={ref}>
      <div className="container-max mx-auto">
        <div className="label-mono">Beyond Code</div>
        <div className="accent-line mt-3 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <blockquote className="text-2xl font-light text-ink-primary leading-relaxed">
              I train five days a week, compete in powerlifting, play tennis, and hike. The same
              discipline that gets me in the gym is what ships products at 2am.
            </blockquote>
            <p className="label-mono text-ink-muted mt-6">Los Angeles, CA — New York Born</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div>
              {factRows.map((row, index) => (
                <div
                  key={row.left}
                  className={`flex justify-between items-baseline gap-6 border-t border-brand-border py-5 ${
                    index === factRows.length - 1 ? "border-b border-brand-border" : ""
                  }`}
                >
                  <span className="text-sm font-light text-ink-secondary">{row.left}</span>
                  <span className="label-mono text-ink-muted text-right">{row.right}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-light text-ink-secondary leading-relaxed">
              I bring the same precision to code as I do to training — measurable progress,
              intentional systems, no wasted reps.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
