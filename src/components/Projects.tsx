import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, type Project } from "../data/projects";

const formatProjectNumber = (index: number) => String(index + 1).padStart(2, "0");

const getLiveLinkLabel = (project: Project) => {
  if (project.id === 1 || project.id === 2 || project.id === 4 || project.id === 5) {
    return "Visit Site";
  }
  return "View App";
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  return (
    <section id="projects" className="section-padding bg-brand-surface" ref={ref}>
      <div className="container-max mx-auto">
        <div className="label-mono">Projects</div>
        <div className="accent-line mt-3 mb-16" />

        <div>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group border-t border-brand-border py-8 hover:bg-white/[0.02] transition-colors duration-300 ${
                index === projects.length - 1 ? "border-b border-brand-border" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-8">
                <div className="flex-1 min-w-0">
                  <div className="label-mono text-ink-muted group-hover:text-brand-accent transition-colors duration-300">
                    {formatProjectNumber(index)}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-light text-ink-primary mt-1 text-left hover:text-brand-accent transition-colors duration-200"
                  >
                    {project.title}
                  </button>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="label-mono text-ink-muted text-[10px] border border-brand-border px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.video || project.image) && (
                  <div className="hidden md:block w-64 flex-shrink-0 aspect-video overflow-hidden bg-brand-border">
                    {project.video ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay={hoveredIndex === index}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )
                    )}
                  </div>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-mono text-ink-muted group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 self-center hidden sm:block"
                    aria-label={`Open ${project.title}`}
                  >
                    →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25 }}
                className="bg-brand-surface max-w-2xl w-full max-h-[90vh] overflow-y-auto border-t-2 border-brand-accent"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8 relative">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 label-mono text-ink-muted hover:text-ink-primary transition-colors duration-200"
                  >
                    ✕ close
                  </button>

                  <h3 className="heading-secondary text-ink-primary pr-24 mb-6">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="label-mono text-ink-muted text-[10px] border border-brand-border px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-ink-secondary font-light leading-relaxed text-base mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {selectedProject.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-ink-secondary font-light text-sm"
                      >
                        <span className="text-brand-accent mr-3 mt-0.5">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
                    >
                      {getLiveLinkLabel(selectedProject)} →
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
