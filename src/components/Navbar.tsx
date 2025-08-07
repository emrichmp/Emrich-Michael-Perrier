import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    // { name: "Demo Reel", href: "#demo-reel" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Coaching", href: "#coaching" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/emrichmp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/emrich-michael-perrier/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/emrichmichaelperrier",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 122.88 122.88">
          <path
            fill="currentColor"
            d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"
          />
          <path
            fill="#371e30"
            d="M85.73,71.26c-4.08,0-7.92-1.73-11.38-4.54l0.84-3.98l0.02-0.14c0.77-4.22,3.14-11.33,10.51-11.33 c5.52,0,10.01,4.49,10.01,10.01C95.74,66.79,91.25,71.26,85.73,71.26L85.73,71.26L85.73,71.26z M85.73,41.14 c-9.41,0-16.68,6.1-19.66,16.15c-4.51-6.79-7.94-14.93-9.94-21.79H46.01v26.33c0,5.21-4.22,9.43-9.43,9.43 c-5.21,0-9.43-4.22-9.43-9.43V35.47h-10.1V61.8c0,10.78,8.76,19.63,19.54,19.63s19.54-8.86,19.54-19.63v-4.42 c1.97,4.1,4.37,8.26,7.3,11.9l-6.19,29.14h10.34l4.49-21.12c3.94,2.52,8.45,4.1,13.63,4.1c11.09,0,20.11-9.07,20.11-20.18 C105.82,50.16,96.82,41.14,85.73,41.14L85.73,41.14z"
          />
        </svg>
      )
    },
    {
      name: "Schedule",
      href: "https://calendly.com/emrichmp/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <circle fill="currentColor" cx="12" cy="12" r="12" />
          <path
            fill="#371e30"
            d="M19.655 14.262c0.281 0 0.557 0.023 0.828 0.064 0 0.005 -0.005 0.01 -0.005 0.014 -0.105 0.267 -0.234 0.534 -0.381 0.786l-1.219 2.106c-1.112 1.936 -3.177 3.127 -5.411 3.127h-2.432c-2.23 0 -4.294 -1.191 -5.412 -3.127l-1.218 -2.106a6.251 6.251 0 0 1 0 -6.252l1.218 -2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c0.147 0.252 0.271 0.519 0.381 0.786 0 0.004 0.005 0.009 0.005 0.014 -0.267 0.041 -0.543 0.064 -0.828 0.064 -1.816 0 -2.501 -0.607 -3.291 -1.306 -0.764 -0.676 -1.711 -1.517 -3.44 -1.517h-1.029c-1.251 0 -2.387 0.455 -3.2 1.278 -0.796 0.805 -1.233 1.904 -1.233 3.099v1.411c0 1.196 0.437 2.295 1.233 3.099 0.813 0.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676 -0.841 3.439 -1.517 0.791 -0.703 1.471 -1.306 3.287 -1.301Zm0.005 -3.237c0.399 0 0.794 -0.036 1.179 -0.11 -0.002 -0.004 -0.002 -0.01 -0.002 -0.014 -0.073 -0.414 -0.193 -0.823 -0.349 -1.218 0.731 -0.12 1.407 -0.396 1.986 -0.819 0 -0.004 -0.005 -0.013 -0.005 -0.018 -0.331 -1.085 -0.832 -2.101 -1.489 -3.03 -0.649 -0.915 -1.435 -1.719 -2.331 -2.395 -1.867 -1.398 -4.088 -2.138 -6.428 -2.138 -1.448 0 -2.855 0.28 -4.175 0.841 -1.273 0.543 -2.423 1.315 -3.407 2.299S2.878 6.552 2.341 7.83c-0.557 1.324 -0.842 2.726 -0.842 4.175 0 1.448 0.281 2.855 0.842 4.174 0.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324 0.556 2.727 0.841 4.175 0.841 2.34 0 4.561 -0.74 6.428 -2.137a10.815 10.815 0 0 0 2.331 -2.396c0.652 -0.929 1.158 -1.949 1.489 -3.03 0 -0.004 0.005 -0.014 0.005 -0.018 -0.579 -0.423 -1.255 -0.699 -1.986 -0.819 0.161 -0.395 0.276 -0.804 0.349 -1.218 0.005 -0.009 0.005 -0.014 0.005 -0.023 0.869 0.166 1.692 0.506 2.404 1.035 0.685 0.505 0.552 1.075 0.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0 -12 -5.375 -12 -12s5.37 -12 12 -12c5.398 0 9.963 3.563 11.471 8.464 0.106 0.341 0.239 0.915 -0.446 1.421 -0.717 0.529 -1.535 0.873 -2.404 1.034 0.128 0.716 0.128 1.45 0 2.166 -0.387 -0.074 -0.782 -0.11 -1.182 -0.11 -4.184 0 -3.968 2.823 -6.736 2.823h-1.029c-1.899 0 -3.15 -1.357 -3.15 -3.095v-1.411c0 -1.738 1.251 -3.094 3.15 -3.094h1.034c2.768 0 2.552 2.823 6.731 2.827Z"
          />
        </svg>
      )
    }
  ];

  // Custom hook to track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "coaching", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#371e30]/90 backdrop-blur-md border-b border-[#a03e99] shadow-sm">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo/Name */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("#hero")}
            className="flex flex-col cursor-pointer min-w-0 flex-shrink max-w-[60%] md:ml-8"
          >
            <div className="text-sm sm:text-lg font-medium text-[#f59ca9] truncate">
              Emrich-Michael Perrier
            </div>
            <div className="text-xs text-[#f6828c] uppercase tracking-wide truncate">
              Web Developer
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-[#f6828c]"
                    : "text-[#f59ca9] hover:text-[#f6828c]"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-[#f59ca9] hover:text-[#f6828c] flex-shrink-0 ml-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-16 left-0 right-0 bg-[#371e30]/95 backdrop-blur-md border-t border-[#a03e99] z-40"
            >
              <div className="flex flex-col justify-center items-center h-full space-y-8">
                {navItems.map(item => (
                  <motion.button
                    key={item.name}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-2xl font-medium text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-[#a03e99]">
                  {socialLinks.map(link => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200"
                      title={link.name}
                    >
                      <div className="w-8 h-8">{link.icon}</div>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Resume Link */}
                <motion.a
                  href="https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 px-6 py-3 bg-[#371e30] border border-[#a03e99] rounded-lg text-[#f59ca9] hover:text-[#f6828c] hover:border-[#f6828c] transition-colors duration-200 font-medium text-lg"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
