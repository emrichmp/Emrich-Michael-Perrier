import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "Open & Run",
      period: "12/2024 - Present",
      description:
        "Sole developer for Open & Run, building a full-stack platform for business management solutions.",
      technologies: [
        "React",
        "Next.js",
        "Supabase",
        "Vercel",
        "TailwindCSS",
        "NextAuth.js",
        "Stripe",
        "Docusign"
      ],
      achievements: [
        "Built a full-stack platform using React, Next.js, Supabase, Vercel, and TailwindCSS",
        "Implemented sign-up/login flows, email verification with NextAuth.js, and password reset features",
        "Developed staff and location management pages, incident reporting tool, and integrated Docusign for automated PDF generation",
        "Integrated Stripe API for billing and established CI/CD pipelines using GitHub and Vercel",
        "Built RESTful APIs with Next.js authentication and implemented a chat tool for real-time communication"
      ]
    },
    {
      id: 2,
      title: "Freelance Fullstack Software Engineer",
      company: "Upwork (Full-Time Freelance)",
      period: "11/2022 - Present",
      description:
        "Earned Upwork's Top Rated Plus badge with a 100% Job Success Score, delivering high-quality code for multiple frontend and full-stack projects.",
      technologies: ["JavaScript", "HTML", "CSS", "React", "Vue", "Shopify"],
      achievements: [
        "Earned Upwork's Top Rated Plus badge with a 100% Job Success Score",
        "Consistently communicate with clients promptly and deliver progress updates on projects",
        "Deliver high quality code commits for multiple frontend and full-stack projects",
        "Completed projects for La Ligne, OFTV website, OFTV LG App, Covet by Christos, SelfBook, Ourmada, Open&Run and many more"
      ]
    },
    {
      id: 3,
      title: "Studio/Production Coordinator",
      company: "BUCK Design",
      period: "03/2024 - 08/2024",
      description:
        "Managed front desk operations and supported various administrative and technical functions.",
      technologies: ["IT Support", "Event Management", "Administrative Systems"],
      achievements: [
        "Managed front desk operations, including calls, deliveries, and guest/client assistance",
        "Supported budgeting, invoicing, maintenance coordination, and IT tech setups for meetings",
        "Organized cultural events to streamline logistics and enhance staff engagement"
      ]
    },
    {
      id: 4,
      title: "Junior Frontend Developer (Promoted from Frontend UI Intern)",
      company: "Tango Analytics",
      period: "10/2021 - 03/2023",
      description:
        "Led migration projects and built custom UI components for Tango's client map software.",
      technologies: ["VueJS", "Quasar Framework", "TypeScript", "Oracle Map Viewer"],
      achievements: [
        "Led the migration of Tango's Mapviewer from VueJS 2.0 and Quasar v1 to VueJS 3.0 and Quasar v2",
        "Ensured functionality consistency through debugging and refactoring during migration",
        "Built custom UI components for Tango's client map software using Quasar Framework and Oracle Map Viewer",
        "Self-taught TypeScript, VueJS, and Quasar to accelerate feature development and software optimization"
      ]
    },
    {
      id: 5,
      title: "Strength and Conditioning Coach",
      company: "JDI Barbell and Freelance",
      period: "12/2020 - Present",
      description:
        "Write and plan training programs for competitive athletes, providing personalized coaching and support.",
      technologies: ["Program Design", "Athlete Management", "Communication Systems"],
      achievements: [
        "Write and plan training programs for 15 competitive athletes tailored for their competitive and health goals",
        "Oversaw Coaches Hours to assist athletes with technique, spotting for safety or general questions on movement mechanics",
        "Provide constant communication with clients and check in with them and the training program over weekly calls"
      ]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: "Open & Run Platform",
      description:
        "Senior developer building a full-stack platform for business management solutions using React, Next.js, Supabase, and Vercel.",
      technologies: [
        "React",
        "Next.js",
        "Supabase",
        "Vercel",
        "TailwindCSS",
        "NextAuth.js",
        "Stripe",
        "Docusign"
      ]
    },
    {
      id: 2,
      name: "AI Development Coaching",
      description:
        "Coaching a developer on how to build apps and code using AI development tools and modern development practices.",
      technologies: ["AI Tools", "Development Mentoring", "Code Review", "Best Practices"]
    },
    {
      id: 3,
      name: "Full-Stack Productivity App",
      description:
        "Designing and developing a full-stack productivity application while managing and mentoring another developer on the project.",
      technologies: [
        "Full-Stack Development",
        "Project Management",
        "Team Leadership",
        "Product Design"
      ]
    }
  ];

  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Experience & Current Projects</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development, including work experience,
            achievements, and current projects that showcase my technical expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences
                .slice(0, showAllExperiences ? experiences.length : 3)
                .map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2" />

                    <div className="mb-4">
                      <h4 className="text-xl font-light text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1 text-xs">•</span>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}

              {experiences.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center pt-4"
                >
                  <button
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 font-medium"
                  >
                    {showAllExperiences
                      ? "Show Less"
                      : `Show More (${experiences.length - 3} more)`}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">Projects</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-light text-white">{project.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-light uppercase tracking-wide mb-6">
                Additional Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    category: "Frontend Development",
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
                    category: "Backend & Database",
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
                    category: "E-commerce & CMS",
                    skills: [
                      "Shopify",
                      "Hydrogen",
                      "Sanity",
                      "HubSpot",
                      "Stripe Integration",
                      "Docusign"
                    ]
                  },
                  {
                    category: "Cloud & DevOps",
                    skills: ["AWS", "Cloudflare", "Git", "OAuth", "Vercel", "CI/CD", "GitHub"]
                  },
                  {
                    category: "Tools & Services",
                    skills: [
                      "Figma",
                      "SendGrid",
                      "EmailJS",
                      "VideoSDK",
                      "AI Tools",
                      "Development Mentoring"
                    ]
                  },
                  {
                    category: "Soft Skills",
                    skills: [
                      "Client Communication",
                      "Project Management",
                      "Problem Solving",
                      "Self-Learning",
                      "Code Review",
                      "Team Leadership"
                    ]
                  }
                ].map(skillGroup => (
                  <div
                    key={skillGroup.category}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                  >
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-1">
                      {skillGroup.skills.map(skill => (
                        <li key={skill} className="text-gray-300 text-sm">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
