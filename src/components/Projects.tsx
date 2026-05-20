import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const formatProjectNumber = (index: number) => String(index + 1).padStart(2, "0");

type ProjectCardProps = {
  project: (typeof projects)[number];
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  return (
    <motion.article
      ref={ref}
      className="group flex flex-col bg-brand-base border border-transparent hover:border-brand-border transition-all duration-300"
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
          >
            View Project ↗
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-brand-surface">
      <div className="mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
        <div className="label-mono">Projects</div>
        <div className="accent-line mt-3 mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
