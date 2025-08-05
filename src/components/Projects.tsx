import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  longDescription: string
  features: string[]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product management, shopping cart, payment processing, and an admin dashboard for inventory management.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and email notifications"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "/projects/taskapp.jpg",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "A real-time collaborative task management application that allows teams to work together efficiently. Features include real-time updates, team collaboration, and advanced project organization.",
      features: [
        "Real-time collaboration with Socket.io",
        "Task assignment and priority management",
        "Team workspaces and project organization",
        "File attachments and comments",
        "Progress tracking and analytics",
        "Mobile-responsive design"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts and interactive maps",
      image: "/projects/weather.jpg",
      technologies: ["React", "OpenWeather API", "Leaflet Maps", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "An elegant weather dashboard that provides detailed weather information with interactive maps and location-based forecasts. Features a clean, modern interface with smooth animations.",
      features: [
        "Current weather and 7-day forecasts",
        "Interactive maps with weather layers",
        "Location-based weather data",
        "Weather alerts and notifications",
        "Responsive design for all devices",
        "Dark/light theme toggle"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design",
      image: "/projects/portfolio.jpg",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, interactive elements, and a clean design that adapts to all screen sizes.",
      features: [
        "Smooth scroll animations with Framer Motion",
        "Interactive project gallery",
        "Responsive design for all devices",
        "Contact form with validation",
        "Blog section with markdown support",
        "SEO optimized with meta tags"
      ]
    },
    {
      id: 5,
      title: "API Gateway",
      description: "Microservices API gateway with authentication and rate limiting",
      image: "/projects/apigateway.jpg",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "A robust API gateway that handles authentication, rate limiting, and routing for microservices architecture. Built with scalability and security in mind.",
      features: [
        "JWT-based authentication",
        "Rate limiting and throttling",
        "Request/response logging",
        "Load balancing across services",
        "CORS and security headers",
        "Health checks and monitoring"
      ]
    },
    {
      id: 6,
      title: "Mobile App",
      description: "Cross-platform mobile application with offline capabilities",
      image: "/projects/mobileapp.jpg",
      technologies: ["React Native", "Redux", "Firebase", "AsyncStorage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      longDescription: "A cross-platform mobile application built with React Native. Features offline capabilities, push notifications, and seamless synchronization with cloud services.",
      features: [
        "Cross-platform compatibility (iOS/Android)",
        "Offline data storage and sync",
        "Push notifications",
        "User authentication",
        "Real-time data updates",
        "Performance optimization"
      ]
    }
  ]

  return (
    <section 
      id="projects" 
      className="section-padding bg-gray-900"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Projects</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Project Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-light">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-gray-400">Project Screenshot</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-light mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-light mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects 