import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PULL_QUOTE =
  "i train five days a week, compete in powerlifting and tennis. the same discipline that gets me in the gym is what ships products with user intention.";

const SERVICE_PILLS = ["Powerlifting - $60/mo", "AI Development - $80/hr"];

const CALENDLY_URL = "https://calendly.com/emrichmp/powerlifting-consultation";

const TESTIMONIALS = [
  {
    quote:
      "Emrich's coaching helped me increase my total by 100kg in just 6 months. His attention to form and personalized programming made all the difference.",
    attribution: "Miguel L, Powerlifter"
  },
  {
    quote:
      "Working with Emrich on AI development was incredible. He helped me build a complete AI-powered application from scratch. Highly recommend!",
    attribution: "Alex K, Full-Stack Developer"
  }
];

const BORDER_DURATION = 1;
const BORDER_EASE = "easeOut" as const;

const Coaching = () => {
  const [quoteRef, quoteInView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });
  const [photoRef, photoInView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });
  const [coachingRef, coachingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="coaching" className="py-12 px-6 sm:px-12 lg:px-24 bg-brand-surface">
      <div className="container-max mx-auto">
        {/* Block 1 - Person */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-8 items-start lg:items-center">
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0 }}
            animate={quoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative pl-6 lg:pt-4"
          >
            <div className="label-mono">Beyond Code</div>
            <div className="accent-line mt-3 mb-6" />
            <div className="relative pl-6">
              <motion.div
                className="absolute left-0 top-0 w-px bg-brand-border"
                initial={{ height: "0%" }}
                animate={quoteInView ? { height: "100%" } : { height: "0%" }}
                transition={{ duration: BORDER_DURATION, ease: BORDER_EASE }}
              />
              <blockquote className="text-2xl font-light text-ink-primary leading-relaxed lowercase">
                {PULL_QUOTE}
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            ref={photoRef}
            className="lg:col-span-6 lg:col-start-7 relative w-full h-fit border-l-2 border-brand-accent"
            initial={{ opacity: 0 }}
            animate={photoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-brand-base border border-brand-border" />
            <img
              src="/BeyondCode/powerlifting-squat.jpg"
              alt="Emrich powerlifting"
              className="relative z-10 w-full aspect-[4/3] object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Block 3 - Coaching */}
        <motion.div
          ref={coachingRef}
          className="border-t border-brand-border pt-8"
          initial={{ opacity: 0 }}
          animate={coachingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="label-mono text-ink-muted mb-4 lowercase">work with me</div>
              <div className="accent-line mb-6" />
              <p className="mb-6 text-sm font-light leading-relaxed text-ink-secondary">
                I offer powerlifting coaching and AI development coaching. whether you&apos;re
                chasing a total or trying to build your first app with AI tools, i&apos;ve done
                both.
              </p>
              <div className="flex flex-wrap gap-3">
                {SERVICE_PILLS.map(pill => (
                  <span
                    key={pill}
                    className="border border-brand-border px-3 py-1.5 text-xs font-light text-ink-secondary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono mt-6 inline-block border-b border-brand-accent pb-0.5 text-ink-primary transition-colors duration-200 hover:text-brand-accent"
              >
                Book a consultation ↗
              </a>
            </div>

            <div className="hidden sm:block space-y-4 lg:col-span-4 lg:col-start-9">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.attribution}
                  initial={{ opacity: 0 }}
                  animate={coachingInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <p className="mb-2 text-sm font-light italic leading-relaxed text-ink-secondary">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="label-mono text-[10px] text-ink-muted">
                    - {testimonial.attribution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coaching;
