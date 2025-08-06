import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "VueJS",
        "TypeScript",
        "JavaScript(ES6)",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Next.js",
        "Quasar"
      ]
    },
    {
      category: "Backend & Database",
      items: ["Ruby", "Rails", "Node.js", "MongoDB", "SQL", "Supabase", "Firebase"]
    },
    { category: "E-commerce & CMS", items: ["Shopify", "Hydrogen", "Sanity", "HubSpot"] },
    { category: "Cloud & DevOps", items: ["AWS", "Cloudflare", "Git", "OAuth", "Vercel"] },
    {
      category: "Tools & Services",
      items: ["Figma", "Stripe", "DocuSign", "SendGrid", "EmailJS", "VideoSDK", "Redux"]
    }
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">About Me</h2>
          <p className="text-body text-gray-400 max-w-4xl mx-auto">
            Passionate software engineer with a love for creating elegant solutions to complex
            problems. I specialize in full-stack development, focusing on scalable web applications
            and user-centric design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-6">My Journey</h3>
            <div className="space-y-6 text-body text-gray-300">
              <p>
                I started my journey in software development with a curiosity about how things work
                on the web. What began as simple HTML pages has evolved into building complex,
                scalable applications that serve thousands of users.
              </p>
              <p>
                With over [X] years of experience, I've worked on projects ranging from startup MVPs
                to enterprise-level applications. I believe in writing clean, maintainable code and
                staying up-to-date with the latest technologies and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing
                technical blog posts, or exploring new technologies. I'm always eager to learn and
                share knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-lg font-medium text-white mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 pt-16 border-t border-gray-800"
        >
          {[
            { number: "30+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Code Availability" },
            { number: "100%", label: "Job Success Score" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
