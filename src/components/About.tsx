import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: "5+", label: "years experience" },
  { number: "$100K+", label: "earned on upwork" },
  { number: "20+", label: "products shipped" }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <section id="about" className="section-padding bg-brand-base" ref={ref}>
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="label-mono">About</div>
            <div className="accent-line mt-3 mb-8" />
            <div className="relative overflow-hidden transition-all duration-500 hover:outline hover:outline-1 hover:outline-brand-accent hover:outline-offset-4">
              <img
                src="/About/emrich.png"
                alt="Emrich-Michael Perrier"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="label-mono text-ink-muted mt-3">Los Angeles, CA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-ink-secondary font-light leading-relaxed text-base">
              <p>
                I'm a full stack engineer based in Los Angeles — but the title undersells it. I
                co-found, I lead, I build products people actually use. I think in systems: user
                flows, event pipelines, business logic, and the human on the other side of the
                screen.
              </p>
              <p>
                Clients have told me I think about the user more than most engineers do. I take that
                seriously. Good code that serves a bad experience is still a bad product.
              </p>
              <p>
                Outside the work: I train five days a week, play tennis, hike, and spend time with
                people I actually like. I take the same approach to all of it — show up, be
                consistent, care about the craft.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-light text-ink-primary">{stat.number}</div>
                  <div className="label-mono text-ink-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
