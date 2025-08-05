import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
      achievements: [
        "Led a team of 5 developers in building a customer portal serving 50,000+ users",
        "Reduced application load time by 40% through performance optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built and maintained multiple web applications from concept to deployment.",
      technologies: ["React", "Express", "MongoDB", "Redis", "Heroku"],
      achievements: [
        "Developed MVP for e-commerce platform that generated $100K in first year",
        "Built real-time chat application with 10,000+ concurrent users",
        "Integrated payment systems and automated billing processes",
        "Optimized database queries improving performance by 50%"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Created responsive and interactive user interfaces for various clients.",
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Git"],
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved website accessibility scores by 30%",
        "Created reusable component library used across 10+ projects",
        "Collaborated with designers to implement pixel-perfect designs"
      ]
    }
  ]

  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      url: "https://aws.amazon.com/verification"
    },
    {
      id: 2,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-789012"
    },
    {
      id: 3,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-345678"
    },
    {
      id: 4,
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2020",
      credentialId: "GCP-901234"
    }
  ]

  return (
    <section 
      id="experience" 
      className="section-padding"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Experience & Certifications</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development, including work experience, 
            achievements, and industry certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-700"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2" />
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-light text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {exp.period}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-light text-white">
                      {cert.name}
                    </h4>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                  <p className="text-blue-400 text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-gray-500 text-xs">
                        ID: {cert.credentialId}
                      </p>
                    )}
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
                  { category: "Leadership", skills: ["Team Management", "Project Planning", "Code Reviews"] },
                  { category: "Communication", skills: ["Technical Writing", "Client Presentations", "Documentation"] },
                  { category: "Methodologies", skills: ["Agile/Scrum", "TDD", "CI/CD"] },
                  { category: "Soft Skills", skills: ["Problem Solving", "Time Management", "Adaptability"] }
                ].map((skillGroup) => (
                  <div key={skillGroup.category} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-1">
                      {skillGroup.skills.map((skill) => (
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
  )
}

export default Experience 