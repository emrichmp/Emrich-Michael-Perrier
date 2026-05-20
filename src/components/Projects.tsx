import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, type Project } from "../data/projects";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const formatProjectNumber = (index: number) => String(index + 1).padStart(2, "0");

type ProjectCardProps = {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
};

const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "0px 0px 22% 0px"
  });

  return (
    <motion.article
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group flex flex-col bg-brand-base border border-transparent hover:border-brand-border transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: easeOut }}
    >
      <div className="aspect-video overflow-hidden w-full bg-brand-border flex-shrink-0">
        {project.video ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
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

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-brand-accent tracking-widest mb-2">
          {formatProjectNumber(index)}
        </span>
        <h3 className="text-sm font-normal text-ink-primary leading-snug mb-2">{project.title}</h3>
        <p className="text-xs font-light text-ink-muted leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="text-[10px] text-ink-muted border border-brand-border px-1.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-xs text-ink-primary border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200 w-fit"
            onClick={e => e.stopPropagation()}
          >
            View Project ↗
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectedIndex =
    selectedProject === null ? -1 : projects.findIndex(p => p.id === selectedProject.id);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("panel-open");
    } else {
      document.body.classList.remove("panel-open");
    }
    return () => document.body.classList.remove("panel-open");
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-brand-surface py-14 sm:py-16">
      <motion.div
        animate={{ scale: selectedProject ? 0.98 : 1 }}
        transition={{ duration: 0.4 }}
        className="origin-top"
      >
        <div className="mx-auto max-w-screen-2xl px-6 pt-6 sm:px-12 sm:pt-8 lg:px-16">
          <div className="label-mono">Projects</div>
          <div className="accent-line mt-3 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="projects-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              key="projects-modal-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-2xl flex-col border-l-2 border-brand-accent bg-brand-surface"
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-base/90 text-ink-muted shadow-md backdrop-blur-sm transition-colors transition-transform duration-200 hover:rotate-90 hover:text-brand-accent"
                aria-label="Close panel"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <div className="aspect-video w-full flex-shrink-0 overflow-hidden bg-brand-border">
                  {selectedProject.video ? (
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                    </video>
                  ) : (
                    selectedProject.image && (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="h-full w-full object-cover"
                      />
                    )
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div>
                    <motion.div
                      key={`${selectedProject.id}-head`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="mb-1 block text-xs tracking-widest text-brand-accent">
                        {selectedIndex >= 0 ? formatProjectNumber(selectedIndex) : ""}
                      </span>
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="min-w-0 flex-1 text-2xl font-normal text-ink-primary">
                          {selectedProject.title}
                        </h2>
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 border-b border-brand-accent pb-0.5 text-sm text-ink-primary transition-colors duration-200 hover:text-brand-accent"
                          >
                            View Project ↗
                          </a>
                        )}
                      </div>
                    </motion.div>

                    <motion.p
                      key={`${selectedProject.id}-desc`}
                      className="mt-4 text-sm font-light leading-relaxed text-ink-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                    >
                      {selectedProject.longDescription}
                    </motion.p>
                  </div>

                  <motion.div
                    key={`${selectedProject.id}-tags`}
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.05, delayChildren: 0.5 }
                      }
                    }}
                  >
                    {selectedProject.technologies.map(tech => (
                      <motion.span
                        key={tech}
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1 }
                        }}
                        transition={{ duration: 0.35 }}
                        className="border border-brand-border px-2 py-0.5 text-[10px] text-ink-muted"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {selectedProject.features.length > 0 && (
                    <div>
                      <div className="label-mono mb-3 text-ink-muted">Features</div>
                      <div className="accent-line mb-4" />
                      <ul className="flex flex-col gap-3">
                        {selectedProject.features.map(feature => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm font-light text-ink-secondary"
                          >
                            <span
                              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-accent"
                              aria-hidden
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
