import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Demo Reel", href: "#demo-reel" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/emrichmp", icon: "🐙" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/emrich-michael-perrier/", icon: "💼" },
    { name: "Upwork", href: "https://www.upwork.com/freelancers/emrichmichaelperrier", icon: "💻" },
    { name: "Resume", href: "https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit", icon: "📄" },
    { name: "Schedule", href: "https://calendly.com/emrichmp/", icon: "📅" }
  ];

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
            className="flex flex-col cursor-pointer min-w-0 flex-shrink max-w-[60%]"
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
                className="text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Desktop Social Links */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-[#a03e99]">
              {socialLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200 text-lg"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
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
                      className="text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200 text-2xl"
                      title={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 