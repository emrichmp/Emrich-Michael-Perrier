import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  upworkUrl?: string;
  longDescription: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Siddharth Agrawal Films Portfolio",
      description:
        "Professional portfolio website showcasing reel, stills, bio and more for Producer, Director of Photography and Editor",
      image: "/projects/siddharth-portfolio.jpg",
      video: "/Projects/SiddWebsiteDemo.mp4",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://www.siddharthagrawalfilms.com/",
      longDescription:
        "A fully built frontend portfolio website designed to showcase Siddharth Agrawal's professional work as a Producer, Director of Photography, and Editor. The website features a modern, responsive design with smooth animations and optimized performance.",
      features: [
        "Professional portfolio showcase with reel and stills galleries",
        "Responsive design optimized for all devices",
        "Smooth animations and transitions",
        "Bio and about section with professional background",
        "Contact information and professional links",
        "Fast loading and SEO optimized"
      ]
    },
    {
      id: 2,
      title: "Kshitij Kapil Portfolio",
      description:
        "Professional portfolio website showcasing reel, stills, bio and more for Cinematographer and Director of Photography",
      image: "/projects/kshitij-portfolio.jpg",
      video: "/Projects/KshitijWebsiteDemo.mp4",
      technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Vercel"],
      liveUrl: "https://kshitijkapil.com/",
      longDescription:
        "A fully built frontend portfolio website designed to showcase Kshitij Kapil's professional work as a Cinematographer and Director of Photography. The website features a modern, responsive design with smooth animations and optimized performance.",
      features: [
        "Professional portfolio showcase with reel and stills galleries",
        "Responsive design optimized for all devices",
        "Smooth animations and transitions",
        "Bio and about section with professional background",
        "Contact information and professional links",
        "Fast loading and SEO optimized"
      ]
    },
    {
      id: 3,
      title: "Open & Run Platform",
      description:
        "Full-stack business management platform for incident reporting, staff management, and operational excellence",
      image: "/Projects/OpenAndRun.png",
      technologies: [
        "React",
        "Next.js",
        "Supabase",
        "Vercel",
        "Tailwind CSS",
        "Stripe",
        "NextAuth.js",
        "SendGrid"
      ],
      liveUrl: "https://app.openandrun.com/",
      websiteUrl: "https://www.openandrun.com/",
      longDescription:
        "A comprehensive full-stack business management platform built as the Senior Developer and sole developer for Open & Run. The platform streamlines incident reporting, staff management, and operational processes for service-based businesses. Features include user authentication, real-time incident reporting, automated PDF generation, and integrated billing.",
      features: [
        "User authentication with NextAuth.js and email verification",
        "Staff and location management system",
        "Real-time incident reporting tool with photo attachments",
        "DocuSign integration for automated PDF generation",
        "Stripe API integration for billing and subscriptions",
        "Real-time chat tool for team communication"
      ]
    },
    {
      id: 4,
      title: "La Ligne NYC E-Commerce",
      description: "E-commerce website development and maintenance for luxury fashion brand",
      image: "/Projects/LaLigneNYC.png",
      technologies: [
        "React",
        "TypeScript",
        "Shopify",
        "Hydrogen",
        "Redux",
        "styled-components",
        "JavaScript"
      ],
      liveUrl: "https://lalignenyc.com",
      longDescription:
        "Completed short-term contributions on the La Ligne NYC e-commerce website for The Lemonade Creative. Work included React/TypeScript code improvements, bug fixes, Shopify Scripts to Shopify Functions migration, and responsive design enhancements for the luxury fashion brand.",
      features: [
        "React/TypeScript codebase improvements and optimizations",
        "Bug ticket resolution and client support",
        "Shopify Scripts to Shopify Functions migration",
        "Responsive design enhancements and fixes",
        "E-commerce functionality improvements",
        "Performance optimization and code maintenance"
      ]
    },
    {
      id: 5,
      title: "OFTV Website",
      description: "Major website components development including navbar, header & footer",
      image: "/projects/oftv.jpg",
      video: "/Projects/OFTV.mp4",
      technologies: ["Vue.js", "TypeScript", "VueX", "HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://of.tv/",
      longDescription:
        "Worked on major website components such as the navbar, header & footer for the of.tv website. Utilized website examples and Figma designs to construct components using Vue.js, TypeScript, and VueX for state management.",
      features: [
        "Navbar component development and implementation",
        "Header section design and functionality",
        "Footer component construction",
        "Figma design integration and implementation",
        "Vue.js component architecture",
        "TypeScript integration for type safety"
      ]
    },
    {
      id: 6,
      title: "Tango Analytics Platform",
      description:
        "Full-stack map viewer migration and custom UI components for enterprise analytics platform",
      image: "/Projects/Tango.jpg",
      technologies: ["Vue.js", "TypeScript", "Quasar Framework", "Oracle Map Viewer"],
      liveUrl: "https://tangoanalytics.com/products/tango-platform/",
      longDescription:
        "Led the migration of Tango's Mapviewer from VueJS 2.0 and Quasar v1 to VueJS 3.0 and Quasar v2, ensuring functionality consistency through debugging and refactoring. Built custom UI components for Tango's client map software using Quasar Framework and Oracle Map Viewer. Self-taught TypeScript, VueJS, and Quasar to accelerate feature development and software optimization.",
      features: [
        "VueJS 2.0 to 3.0 migration with Quasar v1 to v2 upgrade",
        "Custom UI components development for map software",
        "Oracle Map Viewer integration and optimization",
        "TypeScript implementation for type safety",
        "Quasar Framework component architecture",
        "Enterprise-level debugging and refactoring"
      ]
    },
    {
      id: 7,
      title: "OFTV LG TV App",
      description:
        "Smart TV application development for LG TV platform with Magic Remote functionality",
      image: "/Projects/LG_OFTV.png",
      technologies: ["HTML", "CSS", "JavaScript", "Smart TV", "WordPress", "LG App Development"],
      liveUrl:
        "https://us.lgappstv.com/main/tvapp/detail?appId=1220217&catCode1=&moreYn=N&cateYn=N&orderType=0&headerName=%EC%A0%84%EC%B2%B4&appRankCode=&sellrUsrNo=&curPage=1",
      upworkUrl: "https://www.upwork.com/freelancers/~01bc1f2a5b93ba02d2?p=1776650934225866752",
      longDescription:
        "Solely developed the OFTV LGTV Application using HTML, CSS and JavaScript based on provided Figma designs. Built cursor functionality for the LGTV Magic Remote feature and integrated with OFTV Zype and WordPress APIs to display content in an aesthetic UI.",
      features: [
        "LGTV Magic Remote cursor functionality implementation",
        "Figma design to code conversion and implementation",
        "OFTV Zype API integration for content management",
        "WordPress API integration for dynamic content",
        "Smart TV platform optimization and testing",
        "Upwork collaboration with dedicated tester for bug fixes"
      ]
    },
    {
      id: 8,
      title: "Covet by Christos Platform",
      description:
        "Livestreaming platform with Shopify integration for luxury fashion social commerce",
      image: "/projects/covetbychristos.jpg",
      video: "/Projects/CovetByChristos.mp4",
      technologies: ["React", "Next.js", "Shopify", "VideoSDK", "Sanity", "HubSpot"],
      liveUrl: "https://www.covetbychristos.com/",
      upworkUrl: "https://www.upwork.com/freelancers/~01bc1f2a5b93ba02d2?p=1776650934225866752",
      longDescription:
        "Developed a comprehensive livestreaming platform with Shopify integration for Covet by Christos, a luxury fashion social commerce platform. Worked collaboratively with a team of developers and Figma designers to build a custom solution that enables live shopping experiences with real-time product integration.",
      features: [
        "Livestreaming platform development with VideoSDK integration",
        "Shopify e-commerce integration for real-time product management",
        "Custom React/Next.js frontend with responsive design",
        "Sanity CMS integration for content management",
        "HubSpot CRM integration for customer relationship management",
        "Team collaboration with developers and Figma designers"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-900" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Projects</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving
            approaches. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
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
                  {project.video ? (
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Project Image</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
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
                        onClick={e => e.stopPropagation()}
                      >
                        {project.id === 1 ||
                        project.id === 2 ||
                        project.id === 4 ||
                        project.id === 5
                          ? "Visit Site"
                          : "View App"}
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        Website
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {project.upworkUrl && (
                      <a
                        href={project.upworkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        Upwork
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors bg-gray-800 hover:bg-gray-700"
          >
            {showAllProjects ? "Show Less" : "Show More Projects"}
          </button>
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
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-light">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
                    {selectedProject.video ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src={selectedProject.video} type="video/mp4" />
                      </video>
                    ) : selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-gray-400">Project Screenshot</span>
                      </div>
                    )}
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
                      {selectedProject.technologies.map(tech => (
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
                        {selectedProject.id === 1 ||
                        selectedProject.id === 2 ||
                        selectedProject.id === 4 ||
                        selectedProject.id === 5
                          ? "Visit Site"
                          : "View App"}
                      </a>
                    )}
                    {selectedProject.websiteUrl && (
                      <a
                        href={selectedProject.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                      >
                        View Website
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
                    {selectedProject.upworkUrl && (
                      <a
                        href={selectedProject.upworkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                      >
                        View Upwork
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
  );
};

export default Projects;
