import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences, sidebarProjects } from "../data/experience";

const skillGroups = [
  {
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "JavaScript(ES6)",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Quasar",
      "Redux"
    ]
  },
  {
    skills: [
      "Ruby",
      "Rails",
      "Node.js",
      "MongoDB",
      "SQL",
      "Supabase",
      "Firebase",
      "RESTful APIs",
      "NextAuth.js"
    ]
  },
  {
    skills: ["Shopify", "Hydrogen", "Sanity", "HubSpot", "Stripe Integration", "Docusign"]
  },
  {
    skills: ["AWS", "Cloudflare", "Git", "OAuth", "Vercel", "CI/CD", "GitHub"]
  },
  {
    skills: ["Figma", "SendGrid", "EmailJS", "VideoSDK", "AI Tools", "Development Mentoring"]
  },
  {
    skills: [
      "Client Communication",
      "Project Management",
      "Problem Solving",
      "Self-Learning",
      "Code Review",
      "Team Leadership"
    ]
  }
];

const allSkills = Array.from(new Set(skillGroups.flatMap(group => group.skills)));

const tagClassName =
  "label-mono text-ink-muted text-[10px] border border-brand-border px-2 py-0.5";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="section-padding bg-brand-base" ref={ref}>
      <div className="container-max mx-auto">
        <div className="label-mono">Experience</div>
        <div className="accent-line mt-3 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div>
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`border-t border-brand-border pt-6 pb-8 ${
                    index === experiences.length - 1 ? "border-b border-brand-border" : ""
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="text-lg font-light text-ink-primary">{exp.company}</div>
                    <div className="label-mono text-ink-muted flex-shrink-0">{exp.period}</div>
                  </div>
                  <div className="label-mono text-brand-accent mt-1">{exp.title}</div>
                  <p className="text-ink-secondary font-light text-sm leading-relaxed mt-3">
                    {exp.description}
                  </p>
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map(tech => (
                        <span key={tech} className={tagClassName}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <div>
              <div className="label-mono">Now</div>
              <div className="accent-line mt-3 mb-6" />
              <ul className="space-y-3">
                {sidebarProjects.map(project => (
                  <li
                    key={project.id}
                    className="text-sm font-light text-ink-secondary leading-relaxed"
                  >
                    <span className="text-brand-accent">→ </span>
                    {project.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <div className="label-mono">Stack</div>
              <div className="accent-line mt-3 mb-6" />
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <span key={skill} className={tagClassName}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
