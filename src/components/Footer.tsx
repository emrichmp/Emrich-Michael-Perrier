import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#371e30] border-t border-[#a03e99] py-12" ref={ref}>
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section with Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-medium text-[#f59ca9] mb-4">Emrich Michael Perrier</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">emrichmichaelperrier@gmail.com</p>
              <p className="text-gray-300">Los Angeles, CA</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-medium text-[#f59ca9] mb-4">Quick Links</h4>
            <ul className="flex flex-col md:flex-row md:justify-end md:space-x-6 space-y-2 md:space-y-0">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Coaching", href: "#coaching" },
                { name: "Contact", href: "#contact" }
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#f6828c] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-[#a03e99]/30"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Emrich Michael Perrier. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
