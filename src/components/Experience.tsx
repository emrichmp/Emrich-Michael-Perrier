import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences, sidebarProjects } from "../data/experience";

const allSkills = [
  "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS",
  "Node.js", "SQL", "Supabase", "RESTful APIs", "Shopify", "Hydrogen",
  "Stripe", "DocuSign", "Git", "OAuth", "Vercel", "SendGrid", "VideoSDK",
  "AWS", "Cloudflare", "Vue.js", "Claude", "Cursor", "Replit"
];

const tagClassName = "label-mono text-ink-muted text-[10px] border border-brand-border px-2 py-0.5";

const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeExp = experiences.find(e => e.id === activeId);
  const currentIndex = experiences.findIndex(e => e.id === activeId);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="experience"
      className="bg-brand-base px-6 pt-12 pb-12 sm:px-12 sm:pt-16 sm:pb-16 lg:px-24"
      ref={ref}
    >
      <div className="container-max mx-auto">
        <div className="label-mono">Experience</div>
        <div className="accent-line mt-3 mb-8" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-12">
          <div>
            <div className="label-mono">Now</div>
            <div className="accent-line mt-3 mb-4" />
            <ul className="space-y-2">
              {sidebarProjects.map(project => (
                <li
                  key={project.id}
                  className="text-sm font-light leading-relaxed text-ink-secondary"
                >
                  <span className="text-brand-accent">→ </span>
                  {project.description}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-mono">Stack</div>
            <div className="accent-line mt-3 mb-4" />
            <div className="flex flex-wrap gap-2">
              {allSkills.map(skill => (
                <span key={skill} className={tagClassName}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full border-t border-brand-border pt-6 mt-8"
        >
            {/* Desktop: vertical tabs */}
            <div className="hidden lg:flex">
              <div className="w-48 flex-shrink-0 border-r border-brand-border flex flex-col">
                <div className="mb-2 flex w-full justify-center border-b border-brand-border pb-3">
                  <button
                    type="button"
                    onClick={() => setActiveId(experiences[currentIndex - 1].id)}
                    disabled={currentIndex <= 0}
                    className="text-ink-muted transition-colors duration-200 hover:text-brand-accent disabled:opacity-30"
                  >
                    ↑
                  </button>
                </div>
                {experiences.map(exp => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveId(exp.id)}
                    className={`flex w-full flex-col items-start gap-0.5 border-l-2 py-4 pl-4 text-left transition-all duration-200 ${
                      activeId === exp.id
                        ? "border-brand-accent text-ink-primary"
                        : "border-transparent text-ink-muted hover:border-brand-border hover:text-ink-primary"
                    }`}
                  >
                    <span className="text-sm font-normal">{exp.company}</span>
                    <span className="label-mono max-w-[160px] truncate text-[10px]">{exp.title}</span>
                  </button>
                ))}
                <div className="mt-2 flex w-full justify-center border-t border-brand-border pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveId(experiences[currentIndex + 1].id)}
                    disabled={currentIndex >= experiences.length - 1}
                    className="text-ink-muted transition-colors duration-200 hover:text-brand-accent disabled:opacity-30"
                  >
                    ↓
                  </button>
                </div>
              </div>
              <div className="flex-1 pl-8">
                <AnimatePresence mode="wait">
                  {activeExp && (
                    <motion.div
                      key={activeId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-light text-ink-primary">{activeExp.company}</div>
                      <div className="label-mono mt-2 text-brand-accent">{activeExp.title}</div>
                      <div className="label-mono mt-1 text-ink-muted">{activeExp.period}</div>
                      <p className="mt-6 text-base font-light leading-relaxed text-ink-primary">
                        {activeExp.description}
                      </p>
                      {activeExp.technologies.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {activeExp.technologies.map(tech => (
                            <span key={tech} className={tagClassName}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {activeExp.url && (
                        <div className="mt-6 flex flex-wrap gap-4">
                          {(Array.isArray(activeExp.url) ? activeExp.url : [activeExp.url]).map(
                            (href, index) => {
                              const label = Array.isArray(activeExp.url)
                                ? activeExp.linkLabels?.[index] ?? href
                                : activeExp.linkLabel ?? href;
                              return (
                                <a
                                  key={href}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="label-mono border-b border-brand-accent pb-0.5 text-ink-primary transition-colors duration-200 hover:text-brand-accent"
                                >
                                  {label} ↗
                                </a>
                              );
                            }
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile: horizontal tabs */}
            <div className="lg:hidden">
              <div className="no-scrollbar flex gap-0 overflow-x-auto border-b border-brand-border">
                {experiences.map(exp => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveId(exp.id)}
                    className={`flex-shrink-0 border-b-2 px-4 py-3 text-left transition-all duration-200 -mb-px ${
                      activeId === exp.id
                        ? "border-brand-accent text-ink-primary"
                        : "border-transparent text-ink-muted hover:text-ink-primary"
                    }`}
                  >
                    <span className="text-xs font-normal">{exp.company}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {activeExp && (
                    <motion.div
                      key={activeId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xl font-light text-ink-primary">{activeExp.company}</div>
                      <div className="label-mono mt-2 text-brand-accent">{activeExp.title}</div>
                      <div className="label-mono mt-1 text-ink-muted">{activeExp.period}</div>
                      <p className="mt-4 text-sm font-light leading-relaxed text-ink-primary">
                        {activeExp.description}
                      </p>
                      {activeExp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {activeExp.technologies.map(tech => (
                            <span key={tech} className={tagClassName}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {activeExp.url && (
                        <div className="mt-4 flex flex-wrap gap-4">
                          {(Array.isArray(activeExp.url) ? activeExp.url : [activeExp.url]).map(
                            (href, index) => {
                              const label = Array.isArray(activeExp.url)
                                ? activeExp.linkLabels?.[index] ?? href
                                : activeExp.linkLabel ?? href;
                              return (
                                <a
                                  key={href}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="label-mono border-b border-brand-accent pb-0.5 text-ink-primary transition-colors duration-200 hover:text-brand-accent"
                                >
                                  {label} ↗
                                </a>
                              );
                            }
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
