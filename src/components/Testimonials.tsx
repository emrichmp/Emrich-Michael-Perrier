import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    quote:
      "Thinks outside the box and has a great understanding of different types of users when building functionality. Wonderful to work with, and Emrich was very consultative, working with us to get to the best solution given our custom build.",
    name: "Brooke B",
    company: "Covet by Christos"
  },
  {
    id: 2,
    quote:
      "Working with Emrich was a pleasure! He is very talented, communicative and patient. Would absolutely work with him again in the future.",
    name: "Deanna C",
    company: "Coeur Leather"
  },
  {
    id: 3,
    quote:
      "Overall, I would highly recommend Emrich-Michael to anyone in need of a React.js and Storybook. His professionalism, expertise, and attention to detail are second to none, and I look forward to working with him again in the future. Thank you for your hard work and dedication to our project!",
    name: "Rachel Z",
    company: "Upwork Client"
  },
  {
    id: 4,
    quote:
      "Wonderful and collaborative attitude with an upbeat and enthusiastic professional demeanor.",
    name: "Erkan E",
    company: "Open & Run"
  },
  {
    id: 5,
    quote:
      "Emrich is a great talent and got the work done in a high quality fashion. He was responsive and courteous.",
    name: "Rich C",
    company: "Ourmada"
  }
];

const n = testimonials.length;
const cloned = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCard = ({ quote, name, company }: { quote: string; name: string; company: string }) => (
  <div className="flex-shrink-0 w-[420px] mx-4 border border-brand-border bg-brand-surface p-4 flex flex-col gap-2">
    <span className="text-xl font-light text-brand-accent leading-none select-none">{"\u201C"}</span>
    <p className="text-sm font-light text-ink-secondary leading-relaxed flex-1">{quote}</p>
    <div className="border-t border-brand-border pt-4">
      <p className="text-sm font-normal text-ink-primary">{name}</p>
      <p className="label-mono text-[10px] text-brand-accent mt-0.5">{company}</p>
    </div>
  </div>
);

const navButtonClassName =
  "text-ink-muted transition-colors duration-200 hover:text-brand-accent";

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const isTransitioning = useRef(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(n);
  const [step, setStep] = useState(452);
  const [animated, setAnimated] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const measureStep = useCallback(() => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    if (!first) return;
    const style = window.getComputedStyle(first);
    const marginX = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    setStep(first.offsetWidth + marginX);
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  const goTo = useCallback((dir: 1 | -1) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(true);
    setTrackIndex(i => i + dir);
    setDisplayIndex(i => (i + dir + n) % n);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onTransitionEnd = () => {
      isTransitioning.current = false;
      setTrackIndex(curr => {
        if (curr >= n * 2) {
          setAnimated(false);
          return n;
        }
        if (curr < n) {
          setAnimated(false);
          return n * 2 - 1;
        }
        return curr;
      });
    };
    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!pausedRef.current) goTo(1);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [goTo]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-brand-border pt-8 mt-8 overflow-hidden"
    >
      <div className="px-6 sm:px-12 lg:px-24 mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="label-mono text-ink-muted">Client Testimonials</div>
          <div className="accent-line mt-3" />
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <button type="button" onClick={() => goTo(-1)} aria-label="Previous testimonial" className={navButtonClassName}>←</button>
          <span className="label-mono text-xs text-ink-muted">{displayIndex + 1} / {n}</span>
          <button type="button" onClick={() => goTo(1)} aria-label="Next testimonial" className={navButtonClassName}>→</button>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${trackIndex * step}px)`,
            transition: animated ? "transform 500ms ease-out" : "none"
          }}
        >
          {cloned.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} company={t.company} />
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-24 mt-6">
        <a
          href="https://www.upwork.com/freelancers/emrichperrier"
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono text-ink-muted border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200 text-[10px]"
        >
          View all reviews on Upwork ↗
        </a>
      </div>
    </motion.div>
  );
};

export default Testimonials;
